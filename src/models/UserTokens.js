const knex = require('../db');

const TABLE_NAME = 'user_tokens';

function fetchByToken(token) {
  return knex(TABLE_NAME)
    .select()
    .where('token', token)
    .first();
}

function create(obj) {
  return knex(TABLE_NAME).insert(obj);
}

function deleteByToken(token) {
  return knex(TABLE_NAME)
    .del()
    .where('token', token);
}

module.exports = {
  fetchByToken,
  create,
  deleteByToken
};
