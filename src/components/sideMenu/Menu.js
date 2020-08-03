import React from 'react'
import styled from 'styled-components'

import { colours, mobileBreakPoint } from '../styled'

const Menu = ({ indexlinks, closeMenu, className }) => {
  return (
    <nav className={className}>
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
      <h3>Connect with WYB</h3>
      <ul>
        <li>
          <a
            href="https://www.facebook.com/groups/westyorkshirebushcraft.official"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="lab la-facebook la-lg"></i> Facebook
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCN563R-qyOcAKcLi8cH3bEA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="lab la-youtube la-lg"></i> YouTube
          </a>
        </li>
        <li>
          <a
            href="mailto:westyorkshirebushcraftgroup@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="las la-envelope la-lg"></i> Email us
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default styled(Menu)`
  height: 100vh;
  width: 50vw;
  z-index: 10;
  box-shadow: 0px 0px 36px 0px rgba(0, 0, 0, 0.35);
  padding: 10rem 0;
  @media (max-width: 700px) {
    width: 80vw;
  }
  background: linear-gradient(
    45deg,
    ${colours.darkGrey} 0%,
    ${colours.lightGrey} 100%
  );
  @media (min-width: ${mobileBreakPoint}) {
    width: 100%;
    grid-area: menu;
  }
  h3 {
    font-size: 1.5rem;
    color: ${colours.white};
    text-align: center;
    margin-top: 5rem;
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

    li {
      transition: all 0.2s ease-in-out;
      :hover {
        transform: scale(1.05);
      }
    }
    button,
    a {
      cursor: pointer;
      background: none;
      font-size: inherit;
      border: none;
      color: ${colours.white} !important;
      font-family: 'Lora', serif;
      box-shadow: none;
      &:focus {
        outline: none;
      }
    }
  }
`
