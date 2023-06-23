import { INTEGER, STRING } from 'sequelize';
import { define } from '../database';
import Library from './Library';

const Book = define('book', {
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
  }
});

Book.belongsTo(Library, { foreignKey: 'library' });

export default Book;
