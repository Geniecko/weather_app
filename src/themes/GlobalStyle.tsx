import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,*::after,*::before{
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    position: relative;
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    font-family: 'Montserrat', sans-serif;
    min-height: 100vh;
    background-image: url(${({ theme }) => theme.backgroundPage});
    background-position: right bottom;
    background-repeat: no-repeat;
    background-size: cover;
    color: ${({ theme }) => theme.primary};
    font-weight: 400;


    h1, h2, h3, h4, h5{
      color: ${({ theme }) => theme.primary};
      margin: 0;
      padding: 0;
      font-weight: 500;
    }
  }
`;

export default GlobalStyle;
