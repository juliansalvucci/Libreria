import { Router } from 'express';
const libraryRoutes = Router();
import { createLibrary, getLibrary, getAllLibrarys, updateLibrary, inactiveLibrary } from '../controllers/LibraryController.js';

libraryRoutes.post('/createLibrary', createLibrary);
libraryRoutes.post('/getLibrary', getLibrary);
libraryRoutes.get('/getAllLibrarys', getAllLibrarys);
libraryRoutes.get('/updateLibrary', updateLibrary);
libraryRoutes.get('/inactiveLibrary', inactiveLibrary);
// Define otras rutas

export default libraryRoutes;