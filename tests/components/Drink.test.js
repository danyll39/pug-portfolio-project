import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { describe, it } from 'mocha'
import Drink from '../../components/Drink'

describe('Components - Drink', () => {
  it('displays the drink with their name and directions', () => {
    const wrapper = shallow(<Drink id={1} name="Sex on the Beach" directions="Drink directions" />)

    expect(wrapper.text()).to.equal('Directions for Sex on the BeachDrink directions')
  })
})
