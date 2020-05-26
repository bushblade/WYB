import React from 'react'
import styled from 'styled-components'
import { useSpring, animated, config } from 'react-spring'
import Logo from '../../images/icon.svg'

// import Logo from '../logo'
import { colours } from '../styled'

const Message = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .main {
    margin: 3rem;
    padding: 1rem 1rem 0 1rem;
    border-radius: 0.5rem;
    border: 0.2rem solid ${colours.darkGrey};
    box-shadow: 0px 0px 89px -17px rgba(0, 0, 0, 0.5);
    background: ${colours.lowOpacityWhite};
    padding: 3rem;
    text-align: center;
    height: 100%;

    h2 {
      font-size: 2rem;
    }
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
    <animated.div style={fadeIn}>
      <Message>
        <div className="main">
          <h2>
            Your message has been sent{' '}
            <i className="las la-lg la-envelope-open-text"></i>
          </h2>
          <p>
            Thanks for contacting
            <br /> West Yorkshire Bushcraft
          </p>
          <div>
            <img style={{ width: '6rem' }} src={Logo} alt="" />
          </div>
          <p>We will be in touch soon.</p>
        </div>
      </Message>
    </animated.div>
  )
}

export default MessageSuccess
