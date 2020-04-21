import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import gsap from "gsap"

import Home from "../../../assets/images/home.svg"
import MobileArrow from "../../../assets/icons/mobile-arrow.svg"

const StyledHeaderWrapper = styled.header`
  display: grid;
  grid-template-rows: 1fr auto 65px;
  height: 100vh;
  padding: 0 25px;
`

const StyledHeaderSvg = styled(Home)`
  width: 75%;
  margin-bottom: 20px;
  justify-self: center;
  align-self: end;
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

const StyledMobileArrowWrapper = styled.div`
  justify-self: center;
  align-self: center;
`

const StyledMobileArrow = styled(MobileArrow)`
  width: 20px;
  animation: scrollDown 1.5s infinite linear both;

  @keyframes scrollDown {
    0% {
      transform: translateY(-25%);
      opacity: 0;
    }

    25% {
      opacity: 0.3;
    }

    50% {
      opacity: 1;
    }

    75% {
      opacity: 0.3;
    }

    100% {
      transform: translateY(125%);
      opacity: 0;
    }
  }
`

const headings = [
  "Projektowanie stron internetowych",
  "Responsive Web Design",
  "Indywidualny projekt graficzny",
]

const Header = () => {
  const [heading, setHeading] = useState(headings[0])
  const headingRef = useRef(null)

  useEffect(() => {
    const heading = headingRef.current

    gsap.set(heading, { autoAlpha: 0 })

    const changeHeading = () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } })
      tl.fromTo(
        heading,
        { x: "-=300" },
        { duration: 1, x: "+=300", autoAlpha: 1 }
      ).fromTo(
        heading,
        { autoAlpha: 1 },
        { duration: 1, delay: 1.5, autoAlpha: 0 }
      )
    }

    changeHeading()

    let i = 1
    const interval = setInterval(() => {
      changeHeading()
      if (i <= 2) {
        setHeading(headings[i++])
      } else {
        i = 0
        setHeading(headings[i++])
      }
    }, 3200)
    return () => clearInterval(interval)
  }, [])

  return (
    <StyledHeaderWrapper>
      <StyledHeaderSvg />
      <StyledHeading ref={headingRef}>{heading}</StyledHeading>
      <StyledMobileArrowWrapper>
        <StyledMobileArrow />
      </StyledMobileArrowWrapper>
    </StyledHeaderWrapper>
  )
}

export default Header
