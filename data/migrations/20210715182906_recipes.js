
exports.up = function(knex) {
  return knex.schema
   .createTable('recipes', table => {
      table.increment('recipe_id')
      table.string('recipe_name').unique().notNullable()
   })
   .createTable('ingredients', tbl => {
      tbl.increment('ingredient_id')
      tbl.string('ingredient').unique().notNullable()
   })
   .createTable('steps', tbl => {
      tbl.increment('step_id')
      tbl.string('step').unique().notNullable()
      tbl.interger('ingredient_id')
         .unsigned()
         .reference('ingredient_id')
         .inTable('ingrediends')
         .onDelete('RESTRICT').onUpdate('RESTRICT')
         .defaultTo('none')
   })
   .createTable('recipe_steps', tbl => {
      tbl.increment('recipe_steps_id')
      tbl.interger('step_id')
         .unsigned()
         .unique()
         .reference('step_id')
         .inTable('steps')
         .onDelete('RESTRICT').onUpdate('RESTRICT')
      tbl.interger('recipe_id')
         .unsigned()
         .unique()
         .reference('recipe_id')
         .inTable('recipe')
         .onDelete('RESTRICT').onUpdate('RESTRICT')
   })
};

exports.down = function(knex) {
   return knex.schema
      .dropTableIfExists('recipe_steps')
      .dropTableIfExists('steps')
      .dropTableIfExists('ingredients')
      .dropTableIfExists('recipes')
};
