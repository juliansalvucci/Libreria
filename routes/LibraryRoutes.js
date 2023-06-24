import { Router } from 'express';
const libraryRoutes = Router();
import { crear, consultar, actualizar, eliminar } from '../controllers/LibraryController.js';

libraryRoutes.post('/crear', crear);
libraryRoutes.post('/consultar', consultar);
libraryRoutes.get('/actualizar', actualizar);
libraryRoutes.get('/eliminar', eliminar);
// Define otras rutas

export default libraryRoutes;