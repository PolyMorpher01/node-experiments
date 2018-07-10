const Boom = require('boom');

const todoModel = require('../models/Todos');
const tokenUtils = require('../utils/token');

function getAllList(accessToken) {
  const tokenData = tokenUtils.verifyAccessToken(accessToken);
  const userObj = tokenData.data.payLoad;

  return todoModel.fetchAll(userObj.id);
}

function getById(id, accessToken) {
  const tokenData = tokenUtils.verifyAccessToken(accessToken);
  const userObj = tokenData.data.payLoad;

  return todoModel.fetchById(id, userObj.id).then(data => {
    if (!data) {
      throw Boom.badRequest('Item does not exist');
    }
    return data;
  });
}

function createItem(obj, accessToken) {
  const tokenData = tokenUtils.verifyAccessToken(accessToken);
  const userObj = tokenData.data.payLoad;

  const todoObj = {
    id: obj.id,
    task: obj.task,
    is_completed: obj.is_completed,
    user_id: userObj.id
  };
  return todoModel.create(todoObj);
}

function updateItem(id, obj, accessToken) {
  const tokenData = tokenUtils.verifyAccessToken(accessToken);
  const userObj = tokenData.data.payLoad;

  return todoModel.update(id, obj, userObj.id);
}

function deleteItem(id, accessToken) {
  const tokenData = tokenUtils.verifyAccessToken(accessToken);
  const userObj = tokenData.data.payLoad;

  return todoModel.delete(id, userObj.id);
}

module.exports = {
  getAllList,
  getById,
  createItem,
  updateItem,
  deleteItem
};
