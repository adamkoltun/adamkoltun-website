import React from "react"
import styled from "styled-components"

import Header from "../components/organisms/Header/Header"

const StyledPageWrapper = styled.div`
  height: 100vh;
`

const IndexPage = () => (
  <StyledPageWrapper>
    <Header />
  </StyledPageWrapper>
)

export default IndexPage
