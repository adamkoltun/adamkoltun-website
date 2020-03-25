import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLogotype = styled(Link)`
  font-family: "Fira Sans";
  font-weight: 600;
`

const LogoType = ({ closeMenu }) => (
  <StyledLogotype to="/" onClick={closeMenu}>
    adamkoltun.dev
  </StyledLogotype>
)

export default LogoType
