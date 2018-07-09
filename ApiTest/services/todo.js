const todoModel = require('../models/Todos');
const userModel = require('../models/Users');

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

function createItem(obj) {
  return userModel.fetchByUserName(obj.user_name).then(data => {
    const userData = data;
    if (!userData) {
      throw 'User does not exist';
    }

    delete obj.user_name;
    obj.user_id = userData.id;

    return todoModel.create(obj);
  });
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
