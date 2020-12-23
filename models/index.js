const Sequelize = require('sequelize')
const allConfigs = require('../config/sequelize')
const DrinksModel = require('./drinks')
const AlcoholsModel = require('./alcohols')

const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect
})

const Drinks = DrinksModel(connection, Sequelize)
const Alcohols = AlcoholsModel(connection, Sequelize, Drinks)

Drinks.belongsTo(Alcohols)
Alcohols.hasMany(Drinks)

module.exports = { Drinks, Alcohols, Op: Sequelize.Op, }
