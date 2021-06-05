import { ColumnType } from './board.model';
import { boardRepo } from './board.memory.repository';

const getMany = async () => {
  const result = await boardRepo.getMany();
  return result;
};
const createBoard = async (title: string, columns: Array<ColumnType>) => {
  const result = boardRepo.create(title, columns);
  return result;
};

const getOne = async (boardId: string) => {
  const result = boardRepo.getOne(boardId);
  return result;
};
const updateOne = async (
  boardId: string,
  body: { [key: string]: string | number | Array<ColumnType> }
) => {
  const result = await boardRepo.updateOne(boardId, body);
  return result;
};
const deleteOne = async (boardId: string) => {
  const result = await boardRepo.deleteOne(boardId);
  return result;
};

const boardService = { getMany, createBoard, getOne, updateOne, deleteOne };
export { boardService };
