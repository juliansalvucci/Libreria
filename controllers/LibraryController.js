import LibraryService from "../services/LibraryService.js";

const createLibrary = async (req, res) => {
    try {
        const library = await LibraryService.create(req.body);
        res.status(200).json(library);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error when fetching.' });
    }
};

const getLibrary = async (req, res) => {
    try {
        const { id } = req.params;
        const library = await LibraryService.getLibrary(id);
        return library;
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error when fetching.' });
    }
};

const getAllLibrarys = async () => {
    try {
        const librarys = await LibraryService.getAllLibrarys();
        return librarys;
    } catch (error) {
        console.error(error);
        throw new Error('Error when fetching.');
    }
};

const updateLibrary = async (res, req) => {
    try {
        const library = await LibraryService.updateLibrary(req);
        return library
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error when fetching.' });
    }
}

const inactiveLibrary = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await LibraryService.inactiveLibrary(id);
        return response;
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error when fetching.' });
    }
};


const _createLibrary = createLibrary;
export { _createLibrary as createLibrary };
const _getLibrary = getLibrary;
export { _getLibrary as getLibrary };
const  _getAllLibrarys = getAllLibrarys;
export { _getAllLibrarys as getAllLibrarys };
const _updateLibrary = updateLibrary;
export { _updateLibrary as updateLibrary };
const _inactiveLibrary = inactiveLibrary;
export { _inactiveLibrary as inactiveLibrary };