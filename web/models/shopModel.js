import { sequelize } from "./db.js"
import { DataTypes } from "sequelize";


export const shopModel = sequelize.define('client_store', {
  store_client_id: {
    type: DataTypes.INTEGER,
    allowNull: false, 
    autoIncrement:true,
    primaryKey:true 
  },
  client_id: {
    type: DataTypes.INTEGER, 
    allowNull: false, 
  },
  store_name: {
    type: DataTypes.STRING , 
    allowNull: false, 
  },
  shop_name: {
    type: DataTypes.STRING,
    allowNull: false, 
  },
  money_format: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  token: {
    type: DataTypes.STRING,
    allowNull: false, 
  },
  status: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
    allowNull: false,  
  },
  tour_status: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0,
    allowNull: false, 
  },
  shop_plan: {
    type: DataTypes.STRING(25),
    allowNull: false, 
  },
  charge_approve: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0,
    allowNull: false, 
  },
  charge_id: {
    type: DataTypes.STRING,
    allowNull:true 
  },
  downgrade_plan: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0,
    allowNull: false, 
  },
  created: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW,
    allowNull: false,  
  }
}, {
    timestamps: false
});