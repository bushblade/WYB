import React from 'react'
import styled from 'styled-components'

import { colours } from '../styled'

const InnerMenu = styled.nav`
  height: 100vh;
  width: 50vw;
  @media (max-width: 700px) {
    width: 80vw;
  }
  background-color: ${colours.darkGrey};
  @media (min-width: 1000px) {
    width: 100%;
    grid-area: menu;
  }
`

const Menu = () => {
  return <InnerMenu />
}

export default Menu
