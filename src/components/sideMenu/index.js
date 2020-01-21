import React, { useState } from 'react'
import styled from 'styled-components'
import { animated, useTransition } from 'react-spring'

import { colours } from '../styled'
import MenuButton from './MenuButton'
import Menu from './Menu'

import useIsMobile from '../../hooks/useIsMobile'

const SideMenu = () => {
  const [open, setOpen] = useState(false)
  const isMobile = useIsMobile()

  const menuTranstion = useTransition(open, null, {
    from: { transform: 'translate3d(-100%,0,0)', opacity: 0.5 },
    enter: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    leave: { transform: 'translate3d(-100%,0,0)', opacity: 0.5 },
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
