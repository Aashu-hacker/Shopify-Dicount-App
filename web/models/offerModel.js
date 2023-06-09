import { sequelize } from "./db.js"
import { DataTypes } from "sequelize";

export const offerModel = sequelize.define('offer', {
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
  title: {
    type: DataTypes.TEXT, 
  },
  type: {
    type: DataTypes.BOOLEAN, 
    allowNull: false, 
  },
  buyx: {
    type: DataTypes.BIGINT,
  },
  at: {
    type: DataTypes.INTEGER,
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: 1,
    allowNull: false, 
  },
  created: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW,
    allowNull: true,  
  }
}, {
    timestamps: false
});