import React from 'react'
import styled from 'styled-components'

import Logo from './logo'
import SVG from '../images/WYB-logo-web-plain.svg'

const Container = styled.header`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const InnerContainer = styled.div`
  /* height: 100%;
  display: flex;
  justify-content: center; */
`

const Title = styled.h1`
  font-family: 'Quintessential';
  margin: 0;
  padding: 0;
`

const Banner = () => {
  return (
    <Container>
      <InnerContainer>
        <div>
          <Logo />
          {/* <img src={SVG} /> */}
        </div>
        <div>
          <Title>West Yorkshire Bushcraft</Title>
        </div>
      </InnerContainer>
    </Container>
  )
}

export default Banner
