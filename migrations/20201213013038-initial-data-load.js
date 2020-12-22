/* eslint-disable max-len */
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('drinks', [
      {
        name: 'Cape Cod', directions: 'Into an old fashioned glass over ice cubes, pour vodka and cranberry juice. Squeeze lime wedge into drink, and then drop the wedge into the drink. Serve.', mixer: 'cranberry', garnish: 'lime', alcoholId: 5
      },
      {
        name: 'Gin and Tonic', directions: 'In a highball glass filled with ice cubes, pour the gin, then top with tonic', mixer: 'tonic', garnish: 'lime', alcoholId: 2
      },
      {
        name: 'Greyhound', directions: 'Pour the vodka and grapefruit juice into a collins glass filled with ice cubes.', mixer: 'grapefruit', garnish: 'lime', alcoholId: 5
      },
      {
        name: 'Summer Collins', directions: 'In a collins glass or even a highball glass, combine vodka and lemon juice. Add ice and stir together with a spoon. Top with soda water and garnish with a maraschino cherry and a lemon slice.', mixer: 'lemonade', garnish: 'lemon', alcoholId: 5
      },
      {
        name: 'Screw Driver', directions: 'Fill a highball glass with ice cubes, add the vodka, add the orange juice. Stir and garnish with your fruit. Squeeze lime wedge(s) over the drink, drop wedge(s) into drink, and lightly stir.', mixer: 'orange juice', garnish: 'orange slice', alcoholId: 5
      },
      {
        name: 'Vodka Tonic', directions: 'Fill a highball glass with ice. Pour vodka in glass. Top with tonic water .', mixer: 'tonic', garnish: 'lemon', alcoholId: 3
      },
      {
        name: 'Salty Dog', directions: 'Pour coarse salt onto small plate. Moisten rims of 2 highball glasses. Gently dip rims into salt to coat lightly. Fill glasses with ice cubes. Pour 1/4 cup vodka over ice in each glass. Divide grapefruit juice between glasses and serve.', mixer: 'grapefruit', garnish: 'grapefruit', alcoholId: 3
      },
      {
        name: 'Cubre Libre', directions: 'Add all the ingredients to a highball glass filled with ice.Garnish with a lime wedge.', mixer: 'coke', garnish: 'lime', alcoholId: 3
      },
      {
        name: 'Dark and Stormy', directions: 'Pour the rum over ice in highball and fill with ginger beer. Squeeze in the lime wedge.', mixer: 'ginger beer', garnish: 'lime', alcoholId: 3
      },
      {
        name: '50/50', directions: 'Place in a martini shaker. DO NOT shake or it will explode! Mix with a spoon until mostly lump-free. Add 1 cup ice (ideally crushed). Stir until mixture is cold. Strain into a martini glass.', mixer: 'dry vermouth', garnish: 'olive', alcoholId: 2
      },
      {
        name: 'Gin and Tea', directions: 'In an old-fashioned glass filled with ice, pour the gin and chilled tea. Add the lemon juice and sugar to taste.', mixer: 'Tea', garnish: 'lime', alcoholId: 2
      },
      {
        name: 'Roses Gimlet', directions: 'Shake and strain into a martini or old-fashioned glass.', mixer: 'lime juice', abv: 11, garnish: 'lime', alcoholId: 2
      },
      {
        name: 'Scotch and Soda', directions: 'Pour the Scotch into a highball or old-fashioned glass filled with ice. Top with the club soda.', mixer: 'soda water', garnish: 'lemon', alcoholId: 4
      },
      {
        name: 'Scotch and Cola', directions: 'Build over ice in a Collins glass or an Old-fashioned glass.', mixer: 'cola', garnish: 'lime', alcoholId: 4
      },
      {
        name: 'Presbyterian', directions: 'Pour a shot of whiskey into a highball glass filled with ice. Fill with ginger ale. Stir and garnish with a lemon twist.', mixer: 'ginger ale', garnish: 'lemon twist', alcoholId: 4
      },

      {
        name: 'Mimosa', directions: 'Fill 8 champagne flutes 1/2 full with chilled sparkling wine. Top with orange juice', mixer: 'orange juice', garnish: 'fruit', alcoholId: 1
      },

      {
        name: 'Cranberry Champagne Cocktail', directions: 'In a chilled Champagne flute add cranberry juice and a squeeze of lime. Top off the glass with Champagne. Garnish with 3 or 4 cranberries.', mixer: 'cranberry juice', garnish: 'lime', alcoholId: 1
      },




    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    ])

    return queryInterface.bulkInsert('alcohols', [

      { name: 'Champagne', abv: 12 },
      { name: 'Gin', abv: 37 },
      { name: 'Scotch', abv: 40 },
      { name: 'Whiskey', abv: 40 },
      { name: 'Vodka', abv: 40 }

    ])
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('drinks')

    return queryInterface.bulkDelete9('directions')
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
}
