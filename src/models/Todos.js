const knex = require('../db');

const TABLE_NAME = 'todos';

function fetchAll(userId) {
  return knex(TABLE_NAME)
    .select()
    .where('user_id', userId);
}

function fetchById(id, userId) {
  return knex(TABLE_NAME)
    .select()
    .where('id', id)
    .where('user_id', userId)
    .first();
}

function create(obj) {
  return knex(TABLE_NAME).insert(obj);
}

function update(id, obj, userId) {
  return knex(TABLE_NAME)
    .update(obj)
    .where('id', id)
    .where('user_id', userId);
}

function deleteItem(id, userId) {
  return knex(TABLE_NAME)
    .del()
    .where('id', id)
    .where('user_id', userId);
}

module.exports = {
  fetchAll,
  fetchById,
  create,
  update,
  deleteItem
};
