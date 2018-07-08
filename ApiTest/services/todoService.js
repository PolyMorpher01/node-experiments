const model = require('../models/Todos');

module.exports = {
  getAllList() {
    return model.fetchAll();
  },

  getById(id) {
    return model.fetchById(id).then(data => {
      if (!data) {
        throw 'Item does not exist';
      }
      return data;
    });
  },

  createItem(obj) {
    return model.create(obj);
  },

  updateItem(id, obj) {
    return model.update(id, obj);
  },

  deleteItem(id) {
    return model.delete(id);
  }
};
