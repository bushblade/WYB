import React, { useState, useEffect, useRef } from 'react'
import { useTransition, animated, config } from 'react-spring'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { mobileBreakPoint } from '../components/styled'

const ImageContainer = styled.div`
  position: relative;
  margin: auto;
  height: 100%;
  overflow: hidden;
  border: none;
  border-radius: 0.5rem;
  .gatsby-image-wrapper {
    min-width: 300px;
    width: 100%;
  }
  @media (min-width: ${mobileBreakPoint}) {
    width: 90%;
  }
`
const query = graphql`
  query images {
    allFile(filter: { relativeDirectory: { eq: "switcher" } }) {
      edges {
        node {
          childImageSharp {
            original {
              width
              height
            }
            fluid(maxWidth: 800, quality: 75) {
              ...GatsbyImageSharpFluid_withWebp
              originalName
              originalImg
            }
          }
        }
      }
    }
  }
`

const ImageSwitcher = () => {
  const images = useStaticQuery(query).allFile.edges.map(({ node }) => node)

  const [index, setIndex] = useState(0)

  const transitions = useTransition(
    images[index],
    (image) => image.childImageSharp.fluid.originalName,
    {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      config: config.molasses,
    }
  )

  const imageRef = useRef()

  useEffect(() => {
    let interval = setInterval(
      () =>
        setIndex((state) => {
          const next = state + 1
          return next === images.length ? 0 : next
        }),
      4000
    )
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div style={{ position: 'relative' }}>
      <ImageContainer>
        <Img
          fluid={images[0].childImageSharp.fluid}
          style={{ visibility: 'hidden' }}
        />
      </ImageContainer>
      {transitions.map(({ item, props, key }) => (
        <animated.div
          key={key}
          style={{
            ...props,
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
          }}
        >
          <ImageContainer ref={imageRef}>
            <Img fluid={item.childImageSharp.fluid} />
          </ImageContainer>
        </animated.div>
      ))}
    </div>
  )
}

export default ImageSwitcher
