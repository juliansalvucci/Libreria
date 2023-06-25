import BookService from "../services/BookService.js";

const createBook = async (req, res) => {
    try {
        const book = await BookService.create(req.body);
        res.status(200).json(book);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error when fetching.' });
    }
};

const getBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await BookService.getBook(id);
        return book;
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error when fetching.' });
    }
};

const getAllBooks = async () => {
    try {
        const books = await BookService.getAllBooks();
        return books;
    } catch (error) {
        console.error(error);
        throw new Error('Error when fetching.');
    }
};

const updateBook = async (res, req) => {
    try {
        const book = await BookService.updateBook(req);
        return book
    } catch (err) {
        console.error(error);
        res.status(500).json({ message: 'Error when fetching.' });
    }
}

const inactiveBook = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await BookService.inactiveBook(id);
        return response;
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error when fetching.' });
    }
};

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