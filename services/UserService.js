import UserProvider from "../providers/UserProvider";

const createUser = async (user) => {
  return await UserProvider.createUser(user);
};

const getUser = async (userId) => {
  const user = await UserProvider.getUser(userId);
  if (user) {
    // Lógica de negocio
    console.log(user.firstName);
  }
  return user;
};

const validateUser = async (user, pass) => {
  const userFound = await UserProvider.validateUser({ user, pass });
  return userFound;
};

const createTicket = async (userId, ticket) => {
  const user = await UserProvider.getUser(userId);
  if (user) {
    const newTicket = await UserProvider.createTicket(userId, ticket);
    return newTicket;
  }
  return null;
};

export default { createUser, getUser, createTicket, validateUser };