import { sequelize } from "./db.js"
import { DataTypes } from "sequelize";


export const clientModel = sequelize.define('client', {
    client_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey:true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_role: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:2
    },
    store_client_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    app_key: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    user_activation_hash: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    created: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
        allowNull: false,
    },
    // last_modify: {
    //     type: DataTypes.DATETIME,
    //     defaultValue: DataTypes.NOW,
    //     allowNull: false,
    // },
}, {
    timestamps: false
});