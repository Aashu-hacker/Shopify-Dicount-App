import { sequelize } from "./db.js"
import { DataTypes } from "sequelize";

export const getProductsModel = sequelize.define('gety_product', {
    id: {
    type: DataTypes.INTEGER,
    autoIncrement: true, 
    allowNull: false,
    primaryKey:true
  },
  store_client_id: {
    type: DataTypes.INTEGER,
    allowNull: false, 
  },
  type: {
    type: DataTypes.INTEGER, 
    allowNull: false, 
  },
  offer_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  product_id: {
    type: DataTypes.BIGINT,
  },
  variant_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  product_price: {
    allowNull: false,
  }
}, {
    timestamps: false
});