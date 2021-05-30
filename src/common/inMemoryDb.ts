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

/**
 * array methods callback
 * @callback dbCallback
 * @param {object} callback item
 * @return {boolean}
 */

// eslint-disable-next-line no-unused-vars
type Callback = (params: User | Board | Task) => boolean;

/**
 * User object properties
 * @typedef {Object} User
 * @property {string} id how the user id
 * @property {string} name user name
 * @property {string} login login
 * @property {string} password password
 */

/**
 * @typedef {Object} Board
 * @property {string} id board id
 * @property {string} title board title
 * @property {Array<Object<string>>} columns list of columns
 */

/**
 * @typedef {Object} Task
 * @property {string} id task id
 * @property {string} title task title
 * @property {string} order task order
 * @property {string} description task description
 * @property {string} userId user id
 * @property {string} boardId board id
 * @property {string} columnId column id
 */

/**
 *
 * find one
 * @param {Callback} cb cb for array method
 * @param {DbName} db db name
 * @return {User|Board|Task} result
 */
const findOne = async (
  cb: Callback,
  db: DbName
): Promise<User | Board | Task | undefined> => {
  const result = await DB[db]?.find(cb);
  return result;
};

/**
 *
 *
 * @param {string} dbcb for array method
 * @param {dbCallback} cb db name
 * @return {User|Board|Task} result
 */
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

/**
 *
 *
 * @param {dbCallback} cb cb for array method
 * @param {User|Board|Task} obj db name
 * @param {string} db db name
 * @return {User|Board|Task} result
 */
const update = async (
  cb: Callback,
  obj: { [key: string]: string | number | Array<ColumnType> },
  db: DbName
): Promise<User | Board | Task | undefined> => {
  const one = await DB[db]?.find(cb);
  return Object.assign(one, obj);
};

/**
 *
 *
 * @param {dbCallback} cb cb for array method
 * @param {string} db db name
 * @return {User|Board|Task} result
 */
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

/**
 *
 * delete many object from db
 * @param {dbCallback} cb cb for array method
 * @param {string} db db name
 * @return {avoid} result
 */
const destroyMany = async (cb: Callback, db: DbName) => {
  if (DB[db]) {
    const filterData = await DB[db]!.filter(cb);
    DB[db] = filterData;
  }
};

/**
 *
 * unassign
 * @param {string} param db key name
 * @param {string} attr attribute name
 * @param {string} db db name
 * @return {User|Board|Task} result
 */
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
    if (DB[db]![i]![param] === attr) {
      DB[db]![i]![param] = null;
    }
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
