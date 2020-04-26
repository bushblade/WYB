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
    overflow-x: hidden;
  }   

  h2 {
    font-size: 2rem;
    font-family: 'Quintessential', cursive;
  }
  p {
    font-size: 1.4rem;
  }
  a {
    cursor: pointer;
    text-decoration: none;
    font-weight: 500;
    color: #404040;
    box-shadow: inset 0 -0.175em ${colours.lowOpacityWhite},
      inset 0 -0.25em ${colours.lightGrey};
    background: linear-gradient(
      0deg,
      rgba(238, 238, 238, 0) 0%,
      rgba(238, 238, 238, 0) 49%,
      rgba(238, 238, 238, 0) 100%
    );
    :active,
    :visited {
      color: #404040;
    }
    :hover {
      background: linear-gradient(
        0deg,
        rgba(238, 238, 238, 0.7) 0%,
        rgba(238, 238, 238, 0.2) 49%,
        rgba(238, 238, 238, 0) 100%
      );
    }
  }
`

export const Section = styled.section`
  min-height: 100vh;
  background-color: ${(props) => props.bgcolor};
  scroll-snap-align: start;
  // display: flex;
  // align-items: center;
  // @media (max-width: 1000px) {
  //   padding: 0 1rem;
  // }
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
  border: 0.2rem solid ${(props) => (props.color ? props.color : 'black')};
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
    border: 0.2rem solid ${(props) => (props.color ? props.color : 'black')};
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
  height: 100%;
  width: 100%;
  grid-template-columns: 1fr;
  grid-template-areas: ${(props) =>
    props.reverseOnMobile
      ? `'right right' 'left left'`
      : `'left left' 'right right'`};
  @media (min-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'left right';
    padding: 0 3rem;
    /* grid-gap: 3rem; */
  }
`
export const Cell = styled.div`
  background: ${(props) => (props.bgdark ? colours.lightGrey : '')};
  // min-height: 100vh;
  grid-area: ${(props) => (props.left ? 'left' : 'right')};
  // display: flex;
  // justify-items: center;
  // align-items: center;
  padding: ${(props) => (props.hastext ? '3rem' : '')};
`
