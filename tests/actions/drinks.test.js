import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { expect } from 'chai'
import { before, describe, it } from 'mocha'
import singleAlcohol from '../mocks/drinks'
import { fetchDrinksForAlcohol } from '../../actions/drinks'

describe('Actions - Drinks', () => {
  let mockAxios

  before(() => {
    mockAxios = new MockAdapter(axios)
  })

  describe('fetchDrinksForAlcohol', () => {
    it('returns the Alcohol details and its Drinks from the API', async () => {
      mockAxios.onGet().reply(200, singleAlcohol)

      const data = await fetchDrinksForAlcohol(1)

      expect(data).to.deep.equal(singleAlcohol)
    })

    it('returns an empty object when the API returns a non-200 status code', async () => {
      mockAxios.onGet().reply(404, 'Not Found')

      const data = await fetchDrinksForAlcohol('not-found')

      expect(data).to.deep.equal({})
    })
  })
})
