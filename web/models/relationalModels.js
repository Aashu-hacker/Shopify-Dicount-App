import {clientModel} from "./clientModel.js"
import {shopModel} from "./shopModel.js"
import { offerModel } from "./offerModel.js"


clientModel.hasOne(shopModel,{foreignKey:"client_id"});
shopModel.belongsTo(clientModel,{foreignKey:"client_id"});

shopModel.hasMany(offerModel,{foreignKey:"store_client_id"})
offerModel.belongsTo(shopModel,{foreignKey:"store_client_id"})


await offerModel.sync({alter:true})
await shopModel.sync({ alter: true });