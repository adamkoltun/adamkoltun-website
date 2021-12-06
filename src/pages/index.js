import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"

import Header from "../components/organisms/Header/Header"
import Button from "../components/atoms/Button/Button"
// import WelcomeExampleSVG from "../assets/images/offer.svg"

const StyledWelcomeSection = styled.section`
  display: grid;
  margin: 25px 0 75px 0;
  padding: 0 25px;
`

const StyledParagraph = styled.p`
  margin-bottom: 40px;
  line-height: 26px;
`

const StyledPortfolioSection = styled.section`
  padding: 75px 25px;
  background-color: #00171f;

  div :last-of-type {
    margin-bottom: 50px;
  }
`

const StyledSectionHeading = styled.h3`
  margin: 0;
  font-family: "Fira Sans";
  font-size: 20px;
  text-transform: uppercase;
  color: #fff;
`

const StyledProjectWrapper = styled.div`
  margin-top: 60px;
`

const ImageWrapper = styled(Image)`
  width: 100%;
  margin-bottom: 30px;
  box-shadow: 1px 6px 10px rgba(0, 0, 0, 0.4);
`

const StyledProjectHeading = styled.h4`
  margin: 0;
  font-family: "Fira Sans";
  font-size: 16px;
  color: #fff;
`

const StyledProjectDescription = styled.p`
  margin: 5px 0 0 0;
  font-size: 14px;
  color: #b1b8ba;
`

const IndexPage = ({ data }) => (
  <>
    <Header />
    <main>
      <StyledWelcomeSection>
        {/* <WelcomeExampleSVG /> */}
        <div>
          <StyledParagraph>
            Zajmuję się projektowaniem nowoczesnych oraz użytecznych stron
            internetowych. Projekt powstaje na podstawie strategii opracowanej z
            zebranych danych. Jego zadaniem jest rozwinięcie Twojej firmy.
          </StyledParagraph>
          <Button destination="/offer">Współpraca</Button>
        </div>
      </StyledWelcomeSection>
      <StyledPortfolioSection>
        <StyledSectionHeading>Wybrane projekty</StyledSectionHeading>
        <StyledProjectWrapper>
          <ImageWrapper fluid={data.kejm.childImageSharp.fluid} />
          <StyledProjectHeading>Sklep internetowy Soy Oy</StyledProjectHeading>
          <StyledProjectDescription>www.soyoy.pl</StyledProjectDescription>
        </StyledProjectWrapper>
        <StyledProjectWrapper>
          <ImageWrapper fluid={data.hw.childImageSharp.fluid} />
          <StyledProjectHeading>Projekt HW Trade Group</StyledProjectHeading>
          <StyledProjectDescription>
            www.hwtradegroup.com
          </StyledProjectDescription>
        </StyledProjectWrapper>
        <Button destination="/portfolio">Portfolio</Button>
      </StyledPortfolioSection>
    </main>
  </>
)

export const query = graphql`
  {
    hw: file(name: { eq: "hw-project" }) {
      childImageSharp {
        fluid(maxWidth: 583, maxHeight: 493, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    kejm: file(name: { eq: "kejm" }) {
      childImageSharp {
        fluid(maxWidth: 583, maxHeight: 493, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

export default IndexPage
