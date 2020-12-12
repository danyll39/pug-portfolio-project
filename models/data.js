const data = (connection, Sequelize) => {
  return connection.define('data', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING },
    alcohol: { type: Sequelize.STRING },
    mixer: { type: Sequelize.STRING },
    abv: { type: Sequelize.STRING },
    garnish: { type: Sequelize.STRING },
  }, {
    defaultScope: {
      attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] }
    }
  }, { paranoid: true })
}


module.exports = data
