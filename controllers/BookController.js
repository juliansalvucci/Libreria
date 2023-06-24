import Book from "../models/Book.js";

const crear = async (req, res) => {
    try {
        // Obtener los datos del nuevo libro del cuerpo de la solicitud
        const { isbn, title, author, year, libraryId } = req.body;

        // Crear el libro en la base de datos utilizando el modelo Book de Sequelize
        const book = await Book.create({ isbn, title, author, year, libraryId });

        res.status(201).json(book);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ha ocurrido un error al crear el libro.' });
    }
};

const consultar = async (req, res) => {
    try {
        // Obtener todos los libros de la base de datos utilizando el modelo Book de Sequelize
        const books = await Book.findAll();

        res.json(books);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ha ocurrido un error al consultar los libros.' });
    }
};

const actualizar = async (req, res) => {
    try {
        // Obtener el ID del libro a actualizar y los nuevos datos del cuerpo de la solicitud
        const { id } = req.params;
        const { isbn, title, author, year, libraryId } = req.body;

        // Buscar el libro en la base de datos utilizando el ID y actualizar sus datos
        const [updatedRowsCount, updatedRows] = await Book.update(
            { isbn, title, author, year, libraryId },
            { where: { id }, returning: true }
        );

        if (updatedRowsCount === 0) {
            return res.status(404).json({ message: 'No se encontró el libro.' });
        }

        res.json(updatedRows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ha ocurrido un error al actualizar el libro.' });
    }
};

const eliminar = async (req, res) => {
    try {
        // Obtener el ID del libro a dar de baja
        const { id } = req.params;

        // Buscar el libro en la base de datos utilizando el ID y actualizar su estado a inactivo
        const updatedRowsCount = await Book.update(
            { active: false },
            { where: { id } }
        );

        if (updatedRowsCount[0] === 0) {
            return res.status(404).json({ message: 'No se encontró el libro.' });
        }

        res.sendStatus(204);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ha ocurrido un error al dar de baja el libro.' });
    }
};


const _crear = crear;
export { _crear as crear };
const _consultar = consultar;
export { _consultar as consultar };
const _actualizar = actualizar;
export { _actualizar as actualizar };
const _eliminar = eliminar;
export { _eliminar as eliminar };