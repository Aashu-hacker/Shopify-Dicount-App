// @ts-check
import { join } from "path";
import { readFileSync } from "fs";
import express from "express";
import serveStatic from "serve-static";

import shopify from "./shopify.js";
import productCreator from "./product-creator.js";
import GDPRWebhookHandlers from "./gdpr.js";

import mysql from "mysql"

const PORT = parseInt(process.env.BACKEND_PORT || process.env.PORT, 10);

const STATIC_PATH =
  process.env.NODE_ENV === "production"
    ? `${process.cwd()}/frontend/dist`
    : `${process.cwd()}/frontend/`;

const app = express();


//connecting to db
export const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database:"freshnew"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

});

// Set up Shopify authentication and webhook handling
app.get(shopify.config.auth.path, shopify.auth.begin());
app.get(
  shopify.config.auth.callbackPath,
  shopify.auth.callback(),
  shopify.redirectToShopifyOrAppRoot()
);
app.post(
  shopify.config.webhooks.path,
  shopify.processWebhooks({ webhookHandlers: GDPRWebhookHandlers })
);

// All endpoints after this point will require an active session
app.use("/api/*", shopify.validateAuthenticatedSession());

app.use(express.json());

//storing shop info
app.get("/api/shopInfo",async(req,res)=>{
  const session=res.locals.shopify.session
  const data = await shopify.api.rest.Shop.all({
    session: session,
  });
  
  const shop=data[0]
  console.log("shop", shop.name)
  const values=[
    1,
    shop.session.shop,
    shop.name,
    shop.money_format,
    shop.session.accessToken,
    "basic",
    '2023-03-06'
  ];
  var sql = "INSERT INTO client_stores(client_id,store_name,shop_name,money_format,token,shop_plan,created) VALUES (?)";
  con.query(sql,[values],function (err, result) {
    if (err){
       res.json({error:err.message})
    }else{
      res.json({success:"Shop data inserted successfully."})
    }
  });
})




app.get("/api/products/count", async (_req, res) => {
  const countData = await shopify.api.rest.Product.count({
    session: res.locals.shopify.session,
  });
  res.status(200).send(countData);
});

app.get("/api/products/create", async (_req, res) => {
  let status = 200;
  let error = null;

  try {
    await productCreator(res.locals.shopify.session);
  } catch (e) {
    console.log(`Failed to process products/create: ${e.message}`);
    status = 500;
    error = e.message;
  }
  res.status(status).send({ success: status === 200, error });
});

app.use(serveStatic(STATIC_PATH, { index: false }));

app.use("/*", shopify.ensureInstalledOnShop(), async (_req, res, _next) => {
  return res
    .status(200)
    .set("Content-Type", "text/html")
    .send(readFileSync(join(STATIC_PATH, "index.html")));
});




app.listen(PORT);
