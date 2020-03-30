import React, { useState, useEffect } from "react"
import styled from "styled-components"

import Home from "../../../assets/images/home.svg"
import MobileArrow from "../../../assets/icons/mobile-arrow.svg"

const StyledHeaderWrapper = styled.header`
  display: grid;
  grid-template-rows: 1fr auto 65px;
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

const StyledHeaderSvg = styled(Home)`
  width: 75%;
  margin-bottom: 20px;
  justify-self: center;
  align-self: end;
`

const StyledMobileArrow = styled(MobileArrow)`
  width: 20px;
  justify-self: center;
  align-self: center;
`

const titles = [
  "Projektowanie stron internetowych",
  "Responsive Web Design",
  "Indywidualny projekt graficzny ",
]

const Header = () => {
  const [title, setTitle] = useState(titles[0])

  useEffect(() => {
    let i = 1
    const interval = setInterval(() => {
      if (i <= 2) {
        setTitle(titles[i++])
      } else {
        i = 0
        setTitle(titles[i++])
      }
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <StyledHeaderWrapper>
      <StyledHeaderSvg />
      <StyledHeading>{title}</StyledHeading>
      <StyledMobileArrow />
    </StyledHeaderWrapper>
  )
}

export default Header
