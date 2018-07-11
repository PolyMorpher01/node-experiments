exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('todos').insert([
        { id: 1, task: 'make breakfast' },
        { id: 2, task: 'shopping' },
        { id: 3, task: 'dance' }
      ]);
    });
};
