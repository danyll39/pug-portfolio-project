module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('drinks', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: Sequelize.STRING, allowNull: false },
      alcohol: { type: Sequelize.STRING, allowNull: false },
      mixer: { type: Sequelize.STRING, allowNull: false },
      abv: { type: Sequelize.INTEGER, allowNull: false },
      garnish: { type: Sequelize.STRING, allowNull: true },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      },
      deletedAt: { type: Sequelize.DATE },
    })
  },
  down: async (queryInterface) => {
    return await queryInterface.dropTable('drinks')
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
}
