import React from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"

import LinkedinIcon from "../../../assets/icons/linkedin.svg"
import GitHubIcon from "../../../assets/icons/github.svg"

const StyledNavigationWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 105%;
  width: 100%;
  height: 100%;
  padding: 30px 25px;
  background-color: #fff;
  transition: transform 0.8s ease;
  z-index: 1;

  ${({ isActive }) =>
    isActive &&
    css`
      transform: translateX(-105%);
    `}
`

const StyledMenu = styled.ul`
  position: relative;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-end;
  list-style: none;
  overflow: hidden;

  ${({ menuActive }) =>
    menuActive &&
    css`
      li {
        transform: translateX(0);
        opacity: 1;
      }
    `}
`

const StyledMenuElement = styled.li`
  opacity: 0;
  transition: transform 0.6s 0.2s ease-in-out;
  transform: translateX(-100%);
  margin-bottom: 30px;
`

const StyledLink = styled(Link)`
  font-size: 38px;
  transition-delay: 0.8s;
  padding-bottom: 2px;

  &.active {
    border-bottom: 2px solid #93b9ff;
  }
`

const StyledIconWrapper = styled.ul`
  display: flex;
  margin-top: 10px;
  justify-content: flex-end;
  list-style: none;

  li :first-child {
    margin-right: 30px;
  }
`

const StyledIconElement = styled.li`
  a {
    display: inline-block;
  }
`

const StyledInIcon = styled(LinkedinIcon)`
  height: 30px;
  width: auto;
`
const StyledGhIcon = styled(GitHubIcon)`
  height: 30px;
  width: auto;
`

const MobileNav = ({ handleClick, isActive }) => (
  <StyledNavigationWrapper isActive={isActive}>
    <StyledMenu menuActive={isActive}>
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
      <StyledIconWrapper>
        <StyledIconElement>
          <a href="https://www.linkedin.com/in/adam-koltun/">
            <StyledInIcon />
          </a>
        </StyledIconElement>
        <StyledIconElement>
          <a href="https://github.com/adamkoltun">
            <StyledGhIcon />
          </a>
        </StyledIconElement>
      </StyledIconWrapper>
    </StyledMenu>
  </StyledNavigationWrapper>
)

export default MobileNav
