'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.assignMany = exports.destroyMany = exports.getMany = exports.destroy = exports.update = exports.findOne = exports.createOne = exports.DB = exports.DbName = void 0;
var DbName;
(function (DbName) {
  DbName['Users'] = 'Users';
  DbName['Boards'] = 'Boards';
  DbName['Tasks'] = 'Tasks';
})((DbName = exports.DbName || (exports.DbName = {})));
const DB = {
  Users: [],
  Boards: [],
  Tasks: [],
};
exports.DB = DB;
const findOne = async (cb, db) => {
  const result = await DB[db]?.find(cb);
  return result;
};
exports.findOne = findOne;
const getMany = async (db, cb) => {
  if (cb) {
    const result = await DB[db]?.filter(cb);
    return result;
  }
  const result = await DB[db];
  return result;
};
exports.getMany = getMany;
const update = async (cb, obj, db) => {
  const one = await DB[db]?.find(cb);
  return Object.assign(one, obj);
};
exports.update = update;
const destroy = async (cb, db) => {
  const index = await DB[db]?.findIndex(cb);
  if (index) {
    const result = await DB[db]?.splice(index, 1);
    return result;
  }
  return [];
};
exports.destroy = destroy;
const destroyMany = async (cb, db) => {
  if (DB[db]) {
    const filterData = await DB[db].filter(cb);
    DB[db] = filterData;
  }
};
exports.destroyMany = destroyMany;
const assignMany = async (param, attr, db) => {
  for (let i = 0; i < DB[db].length; i += 1) {
    if (DB[db][i][param] === attr) {
      console.log(attr);
      DB[db][i][param] = null;
    }
  }
};
exports.assignMany = assignMany;
const createOne = async (attr, db) => {
  const result = await DB[db].push(attr);
  return DB[db][result - 1];
};
exports.createOne = createOne;
