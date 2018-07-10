const Boom = require('boom');

const todoModel = require('../models/Todos');
const tokenUtils = require('../utils/token');

function getAllList(userID) {
  return todoModel.fetchAll(userID);
}

function getById(id, userID) {
  return todoModel.fetchById(id, userID).then(data => {
    if (!data) {
      throw Boom.badRequest('Item does not exist');
    }
    return data;
  });
}

function createItem(obj, userID) {
  const todoObj = {
    id: obj.id,
    task: obj.task,
    is_completed: obj.is_completed,
    user_id: userID
  };
  return todoModel.create(todoObj);
}

function updateItem(id, obj, userID) {
  return todoModel.update(id, obj, userID);
}

function deleteItem(id, userID) {
  return todoModel.delete(id, userID);
}

module.exports = {
  getAllList,
  getById,
  createItem,
  updateItem,
  deleteItem
};
