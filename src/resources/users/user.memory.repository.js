const {
  getMany,
  createOne,
  findOne,
  update,
  destroy,
  assignMany,
} = require('../../common/inMemoryDb');
const User = require('./user.model');

const db = 'Users';

module.exports = {
  getMany: async () => {
    const users = getMany(db);
    return users;
  },

  create: async (name, login, password) => {
    const user = new User(name, login, password);
    const result = await createOne(user, db);
    return result;
  },

  getOne: async (userId) => {
    const result = await findOne((user) => user.id === userId, db);
    return result;
  },

  updateOne: async (userId, body) => {
    const result = await update((user) => user.id === userId, body, db);

    return result;
  },

  deleteOne: async (userId) => {
    const deletedUsers = await destroy((user) => user.id === userId, db);
    await assignMany('userId', userId, 'Tasks');

    return deletedUsers[0];
  },
};
