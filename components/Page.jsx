import React from 'react'
import styled from 'styled-components'

const Page = styled.div`
  margin: 60px auto 0;
  text-align: center;
  width: 60%;

`
export default ({ children }) => (
  <Page>
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="/simpleApi">Home</a></li>
        <li className="breadcrumb-item active" aria-current="page"><a href="/" >Search</a></li>
      </ol>
    </nav>
    <div className="jumbotron jumbotron-fluid"></div>
    {children}</Page>
)
