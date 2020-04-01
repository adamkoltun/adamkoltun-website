import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  font-size: 14px;
  font-weight: 300;
  color: #292929;
  text-transform: uppercase;

  :hover :first-child {
    transform: scaleX(0.4);
  }

  :hover :last-child {
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
`

const StyledWord = styled.span`
  transition: transform 0.6s ease;
`

const Button = ({ children }) => {
  const words = children.split(" ")

  return (
    <StyledButton>
      {words[0]}
      <StyledLine></StyledLine>
      <StyledWord>{words[1]}</StyledWord>
    </StyledButton>
  )
}

export default Button
