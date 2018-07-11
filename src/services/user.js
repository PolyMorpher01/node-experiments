const Boom = require('boom');

const userModel = require('../models/Users');
const cryptUtils = require('../utils/crypt');

const errorMessages = require('../constants/errorMessages');

function getAllList() {
  return userModel.fetchAll();
}

function getById(id) {
  return userModel.fetchById(id).then(data => {
    if (!data) {
      throw Boom.badRequest(errorMessages.httpErr.badRequest);
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
  return userModel.deleteItem(id);
}

module.exports = {
  getAllList,
  getById,
  createItem,
  updateItem,
  deleteItem
};
