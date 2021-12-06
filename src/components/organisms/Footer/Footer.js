import React from "react"
import styled from "styled-components"

import Button from "../../atoms/Button/Button"

const StyledFooter = styled.footer`
  display: grid;
  grid-template-rows: 25% 30% 35% 10%;
  height: 100vh;
  padding: 0 25px;
  background-color: #003459;
  color: white;
`

const StyledHeadingWrapper = styled.div`
  display: flex;
  align-items: center;
`

const StyledHeading = styled.h1`
  font-family: "Fira Sans";
  font-size: 24px;
  font-weight: 600;
`
const StyledInvitationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const StyledInvitation = styled.h2`
  font-size: 22px;
  font-weight: 500;
`

const StyledSocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  a :last-child {
    margin-top: 20px;
  }
`

const StyledSocialLink = styled.a`
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  color: white;
`

const StyledCopyWrapper = styled.div`
  display: flex;
  text-transform: uppercase;

  p {
    font-size: 13px;
  }
  p :first-child {
    margin-right: 6px;
  }
`

const Footer = () => (
  <StyledFooter>
    <StyledHeadingWrapper>
      <StyledHeading>adamkoltun.dev</StyledHeading>
    </StyledHeadingWrapper>
    <StyledInvitationWrapper>
      <StyledInvitation>Stwórzmy razem coś wartościowego.</StyledInvitation>
      <Button destination="/contact/">Kontakt</Button>
    </StyledInvitationWrapper>
    <StyledSocialWrapper>
      <StyledSocialLink href="">Github</StyledSocialLink>
      <StyledSocialLink href="">Linkedin</StyledSocialLink>
    </StyledSocialWrapper>
    <StyledCopyWrapper>
      <p>All rights Reserved</p>
      <p>&copy;Adam Koltun</p>
    </StyledCopyWrapper>
  </StyledFooter>
)

export default Footer
