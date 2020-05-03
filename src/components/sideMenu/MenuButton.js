import React from 'react'
import styled, { css } from 'styled-components'

const Button = styled.div`
  position: fixed;
  top: 1rem;
  left: 1.5rem;
  z-index: 12;
  display: block;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  margin: 0 auto;
  transition: all 0.3s;
  span {
    position: absolute;
    top: 50%;
    display: block;
    width: 100%;
    height: 0.3rem;
    background-color: rgb(51, 51, 51);
    border-radius: 3px;
  }
  span:before,
  span:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(51, 51, 51);
    border-radius: 3px;
    transition: all 0.3s;
  }
  span:before {
    transform: translateY(-0.7rem);
  }
  span:after {
    transform: translateY(0.7rem);
  }
  ${(props) =>
    props.menuOpen &&
    css`
      transform: rotate(45deg);
      span {
        background-color: whitesmoke;
      }
      span:before {
        transform: rotate(90deg);
        background-color: whitesmoke;
      }
      span:after {
        transform: rotate(90deg);
        background-color: whitesmoke;
      }
    `}
  @media (min-width: 1200px) {
    display: none;
  }
`

const MenuButton = ({ menuOpen, toggleMenu }) => (
  <Button menuOpen={menuOpen} onClick={toggleMenu}>
    <span></span>
  </Button>
)
export default MenuButton
