import Sequelize from 'sequelize'
import allConfigs from '../config/sequelize'
import DrinksModel from './drinks'
import AlcoholsModel from './alcohols'

const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect
})

const Drinks = DrinksModel(connection, Sequelize)
const Alcohols = AlcoholsModel(connection, Sequelize, Drinks)

Drinks.belongsTo(Alcohols)
Alcohols.hasMany(Drinks)

export default { Drinks, Alcohols, Op: Sequelize.Op, }
