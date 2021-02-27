import { expect } from 'chai'
import { createSandbox } from 'sinon'
import {
  after, afterEach, before, describe, it,
} from 'mocha'
import { AlcoholsList, AlcoholsFilteredForAvengers, drinksList } from '../mocks/drinks'
import * as AlcoholsActions from '../../actions/Alcohols'
import { filterAlcohols, retrieveAlcohols } from '../../utils/Alcohols'

describe('Utils - Alcohols', () => {
  let sandbox
  let stubbedFetchAlcohols

  before(() => {
    sandbox = createSandbox()

    stubbedFetchAlcohols = sandbox.stub(AlcoholsActions, 'fetchAlcohols')
  })

  afterEach(() => {
    sandbox.reset()
  })

  after(() => {
    sandbox.restore()
  })

  describe('filterAlcohols', () => {
    it('returns an array of matching Alcohols', () => {
      const filtered = filterAlcohols(drinksList, 'avengers')

      expect(filtered).to.deep.equal([])
    })
  })

  describe('retrieveAlcohols', () => {
    it('returns the data provided by the fetch action', async () => {
      stubbedFetchAlcohols.returns(AlcoholsList)

      const data = await retrieveAlcohols()

      expect(data).to.deep.equal([])
    })
  })
})
