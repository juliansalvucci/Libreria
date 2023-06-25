import { Router } from 'express';
const bookRoutes = Router();
import { createBook, getBook, getAllBooks, updateBook, inactiveBook } from '../controllers/BookController.js';

bookRoutes.post('/createBook', createBook);
bookRoutes.post('/getBook', getBook);
bookRoutes.get('/getAllBooks', getAllBooks);
bookRoutes.get('/updateBook', updateBook);
bookRoutes.get('/inactiveBook', inactiveBook);
// Define otras rutas

export default bookRoutes;