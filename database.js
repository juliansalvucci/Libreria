// database.js
import { Sequelize } from 'sequelize';

// Create a new instance of Sequelize and configure it with your database credentials
const sequelize = new Sequelize('database_name', 'username', 'password', {
  host: 'localhost',
  dialect: 'sqlite',
  storage: 'path_to_database_file.sqlite', // Replace with the path to your SQLite database file
});

const _sequelize = sequelize;
export { _sequelize as sequelize };
