
exports.up = function(knex, Promise) {
    return knex.schema.createTable('todos', table => {
        table.increments();
        table
          .timestamp('created_at')
          .notNull()
          .defaultTo(knex.raw('now()'));
        table
            .timestamp('updated_at')
            .notNull()
            .defaultTo(knex.raw('now()'));
        table.string('task').notNull();
        table.bool('is_completed').notNull()
            .defaultTo(false);
    });  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('todos');
};
