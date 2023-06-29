import { Router } from 'express';
const libraryRoutes = Router();
import { createLibrary, getLibrary, getAllLibrarys, updateLibrary, inactiveLibrary } from '../controllers/LibraryController.js';
import { jwtValidMDW, userIsAdminMDW } from '../middlewares/auth-mw.js'

libraryRoutes.post('/createLibrary', userIsAdminMDW, createLibrary);
libraryRoutes.get('/getLibrary', jwtValidMDW, getLibrary);
libraryRoutes.get('/getAllLibrarys', jwtValidMDW, getAllLibrarys);
libraryRoutes.put('/updateLibrary', userIsAdminMDW, updateLibrary);
libraryRoutes.put('/inactiveLibrary', userIsAdminMDW, inactiveLibrary);
// Define otras rutas

export default libraryRoutes;