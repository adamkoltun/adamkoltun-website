import React from "react"
import styled from "styled-components"

import Header from "../components/organisms/Header/Header"
import Button from "../components/atoms/Button/Button"
import WelcomeExampleSVG from "../assets/images/offer.svg"

const StyledWelcomeSection = styled.section`
  display: grid;
  margin: 25px 0 75px 0;
  padding: 0 25px;
`

const StyledPortfolioSection = styled.section`
  height: 100vh;

  background-color: #222222;
`

const StyledParagraph = styled.p`
  margin: 40px 0;
`

const IndexPage = () => (
  <>
    <Header />
    <main>
      <StyledWelcomeSection>
        <WelcomeExampleSVG />
        <div>
          <StyledParagraph>
            Zajmuję się projektowaniem nowoczesnych oraz użytecznych stron
            internetowych. Projekt powstaje na podstawie strategii opracowanej
            na danych, zebranych podczas analizy potrzeb użytkowników oraz
            biznesu. Jego zadaniem jest rozwinięcie Twojej firmy.
          </StyledParagraph>
          <Button>Sprawdź ofertę</Button>
        </div>
      </StyledWelcomeSection>
      <StyledPortfolioSection></StyledPortfolioSection>
    </main>
  </>
)

export default IndexPage
