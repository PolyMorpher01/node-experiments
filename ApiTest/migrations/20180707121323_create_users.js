exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments();
    table
      .timestamp('created_at')
      .notNull()
      .defaultTo(knex.raw('now()'));
    table
      .timestamp('updated_at')
      .notNull()
      .defaultTo(knex.raw('now()'));
    table
      .string('email')
      .unique()
      .notNull();
    table
      .string('user_name')
      .unique()
      .notNull();
    table.string('password').notNull();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
