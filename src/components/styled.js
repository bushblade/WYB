import styled, { createGlobalStyle, keyframes } from 'styled-components'

export const colours = {
  kahki: '#decd87',
  lowOpacityKahki: 'rgba(222, 205, 135, 0.5)',
  green: '#668000',
  lowOpacityGreen: 'rgba(102, 128, 0, 0.5)',
  darkGrey: '#404040',
  lowOpacityDarkGrey: 'rgba(64, 64, 64, 0.9)',
  lightGrey: '#555555',
  lowOpacityLightGrey: 'rgba(85, 85, 85, 0.9)',
  lowOpacityWhite: 'rgba(239, 239, 239, 0.7)',
}

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }   
  body {
    /* font-family: 'Quintessential', cursive; */
    font-family: 'Lora', serif;
    margin: 0;
    background: lightslategray;    
  }   
  h2 {
    font-family: 'Quintessential', cursive;
  }
`

export const Section = styled.section`
  min-height: 100vh;
  background-color: ${props => props.bgcolor};
  scroll-snap-align: start;
  @media (max-width: 800px) {
    padding: 0 1rem;
  }
`

const btnAnimation = keyframes`
  0% {
    transform: translate(0, 0) rotate(45deg);
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    transform: translate(0, 2rem) rotate(45deg);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
 `

export const DownButton = styled.button`
  position: relative;
  display: block;
  margin: auto;
  padding: 2rem 1rem;
  background: transparent;
  border: 0.2rem solid black;
  border-radius: 1.5rem;
  outline: none;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out, background 0.3s ease-in-out;
  :hover {
    box-shadow: 0 0 0.1rem 0.3rem ${colours.lowOpacityGreen};
    background: ${colours.lowOpacityKahki};
  }
  :before {
    position: absolute;
    top: 0.5rem;
    left: 50%;
    content: '';
    width: 1rem;
    height: 1rem;
    margin-left: -0.5rem;
    border: 0.2rem solid black;
    border-top: transparent;
    border-left: transparent;
    transform: rotate(45deg);
    animation: ${btnAnimation} 2s infinite;
    box-sizing: border-box;
  }
`

export const TwoColumnContainer = styled.div`
  max-width: 960px;
  margin: auto;
  display: grid;
  padding: 3rem 0;
  grid-template-columns: 1fr;
  @media (min-width: 800px) {
    grid-template-columns: 2fr 1fr;
  }
`
