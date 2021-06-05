"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignMany = exports.destroyMany = exports.getMany = exports.destroy = exports.update = exports.findOne = exports.createOne = exports.DB = exports.DbName = void 0;
var DbName;
(function (DbName) {
    DbName["Users"] = "Users";
    DbName["Boards"] = "Boards";
    DbName["Tasks"] = "Tasks";
})(DbName = exports.DbName || (exports.DbName = {}));
const DB = {
    Users: [],
    Boards: [],
    Tasks: [],
};
exports.DB = DB;
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
const findOne = async (cb, db) => {
    const result = await DB[db]?.find(cb);
    return result;
};
exports.findOne = findOne;
/**
 *
 *
 * @param {string} dbcb for array method
 * @param {dbCallback} cb db name
 * @return {User|Board|Task} result
 */
const getMany = async (db, cb) => {
    if (cb) {
        const result = await DB[db]?.filter(cb);
        return result;
    }
    const result = await DB[db];
    return result;
};
exports.getMany = getMany;
/**
 *
 *
 * @param {dbCallback} cb cb for array method
 * @param {User|Board|Task} obj db name
 * @param {string} db db name
 * @return {User|Board|Task} result
 */
const update = async (cb, obj, db) => {
    const one = await DB[db]?.find(cb);
    return Object.assign(one, obj);
};
exports.update = update;
/**
 *
 *
 * @param {dbCallback} cb cb for array method
 * @param {string} db db name
 * @return {User|Board|Task} result
 */
const destroy = async (cb, db) => {
    const index = await DB[db]?.findIndex(cb);
    if (index) {
        const result = await DB[db]?.splice(index, 1);
        return result;
    }
    return [];
};
exports.destroy = destroy;
/**
 *
 * delete many object from db
 * @param {dbCallback} cb cb for array method
 * @param {string} db db name
 * @return {avoid} result
 */
const destroyMany = async (cb, db) => {
    if (DB[db]) {
        const filterData = await DB[db].filter(cb);
        DB[db] = filterData;
    }
};
exports.destroyMany = destroyMany;
/**
 *
 * unassign
 * @param {string} param db key name
 * @param {string} attr attribute name
 * @param {string} db db name
 * @return {User|Board|Task} result
 */
const assignMany = async (param, attr, db) => {
    for (let i = 0; i < DB[db].length; i += 1) {
        if (DB[db][i][param] === attr) {
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
