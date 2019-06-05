import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const galleriesQuery = graphql`
  query galleries {
    campcraft: allFile(filter: { relativeDirectory: { eq: "camp&craft" } }) {
      edges {
        node {
          childImageSharp {
            original {
              width
              height
            }
            fluid {
              ...GatsbyImageSharpFluid
              originalName
              originalImg
            }
          }
        }
      }
    }
    floraforage: allFile(
      filter: { relativeDirectory: { eq: "flora&forage" } }
    ) {
      edges {
        node {
          childImageSharp {
            original {
              width
              height
            }
            fluid {
              ...GatsbyImageSharpFluid
              originalName
              originalImg
            }
          }
        }
      }
    }
    sightsscenery: allFile(
      filter: { relativeDirectory: { eq: "sights&scenery" } }
    ) {
      edges {
        node {
          childImageSharp {
            original {
              width
              height
            }
            fluid {
              ...GatsbyImageSharpFluid
              originalName
              originalImg
            }
          }
        }
      }
    }
    tracktrail: allFile(filter: { relativeDirectory: { eq: "track&trail" } }) {
      edges {
        node {
          childImageSharp {
            original {
              width
              height
            }
            fluid {
              ...GatsbyImageSharpFluid
              originalName
              originalImg
            }
          }
        }
      }
    }
  }
`

const Galleries = () => {
  const query = useStaticQuery(galleriesQuery)
  console.log(query)
  return <div />
}

export default Galleries
