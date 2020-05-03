import React from 'react'
import { animated, useTransition } from 'react-spring'

import MenuButton from './MenuButton'
import Menu from './Menu'

import useIsMobile from '../../hooks/useIsMobile'

const SideMenu = ({ indexlinks, menuOpen, toggleMenu, closeMenu }) => {
  const isMobile = useIsMobile()

  const menuTranstion = useTransition(menuOpen, null, {
    from: { transform: 'translate3d(-100%,0,0)', opacity: 0.5 },
    enter: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    leave: { transform: 'translate3d(-100%,0,0)', opacity: 0.5 },
  })

  return (
    <>
      <MenuButton toggleMenu={toggleMenu} menuOpen={menuOpen} />
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
                  height: '100vh',
                  ...props,
                }}
              >
                <Menu indexlinks={indexlinks} closeMenu={closeMenu} />
              </animated.nav>
            )
        )
      ) : (
        <Menu indexlinks={indexlinks} />
      )}
    </>
  )
}

export default SideMenu
