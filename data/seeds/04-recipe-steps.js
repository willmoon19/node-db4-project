
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_steps').insert([
        {step_id: '1', recipe_id: '1'},
        {step_id: '2', recipe_id: '1'},
        {step_id: '3', recipe_id: '1'}
      ]);
    });
};
