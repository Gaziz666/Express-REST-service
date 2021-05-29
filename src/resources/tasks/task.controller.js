const taskService = require('./task.service');

module.exports = {
  getMany: async (req, res) => {
    const tasks = await taskService.getMany(req.params.boardId);
    res.status(200).json(tasks);
  },

  create: async (req, res) => {
    console.log(req.params);

    res
      .status(201)
      .json(await taskService.createTask(req.params.boardId, req.body));
  },
  getById: async (req, res) => {
    console.log(req.params);
    const task = await taskService.getById(
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
    try {
      const task = await taskService.updateOne(
        req.params.boardId,
        req.params.taskId,
        req.body
      );
      if (!task) {
        res.status(404).json({});
        return;
      }
      res.status(200).json(task);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  deleteOne: async (req, res) => {
    const result = await taskService.deleteOne(
      req.params.boardId,
      req.params.taskId
    );

    if (result[0]) {
      res.status(200).json(result);
    } else {
      res.status(404).json(result);
    }
  },
};
