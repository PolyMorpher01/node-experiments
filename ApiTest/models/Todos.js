const knex = require('../db');

const TABLE_NAME = 'todos';

class Todos {
  fetchAll() {
    return knex(TABLE_NAME).select();
  }

  fetchById(id) {
    return knex(TABLE_NAME)
      .select()
      .where('id', id)
      .first();
  }

  create(obj) {
    return knex(TABLE_NAME).insert(obj);
  }

  update(id, obj) {
    return knex(TABLE_NAME)
      .update(obj)
      .where('id', id);
  }

  delete(id) {
    return knex(TABLE_NAME)
      .del()
      .where('id', id);
  }
}

const todos = new Todos();
module.exports = todos;
