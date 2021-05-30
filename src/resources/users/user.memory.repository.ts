import {
  getMany,
  createOne,
  findOne,
  update,
  destroy,
  DbName,
  assignMany,
} from '../../common/inMemoryDb';
import { User } from './user.model';

const usersRepo = {
  getMany: async () => {
    const users = await getMany(DbName.Users);
    if (users) {
      return users.map((user) => User.toResponse(user as User));
    }
    return null;
  },

  create: async (name: string, login: string, password: string) => {
    const user = new User(name, login, password);
    const result = await createOne(user, DbName.Users);
    if (result) {
      return User.toResponse(result as User);
    }
    return result;
  },

  getOne: async (userId: string) => {
    const result = await findOne((user) => user.id === userId, DbName.Users);
    return result;
  },

  updateOne: async (userId: string, body: { [key: string]: string }) => {
    const result = await update(
      (user) => user.id === userId,
      body,
      DbName.Users
    );

    return result;
  },

  deleteOne: async (userId: string) => {
    const deletedUsers = await destroy(
      (user) => user.id === userId,
      DbName.Users
    );
    await assignMany('userId', userId, DbName.Tasks);

    return deletedUsers![0];
  },
};

export { usersRepo };
