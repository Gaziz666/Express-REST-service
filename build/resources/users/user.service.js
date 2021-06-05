"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersService = void 0;
const user_memory_repository_1 = require("./user.memory.repository");
const getMany = async () => {
    const result = await user_memory_repository_1.usersRepo.getMany();
    return result;
};
const createUser = async (name, login, password) => {
    const result = await user_memory_repository_1.usersRepo.create(name, login, password);
    return result;
};
const getOne = async (userId) => {
    const result = await user_memory_repository_1.usersRepo.getOne(userId);
    return result;
};
const updateOne = async (userId, body) => {
    const result = await user_memory_repository_1.usersRepo.updateOne(userId, body);
    return result;
};
const deleteOne = async (userId) => {
    const result = await user_memory_repository_1.usersRepo.deleteOne(userId);
    return result;
};
const usersService = { getMany, createUser, getOne, updateOne, deleteOne };
exports.usersService = usersService;
