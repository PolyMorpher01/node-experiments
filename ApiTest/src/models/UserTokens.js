const knex = require('../db');

const TABLE_NAME = 'user_tokens';

class UserTokens {
  fetchByToken(token) {
    return knex(TABLE_NAME)
      .select()
      .where('token', token)
      .first();
  }

  create(obj) {
    return knex(TABLE_NAME).insert(obj);
  }

  deleteByToken(token) {
    return knex(TABLE_NAME)
      .del()
      .where('token', token);
  }
}

const userTokens = new UserTokens();
module.exports = userTokens;
