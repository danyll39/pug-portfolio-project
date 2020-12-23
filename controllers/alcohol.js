const models = require('../models')

const getAllDrinksByAlcohol = async (request, response) => {
  try {
    const drinks = await models.Alcohols.findAll({
      include: [
        {
          model: models.Drinks
        }
      ],
    })

    return response.send(drinks)
  } catch (error) {
    response.status(500).send('You must be drunk if you couldn\'t get the page')
  }
}

const getDrinksByAlcoholName = async (request, response) => {
  try {
    const { identifier } = request.params

    const foundDrinks = await models.Alcohols.findAll({
      include: [{ model: models.Drinks }],
      where: {
        [models.Op.or]: [

          { name: { [models.Op.like]: `%${identifier}%` } },
        ],
      }
    })

    return foundDrinks
      ? response.send(foundDrinks)
      : response.sendStatus(404)
  } catch (error) {
    response.status(500).send('You must be drunk if you couldn\'t get the page')
  }
}

const saveNewAlcohol = async (request, response) => {
  try {
    const {
      name, abv
    } = request.body

    if (!name || !abv) {
      return response.status(404).send('The following fields are required: name, abv')
    }
    const newAlcohol = await models.Alcohols.create({
      name, abv
    })

    return response.status(201).send(newAlcohol)
  } catch (error) {
    return response.status(500).send('Unable to save alcohol, please try again')
  }
}

const deleteAlcohol = async (request, response) => {
  try {
    const { name } = request.params
    const matchingAlcohol = await models.Alcohols.findOne({ where: { name } })

    if (!matchingAlcohol) {
      return response.status(404)
    }
    await models.Alcohols.destroy({ where: { name: name } })

    return response.send('Successfully deleted the alcohol')
  }
  catch (error) {
    return response.status(500).send('Unknown error while deleting drink, please try again.')
  }
}

module.exports = { getAllDrinksByAlcohol, getDrinksByAlcoholName, saveNewAlcohol, deleteAlcohol }
