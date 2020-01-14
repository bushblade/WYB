import React from 'react'
import styled from 'styled-components'
import { colours } from '../styled'

const SideMenu = ({ className }) => {
  return <nav className={className}></nav>
}

export default styled(SideMenu)`
  width: 100%;
  height: 100vh;
  grid-area: menu;
  background-color: ${colours.darkGrey};
`
