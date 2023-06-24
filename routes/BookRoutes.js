import { Router } from 'express';
const bookRoutes = Router();
import { crear, consultar, actualizar, eliminar } from '../controllers/BookController.js';

bookRoutes.post('/crear', crear);
bookRoutes.post('/consultar', consultar);
bookRoutes.get('/actualizar', actualizar);
bookRoutes.get('/eliminar', eliminar);
// Define otras rutas

export default bookRoutes;