import { BOOLEAN, INTEGER, STRING } from 'sequelize';
import { sequelize } from '../database.js';
import Library from './Library.js';

const Book = sequelize.define('book', {
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  isbn: {
    type: INTEGER,
    allowNull: false,
    unique: true
  },
  title: {
    type: STRING,
    allowNull: false
  },
  author: {
    type: STRING,
    allowNull: false
  },
  year: {
    type: STRING,
    allowNull: false
  },
  active: {
    type: BOOLEAN,
    allowNull: false
  }
});

Book.belongsTo(Library, { foreignKey: 'libraryId', as: 'libraryAssociation' });

export default Book;
