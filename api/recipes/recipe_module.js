const db = require('../../data/db-config')

const getAll = async () => {
   const recipes = await db('recipes')
   return recipes
}

const getById = async (id) => {
   const recipe = await db('recipes as r')
      .leftJoin('recipe_steps as rs', 'rs.recipe_id', 'r.recipe_id' )
      .leftJoin('steps as s', 'rs.step_id', 's.step_id' )
      .leftJoin('ingredients as i', 's.ingredient_id', 'i.ingredient_id' )
      .select(
         'r.recipe_id',
         'r.recipe_name',
         'rs.step_id',
         's.step_id',
         's.step',
         's.step_number',
         's.amount',
         'i.ingredient_id',
         'i.ingredient'
      )
      .where('r.recipe_id', id)
      .orderBy('s.step_number')

      const recipes = {
         recipe_id: recipe[0].recipe_id,
         recipe_name: recipe[0].recipe_name,
         steps: recipe.reduce((acc, row)=> {
            if(!row.ingredient_id) {
               return acc.concat({
                  step_id: row.step_id,
                  step_number: row.step_number,
                  step: row.step,
                  amount: row.amount,
                  ingredients: []
               })
            } 
            if(row.ingredient_id || row.ingredient) {
               return acc.concat({
                  step_id: row.step_id,
                  step_number: row.step_number,
                  step: row.step,
                  amount: row.amount,
                  ingredients: 
                     {
                        ingredient_id: row.ingredient_id,
                        ingredient: row.ingredient
                     }
                  
            })
         // steps: recipe.map(data => {
         //    return {
         //       step_id: data.step_id,
         //       step_number: data.step_number,
         //       step: data.step,
         //       quantity: data.amount,
         //       ingredients: [
         //          {ingredient_id: data.ingredient_id, ingredient_name: data.ingredient_name}
         //       ]
         //    }
         // })
         }
      return acc
      }, [])
   }
         
      return recipes
}

module.exports = {
   getAll,
   getById,
}