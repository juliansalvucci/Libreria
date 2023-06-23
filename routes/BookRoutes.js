import { Router } from 'express';
const bookRoutes = Router();
import { login, register, logout } from '../controllers/BookController.js';

bookRoutes.post('/login', login);
bookRoutes.post('/register', register);
bookRoutes.get('/logout', logout);
// Define otras rutas

export default bookRoutes;