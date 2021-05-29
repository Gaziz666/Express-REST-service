const uuid = require('uuid').v4;

class Board {
  constructor({
    id = uuid(),
    title = 'Autotest board',
    columns = [
      {
        id: uuid(),
        title: "Backlog",
        order: 1
      },
      {
        id: uuid(),
        title: "Sprint",
        order: 2
      }
    ]
   
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

module.exports = Board;
