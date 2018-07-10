const knex = require('../db');

const TABLE_NAME = 'todos';

class Todos {
  fetchAll(userID) {
    return knex(TABLE_NAME)
      .select()
      .where('user_id', userID);
  }

  fetchById(id, userID) {
    return knex(TABLE_NAME)
      .select()
      .where('id', id)
      .where('user_id', userID)
      .first();
  }

  create(obj) {
    return knex(TABLE_NAME).insert(obj);
  }

  update(id, obj, userID) {
    return knex(TABLE_NAME)
      .update(obj)
      .where('id', id)
      .where('user_id', userID);
  }

  delete(id, userID) {
    return knex(TABLE_NAME)
      .del()
      .where('id', id)
      .where('user_id', userID);
  }
}

const todos = new Todos();
module.exports = todos;
