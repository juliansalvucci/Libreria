import Book from "../models/Book";

const createBook = async (book) => {
    try {
        const newBook = await Book.create(book);
        return newBook;
    } catch (err) {
        console.error("Error when creating", err);
        throw err;
    }
};

const getBook = async (bookId) => {
    try {
        const book = await Book.findByPk(bookId, { include: { all: true } });
        return book;
    } catch (err) {
        console.error("Error when fetching", err);
        throw err;
    }
};

const getAllBooks = async () => {
    try {
        const books = await Book.findAll();
        return books;
    } catch (err) {
        console.error("Error when fetching", err);
        throw err;
    }
};

const inactiveBook = async (bookId) => {
    try {
        const updatedRowsCount = await Book.update(
            { active: false },
            { where: { bookId } }
        );

        const response = updatedRowsCount[0] === 0
            ? { status: 404, message: 'Book not found.' }
            : { status: 200, message: 'Operation successful.' };

        return response;
    } catch (err) {
        console.error("Error when fetching", err);
        throw err;
    }
}




export default { createBook, getBook, getAllBooks, inactiveBook };