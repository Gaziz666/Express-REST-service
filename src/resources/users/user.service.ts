import { usersRepo } from './user.memory.repository';

const getMany = async () => {
  const result = await usersRepo.getMany();
  return result;
};
const createUser = async (name: string, login: string, password: string) => {
  const result = await usersRepo.create(name, login, password);
  return result;
};
const getOne = async (userId: string) => {
  const result = await usersRepo.getOne(userId);
  return result;
};
const updateOne = async (userId: string, body: { [key: string]: string }) => {
  const result = await usersRepo.updateOne(userId, body);
  return result;
};
const deleteOne = async (userId: string) => {
  const result = await usersRepo.deleteOne(userId);
  return result;
};

const usersService = { getMany, createUser, getOne, updateOne, deleteOne };
export { usersService };
