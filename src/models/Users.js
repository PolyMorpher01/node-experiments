const knex = require('../db');

const TABLE_NAME = 'users';

function fetchAll() {
  return knex(TABLE_NAME).select();
}

function fetchById(id) {
  return knex(TABLE_NAME)
    .select()
    .where('id', id)
    .first();
}

function fetchByUserName(userName) {
  return knex(TABLE_NAME)
    .select()
    .where('user_name', userName)
    .first();
}

function create(obj) {
  return knex(TABLE_NAME).insert(obj);
}

function update(id, obj) {
  return knex(TABLE_NAME)
    .update(obj)
    .where('id', id);
}

function deleteItem(id) {
  return knex(TABLE_NAME)
    .del()
    .where('id', id);
}

module.exports = {
  fetchAll,
  fetchById,
  fetchByUserName,
  create,
  update,
  deleteItem
};
