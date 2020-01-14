import React, { useState } from 'react'
import styled from 'styled-components'
import { animated, useSpring } from 'react-spring'

import { colours } from '../styled'
import MenuButton from './MenuButton'

const Menu = styled.nav`
  height: 100vh;
  background-color: ${colours.darkGrey};
  width: 50%;
  z-index: 10;
  @media (max-width: 1000px) {
    position: fixed;
    transition: transform 0.3s ease-in-out;
    transform: ${props =>
      props.open ? 'translate3d(0, 0, 0)' : 'translate3d(-100%, 0, 0)'};
  }
  @media (min-width: 1000px) {
    width: 100%;
    grid-area: menu;
  }
`

const SideMenu = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <MenuButton setOpen={setOpen} open={open} />
      <Menu open={open}></Menu>
    </>
  )
}

export default SideMenu
