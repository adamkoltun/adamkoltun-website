import React from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"

const StyledNavigationWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 105%;
  width: 100vw;
  height: 100vh;
  padding: 30px 25px;
  background-color: #fff;
  transition: transform 0.8s ease;

  ${({ isActive }) =>
    isActive &&
    css`
      transform: translateX(-105%);
    `}
`

const StyledMenu = styled.ul`
  display: flex;
  height: 100%;
  margin-top: 25px;
  flex-direction: column;
  justify-content: center;
  list-style: none;
`

const StyledMenuElement = styled.li`
  margin-bottom: 30px;
`

const StyledLink = styled(Link)`
  font-size: 38px;
  transition-delay: 1s;

  &.active {
    border-bottom: 2px solid #93b9ff;
  }
`

const MobileNav = ({ handleClick, isActive }) => (
  <StyledNavigationWrapper isActive={isActive}>
    <StyledMenu>
      <StyledMenuElement>
        <StyledLink to="/offer" onClick={handleClick} activeClassName="active">
          Oferta
        </StyledLink>
      </StyledMenuElement>
      <StyledMenuElement>
        <StyledLink
          to="/portfolio"
          onClick={handleClick}
          activeClassName="active"
        >
          Portfolio
        </StyledLink>
      </StyledMenuElement>
      <StyledMenuElement>
        <StyledLink to="/about" onClick={handleClick} activeClassName="active">
          O mnie
        </StyledLink>
      </StyledMenuElement>
      <StyledMenuElement>
        <StyledLink to="/blog" onClick={handleClick} activeClassName="active">
          Blog
        </StyledLink>
      </StyledMenuElement>
      <StyledMenuElement>
        <StyledLink
          to="/contact"
          onClick={handleClick}
          activeClassName="active"
        >
          Kontakt
        </StyledLink>
      </StyledMenuElement>
    </StyledMenu>
  </StyledNavigationWrapper>
)

export default MobileNav
