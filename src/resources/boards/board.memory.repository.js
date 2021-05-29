const {
  getMany,
  createOne,
  findOne,
  update,
  destroy,
  destroyMany,
} = require('../../common/inMemoryDb');
const Board = require('./board.model');

const db = 'Boards';

module.exports = {
  getMany: async () => {
    const Boards = await getMany(db);
    return Boards;
  },

  create: async (title, columns) => {
    const board = new Board(title, columns);
    const result = await createOne(board, db);
    return result;
  },

  getOne: async (boardId) => {
    const result = await findOne((board) => board.id === boardId, db);
    return result;
  },

  updateOne: async (boardId, body) => {
    const result = await update((board) => board.id === boardId, body, db);
    return result;
  },

  deleteOne: async (boardId) => {
    const deletedBoards = await destroy((board) => board.id === boardId, db);

    await destroyMany((task) => task.boardId !== deletedBoards[0].id, 'Tasks');
    return deletedBoards[0];
  },
};
