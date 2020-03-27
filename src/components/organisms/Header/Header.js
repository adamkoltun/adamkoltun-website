import React from "react"
import styled from "styled-components"

import WebDesign from "../../../assets/images/web-design.svg"
import MobileArrow from "../../../assets/icons/mobile-arrow.svg"

const StyledHeaderWrapper = styled.header`
  display: grid;
  grid-template-rows: 1fr auto 60px;
  height: 100%;
  padding: 0 25px;
`

const StyledHeading = styled.h1`
  margin: 0;
  grid-row: 2/3;
  align-self: end;
  font-family: Fira Sans;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.1em;

  ::before {
    float: right;
    content: "";
    width: 30%;
    height: 1em;
  }
`

const StyledWebDesignSvg = styled(WebDesign)`
  width: 70%;
  justify-self: right;
  align-self: end;
`

const StyledMobileArrow = styled(MobileArrow)`
  width: 20px;
  justify-self: center;
  align-self: center;
`

const Header = () => (
  <StyledHeaderWrapper>
    <StyledWebDesignSvg />
    <StyledHeading>Projektowanie stron internetowych</StyledHeading>
    <StyledMobileArrow />
  </StyledHeaderWrapper>
)

export default Header
