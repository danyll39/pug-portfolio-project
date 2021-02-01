import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
border-radius: 8px;
font-size: 16px;
padding: 5px;
margin: 20px 0;
outline: none;  
`

export default ({ term, setter }) => (
  <Input className="searchBox" type="text" name="search" placeholder="Search Drink Here" value={term} onChange={event => setter(event.target.value)} />
)
