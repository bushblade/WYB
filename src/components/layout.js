import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import { GlobalStyle } from './styled'

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
    <div>
      <GlobalStyle />
      <BackgroundImage
        Tag="section"
        fluid={data.mainImage.childImageSharp.fluid}
        backgroundColor="lightgray"
        fadeIn="soft"
        style={{
          minHeight: '100vh',
        }}
      >
        {children}
      </BackgroundImage>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
