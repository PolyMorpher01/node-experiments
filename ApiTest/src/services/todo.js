const Boom = require('boom');

const todoModel = require('../models/Todos');
const tokenUtils = require('../utils/token');

const errorMessages = require('../constants/errorMessages');

function getAllList(userId) {
  return todoModel.fetchAll(userId);
}

function getById(id, userId) {
  return todoModel.fetchById(id, userId).then(data => {
    if (!data) {
      throw Boom.badRequest(errorMessages.httpErr.badRequest);
    }
    return data;
  });
}

function createItem(obj, userId) {
  const todoObj = {
    id: obj.id,
    task: obj.task,
    is_completed: obj.is_completed,
    user_id: userId
  };
  return todoModel.create(todoObj);
}

function updateItem(id, obj, userId) {
  return todoModel.update(id, obj, userId);
}

function deleteItem(id, userId) {
  return todoModel.deleteItem(id, userId);
}

module.exports = {
  getAllList,
  getById,
  createItem,
  updateItem,
  deleteItem
};
