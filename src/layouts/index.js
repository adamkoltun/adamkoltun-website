import React from "react"
import GlobalStyle from "../assets/styles/globalStyles"

import TopBar from "../components/organisms/TopBar/TopBar"

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <TopBar />
    {children}
  </>
)

export default MainLayout
