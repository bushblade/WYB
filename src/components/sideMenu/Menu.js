import React from 'react'
import styled from 'styled-components'

import { colours } from '../styled'

const InnerMenu = styled.nav`
  height: 100vh;
  width: 50vw;
  z-index: 10;
  box-shadow: 0px 0px 36px 0px rgba(0, 0, 0, 0.35);
  padding: 10rem 0;
  @media (max-width: 700px) {
    width: 80vw;
  }
  background-color: ${colours.darkGrey};
  @media (min-width: 1200px) {
    width: 100%;
    grid-area: menu;
  }
  ul {
    list-style: none;
    color: ${colours.white};
    margin: auto;
    font-size: 2.5rem;
    width: 100%;
    text-align: center;
    line-height: 4rem;
    padding: 0;
    button {
      cursor: pointer;
      background: none;
      font-size: inherit;
      border: none;
      color: ${colours.white} !important;
      font-family: 'Lora', serif;
    }
  }
`

const Menu = ({ indexlinks, closeMenu }) => {
  return (
    <InnerMenu>
      <ul>
        {indexlinks.map(({ to, scrollto }) => (
          <li key={to}>
            <button
              onClick={() => {
                scrollto()
                if (closeMenu) closeMenu()
              }}
            >
              {to}
            </button>
          </li>
        ))}
      </ul>
    </InnerMenu>
  )
}

export default Menu
