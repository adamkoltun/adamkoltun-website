import React from "react"
import styled from "styled-components"

import Button from "../../atoms/Button/Button"

const StyledFooter = styled.footer`
  display: grid;
  grid-template-rows: 25% 30% 35% 10%;
  height: 100vh;
  padding: 0 25px;
  background-color: #cecece;
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
`

const StyledCopyWrapper = styled.div`
  display: flex;

  p :first-child {
    font-size: 14px;
    text-transform: uppercase;
    margin-right: 8px;
  }

  p :last-child {
    font-size: 13px;
    color: #7e7e7e;
  }
`

const Footer = () => (
  <StyledFooter>
    <StyledHeadingWrapper>
      <StyledHeading>adamkoltun.dev</StyledHeading>
    </StyledHeadingWrapper>
    <StyledInvitationWrapper>
      <StyledInvitation>Stwórzmy razem coś wartościowego.</StyledInvitation>
      <Button destination="/contact/" footer="true">
        Skontaktuj się
      </Button>
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
