//connecting to db
import { Sequelize } from "sequelize"

export const sequelize = new Sequelize('freshnew', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
  });
  try {
    sequelize.authenticate(); 
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }