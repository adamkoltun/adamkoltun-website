import React from "react"
import styled from "styled-components"
import Arrow from "../../../assets/icons/mobile-arrow.svg"

const StyledMobileArrowWrapper = styled.div`
  justify-self: center;
  align-self: center;
`

const StyledMobileArrow = styled(Arrow)`
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

const MobileArrow = () => (
  <StyledMobileArrowWrapper>
    <StyledMobileArrow />
  </StyledMobileArrowWrapper>
)

export default MobileArrow
