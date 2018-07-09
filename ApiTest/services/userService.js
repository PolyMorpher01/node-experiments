const userModel = require('../models/Users');
const cryptUtils = require('../utils/crypt');

module.exports = {
  getAllList() {
    return userModel.fetchAll();
  },

  getById(id) {
    return userModel.fetchById(id).then(data => {
      if (!data) {
        throw 'User does not exist';
      }
      return data;
    });
  },

  createItem(obj) {
    obj.password = cryptUtils.encrypt(obj.password);
    return userModel.create(obj);
  },

  updateItem(id, obj) {
    return userModel.update(id, obj);
  },

  deleteItem(id) {
    return userModel.delete(id);
  }
};
