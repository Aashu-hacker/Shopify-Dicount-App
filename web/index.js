// @ts-check
import { join } from "path";
import { readFileSync } from "fs";
import express from "express";
import serveStatic from "serve-static";

import shopify from "./shopify.js";
import productCreator from "./product-creator.js";
import GDPRWebhookHandlers from "./gdpr.js";

import mysql from "mysql"
import crypto from "crypto"
import { Buffer } from "buffer";
import  jwt  from "jsonwebtoken";
import dotenv from "dotenv"
import './models/db.js';
import { shopModel } from "./models/shopModel.js"
import { clientModel } from "./models/clientModel.js"
import './models/relationalModels.js'


import discountCreateRouter from "./routes/discountCreate.js"

dotenv.config()
const PORT = parseInt(process.env.BACKEND_PORT || process.env.PORT, 10);

const STATIC_PATH =
  process.env.NODE_ENV === "production"
    ? `${process.cwd()}/frontend/dist`
    : `${process.cwd()}/frontend/`;

const app = express();





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
const generateRandomString = () => {
  var id = crypto.randomBytes(20).toString('hex');
  return id;
}

const activationHash = (shopEmail) => {
  var mykey = crypto.createCipher('aes-128-cbc', process.env.SECRET_KEY);
  var mystr = mykey.update(shopEmail, 'utf8', 'hex')
  return mystr += mykey.final('hex');
}

app.get("/api/shopInfo", async (req, res) => {
  const session = res.locals.shopify.session
  const data = await shopify.api.rest.Shop.all({
    session: session,
  });
  const shop = data[0]
  try {
    const shopData = await shopModel.findOne({ where: { store_name: shop.session.shop } });
    if (shopData !== null) {
      res.status(400).json({ "error": "Shop is already present." })
    } else {
      await clientModel.create({
        email: shop.email,
        app_key: generateRandomString(),
        user_activation_hash: activationHash(shop.email),
      })
      const client_id_Obj = await clientModel.findOne({ where: { email: shop.email } })
      await shopModel.create({
        client_id: client_id_Obj.dataValues.client_id,
        store_name: shop.session.shop,
        shop_name: shop.name,
        money_format: shop.money_format,
        token: shop.session.accessToken,
        shop_plan: shop.plan_name,
        charge_id: null
      })

      const storeObj = await shopModel.findOne({ where: { client_id: client_id_Obj.dataValues.client_id } })
      await clientModel.update({ store_client_id: storeObj.dataValues.store_client_id }, {
        where: {
          email: shop.email,
          store_client_id: null
        }
      });
      res.status(200).json({ "success": "Data saved successfully" })
    }
  } catch (error) {
    res.status(400).json({ "error": "Something went wrong.." })
  }

})

//custom route

app.use("/api",discountCreateRouter)


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
