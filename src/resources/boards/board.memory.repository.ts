import {
  getMany,
  createOne,
  findOne,
  update,
  destroy,
  destroyMany,
  DbName,
} from '../../common/inMemoryDb';
import { Board, ColumnType } from './board.model';
import { Task } from '../tasks/task.model';

const boardRepo = {
  getMany: async () => {
    const Boards = await getMany(DbName.Boards);
    return Boards;
  },

  create: async (title: string, columns: Array<ColumnType>) => {
    const board = new Board({ title, columns });
    const result = await createOne(board, DbName.Boards);
    return result;
  },

  getOne: async (boardId: string) => {
    const result = await findOne(
      (board) => board.id === boardId,
      DbName.Boards
    );
    return result;
  },

  updateOne: async (
    boardId: string,
    body: { [key: string]: string | number | Array<ColumnType> }
  ) => {
    const result = await update(
      (board) => board.id === boardId,
      body,
      DbName.Boards
    );
    return result;
  },

  deleteOne: async (boardId: string) => {
    const deletedBoards = await destroy(
      (board) => board.id === boardId,
      DbName.Boards
    );

    await destroyMany(
      (task) => (task as Task).boardId !== deletedBoards![0]?.id,
      DbName.Tasks
    );
    return deletedBoards![0];
  },
};

export { boardRepo };
