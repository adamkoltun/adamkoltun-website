import React from "react"
import styled, { css } from "styled-components"

const StyledHamburger = styled.button`
  border: none;
  background-color: transparent;
  justify-self: end;
`

const StyledHamburgerBox = styled.span`
  display: block;
  position: relative;
  height: 10px;
`

const StyledFirstLine = styled.span`
  display: block;
  width: 30px;
  height: 2px;
  background-color: #292929;
  transition: transform 0.3s ease-in-out;

  ${({ isActive }) =>
    isActive &&
    css`
      transform: translateY(4px) scale(0.8) rotate(45deg);
    `}
`

const StyledSecondLine = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
  display: block;
  width: 30px;
  height: 2px;
  background-color: #292929;
  transition: transform 0.3s ease-in-out;

  ${({ isActive }) =>
    isActive &&
    css`
      transform: translateY(-4px) scale(0.8) rotate(-45deg);
    `}
`

const Hamburger = ({ handleClick, isActive }) => (
  <StyledHamburger onClick={handleClick}>
    <StyledHamburgerBox>
      <StyledFirstLine isActive={isActive}></StyledFirstLine>
      <StyledSecondLine isActive={isActive}></StyledSecondLine>
    </StyledHamburgerBox>
  </StyledHamburger>
)

export default Hamburger
