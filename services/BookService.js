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

const inactiveBook = async(bookId) => {
    await BookProvider.inactiveBook(bookId);
}


export default { createBook, getBook, getAllBooks, inactiveBook  };