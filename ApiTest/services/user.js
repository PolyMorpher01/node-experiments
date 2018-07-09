const userModel = require('../models/Users');
const cryptUtils = require('../utils/crypt');

function getAllList() {
  return userModel.fetchAll();
}

function getById(id) {
  return userModel.fetchById(id).then(data => {
    if (!data) {
      throw 'User does not exist';
    }
    return data;
  });
}

function createItem(obj) {
  hasedPassword = cryptUtils.encrypt(obj.password);

  const userObj = {
    user_name: obj.userName,
    password: hasedPassword,
    email: obj.email
  };
  return userModel.create(userObj);
}

function updateItem(id, obj) {
  return userModel.update(id, obj);
}

function deleteItem(id) {
  return userModel.delete(id);
}

module.exports = {
  getAllList,
  getById,
  createItem,
  updateItem,
  deleteItem
};
