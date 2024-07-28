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

  html, body {
    scroll-behavior: smooth;
  }

  body {
    background: ${props => props.theme['gray-950']};
    color: ${props => props.theme['gray-100']};
  }

  body, input, button, textarea {
    font-size: 1rem;
    font-weight: 400;
    -webkit-font-smoker: antialiased;
    font-family: Arial, Helvetica, sans-serif;
  }

`