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

  delete(id) {
    return knex(TABLE_NAME)
      .del()
      .where('id', id);
  }
}

const userTokens = new UserTokens();
module.exports = userTokens;
