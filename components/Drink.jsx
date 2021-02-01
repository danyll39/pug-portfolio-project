import React from 'react'
import styled from 'styled-components'

const Drink = styled.div`
  font-size: 16px;
  margin: 10px 0;
  text-align: center;
  
`
export default ({ id, name, directions}) => (
  <Drink key={id}><div className="card">
    <div className="card-body">
      <h4>Directions</h4>
    <p>{`${name}${directions}`}</p>
    </div>
    </div>
  </Drink>
)
