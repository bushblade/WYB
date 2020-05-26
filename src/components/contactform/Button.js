import React, { useState } from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

import { colours } from '../styled'

const BtnContainer = styled.div`
  margin: 0 1rem 1rem 0;
  @media (max-width: 780px) {
    margin: 0 0.5rem 1rem 0;
  }
  button {
    color: black;
    font-family: 'Quintessential', cursive;
    font-size: 1.2rem;
    outline: none;
    border: 0.2rem solid black;
    border-radius: 1.5rem;
    padding: 0.3rem 1rem;
    cursor: pointer;
    background: transparent;
    text-transform: uppercase;
    display: inline-block;
    position: relative;
    transition: box-shadow 0.3s ease-in-out, background 0.3s ease-in-out;
    :focus {
      outline: none;
    }
    :hover {
      background: ${props => (props.disabled ? '' : colours.lowOpacityKahki)};
      ${props =>
        !props.disabled &&
        `box-shadow: 0 0 0.1rem 0.3rem ${colours.lowOpacityGreen}`};
    }
  }
`
const Button = ({ children, ...rest }) => {
  const [press, setPress] = useState(false)

  const btnSpring = useSpring({
    transform: press ? 'scale(0.95)' : 'scale(1)',
    config: {
      mass: 1,
      tension: 200,
      friction: 20,
      velocity: 20,
      precision: 0.999,
    },
    onRest: () => setPress(false),
  })

  return (
    <BtnContainer disabled={rest.disabled}>
      <animated.button
        {...rest}
        onMouseDown={() => setPress(true)}
        style={btnSpring}
      >
        {children}
      </animated.button>
    </BtnContainer>
  )
}

export default Button
