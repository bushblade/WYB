import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'

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

const Layout = ({ children }) => {
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
          <SideMenu />
          <Main>{children}</Main>
        </Container>
      </BackgroundImage>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
