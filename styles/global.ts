import { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;

    box-sizing: border-box;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  body {
    background: ${props => props.theme['white']};
    color: ${props => props.theme['black']};
  }

  body, input, button, textarea {
    font-size: 1rem;
    font-weight: 400;
    -webkit-font-smoker: antialiased;
    font-family: Arial, Helvetica, sans-serif;
  }

  h1 {
    text-transform: capitalize;
  }

  li > p, h1, a {
    display: block;
    margin: auto;
    text-align: center;
  }

  main > ul > li {
    margin-top: 2rem;
  }

`