module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('drinks', [
      {
        name: 'Cape Cod', alcohol: 'Vodka', mixer: 'cranberry', abv: 14, garnish: 'lime'
      },
      {
        name: 'Gin and Tonic', alcohol: 'Gin', mixer: 'tonic', abv: 14, garnish: 'lime'
      }
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    ])
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete('drinks')
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
}
