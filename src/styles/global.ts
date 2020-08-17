import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    outline:0;
  }

  body {
    background:#7695AF;
    color:#fff;
    -webkit-font-smoothing:antialiased;
  }

  body, input, button {
    font-family:'Roboto', sans serif;
    font-size:16;
  }

  button {
    cursor: pointer;
  }

`;
