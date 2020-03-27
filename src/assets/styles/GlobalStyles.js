import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    font-family: 'Montserrat';
    color: #292929;
  }

  button {
    padding: 0;
    cursor: pointer;
    font-family: 'Montserrat';
  }

  p {
    font-size: 16px;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  a {
    color: #292929;
    text-decoration: none;
  }
`

export default GlobalStyle
