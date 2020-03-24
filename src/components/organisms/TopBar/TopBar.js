import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

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

const StyledLogotype = styled(Link)`
  font-family: "Fira Sans";
  font-weight: 600;
`
const TopBar = () => (
  <StyledTopBar>
    <StyledLogotype to="/">adamkoltun.dev</StyledLogotype>
    <Hamburger />
  </StyledTopBar>
)

export default TopBar
