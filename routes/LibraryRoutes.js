import { Router } from 'express';
const libraryRoutes = Router();
import { login, register, logout } from '../controllers/LibraryController.js';

libraryRoutes.post('/login', login);
libraryRoutes.post('/register', register);
libraryRoutes.get('/logout', logout);
// Define otras rutas

export default libraryRoutes;