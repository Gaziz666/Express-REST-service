"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRepo = void 0;
const inMemoryDb_1 = require("../../common/inMemoryDb");
const user_model_1 = require("./user.model");
const usersRepo = {
    getMany: async () => {
        const users = await inMemoryDb_1.getMany(inMemoryDb_1.DbName.Users);
        if (users) {
            return users.map((user) => user_model_1.User.toResponse(user));
        }
        return null;
    },
    create: async (name, login, password) => {
        const user = new user_model_1.User(name, login, password);
        const result = await inMemoryDb_1.createOne(user, inMemoryDb_1.DbName.Users);
        if (result) {
            return user_model_1.User.toResponse(result);
        }
        return result;
    },
    getOne: async (userId) => {
        const result = await inMemoryDb_1.findOne((user) => user.id === userId, inMemoryDb_1.DbName.Users);
        return result;
    },
    updateOne: async (userId, body) => {
        const result = await inMemoryDb_1.update((user) => user.id === userId, body, inMemoryDb_1.DbName.Users);
        return result;
    },
    deleteOne: async (userId) => {
        const deletedUsers = await inMemoryDb_1.destroy((user) => user.id === userId, inMemoryDb_1.DbName.Users);
        await inMemoryDb_1.assignMany('userId', userId, inMemoryDb_1.DbName.Tasks);
        return deletedUsers[0];
    },
};
exports.usersRepo = usersRepo;
