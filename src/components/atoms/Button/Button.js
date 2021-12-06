import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledButton = styled.button`
  width: 140px;
  height: 40px;
  border: none;
  border-radius: 20px;
  background-color: #00a8e8;
  font-size: 16px;
  color: white;

  @media (min-width: 360px) {
    font-size: 16px;
  }
`

const Button = ({ children, destination }) => (
  <Link to={destination}>
    <StyledButton>{children}</StyledButton>
  </Link>
)

export default Button
