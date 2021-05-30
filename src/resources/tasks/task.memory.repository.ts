import {
  getMany,
  createOne,
  findOne,
  update,
  destroy,
  DbName,
} from '../../common/inMemoryDb';

import { Task } from './task.model';

const taskRepo = {
  getMany: async (boardId: string): Promise<Array<Task | undefined>> => {
    const result = await getMany(
      DbName.Tasks,
      (task) => (task as Task).boardId === boardId
    );
    if (result) return result as Array<Task>;
  },

  createTask: async (
    boardId: string,
    body: {
      title: string;
      order: number;
      description: string;
      userId: string;
      columnId: string;
    }
  ) => {
    const { title, order, description, userId, columnId } = body;
    const newTask = await new Task({
      title,
      order,
      description,
      userId,
      boardId,
      columnId,
    });
    const result = await createOne(newTask, DbName.Tasks);
    if (result) return result;
    return undefined;
  },

  getById: async (boardId: string, taskId: string) => {
    const result = await findOne(
      (task) => (task as Task).boardId === boardId && task.id === taskId,
      DbName.Tasks
    );

    return result;
  },

  updateOne: async (
    boardId: string,
    taskId: string,
    body: { [key: string]: string | number }
  ) => {
    if (!body) {
      throw new Error();
    }
    const result = await update(
      (task) => (task as Task).boardId === boardId && task.id === taskId,
      body,
      DbName.Tasks
    );

    return result;
  },

  deleteOne: async (boardId: string, taskId: string) => {
    const result = await destroy(
      (task) => (task as Task).boardId === boardId && task.id === taskId,
      DbName.Tasks
    );
    return result;
  },
};

export { taskRepo };
