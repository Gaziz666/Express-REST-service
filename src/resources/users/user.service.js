const usersRepo = require('./user.memory.repository');

const getMany = () => usersRepo.getMany();
const createUser = (name, login, password) => usersRepo.create(name, login, password)
const getOne = (userId) => usersRepo.getOne(userId)
const updateOne = (userId, body) => usersRepo.updateOne(userId, body)
const deleteOne = (userId) => usersRepo.deleteOne(userId)

module.exports = { getMany, createUser, getOne, updateOne, deleteOne };
