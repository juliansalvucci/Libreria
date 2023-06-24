import BookProvider from "../providers/BookProvider";

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


export default { createBook, getBook, getAllBooks, updateBook, inactiveBook  };