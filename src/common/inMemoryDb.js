const DB = {
  Users: [],
  Boards: [],
  Tasks: [],
};

const toResponse = (user) => {
  const { id, name, login } = user;
  return { id, name, login };
};

const findOne = async (cb, db) => {
  const result = await DB[db].find(cb);
  return result;
};

const getMany = async (db, cb) => {
  if (cb) {
    const result = await DB[db].filter(cb);
    return result;
  }
  const result = await DB[db];
  return result;
};

const update = async (cb, obj, db) => {
  const one = await DB[db].find(cb);
  return Object.assign(one, obj);
};

const destroy = async (cb, db) => {
  const index = await DB[db].findIndex(cb);
  const result = await DB[db].splice(index, 1);
  return result;
};

const destroyMany = async (cb, db) => {
  const filterData = await DB[db].filter(cb);
  DB[db] = filterData;
};

const assignMany = async (param, attr, db) => {
  for (let i = 0; i < DB[db].length; i += 1) {
    if (DB[db][i][param] === attr) {
      DB[db][i][param] = null;
    }
  }
};

const createOne = async (attr, db) => {
  const result = await DB[db].push(attr);
  if (db === 'Users') {
    return toResponse(DB[db][result - 1]);
  }

  return DB[db][result - 1];
};

module.exports = {
  DB,
  createOne,
  findOne,
  update,
  destroy,
  getMany,
  destroyMany,
  assignMany,
};
