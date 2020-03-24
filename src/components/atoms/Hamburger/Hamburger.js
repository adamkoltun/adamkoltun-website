import React from "react"
import styled from "styled-components"

const StyledHamburger = styled.button`
  border: none;
  background-color: transparent;
`

const StyledHamburgerBox = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 10px;
  width: 30px;
`

const StyledHamburgerInner = styled.span`
  width: 30px;
  height: 2px;
  background-color: #292929;
`

const Hamburger = () => (
  <StyledHamburger>
    <StyledHamburgerBox>
      <StyledHamburgerInner></StyledHamburgerInner>
      <StyledHamburgerInner></StyledHamburgerInner>
    </StyledHamburgerBox>
  </StyledHamburger>
)

export default Hamburger
