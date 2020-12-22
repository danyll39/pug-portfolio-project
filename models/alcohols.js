const Alcohols = (connection, Sequelize) => {
  return connection.define('alcohols', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING },
    abv: { type: Sequelize.INTEGER },
  }, {
    defaultScope: {
      attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] }
    }
  }, { paranoid: true })
}


module.exports = Alcohols
