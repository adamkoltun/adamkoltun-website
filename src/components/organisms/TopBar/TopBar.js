import React from "react"
import styled from "styled-components"

import Logotype from "../../atoms/Logotype/Logotype"
import Hamburger from "../../atoms/Hamburger/Hamburger"

const StyledTopBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 30px 25px;
  display: flex;
  justify-content: space-between;
`
const TopBar = () => (
  <StyledTopBar>
    <Logotype />
    <Hamburger />
  </StyledTopBar>
)

export default TopBar
