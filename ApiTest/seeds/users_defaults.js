const cryptUtils = require('../utils/crypt');

const password = cryptUtils.encrypt('root');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, email: 'root@root.com', user_name: 'root', password: password }
      ]);
    });
};
