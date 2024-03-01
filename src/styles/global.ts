import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }
  
  :root {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Inter', sans-serif;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
  }
`;