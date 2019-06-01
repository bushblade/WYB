import styled, { createGlobalStyle, keyframes } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
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
  @media (max-width: 800px) {
    padding: 0 1rem;
  }
`
export const About = styled.div`
  max-width: 960px;
  margin: auto;
  padding: 3rem 0;
  color: #404040;
  font-family: 'Quintessential';
  h2 {
    font-size: 2rem;
  }
  p {
    font-size: 1.6rem;
  }
  a,
  span {
    cursor: pointer;
    text-decoration: none;
    font-weight: 500;
    box-shadow: inset 0 -0.175em rgba(239, 239, 239, 0.7),
      inset 0 -0.25em #555555;
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
        rgba(238, 238, 238, 0.8) 0%,
        rgba(238, 238, 238, 0.2) 49%,
        rgba(238, 238, 238, 0) 100%
      );
    }
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
  transition: box-shadow 0.3s ease-in-out;
  :hover {
    box-shadow: 0 0 0.2rem 0.4rem rgba(239, 239, 239, 0.1);
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
