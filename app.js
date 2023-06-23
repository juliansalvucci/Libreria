import express from 'express';
import bodyparser from 'body-parser';
import session from 'express-session';
import passport from 'passport';
import authRoutes from './routes/AuthRoutes.js';
import libraryRoutes from './routes/LibraryRoutes.js';
import bookRoutes from './routes/BookRoutes.js';
// Importa otros módulos y configuraciones necesarios

const app = express();

const { initialize, session: _session } = passport;
const { json, urlencoded } = bodyparser;

app.use(json());
app.use(urlencoded({ extended: true }));

// Configuración de la sesión
app.use(session({
  secret: 'my-secret-key', // Cambia esto a una clave secreta más segura
  resave: false,
  saveUninitialized: false
}));

// Configuración de Passport y autenticación
app.use(passport.initialize());
app.use(passport.session());
// Configura las estrategias de autenticación y serialización/deserialización de usuarios

// Configuración de las rutas
app.use('/auth', authRoutes);
app.use('/libraries', libraryRoutes);
app.use('/books', bookRoutes);
// Configura otras rutas

// Inicia el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});

