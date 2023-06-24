import UserProvider from "../providers/UserProvider";

const createUser = async (user) => {
  return await UserProvider.createUser(user);
};

const getUser = async (userId) => {
  const user = await UserProvider.getUser(userId);
  return user;
};

const validateUser = async (user, pass) => {
  const userFound = await UserProvider.validateUser({ user, pass });
  return userFound;
};

export default { createUser, getUser, validateUser };