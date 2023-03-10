import express from 'express'
const router = express.Router()
import { offerModel } from '../models/offerModel.js';
import {shopModel} from '../models/shopModel.js'
import shopify from "../shopify.js";
import moment from 'moment'
router.post('/createCampaign', async (req, res) => {
    const { title, offerType, buy, get, discountValue,host,spend,endDate} = req.body;
    try {
        const storeData=await shopModel.findOne({where:{store_name:host}})
        const session = res.locals.shopify.session
        
        let query;
        let customerBuys;
        let percentageValue = Number(discountValue.discountValue) / 100;
        if (percentageValue === 0) {
            percentageValue = 0.00
        } else if (percentageValue === 1) {
            percentageValue = 1.00
        } else {

        }
        query = `discountOnQuantity: {
              quantity: "1",
              effect: {
                percentage:${percentageValue}
              }
            }`
        if (offerType.offerType=== "1") {
             customerBuys=`
             value: {
                  quantity: "1"
                }
                items: {
                  products: {
                    productsToAdd: ["gid://shopify/Product/${Number(buy.buyProductId)}"]
                  }
                }
             `
        }else if(offerType.offerType=== "2") {
             customerBuys=`
             value: {
                quantity: "1"
              }
              items: {
                all:true
              }
             `
        }else{

        }

        const client = new shopify.api.clients.Graphql({ session });
          const data = await client.query({
            data: `mutation {
                    discountAutomaticBxgyCreate(automaticBxgyDiscount: {
                      title:"${title.title}",
                      startsAt: "${moment().format('YYYY-MM-DD')}",
                      ${endDate.endDate && `endsAt:"${endDate.endDate}"`},
                      usesPerOrderLimit: "1",
                      customerBuys:{
                        ${customerBuys}
                    } ,
                      customerGets: {
                        value: {
                          ${query}
                        }
                        items: {
                          products: {
                            productsToAdd: ["gid://shopify/Product/${Number(get.getProductId)}"]
                          }
                        }
                      }}) {
                      userErrors {
                        field
                        message
                        code
                      }
                      automaticDiscountNode {
                          automaticDiscount {
                          ... on DiscountAutomaticBxgy {
                            title
                            summary
                            status
                          }
                        }
                      }
                    }
                  }
                  `,
          });

        console.log("datat444",data.body.data.discountAutomaticBxgyCreate.useErrors)
        console.log("datat",data.body)
        // console.log("dataaaa",data)

        await offerModel.create({
            store_client_id: storeData.dataValues.store_client_id,
            title: title.title,
            type: Number(offerType.offerType),
            buyx: Number(buy.buyProductId),
            at: Number(discountValue.discountValue),
        })
        res.status(200).json({ "success": "Data saved successfully." })
    } catch (error) {
        res.status(400).json({ "error": "Something went wrong" })
    }

})





export default router 