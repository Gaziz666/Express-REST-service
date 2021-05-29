const uuid = require('uuid').v4;

class Task {
  constructor(title, order, description, userId, boardId, columnId) {
    this.id = uuid();
    this.title = title || 'Autotest task';
    this.order = order || 0;
    this.description = description || 'Lorem ipsum';
    this.userId = userId || null;
    this.boardId = boardId;
    this.columnId = columnId || null;
    console.log(title, order, description, userId, boardId, columnId);
  }
}

module.exports = Task;
