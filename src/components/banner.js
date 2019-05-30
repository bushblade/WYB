import React from 'react'
import styled from 'styled-components'

import Logo from './logo'

const Container = styled.header`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-family: 'Quintessential';
    font-weight: 400;
    margin: 0;
    padding: 0;
    font-size: 4rem;
    text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.35);
    text-align: center;
  }
`

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Banner = ({ title }) => {
  return (
    <Container>
      <div>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <h1>{title}</h1>
      </div>
    </Container>
  )
}

export default Banner
