import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import styled from 'styled-components'
import Gallery from 'react-photo-gallery'

import { TwoColumnContainer } from '../components/styled'
import GalleryImage from './GalleryImage'

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

const extractPhotos = ({ edges }) =>
  edges.map(({ node: { childImageSharp: { fluid, original } } }) => ({
    height: original.height,
    width: original.width,
    src: fluid.originalImg,
    fluid,
  }))

const HOCGallery = ({ images, link }) => {
  return (
    <Gallery
      photos={extractPhotos(images)}
      renderImage={GalleryImage(link)}
      margin={2}
      targetRowHeight={190}
    />
  )
}

const Galleries = () => {
  const data = useStaticQuery(galleriesQuery)

  return (
    <div>
      <TwoColumnContainer>
        <HOCGallery
          images={data.campcraft}
          link="https://goo.gl/photos/wGSAgVFW6YDDPYYd7"
        />
        <HOCGallery
          images={data.floraforage}
          link="https://goo.gl/photos/wCNEi12U9jRWwuE7A"
        />
        <HOCGallery
          images={data.tracktrail}
          link="https://goo.gl/photos/fNRV85FotBS543Qm8"
        />
        <HOCGallery
          images={data.sightsscenery}
          link="https://goo.gl/photos/vEZtXPgDppAqMWEf9"
        />
      </TwoColumnContainer>
    </div>
  )
}

export default Galleries
