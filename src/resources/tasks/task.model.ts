import uuid = require('uuid');

class Task {
  [index: string]: string | number | null;

  id: string;

  title: string;

  order: number;

  description: string;

  userId: string | null;

  boardId: string | null;

  columnId: string | null;

  constructor({
    title = 'Autotest task',
    order = 0,
    description = 'Lorem ipsum',
    userId = '',
    boardId = '',
    columnId = '',
  } = {}) {
    this.id = uuid.v4();
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}

export { Task };
