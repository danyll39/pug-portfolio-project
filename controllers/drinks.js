const models = require('../models')



const getAllDrinks = async (request, response) => {
  try {
    const drinks = await models.Drinks.findAll()



    return response.send(drinks)
  } catch (error) {
    response.status(500).send('You must be drunk if you couldn\'t get the page')
  }
}
const saveNewDrink = async (request, response) => {
  try {
    const {
      name, alcohol, mixer, abv, garnish
    } = request.body

    if (!name || !alcohol || !mixer || !abv || !garnish) {
      return response.status(404).send('The following fields are required: name, alcohol, mixer, abv, garnish')
    }
    const newDrink = await models.Drinks.create({
      name, alcohol, mixer, abv, garnish
    })

    return response.status(201).send(newDrink)
  } catch (error) {
    return response.status(500).send('Unable to save drink, please try again')
  }
}

const deleteDrink = async (request, response) => {
  try {
    const { name } = request.params
    const matchingDrinks = await models.Drinks.findOne({ where: { name } })

    if (!matchingDrinks) {
      return response.status(404)
    }


    await models.Drinks.destroy({ where: { name: name } })

    return response.send('Successfully deleted the drink')
  }
  catch (error) {
    return response.status(500).send('Unknown error while deleting drink, please try again.')
  }
}




module.exports = { getAllDrinks, saveNewDrink, deleteDrink }
