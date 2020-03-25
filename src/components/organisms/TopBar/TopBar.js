import React, { useState } from "react"
import styled from "styled-components"

import Logotype from "../../atoms/Logotype/Logotype"
import Hamburger from "../../atoms/Hamburger/Hamburger"
import MobileNav from "../../molecules/MobileNav/MobileNav"

const StyledTopBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 30px 25px;
  display: flex;
  justify-content: space-between;

  z-index: 1;
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
      </StyledTopBar>
      <MobileNav
        handleClick={() => setNavActive(!navActive)}
        isActive={navActive}
      />
    </>
  )
}

export default TopBar
