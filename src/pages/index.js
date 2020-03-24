import React from "react"
import styled from "styled-components"

const StyledPageWrapper = styled.div`
  height: 200vh;
`

const IndexPage = () => (
  <StyledPageWrapper>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </StyledPageWrapper>
)

export default IndexPage
