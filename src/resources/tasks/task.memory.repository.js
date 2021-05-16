const { DB } = require('../../common/inMemoryDb');
const Task = require('./task.model');

module.exports = {
  getMany: async (boardId) =>
    DB.Tasks.filter((task) => task.boardId === boardId)[0],

  create: async (
    boardIdParam,
    title,
    order,
    description,
    userId,
    boardId,
    columnId
  ) => {
    const task = new Task(title, order, description, userId, boardId, columnId);
    try {
      await DB.Tasks.push(task);
    } catch (error) {
      console.log(error);
      throw new Error();
    }
    return {
      id: task.id,
      title: task.title,
      order: task.order,
      description: task.description,
      userId: task.userId,
      boardId: task.boardId,
      columnId: task.columnId,
    };
  },

  getOne: async (boardId, taskId) => {
    const result = await DB.Tasks.filter(
      (task) => task.id === taskId && task.taskId === taskId
    )[0];
    return result;
  },

  updateOne: async (
    boardIdParam,
    taskId,
    title,
    order,
    description,
    userId,
    boardId,
    columnId
  ) => {
    for (let i = 0; i < DB.Tasks.length; i += 1) {
      if (DB.Tasks[i].id === taskId && DB.Tasks[i].boardId === boardId) {
        DB.Tasks[i].title = title || DB.Tasks[i].title;
        DB.Tasks[i].order = order || DB.Tasks[i].order;
        DB.Tasks[i].description = description || DB.Tasks[i].description;
        DB.Tasks[i].userId = userId || DB.Tasks[i].userId;
        DB.Tasks[i].boardId = boardId || DB.Tasks[i].boardId;
        DB.Tasks[i].columnId = columnId || DB.Tasks[i].columnId;
        return DB.Tasks[i];
      }
    }
    return null;
  },

  deleteOne: async (boardId, taskId) => {
    const newTasks = await DB.Tasks.filter(
      (task) => task.id !== taskId && task.boardId !== boardId
    );
    if (newTasks.length === DB.Tasks) {
      return null;
    }
    DB.Tasks = newTasks;
    return 'deleted';
  },
};
