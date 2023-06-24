import { INTEGER, STRING, BOOLEAN } from 'sequelize';
import {sequelize} from '../database.js';

const Library = sequelize.define('library', {
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: STRING,
    allowNull: false
  },
  location: {
    type: STRING,
    allowNull: false
  },
  telefono: {
    type: STRING,
    allowNull: false
  },
  active: {
    type: BOOLEAN,
    allowNull: false
  }
});

export default Library;
