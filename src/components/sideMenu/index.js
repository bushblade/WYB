import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { animated, useTransition } from 'react-spring'

import { colours } from '../styled'
import MenuButton from './MenuButton'

export const useIsMobile = () => {
  const isMobile = () => {
    if (typeof window !== 'undefined') return window.innerWidth < 1000
  }
  const [mobile, setMobile] = useState(isMobile())

  useEffect(() => {
    console.log(mobile)
    const checkWindowSize = () => setMobile(isMobile())
    if (window) {
      checkWindowSize()
      window.addEventListener('resize', checkWindowSize)
      return () => window.removeEventListener('resize', checkWindowSize)
    }
  }, [])
  return mobile
}

const InnerMenu = styled.nav`
  height: 100vh;
  background-color: ${colours.darkGrey};
  @media (min-width: 1000px) {
    width: 100%;
    grid-area: menu;
  }
`

const Menu = () => {
  return <InnerMenu />
}

const SideMenu = () => {
  const [open, setOpen] = useState(false)
  const isMobile = useIsMobile()

  const menuTranstion = useTransition(open, null, {
    from: { transform: 'translate3d(-100%,0,0)' },
    enter: { transform: 'translate3d(0, 0, 0)' },
    leave: { transform: 'translate3d(-100%,0,0)' },
  })

  return (
    <>
      <MenuButton setOpen={setOpen} open={open} />
      {isMobile ? (
        menuTranstion.map(
          ({ item, key, props }) =>
            item && (
              <animated.nav
                key={key}
                style={{
                  zIndex: 11,
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100vh',
                  backgroundColor: 'pink',
                  ...props,
                }}
              >
                <Menu />
              </animated.nav>
            )
        )
      ) : (
        <Menu />
      )}
    </>
  )
}

export default SideMenu
