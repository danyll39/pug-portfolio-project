/* eslint-disable max-len */
import { expect } from 'chai'
import { createSandbox } from 'sinon'
import {
  after, afterEach, before, describe, it,
} from 'mocha'
import { singleAlcohol, singleDrink } from '../mocks/drinks'
import * as DrinksActions from '../../actions/drinks'
import { getAlcoholIdFromUrl, retrieveAlcohols} from '../../utils/Drinks'

describe('Utils - Drinks', () => {
  let sandbox
  let stubbedFetchDrinksForAlcohol

  before(() => {
    sandbox = createSandbox()

    stubbedFetchDrinksForAlcohol = sandbox.stub(DrinksActions, 'fetchDrinksForAlcohol')
  })

  afterEach(() => {
    sandbox.reset()
  })

  after(() => {
    sandbox.restore()
  })

  describe('getAlcoholIdFromUrl', () => {
    it('returns the final portion of the URL from the location object provided', () => {
      const id = getAlcoholIdFromUrl({ pathname: '/Drinks/capecod' })

      expect(id).to.equal('capecod')
    })

    it('returns empty string when there is no pathname', () => {
      const id = getAlcoholIdFromUrl({})

      expect(id).to.equal(0)
    })
  })

  describe('retrieveAlcohols', () => {
    it('returns the manufacturer id, their details, and product list from the API call', async () => {
      stubbedFetchDrinksForAlcohol.returns(singleAlcohol)

      const data = await retrieveAlcohols({ pathname: '/drinks/capecod' })

      expect(data).to.deep.equal({
        id: 0, details: {}, drinks: []
      
      })
    })

    it('returns an empty details object and empty Drinks list when the path is not in the format "/Drinks/slug"', async () => {
      const data = await retrieveAlcohols({})

      expect(data).to.deep.equal({ id: 0, details: {}, drinks: [] })
    })

    it('returns an empty details object and Drinks list when the action returns bad data', async () => {
      stubbedFetchDrinksForAlcohol.returns({})

      const data = await retrieveAlcohols({ pathname: '/drinks/capecod' })

      expect(data).to.deep.equal({ id: 0, details: {}, drinks: [] })
    })
  })
})
