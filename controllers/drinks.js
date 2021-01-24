import models from '../models'

export const getAllDrinks = async (request, response) => {
  try {
    const drinks = await models.Drinks.findAll({
      include: [
        {
          model: models.Alcohols
        }
      ],
    })

    return response.send(drinks)
  } catch (error) {
    response.status(500).send('You must be drunk if you couldn\'t get the page')
  }
}
export const getDrinkByName = async (request, response) => {
  try {
    const { id } = request.params
    const foundDrinks = await models.Drinks.findOne({
      where: {
        [models.Op.or]: [
          { name: { [models.Op.like]: `%${id}%` } },
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

export const saveNewDrink = async (request, response) => {
  try {
    const {
      name, directions, mixer, garnish, alcoholId
    } = request.body

    if (!name || !directions || !mixer || !garnish || !alcoholId) {
      return response.status(404).send('The following fields are required: name, directions, mixer, garnish, alcoholId')
    }
    const newDrink = await models.Drinks.create({
      name, directions, mixer, garnish, alcoholId
    })

    return response.status(201).send(newDrink)
  } catch (error) {
    return response.status(500).send('Unable to save drink, please try again')
  }
}

export const deleteDrink = async (request, response) => {
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
