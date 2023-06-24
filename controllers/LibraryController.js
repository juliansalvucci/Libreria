import Library from "../models/Library.js"; // Importar el modelo Library de Sequelize

const crear = async (req, res) => {
    try {
        // Obtener los datos de la nueva librería del cuerpo de la solicitud
        const { name, location, telefono } = req.body;

        // Crear la librería en la base de datos utilizando el modelo Library de Sequelize
        const library = await Library.create({ name, location, telefono });

        res.status(201).json(library);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ha ocurrido un error al crear la librería.' });
    }
};

const consultar = async (req, res) => {
    try {
        // Obtener todas las librerías de la base de datos utilizando el modelo Library de Sequelize
        const libraries = await Library.findAll();

        res.json(libraries);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ha ocurrido un error al consultar las librerías.' });
    }
};

const actualizar = async (req, res) => {
    try {
        // Obtener el ID de la librería a actualizar y los nuevos datos del cuerpo de la solicitud
        const { id } = req.params;
        const { name, location, telefono } = req.body;

        // Buscar la librería en la base de datos utilizando el ID y actualizar sus datos
        const [updatedRowsCount, updatedRows] = await Library.update(
            { name, location, telefono },
            { where: { id }, returning: true }
        );

        if (updatedRowsCount === 0) {
            return res.status(404).json({ message: 'No se encontró la librería.' });
        }

        res.json(updatedRows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ha ocurrido un error al actualizar la librería.' });
    }
};

const eliminar = async (req, res) => {
    try {
        // Obtener el ID del libro a dar de baja
        const { id } = req.params;

        // Buscar el libro en la base de datos utilizando el ID y actualizar su estado a inactivo
        const updatedRowsCount = await Library.update(
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