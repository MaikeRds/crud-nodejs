const service = require("../services/users-service");
const controller = {};

controller.findAll = async (req, res) => {
  const users = await service.findAll();
  return res.status(200).json(users);
};

module.exports = controller;
