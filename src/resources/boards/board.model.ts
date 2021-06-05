import uuid = require('uuid');

export type ColumnType = { id: string; title: string; order: number };

class Board {
  [key: string]: string | Array<{ id: string; title: string; order: number }>;

  id: string;

  title: string;

  columns: Array<ColumnType>;

  constructor({
    id = uuid.v4(),
    title = 'Autotest board',
    columns = [
      {
        id: uuid.v4(),
        title: 'Backlog',
        order: 1,
      },
      {
        id: uuid.v4(),
        title: 'Sprint',
        order: 2,
      },
    ],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

export { Board };
