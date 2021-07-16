const db = require('../../data/db-config')

const getAll = async () => {
   const recipes = await db('recipes')
   return recipes
}

module.exports = {
   getAll,
}