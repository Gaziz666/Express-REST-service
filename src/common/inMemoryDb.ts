import { Board, ColumnType } from '../resources/boards/board.model';
import { User } from '../resources/users/user.model';
import { Task } from '../resources/tasks/task.model';

type DBType = { [char: string]: Array<User | Board | Task> };

export enum DbName {
  Users = 'Users',
  Boards = 'Boards',
  Tasks = 'Tasks',
}
const DB: DBType = {
  Users: [],
  Boards: [],
  Tasks: [],
};

// eslint-disable-next-line no-unused-vars
type Callback = (params: User | Board | Task) => boolean;

const findOne = async (
  cb: Callback,
  db: DbName
): Promise<User | Board | Task | undefined> => {
  const result = await DB[db]?.find(cb);
  return result;
};

const getMany = async (
  db: DbName,
  cb?: Callback
): Promise<Array<User | Board | Task> | undefined> => {
  if (cb) {
    const result = await DB[db]?.filter(cb);
    return result;
  }
  const result = await DB[db];
  return result;
};

const update = async (
  cb: Callback,
  obj: { [key: string]: string | number | Array<ColumnType> },
  db: DbName
): Promise<User | Board | Task | undefined> => {
  const one = await DB[db]?.find(cb);
  return Object.assign(one, obj);
};

const destroy = async (
  cb: Callback,
  db: DbName
): Promise<Array<User | Board | Task> | undefined> => {
  const index = await DB[db]?.findIndex(cb);
  if (index) {
    const result = await DB[db]?.splice(index, 1);
    return result;
  }
  return [];
};

const destroyMany = async (cb: Callback, db: DbName) => {
  if (DB[db]) {
    const filterData = await DB[db]!.filter(cb);
    DB[db] = filterData;
  }
};

const assignMany = async (
  param: string,
  attr:
    | string
    | number
    | null
    | Array<{ id: string; title: string; order: number }>,
  db: DbName
): Promise<void> => {
  for (let i = 0; i < DB[db]!.length; i += 1) {
    console.log(DB[db]![i]);
    if (DB[db]![i]![param] === attr) {
      console.log(attr);
      DB[db]![i]![param] = null;
    }
    console.log(DB[db]![i]);
  }
};

const createOne = async (attr: User | Task | Board, db: DbName) => {
  const result = await DB[db]!.push(attr);
  return DB[db]![result - 1];
};

export {
  DB,
  createOne,
  findOne,
  update,
  destroy,
  getMany,
  destroyMany,
  assignMany,
};
