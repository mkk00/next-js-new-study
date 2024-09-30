import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Poppins:wght@400;700&display=swap');

  * {
    box-sizing: border-box;
  }

  html {
    font-family: 'Open Sans', sans-serif;
    height: 100%;
  }

  body {
    height: 100%;
    margin: 0;
    background: linear-gradient(180deg, #232029, #231e2d);
    color: #ddd8e4;
  }

  main {
    text-align: center;
    margin: 5rem auto;
  }

  main img {
    width: 8rem;
    height: 8rem;
    object-fit: cover;
    filter: drop-shadow(0 0 4px #f6c363);
  }

  h1 {
    font-size: 3rem;
    margin: 3rem auto;
    color: #ede9f3;
    font-family: 'Poppins', sans-serif;
  }

  p {
    font-size: 1.5rem;
  }

  p a {
    color: #f4c33d;
    text-decoration: none;
    padding-bottom: 0.05rem;
    border-bottom: 2px solid #f4c33d;
  }

  p a:hover,
  p a:active {
    color: #bd3df4;
    border-color: #bd3df4;
  }
`

export default GlobalStyle
