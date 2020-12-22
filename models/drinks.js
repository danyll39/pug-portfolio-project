

const Drinks = (connection, Sequelize, Alcohols) => {
  return connection.define('drinks', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING },
    directions: { type: Sequelize.STRING, allowNull: false },
    mixer: { type: Sequelize.STRING },
    garnish: { type: Sequelize.STRING },
    alcoholId: { type: Sequelize.INTEGER, allowNull: false, references: { model: Alcohols, key: 'id' } },
  }, {
    defaultScope: {
      attributes: { exclude: ['deletedAt'] }
    }
  }, { paranoid: true })
}


module.exports = Drinks
