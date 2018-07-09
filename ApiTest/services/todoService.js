const todoModel = require('../models/Todos');
const userModel = require('../models/Users');

module.exports = {
  getAllList() {
    return todoModel.fetchAll();
  },

  getById(id) {
    return todoModel.fetchById(id).then(data => {
      if (!data) {
        throw 'Item does not exist';
      }
      return data;
    });
  },

  createItem(obj) {
    return userModel.fetchByUserName(obj.user_name).then(data => {
      const userData = data;
      if (!userData) {
        throw 'User does not exist';
      }

      delete obj.user_name;
      obj.user_id = userData.id;

      return todoModel.create(obj);
    });
  },

  updateItem(id, obj) {
    return todoModel.update(id, obj);
  },

  deleteItem(id) {
    return todoModel.delete(id);
  }
};
