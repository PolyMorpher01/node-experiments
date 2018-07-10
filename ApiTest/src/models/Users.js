const knex = require('../db');

const TABLE_NAME = 'users';

class Users {
  fetchAll() {
    return knex(TABLE_NAME).select();
  }

  fetchById(id) {
    return knex(TABLE_NAME)
      .select()
      .where('id', id)
      .first();
  }

  fetchByUserName(user_name) {
    return knex(TABLE_NAME)
      .select()
      .where('user_name', user_name)
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

const users = new Users();
module.exports = users;
