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
  white: 'rgba(239, 239, 239, 1)',
}

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }   
  body {
    font-family: 'Lora', serif;
    margin: 0;
    background: lightslategray;    
    overflow-x: hidden;
  }   

  h2 {
    font-size: 2rem;
    font-family: 'Quintessential', cursive;
    border-bottom: 0.3rem solid ${colours.lowOpacityGreen};
  }
  p {
    font-size: 1.4rem;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    border-bottom: solid 0.2rem ${colours.lowOpacityGreen};
    font-weight: 500;
    color: ${colours.darkGrey};
    transition: background 0.2s ease-in-out;
    :active,
    :visited {
      color: ${colours.darkGrey};
    }
    :hover {
      background: ${colours.lowOpacityKahki};
      color: black;
      border-bottom: solid 0.2rem ${colours.green};
    }
  }
`

export const Section = styled.section`
  min-height: 100vh;
  background: ${props => props.bgcolor};
  scroll-snap-align: start;
  padding: 4rem 0;
  @media (min-width: 1200px) {
    padding: 4rem 5rem;
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
  border: 0.2rem solid ${props => (props.color ? props.color : 'black')};
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
    border: 0.2rem solid ${props => (props.color ? props.color : 'black')};
    border-top: transparent;
    border-left: transparent;
    transform: rotate(45deg);
    animation: ${btnAnimation} 2s infinite;
    box-sizing: border-box;
  }
`

export const Quote = styled.blockquote`
  font-size: 2rem;
  text-align: center;
`
export const TwoColumnContainer = styled.div`
  display: grid;
  grid-gap: ${props => (props.gap ? props.gap : '0')};
  height: 100%;
  width: 100%;
  padding: ${props => (props.images ? '0 2rem' : '0 3rem')};
  grid-template-columns: 1fr;
  grid-template-areas: ${props =>
    props.reverseOnMobile
      ? `'right right' 'left left'`
      : `'left left' 'right right'`};
  @media (min-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'left right';
  }
`
export const Cell = styled.div`
  background: ${props => (props.bgdark ? colours.lightGrey : '')};
  grid-area: ${props => (props.left ? 'left' : 'right')};
  // padding: ${props => (props.hastext ? '3rem' : '')};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
