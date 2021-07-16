
exports.up = function(knex) {
  return knex.schema
   .createTable('recipes', table => {
      table.increments('recipe_id')
      table.string('recipe_name').unique().notNullable()
   })
   .createTable('ingredients', tbl => {
      tbl.increments('ingredient_id')
      tbl.string('ingredient').unique().notNullable()
   })
   .createTable('steps', tbl => {
      tbl.increments('step_id')
      tbl.string('step').unique().notNullable()
      tbl.integer('step_number').notNullable()
      tbl.integer('amount')
      tbl.integer('ingredient_id')
         .unsigned()
         .references('ingredient_id')
         .inTable('ingredients')
         .onDelete('RESTRICT').onUpdate('RESTRICT')
         .defaultTo('none')
   })
   .createTable('recipe_steps', tbl => {
      tbl.increments('recipe_steps_id')
      tbl.integer('step_id')
         .unsigned()
         .references('step_id')
         .inTable('steps')
         .onDelete('RESTRICT').onUpdate('RESTRICT')
      tbl.integer('recipe_id')
         .unsigned()
         .references('recipe_id')
         .inTable('recipes')
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
