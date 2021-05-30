import { usersRepo } from './user.memory.repository';

const getMany = () => usersRepo.getMany();
const createUser = (name: string, login: string, password: string) =>
  usersRepo.create(name, login, password);
const getOne = (userId: string) => usersRepo.getOne(userId);
const updateOne = (userId: string, body: { [key: string]: string }) =>
  usersRepo.updateOne(userId, body);
const deleteOne = (userId: string) => usersRepo.deleteOne(userId);

const usersService = { getMany, createUser, getOne, updateOne, deleteOne };
export { usersService };
