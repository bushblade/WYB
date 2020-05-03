import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'
import 'line-awesome/dist/line-awesome/css/line-awesome.css'

import { GlobalStyle } from './styled'
import SideMenu from '../components/sideMenu'

const Main = styled.main`
  scroll-snap-type: y proximity;
  height: 100vh;
  overflow: auto;
  width: 100%;
  grid-area: main;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 20rem 1fr;
  @media (min-width: 1200px) {
    grid-template-areas: 'menu main';
  }
  grid-template-areas: 'main main';
`

const Layout = ({ children, indexlinks }) => {
  const data = useStaticQuery(graphql`
    query background {
      mainImage: file(relativePath: { eq: "sunrise-background01.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 75) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => {
    if (menuOpen) setMenuOpen(false)
  }

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <>
      <GlobalStyle />
      <BackgroundImage
        Tag="section"
        fluid={data.mainImage.childImageSharp.fluid}
        backgroundColor="lightgray"
        fadeIn="soft"
        style={{ overflow: 'hidden' }}
      >
        <Container>
          <SideMenu
            indexlinks={indexlinks}
            menuOpen={menuOpen}
            closeMenu={closeMenu}
            toggleMenu={toggleMenu}
          />
          <Main onClick={closeMenu}>{children}</Main>
        </Container>
      </BackgroundImage>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
