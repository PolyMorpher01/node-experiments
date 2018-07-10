const todoModel = require('../models/Todos');
const tokenUtils = require('../utils/token');

function getAllList() {
  return todoModel.fetchAll();
}

function getById(id) {
  return todoModel.fetchById(id).then(data => {
    if (!data) {
      throw 'Item does not exist';
    }
    return data;
  });
}

function createItem(obj, accessToken) {
  const tokenData = tokenUtils.verifyAccessToken(accessToken);
  if (!tokenData) {
    throw 'Invalid Token';
  }

  const userObj = tokenData.data.payLoad;

  const todoObj = {
    id: obj.id,
    task: obj.task,
    is_completed: obj.is_completed,
    user_id: userObj.id
  };
  return todoModel.create(todoObj);
}

function updateItem(id, obj) {
  return todoModel.update(id, obj);
}

function deleteItem(id) {
  return todoModel.delete(id);
}

module.exports = {
  getAllList,
  getById,
  createItem,
  updateItem,
  deleteItem
};
