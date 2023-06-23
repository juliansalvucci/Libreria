import { Router } from 'express';
const AuthRoutes = Router();
import { login, register, logout } from '../controllers/AuthController.js';

AuthRoutes.post('/login', login);
AuthRoutes.post('/register', register);
AuthRoutes.get('/logout', logout);
// Define otras rutas

export default AuthRoutes;
