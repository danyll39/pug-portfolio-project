import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { describe, it } from 'mocha'
import AlcoholDetails from '../../components/AlcoholDetails'

describe('Components - AlcoholDetails', () => {
  it('displays the Alcohol and their slug', () => {
    const wrapper = shallow(<AlcoholDetails name="Stack Education" slug="stack-education" />)

    expect(wrapper.text()).to.equal('Stack Education (undefined%  abv)')
  })
})
