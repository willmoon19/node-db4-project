const express = require('express')
const recipeRouter = require('./recipes/recipe_router')

const server = express()

server.use(express.json())
server.use('/api/recipes', recipeRouter)

module.exports = server