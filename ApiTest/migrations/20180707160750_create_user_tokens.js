exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_tokens', table => {
    table.increments();
    table
      .integer('user_id')
      .notNull()
      .index()
      .references('id')
      .inTable('users');
    table.text('token').notNull();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_tokens');
};
