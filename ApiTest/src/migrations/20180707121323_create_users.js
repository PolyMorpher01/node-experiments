exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments();
    table
      .string('email')
      .unique()
      .notNull();
    table
      .string('user_name')
      .unique()
      .notNull();
    table.string('password').notNull();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
