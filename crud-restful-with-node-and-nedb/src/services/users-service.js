const models = require("../models/users-models");
const service = {}

service.findAll = async () => {
  const users = await models.findAll();
  return users;
}

module.exports = service;

