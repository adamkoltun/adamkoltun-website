import React from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"

const ButtonContainer = styled.div`
  display: flex;
`

const StyledButton = styled.button`
  display: flex;
  width: auto;
  align-items: center;
  border: none;
  background-color: transparent;
  font-size: 14px;
  font-weight: 300;
  color: #292929;
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      color: #fff;
      margin-top: 75px;
    `};

  :hover span:nth-child(2) {
    transform: scaleX(0.4);
  }

  :hover span:last-child {
    transform: translateX(-50%);
  }
`

const StyledLine = styled.span`
  display: inline-block;
  width: 50px;
  height: 1px;
  margin: 0 10px;
  background-color: #292929;
  transform-origin: 0% 50%;
  transition: transform 0.6s ease;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: #fff;
    `};
`

const StyledWord = styled.span`
  transition: transform 0.6s ease;
`

const Button = ({ children, destination, secondary }) => {
  const words = children.split(" ")

  return (
    <ButtonContainer>
      <Link to={destination}>
        <StyledButton secondary={secondary}>
          <span>{words[0]}</span>
          <StyledLine secondary={secondary}></StyledLine>
          <StyledWord>{words[1]}</StyledWord>
        </StyledButton>
      </Link>
      <div></div>
    </ButtonContainer>
  )
}

export default Button
