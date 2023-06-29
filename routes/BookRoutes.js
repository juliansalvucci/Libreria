import { Router } from 'express';
const bookRoutes = Router();
import { createBook, getBook, getAllBooks, updateBook, inactiveBook } from '../controllers/BookController.js';
import { jwtValidMDW, userIsAdminMDW } from '../middlewares/auth-mw.js'

bookRoutes.post('/createBook', userIsAdminMDW, createBook);
bookRoutes.get('/getBook', jwtValidMDW, getBook);
bookRoutes.get('/getAllBooks', jwtValidMDW, getAllBooks);
bookRoutes.put('/updateBook', userIsAdminMDW, updateBook);
bookRoutes.put('/inactiveBook', userIsAdminMDW, inactiveBook);
// Define otras rutas

export default bookRoutes;