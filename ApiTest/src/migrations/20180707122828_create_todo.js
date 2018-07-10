exports.up = function(knex, Promise) {
  return knex.schema.createTable('todos', table => {
    table.increments();
    table.string('task').notNull();
    table
      .bool('is_completed')
      .notNull()
      .defaultTo(false);
    table
      .integer('user_id')
      .notNull()
      .index()
      .references('id')
      .inTable('users');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('todos');
};
