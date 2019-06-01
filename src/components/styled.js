import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  } 
  html {
  scroll-behavior: smooth;
  }
  body {
    margin: 0;
    background: lightslategray;
  } 
  
`

export const Section = styled.section`
  min-height: 100vh;
  background-color: ${props => props.bgcolor};
  scroll-snap-align: start;
`
