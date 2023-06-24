import Library from "../models/Library";

const createLibrary = async (library) => {
    try {
        const newLibrary = await Library.create(library);
        return newLibrary;
    } catch (err) {
        console.error("Error when creating", err);
        throw err;
    }
};

const getLibrary = async (libraryId) => {
    try {
        const library = await Library.findByPk(libraryId, { include: { all: true } });
        return library;
    } catch (err) {
        console.error("Error when fetching", err);
        throw err;
    }
};

const getAllLibrarys = async () => {
    try {
        const librarys = await Library.findAll();
        return librarys;
    } catch (err) {
        console.error("Error when fetching", err);
        throw err;
    }
};

const updateLibrary = async (library) => {
    try {
        const [updatedRowsCount] = await Library.update(library, {
            where: { id: library.id }
        });

        const response = updatedRowsCount === 0
            ? { status: 404, message: 'Library not found.' }
            : { status: 200, message: 'Operation successful.' };

        return response;
    } catch (err) {
        console.error("Error when fetching", err);
        throw err;
    }
};

const inactiveLibrary = async (libraryId) => {
    try {
        const updatedRowsCount = await Library.update(
            { active: false },
            { where: { libraryId } }
        );

        const response = updatedRowsCount[0] === 0
            ? { status: 404, message: 'Library not found.' }
            : { status: 200, message: 'Operation successful.' };

        return response;
    } catch (err) {
        console.error("Error when fetching", err);
        throw err;
    }
}




export default { createLibrary, getLibrary, getAllLibrarys, updateLibrary ,inactiveLibrary };