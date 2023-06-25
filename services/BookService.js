import BookProvider from "../providers/BookProvider.js";

const createBook = async (book) => {
  return await BookProvider.createBook(book);
};

const getBook = async (bookId) => {
  const book = await BookProvider.getBook(bookId);
  return book;
};

const getAllBooks = async() => {
    const books = await BookProvider.getAllBooks();
    return books
};

const updateBook = async(book) => {
    const response = await BookProvider.updateBook(book)
    return response;
}

const inactiveBook = async(bookId) => {
    const response = await BookProvider.inactiveBook(bookId);
    return response;
}

const BookService = {
  createBook,
  getBook,
  getAllBooks,
  updateBook,
  inactiveBook
}

export default {BookService};

/*
const _createBook = createBook;
export { _createBook as createBook };
const _getBook = getBook;
export { _getBook as getBook };
const  _getAllBooks = getAllBooks;
export { _getAllBooks as getAllBooks };
const _updateBook = updateBook;
export { _updateBook as updateBook };
const _inactiveBook = inactiveBook;
export { _inactiveBook as inactiveBook };
*/