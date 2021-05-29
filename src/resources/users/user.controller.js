const usersService = require('./user.service');
const User = require('./user.model');

module.exports = {
  getMany: async (req, res) => {
    const users = await usersService.getMany();
    res.status(200).json(users.map((user) => User.toResponse(user)));
  },

  create: async (req, res) =>
    res
      .status(201)
      .json(
        await usersService.createUser(
          req.body.name,
          req.body.login,
          req.body.password
        )
      ),

  getById: async (req, res) => {
    const user = await usersService.getOne(req.params.userId);
    if (!user) {
      res.status(404).json({});
      return;
    }
    res.status(200).json(User.toResponse(user));
  },

  updateOne: async (req, res) => {
    const user = await usersService.updateOne(
      req.params.userId,
      req.body
    );
    if (!user) {
      res.status(404).json({});
      return;
    }
    res.status(200).json(User.toResponse(user));
  },

  deleteOne: async (req, res) => {
    const result = await usersService.deleteOne(req.params.userId);
    if (result) {
      res.status(204).json(result);
    } else {
      res.status(404).json(result);
    }
  },
};
