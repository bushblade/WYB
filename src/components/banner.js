import React from 'react'
import styled from 'styled-components'

import Logo from './logo'
import { DownButton } from './styled'

const Container = styled.header`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
  h1 {
    font-family: 'Quintessential';
    font-weight: 400;
    margin: 0 0 2.5rem 0;
    padding: 0;
    font-size: 4rem;
    text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.35);
    text-align: center;
    @media (max-width: 800px) {
      font-size: 3rem;
    }
  }
`

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  @media (max-width: 800px) {
    svg {
      width: 50%;
      height: 50%;
    }
  }
`

const Banner = ({ title, scrollToAbout }) => {
  return (
    <Container>
      <div>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <h1>{title}</h1>
        <DownButton onClick={scrollToAbout} />
      </div>
    </Container>
  )
}

export default Banner
