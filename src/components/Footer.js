import React from 'react'
import styled from 'styled-components'
import { colours } from '../components/styled'

const now = new Date()

const Footer = ({ className }) => (
  <footer className={className}>
    <div>
      All Content &copy;{now.getFullYear()} West Yorkshire Bushcraft - Website
      by Will Adams
    </div>
  </footer>
)

export default styled(Footer)`
  border-top: 0.3rem solid ${colours.lowOpacityGreen};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colours.lowOpacityKahki};
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 2.5rem;
`
