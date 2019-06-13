import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Gallery from 'react-photo-gallery'

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

const ImageWrapper = styled.div`
  box-shadow: -1px 3px 6px 1px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease-in-out;
  border-radius: 2px;
  overflow: hidden;
  cursor: zoom-in;
  div {
    transition: transform 2s;
  }
  :hover {
    box-shadow: -2px 5px 8px 2px rgba(0, 0, 0, 0.3);
    div {
      transform: scale(1.05);
    }
  }
`

const GatsbyImage = ({ index, onClick, photo, margin }) => (
  <ImageWrapper
    style={{ margin, height: photo.height, width: photo.width }}
    // onClick={e => onClick(e, { index, photo })}
  >
    <div>
      <Img
        fixed={typeof window === 'undefined' ? { src: {} } : undefined}
        fluid={photo.fluid}
      />
    </div>
  </ImageWrapper>
)

const extractPhotos = ({ edges }) =>
  edges.map(({ node: { childImageSharp: { fluid, original } } }) => ({
    height: original.height,
    width: original.width,
    src: fluid.originalImg,
    fluid,
  }))

const Galleries = () => {
  const data = useStaticQuery(galleriesQuery)

  return (
    <div>
      <Gallery
        photos={extractPhotos(data.campcraft)}
        renderImage={GatsbyImage}
        margin={5}
      />
      <Gallery
        photos={extractPhotos(data.floraforage)}
        renderImage={GatsbyImage}
        margin={5}
      />
      <Gallery
        photos={extractPhotos(data.tracktrail)}
        renderImage={GatsbyImage}
        margin={5}
      />
      <Gallery
        photos={extractPhotos(data.sightsscenery)}
        renderImage={GatsbyImage}
        margin={5}
      />
    </div>
  )
}

export default Galleries
