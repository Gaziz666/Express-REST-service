const { DB } = require('../../common/inMemoryDb');
const User = require('./user.model');

module.exports = {
  getMany: async () => DB.Users,

  create: async (name, login, password) => {
    const user = new User(name, login, password);
    try {
      await DB.Users.push(user);
    } catch (error) {
      console.log(error);
      throw new Error();
    }
    return {
      id: user.id,
      name: user.name,
      login: user.login,
    };
  },

  getOne: async (userId) => {
    const result = await DB.Users.filter((user) => user.id === userId)[0];
    return result;
  },

  updateOne: async (userId, name, login, password) => {
    for (let i = 0; i < DB.Users.length; i += 1) {
      if (DB.Users[i].id === userId) {
        DB.Users[i].name = name || DB.Users[i].name;
        DB.Users[i].login = login || DB.Users[i].login;
        DB.Users[i].password = password || DB.Users[i].password;
        return DB.Users[i];
      }
    }
    return null;
  },

  deleteOne: async (userId) => {
    const newUsers = await DB.Users.filter((user) => user.id !== userId);
    if (newUsers.length === DB.Users) {
      return null;
    }
    DB.Users = newUsers;

    const newTasks = await DB.Tasks.filter((task) => task.userId !== userId);
    if (newTasks.length === DB.Tasks) {
      return null;
    }
    const deletedTasksBoardId = await DB.Tasks.filter(
      (task) => task.userId === userId
    ).map((task) => task.boardId);

    DB.Tasks = newTasks;

    const newboards = await DB.Boards.filter(
      (board) => !deletedTasksBoardId.includes(board.id)
    );

    DB.Boards = newboards;

    return 'deleted';
  },
};
