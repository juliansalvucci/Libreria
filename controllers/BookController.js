import BookService from "../services/BookService";

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

const getAllBooks = async (req, res) => {
    try {
        const books = await BookService.getAllBooks();
        res.json(books);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error when fetching.' });
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


export default { createBook, getBook, getAllBooks, updateBook, inactiveBook };