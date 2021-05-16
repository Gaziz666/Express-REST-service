const taskService = require('./task.service');

module.exports = {
  getMany: async (req, res) => {
    const tasks = await taskService.getMany(req.params.boardId);
    res.status(200).json(tasks);
  },

  create: async (req, res) =>
    res
      .status(201)
      .json(
        await taskService.createTask(
          req.params.boardId,
          req.body.title,
          req.body.order,
          req.body.description,
          req.body.userId,
          req.body.boardId,
          req.body.columnId
        )
      ),

  getOne: async (req, res) => {
    const task = await taskService.getOne(
      req.params.boardId,
      req.params.taskId
    );
    if (!task) {
      res.status(404).json({});
      return;
    }
    res.status(200).json(task);
  },

  updateOne: async (req, res) => {
    const task = await taskService.updateOne(
      req.params.boardId,
      req.params.taskId,
      req.body.title,
      req.body.order,
      req.body.description,
      req.body.userId,
      req.body.boardId,
      req.body.columnId
    );
    if (!task) {
      res.status(404).json({});
      return;
    }
    res.status(200).json(task);
  },

  deleteOne: async (req, res) => {
    const result = await taskService.deleteOne(
      req.params.boardId,
      req.params.taskId
    );
    console.log('deleted', result);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json(result);
    }
  },
};
