
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {step: 'add salt', step_number: '1', amount: '1', ingredient_id: '1'},
        {step: 'heat pan', step_number: '2'},
        {step: 'fry', step_number: '3'}
      ]);
    });
};
