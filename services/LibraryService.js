import LibraryProvider from "../providers/LibraryProvider";

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

const updateBook = async(library) => {
    const response = await LibraryProvider.updateLibrary(library)
    return response;
}

const inactiveLibrary = async (libraryId) => {
    await LibraryProvider.inactiveLibrary(libraryId);
}


export default { createLibrary, getLibrary, getAllLibrarys, updateLibrary, inactiveLibrary };