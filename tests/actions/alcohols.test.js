import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { expect } from 'chai'
import { before, describe, it } from 'mocha'
import { AlcoholsList, drinksList } from '../mocks/drinks'
import { fetchAlcohols } from '../../actions/Alcohols'

describe('Actions - Alcohols', () => {
  let mockAxios

  before(() => {
    mockAxios = new MockAdapter(axios)
  })

  describe('fetchAlcohols', () => {
    it('returns an array of Alcohols from the API', async () => {
      mockAxios.onGet().reply(200, drinksList)

      const data = await fetchAlcohols()

      expect(data).to.deep.equal(drinksList)
    })

    it('returns an empty array when the API responds with a non-200 status', async () => {
      mockAxios.onGet().reply(500, 'Unable to retrieve Alcohols')

      const data = await fetchAlcohols()

      expect(data).to.deep.equal([])
    })
  })
})
