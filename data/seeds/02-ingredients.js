
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient: 'salt'},
        {id: 2, ingredient: 'milk'},
        {id: 3, ingredient: 'water'}
      ]);
    });
};
