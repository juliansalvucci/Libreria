import  LibraryProvider from "../providers/LibraryProvider.js";

const createLibrary = async (library) => {
    return await LibraryProvider.createLibrary(library);
};

const getLibrary = async (libraryId) => {
    const library = await LibraryProvider.getLibrary(libraryId);
    return library;
};

const getAllLibrarys = async () => {
    const librarys = await LibraryProvider.getAllLibrarys();
    return librarys
};

const updateLibrary = async(library) => {
    const response = await LibraryProvider.updateLibrary(library)
    return response;
}

const inactiveLibrary = async (libraryId) => {
    await LibraryProvider.inactiveLibrary(libraryId);
}

const LibraryService = {
    createLibrary,
    getLibrary,
    getAllLibrarys,
    updateLibrary,
    inactiveLibrary
}

export default {LibraryService}

/*
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
*/