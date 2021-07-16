const express = require('express')
const recipeRouter = require('./recipes')

const server = express()

server.use(express.json())
server.use('/api/reipes', recipeRouter)

module.exports = server