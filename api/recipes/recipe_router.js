const router = require('express').Router()
const Recipes = require('./recipe_module')


router.get('/', (req, res, next) => {
   Recipes.getAll()
      .then(data => {
         console.log('got here')
         res.json(data)
      })
      .catch(next)
   
})

router.use((err, req, res, next) => {
   res.json({message: err.message})
})

module.exports = router