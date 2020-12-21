/* eslint-disable max-len */
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const models = require('../../models')
const {
  afterEach, before, beforeEach, describe, it
} = require('mocha')
const { drinksList, singleDrink, singleDeleteDrink } = require('../mocks/drinks')
const { getAllDrinks, saveNewDrink, deleteDrink } = require('../../controllers/drinks')
const { getDrinksByAlcohol } = require('../../controllers/alcohol')

chai.use(sinonChai)
const { expect } = chai

describe('Controllers - drinks', () => {
  let sandbox
  let stubbedFindOne
  let stubbedSend
  let response
  let stubbedSendStatus
  let stubbedStatusSend
  let stubbedStatus
  let stubbedCreate
  let stubbedFindAll
  let stubbedDestroy

  before(() => {
    sandbox = sinon.createSandbox()
    stubbedFindOne = sandbox.stub(models.Drinks, 'findOne')
    stubbedCreate = sandbox.stub(models.Drinks, 'create')
    stubbedFindAll = sandbox.stub(models.Drinks, 'findAll')
    stubbedDestroy = sandbox.stub(models.Drinks, 'destroy')
    stubbedSend = sandbox.stub()
    stubbedSendStatus = sandbox.stub()
    stubbedStatusSend = sandbox.stub()
    stubbedStatus = sandbox.stub()

    response = {
      send: stubbedSend,
      sendStatus: stubbedSendStatus,
      status: stubbedStatus,
    }
  })

  beforeEach(() => {
    stubbedStatus.returns({ send: stubbedStatusSend })
  })
  afterEach(() => {
    sandbox.reset() })

  describe('getAllDrinks', () => {
    it('retrieves a list of drinks from the database and calls response.send() with the list', async () => {
      stubbedFindAll.returns(drinksList)

      await getAllDrinks({}, response)

      expect(stubbedFindAll).to.have.callCount(1)
      expect(stubbedSend).to.have.been.calledWith(drinksList)
    })
    it('responds with a 500 status and error message with the database call throws an error', async () => {
      stubbedFindAll.throws('ERROR!')
      const request = { body: drinksList }

      await getAllDrinks(request, response)

      expect(stubbedStatus).to.have.been.calledWith(500)
      expect(stubbedStatusSend).to.have.been.calledWith('You must be drunk if you couldn\'t get the page')
    })
  })



  describe('getDrinksByAlcohol', () => {
    it('retrieves a list of drinks from the database and calls response.send() with the list', async () => {
      stubbedFindAll.returns(drinksList)

      await getAllDrinks({}, response)

      expect(stubbedFindAll).to.have.callCount(1)
      expect(stubbedSend).to.have.been.calledWith(drinksList)
    })
    it('responds with a 500 status and error message with the database call throws an error', async () => {
      stubbedFindAll.throws('ERROR!')
      const request = { body: drinksList }

      await getDrinksByAlcohol(request, response)

      expect(stubbedStatus).to.have.been.calledWith(500)
      expect(stubbedStatusSend).to.have.been.calledWith('Unable to retrieve drink, please try again')
    })
  })
  describe('saveNewDrink', () => {
    it('accepts new drink details and saves them as a new drink, returning the saved record 201 status', async () => {
      stubbedCreate.returns(singleDrink)
      const request = { body: singleDrink }

      await saveNewDrink(request, response)

      expect(stubbedCreate).to.have.been.calledWith(singleDrink)
      expect(stubbedStatus).to.have.been.calledWith(201)
    })
    it('returns a 404 when drink can not be added due to missing data', async () => {
      const request = { body: 'not-found' }

      await saveNewDrink(request, response)

      expect(stubbedStatus).to.have.been.calledWith(404)
      expect(stubbedStatusSend).to.have.been.calledWith('The following fields are required: name, alcohol, mixer, abv, garnish')
    })
    it('responds with a 500 status and error message with the database call throws an error', async () => {
      stubbedCreate.throws('ERROR!')
      const request = { body: singleDrink }

      await saveNewDrink(request, response)

      expect(stubbedCreate).to.have.been.calledWith(singleDrink)
      expect(stubbedStatus).to.have.been.calledWith(500)
      expect(stubbedStatusSend).to.have.been.calledWith('Unable to save drink, please try again')
    })
  })


  describe('deleteDrink', () => {
    it('responds with success message when drink is deleted', async () => {
      stubbedFindOne.returns(singleDeleteDrink)
      stubbedDestroy.returns({})
      const request = { params: { name: 'Gin and Tea' } }

      await deleteDrink(request, response)

      expect(stubbedFindOne).to.have.been.calledWith({ where: { name: 'Gin and Tea' } })
      expect(stubbedDestroy).to.have.been.calledWith({ where: { name: 'Gin and Tea' } })
      expect(response.send).to.have.been.calledWith('Successfully deleted the drink')
    })

    it('responds with a 404 when no drink can be found with the name passed in', async () => {
      stubbedFindOne.returns(null)

      const request = { params: { name: 'throw-error' } }

      await deleteDrink(request, response)

      expect(stubbedFindOne).to.have.been.calledWith({ where: { name: 'throw-error' } })
      expect(stubbedDestroy).to.have.callCount(0)
      expect(response.status).to.have.been.calledWith(404)
    })

    it('returns a 500 error when the database calls fails', async () => {
      stubbedFindOne.returns(singleDeleteDrink)
      stubbedDestroy.throws('ERROR!')

      const request = { params: { name: 'throw-error' } }

      await deleteDrink(request, response)

      expect(stubbedDestroy).to.have.been.calledWith({ where: { name: 'throw-error' } })
      expect(response.status).to.have.been.calledWith(500)
      expect(stubbedStatusSend).to.have.been.calledWith('Unknown error while deleting drink, please try again.')
    })
  })
})



