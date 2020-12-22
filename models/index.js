const Sequelize = require('sequelize')
const allConfigs = require('../config/sequelize')
const DrinksModel = require('./drinks')
const DirectionsModel = require('./directions')
const GlasswareModel = require('./glassware')

const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect
})

const Drinks = DrinksModel(connection, Sequelize)
const Directions = DirectionsModel(connection, Sequelize, Drinks)
// const Glassware = GlasswareModel(connection, Sequelize, Directions)

Drinks.belongsTo(Directions)
Directions.hasMany(Drinks)


module.exports = { Drinks, Directions, Op: Sequelize.Op, }
