import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLogotype = styled(Link)`
  font-family: "Fira Sans";
  font-weight: 600;
`

const LogoType = () => <StyledLogotype to="/">adamkoltun.dev</StyledLogotype>

export default LogoType
