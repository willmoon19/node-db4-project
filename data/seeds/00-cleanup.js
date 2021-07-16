const cleaner = require('knex-cleaner');

exports.seed = function(knex) {
  return cleaner.clean(knex, {
    mode: 'truncate', // resets ids
    ignoreTables: ['recipes', 'ingredients', 'steps', 'recipe_steps'], // don't empty migration tables
  });
};