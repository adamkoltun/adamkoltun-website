import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledNavigationWrapper = styled.nav``

const StyledLogotype = styled.span`
  font-family: "Fira Sans";
  font-weight: 600;
`

const Navigation = () => (
  <StyledNavigationWrapper>
    <StyledLogotype>adamkoltun.dev</StyledLogotype>
    <ul>
      <li>
        <Link to="/offer">Oferta</Link>
      </li>
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li>
        <Link to="/about">O mnie</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/contact">Kontakt</Link>
      </li>
    </ul>
  </StyledNavigationWrapper>
)

export default Navigation
