import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import styled from 'styled-components'

import { TwoColumnContainer } from '../components/styled'

const galleriesQuery = graphql`
  query galleryimages {
    campcraft: file(relativePath: { eq: "camp&craft.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 1000) {
          originalName
          ...GatsbyImageSharpFluid
        }
      }
    }
    floraforage: file(relativePath: { eq: "flora&forage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 1000) {
          originalName
          ...GatsbyImageSharpFluid
        }
      }
    }
    tracktrail: file(relativePath: { eq: "track&trail.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 1000) {
          originalName
          ...GatsbyImageSharpFluid
        }
      }
    }
    sitescene: file(relativePath: { eq: "sites&scenery.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 1000) {
          originalName
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Galleries = () => {
  return (
    <div>
      <TwoColumnContainer>images here</TwoColumnContainer>
    </div>
  )
}

export default Galleries
