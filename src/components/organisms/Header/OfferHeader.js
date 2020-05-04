import React from "react"
import styled from "styled-components"

import MobileArrow from "../../atoms/MobileArrow/MobileArrow"

import Offer from "../../../assets/images/header/offer.svg"

const StyledHeaderWrapper = styled.header`
  display: grid;
  grid-template-rows: 1fr 65px;
  height: 100vh;
  padding: 0 25px;
`

const StyledHeading = styled.h1`
  display: none;
`

const StyledHeaderSvg = styled(Offer)`
  margin-top: 150px;
  align-self: center;
  width: 100%;
  height: auto;
`

const OfferHeader = () => {
  return (
    <StyledHeaderWrapper>
      <StyledHeaderSvg />
      <MobileArrow />
      <StyledHeading>
        Usługi w zakresie tworzenia stron internetowych oraz aplikacji mobilnych
      </StyledHeading>
    </StyledHeaderWrapper>
  )
}

export default OfferHeader
