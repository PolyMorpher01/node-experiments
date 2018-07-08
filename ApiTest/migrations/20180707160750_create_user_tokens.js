
exports.up = function(knex, Promise) {
    return knex.schema.createTable('user_tokens', table => {
        table.increments();
        table.integer('userId').notNull().index().references('id').inTable('users');//todo small case
        table.text('token').notNull();
    }); 
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('user_tokens');
};