import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,*::after,*::before{
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    font-family: 'Barlow', sans-serif;
  }
`;

export default GlobalStyle;
