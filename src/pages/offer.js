import React from "react"
import styled from "styled-components"

import OfferHeader from "../components/organisms/Header/OfferHeader"

const StyledSection = styled.section`
  display: grid;
  margin: 50px 0;
  padding: 0 25px;
`

const StyledHeading = styled.h1`
  margin-bottom: 50px;
  font-family: "Fira Sans";
  font-size: 30px;
  font-weight: 400;
`

const StyledParagraph = styled.p`
  margin-bottom: 30px;
`

const OfferPage = () => (
  <>
    <OfferHeader />
    <main>
      <StyledSection>
        <StyledHeading>
          Usługi w zakresie tworzenia stron internetowych oraz aplikacji
          mobilnych
        </StyledHeading>
        <StyledParagraph>
          Chcesz rozwinąć swoją firmę? Znaleźć sposób na pozyskanie nowych
          klientów? Zaprezentować swoją ofertę, a tym samym ułatwić nowym
          klientom dostęp do informacji na jej temat? Poszerzyć zasięgi, pojawić
          się na rynku w sieci oraz zaprezentować się jako profesjonalna, godna
          zaufania firma? Doskonale trafiłeś.
        </StyledParagraph>
        <StyledParagraph>
          Stworzona przeze mnie strona zaspokoi każdą z tych potrzeb, a ponadto
          przyniesie Ci wiele więcej korzyści.
        </StyledParagraph>
        <p>
          Daj się poznać klientom, zwiększ tym samym wiarygodność swojej firmy.
          Pozyskaj nowych klientów poprzez ułatwienie im kontaktu.
        </p>
      </StyledSection>
    </main>
  </>
)

export default OfferPage
