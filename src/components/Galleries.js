import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { TwoColumnContainer, Cell } from '../components/styled'
import Card from './Card'

const galleriesQuery = graphql`
  query galleryimages {
    campcraft: file(relativePath: { eq: "camp&craft.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          originalName
          ...GatsbyImageSharpFluid
        }
      }
    }
    floraforage: file(relativePath: { eq: "flora&forage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          originalName
          ...GatsbyImageSharpFluid
        }
      }
    }
    tracktrail: file(relativePath: { eq: "track&trail.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          originalName
          ...GatsbyImageSharpFluid
        }
      }
    }
    sitescene: file(relativePath: { eq: "sites&scenery.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          originalName
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Heading = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem;
`

const Galleries = () => {
  const data = useStaticQuery(galleriesQuery)
  return (
    <>
      <Heading>
        <h2>Members Galleries</h2>
        <p>
          The images in the galleries have been taken by our members while in
          attendance of meets, they are usually updated after each meet so if
          you're interested in what we get up to, please have a look.
        </p>
      </Heading>
      <TwoColumnContainer>
        <Cell left>
          <Card image={data.campcraft} title="Camp & Craft" />
          <Card image={data.floraforage} title="Flora, Fungi & Forage" />
        </Cell>
        <Cell right>
          <Card image={data.tracktrail} title="Track & Trail" />
          <Card image={data.sitescene} title="Sites & Scenery" />
        </Cell>
      </TwoColumnContainer>
    </>
  )
}

export default Galleries
