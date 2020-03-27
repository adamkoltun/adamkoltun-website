import React, { useState } from "react"
import styled, { css } from "styled-components"

import Logotype from "../../atoms/Logotype/Logotype"
import Hamburger from "../../atoms/Hamburger/Hamburger"
import MobileNav from "../../molecules/MobileNav/MobileNav"

const StyledTopBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 30px 25px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  z-index: 1;
`

const StyledDescription = styled.p`
  margin: 0;
  margin-top: 15px;
  color: #7e7e7e;
  line-height: 1.3em;
  transition: opacity 0.2s linear;

  ::before {
    float: right;
    content: "";
    width: 15%;
    height: 1em;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      opacity: 0;
    `}
`

const TopBar = () => {
  const [navActive, setNavActive] = useState(false)

  return (
    <>
      <StyledTopBar>
        <Logotype closeMenu={() => setNavActive(false)} />
        <Hamburger
          handleClick={() => setNavActive(!navActive)}
          isActive={navActive}
        />
        <StyledDescription isActive={navActive}>
          Freelance Web Developer
        </StyledDescription>
      </StyledTopBar>
      <MobileNav
        handleClick={() => setNavActive(!navActive)}
        isActive={navActive}
      />
    </>
  )
}

export default TopBar
