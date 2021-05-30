import { ColumnType } from './board.model';
import { boardRepo } from './board.memory.repository';

const getMany = () => boardRepo.getMany();
const createBoard = (title: string, columns: Array<ColumnType>) =>
  boardRepo.create(title, columns);
const getOne = (boardId: string) => boardRepo.getOne(boardId);
const updateOne = (
  boardId: string,
  body: { [key: string]: string | number | Array<ColumnType> }
) => boardRepo.updateOne(boardId, body);
const deleteOne = (boardId: string) => boardRepo.deleteOne(boardId);

const boardService = { getMany, createBoard, getOne, updateOne, deleteOne };
export { boardService };
