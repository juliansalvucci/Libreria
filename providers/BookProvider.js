import Book from "../models/Book.js";

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

const updateBook = async (book) => {
    try {
        const [updatedRowsCount] = await Book.update(book, {
            where: { id: book.id }
        });

        const response = updatedRowsCount === 0
            ? { status: 404, message: 'Book not found.' }
            : { status: 200, message: 'Operation successful.' };

        return response;
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

const BookProvider = () => {
    createBook,
    getBook,
    getAllBooks,
    updateBook,
    inactiveBook
}

export default {BookProvider};
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