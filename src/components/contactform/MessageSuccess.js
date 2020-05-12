import React from 'react'
import styled from 'styled-components'
import { useSpring, animated, config } from 'react-spring'

import Logo from '../logo'
import { TwoColumnContainer, Cell, colours } from '../styled'

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Message = styled.div`
  div {
    margin: 1rem;
    padding: 1rem 1rem 0 1rem;
    border-radius: 0.2rem;
    border: 0.2rem solid black;
    box-shadow: 0px 0px 89px -17px rgba(0, 0, 0, 0.5);
    background: ${colours.lowOpacityWhite};
    padding: 3rem;
    text-align: center;
  }
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    font-size: 2rem;
  }
`

const MessageSuccess = () => {
  const fadeIn = useSpring({
    opacity: 1,
    transform: 'scale(1)',
    from: { opacity: 0, transform: 'scale(0.8)' },
    config: config.slow,
  })
  return (
    <TwoColumnContainer>
      <Cell left>
        <LogoContainer>
          <Logo />
        </LogoContainer>
      </Cell>
      <Cell>
        <Message>
          <animated.div style={fadeIn}>
            <h2>Your message has been sent</h2>
            <p>
              Thanks for contacting
              <br /> West Yorkshire Bushcraft
            </p>
            <p>We will be in touch soon.</p>
          </animated.div>
        </Message>
      </Cell>
    </TwoColumnContainer>
  )
}

export default MessageSuccess
