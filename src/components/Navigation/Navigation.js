import React from "react"
import styled from "styled-components"

const StyledNavigationWrapper = styled.nav`
  font-family: "Montserrat";
`

const Navigation = () => (
  <StyledNavigationWrapper>
    <span>adamkoltun.dev</span>
    <ul>
      <li>Oferta</li>
      <li>Portfolio</li>
      <li>O mnie</li>
      <li>Blog</li>
      <li>Kontakt</li>
    </ul>
  </StyledNavigationWrapper>
)

export default Navigation
