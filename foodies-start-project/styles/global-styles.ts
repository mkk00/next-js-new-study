import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600;700&family=Montserrat:wght@400;700&display=swap');

  * {
    box-sizing: border-box;
  }

  html {
    font-family: 'Quicksand', sans-serif;
  }

  body{
    margin: 0;
    background: radial-gradient(#282c34, #282c34);
  }

  main {
    text-align: center;
    margin: 5rem auto;
  }

  .header-background {
    position: absolute;
    width: 100%;
    height: 320px;
    top: 0;
    left: 0;
    z-index: -1;
  }

  svg {
    display: block;
    width: 100%;
    height: auto;
  }

  h1 {
    font-size: 3rem;
    margin: 3rem auto;
  }

  .not-found,
  .error {
    margin-top: 5rem;
    text-align: center;
  }

  .not-found h1,
  .error h1 {
    font-size: 5rem;
    margin: 0px;
    font-weight: 900;
    color: #262626;
    text-transform: uppercase;
    background: linear-gradient(90deg, #f9572a, #ffc905);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: cover;
    background-position: center;
    font-family: 'Montserrat', sans-serif;
  }

  .not-found p,
  .error p {
    font-size: 1.5rem;
    font-weight: 500;
    color: #ddd8d8;
  }

  p {
    font-size: 1.5rem;
    color: #f4c33d;
  }

  a {
    color: #f4c33d;
    text-decoration: none;
    padding-bottom: 0.05rem;
    border-bottom: 2px solid #f4c33d;
  }

  p a:hover,
  p a:active,
  p:hover {
    color: #bd3df4;
    border-color: #bd3df4;
  }

  button {
    margin-top: 10rem;
    padding: 1rem 2rem;
    font-size: 1.5rem;
    border-radius: 6px;
    border: none;
    cursor: pointer;
  }

  button:hover a,
  button:active a {
    color: #bd3df4;
    border-color: #bd3df4;
  }
`

export default GlobalStyle
