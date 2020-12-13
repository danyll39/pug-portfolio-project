const models = require('../models')

// const getAllDrinks = async (request, response) => {
//   models.Drinks.findAll({

//   }).then(function (foundDrinks) {
//       console.log(foundDrinks.length)
//     return response.json(foundDrinks)

//   })
// }
const getAllDrinks = async (request, response) => {
  try {
    const drinks = await models.Drinks.findAll({

    })

    return response.send(drinks)
  } catch (error) {
    response.status(500).send('You must be drunk if you couldn\'t get the page')
  }
}

const getDrinksByAlcohol = async (request, response) => {
  console.log(request.params)
  try {
    const { identifier } = request.params

    const foundDrink = await models.Drinks.findAll({


      where: {
        [models.Op.or]: [

          { alcohol: { [models.Op.like]: `%${identifier}%` } },
        ],

      }
    })

    console.log(foundDrink)


    return foundDrink


      ? response.send(foundDrink)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve author, please try again')
  }
}
const saveNewDrink = async (request, response) => {
  try {
    const {
      name, alcohol, mixer, abv, garnish
    } = request.body

    if (!name || !alcohol || !mixer || !mixer || !abv || !garnish) {
      return response.status(404).send('The following fields are required: name, alcohol, mixer')
    }
    const newVillain = await models.villains.create({
      name, alcohol, mixer, abv, garnish
    })

    return response.status(201).send(newVillain)
  } catch (error) {
    return response.status(500).send('Unable to save villain, please try again')
  }
}
const deleteDrink = async (request, response) => {
  try {
    const id = parseInt(request.params.id)
    const drink = await models.Drinks.findOne({ where: { id } })

    if (!drink) return response.status(404).send(`Unknown drink with ID: ${id}`)

    if (drink.protected) return response.status(409).send('Cannot delete protected drinks')

    await models.Animals.destroy({ where: { id } })

    return response.send(`Successfully deleted the drink with ID: ${id}`)
  } catch (error) {
    return response.status(500).send('Unknown error while deleting drink')
  }
}




module.exports = { getAllDrinks, getDrinksByAlcohol, saveNewDrink, deleteDrink }
