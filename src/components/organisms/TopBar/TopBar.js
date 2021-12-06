import React, { useState, useEffect } from "react"
import styled, { css } from "styled-components"

import Logotype from "../../atoms/Logotype/Logotype"
import Hamburger from "../../atoms/Hamburger/Hamburger"
import MobileNav from "../../molecules/MobileNav/MobileNav"

const StyledTopBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 30px 25px 0 25px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  z-index: 2;
`

const StyledDescriptionWrapper = styled.div`
  p :first-child {
    margin-top: 15px;
  }
`

const StyledDescription = styled.p`
  margin: 0;
  font-size: 16px;
  color: #405157;
  line-height: 1.3em;
  transition: opacity 0.2s linear;

  ${({ isActive }) =>
    isActive &&
    css`
      opacity: 0;
    `}

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 0;
    `}
`

const TopBar = () => {
  const [navActive, setNavActive] = useState(false)
  const [isVisible, setVisibility] = useState(true)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY === 0) {
        setVisibility(true)
      } else if (window.scrollY > 0) {
        setVisibility(false)
      }
    })
  })

  return (
    <>
      <StyledTopBar>
        <Logotype closeMenu={() => setNavActive(false)} />
        <Hamburger
          handleClick={() => setNavActive(!navActive)}
          isActive={navActive}
        />
        <StyledDescriptionWrapper>
          <StyledDescription isActive={navActive} isVisible={!isVisible}>
            Freelance
          </StyledDescription>
          <StyledDescription isActive={navActive} isVisible={!isVisible}>
            Web Developer
          </StyledDescription>
        </StyledDescriptionWrapper>
      </StyledTopBar>
      <MobileNav
        handleClick={() => setNavActive(!navActive)}
        isActive={navActive}
      />
    </>
  )
}

export default TopBar
