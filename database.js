// database.js
import { Sequelize } from 'sequelize';

// Create a new instance of Sequelize and configure it with your database credentials
const sequelize = new Sequelize('database_name', 'username', 'password', {
  host: '0.0.0.0',
  dialect: 'sqlite',
  storage: 'file:///C:/Users/jlssa/Desktop/TP-NODE/database.sqlite', // Replace with the path to your SQLite database file
});

const _sequelize = sequelize;
export { _sequelize as sequelize };
