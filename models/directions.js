const Directions = (connection, Sequelize) => {
  return connection.define('directions', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    directions: { type: Sequelize.STRING, allowNull: false },
  }, {
    defaultScope: {
      attributes: { exclude: ['deletedAt'] }
    }
  }, { paranoid: true })
}


module.exports = Directions
