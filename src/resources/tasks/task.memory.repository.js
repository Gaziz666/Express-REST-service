const {
  getMany,
  createOne,
  findOne,
  update,
  destroy,
} = require('../../common/inMemoryDb');
const Task = require('./task.model');

const db = 'Tasks';

module.exports = {
  getMany: async (boardId) => {
    const result = await getMany(db, (task) => task.boardId === boardId);
    return result;
  },

  createTask: async (boardId, body) => {
    const { title, order, description, userId, columnId } = body;
    const newTask = await new Task(
      title,
      order,
      description,
      userId,
      boardId,
      columnId
    );
    const result = await createOne(newTask, db);
    if (result) return result;
    return undefined;
  },

  getById: async (boardId, taskId) => {
    const result = await findOne(
      (task) => task.boardId === boardId && task.id === taskId,
      db
    );

    return result;
  },

  updateOne: async (boardId, taskId, body) => {
    if (!body) {
      throw new Error();
    }
    const result = await update(
      (task) => task.boardId === boardId && task.id === taskId,
      body,
      db
    );

    return result;
  },

  deleteOne: async (boardId, taskId) => {
    const result = await destroy(
      (task) => task.boardId === boardId && task.id === taskId,
      db
    );
    return result;
  },
};
