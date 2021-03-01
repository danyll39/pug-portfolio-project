import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Alcohol = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`
const Link = styled(NavLink)`
  text-decoration: none;
  
`
export default ({ id, name, abv }) => (
  <Alcohol key={id}>
    <div className="container-fluid">
      <Link to={`/drinks/${id}`}>{`${name}  (${abv}%  abv)`}</Link>
    </div>
  </Alcohol>
)
