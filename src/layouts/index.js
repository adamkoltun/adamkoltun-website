import React from "react"
import GlobalStyle from "../assets/styles/globalStyles"

import TopBar from "../components/organisms/TopBar/TopBar"
import Footer from "../components/organisms/Footer/Footer"

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <TopBar />
    {children}
    <Footer />
  </>
)

export default MainLayout
