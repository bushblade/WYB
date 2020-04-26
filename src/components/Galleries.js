import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
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

const Card = styled.div``

const Galleries = () => {
  const data = useStaticQuery(galleriesQuery)
  return (
    <TwoColumnContainer>
      <div>
        <Img fluid={data.campcraft.childImageSharp.fluid} />
        <Img fluid={data.floraforage.childImageSharp.fluid} />
      </div>
      <div>
        <Img fluid={data.tracktrail.childImageSharp.fluid} />
        <Img fluid={data.sitescene.childImageSharp.fluid} />
      </div>
    </TwoColumnContainer>
  )
}

export default Galleries
