const Sequelize = require('sequelize')
const allConfigs = require('../config/sequelize')
const DrinksModel = require('./drinks')

const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect
})
const Drinks = DrinksModel(connection, Sequelize)

module.exports = { Drinks }
