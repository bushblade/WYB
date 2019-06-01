import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  } 
  body {
    margin: 0;
    background: lightslategray;
    overflow: hidden;
    
  } 
  
`

export const Section = styled.section`
  min-height: 100vh;
  background-color: ${props => props.bgcolor};
  scroll-snap-align: start;
`
