const Sequelize = require('sequelize')
const dataModel = require('./data')

const connection = new Sequelize('drinks'// database
  , 'data'// name of user
  , 'Dr1nks!'// password
  , {
    host: 'localhost', dialect: 'mysql'
  })

const data = dataModel(connection, Sequelize)

module.exports = { data }
