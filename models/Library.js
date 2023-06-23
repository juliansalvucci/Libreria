import { INTEGER, STRING } from 'sequelize';
import { define } from '../database';

const Library = define('library', {
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
  }
});

export default Library;
