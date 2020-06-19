import styled, { createGlobalStyle, keyframes } from 'styled-components'

export const mobileBreakPoint = '1400px'

export const colours = {
  kahki: '#decd87',
  lowOpacityKahki: 'rgba(222, 205, 135, 0.5)',
  green: '#668000',
  lowOpacityGreen: 'rgba(102, 128, 0, 0.5)',
  darkGrey: '#363636',
  lowOpacityDarkGrey: 'rgba(54, 54, 54, 0.9)',
  lightGrey: '#666666',
  lowOpacityLightGrey: 'rgba(102, 102, 102, 0.9)',
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
    font-size: 1.8rem;
    white-space: nowrap;
    font-family: 'Quintessential', cursive;
    background: linear-gradient(180deg,  transparent 81%, ${colours.lowOpacityGreen} 81%, ${colours.lowOpacityGreen} 90%, transparent 90%);
    @media (min-width: 700px) {
      font-size: 2rem;
    }
  }
  p {
    font-size: 1.2rem;
    @media (min-width: 700px) {
      font-size: 1.4rem;
    }
  }
  a {
    text-decoration: none;
    cursor: pointer;
    font-weight: 500;
    color: black;
    background: linear-gradient(180deg,  transparent 81%, ${colours.lowOpacityGreen} 81%, ${colours.lowOpacityGreen} 90%, transparent 90%);
    transition: background 0.2s ease-in-out;
    :active,
    :visited {
      color: black;
    }
    :hover {
     background: linear-gradient(180deg,  ${colours.lowOpacityKahki} 81%, ${colours.green} 81%, ${colours.green} 90%, transparent 90%);
      color: black;
    }
  }
`

export const Section = styled.section`
  min-height: 100vh;
  background: ${props => props.bgcolor};
  scroll-snap-align: start;
  padding-top: 2rem;
  @media (min-width: 1000px) {
    padding-top: 3rem;
  }
  @media (min-width: ${mobileBreakPoint}) {
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
  position: relative;
  grid-gap: ${props => (props.gap ? props.gap : '0')};
  height: 100%;
  width: 100%;
  padding: 0 0.5rem;
  grid-template-columns: 1fr;
  grid-template-areas: ${props =>
    props.reverseOnMobile
      ? `'right right' 'left left'`
      : `'left left' 'right right'`};
  @media (min-width: 1000px) {
    padding: ${props => (props.images ? '0 2rem' : '0 3rem')};
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
