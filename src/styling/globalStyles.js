import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, html {
    margin: 0;
    box-sizing: border-box;
    font-size: 62.5%;
  }
  body {
    font-family: 'Lato', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;
