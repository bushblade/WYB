import React, { useState, useEffect, useRef, Fragment } from 'react'
import { useTransition, animated, config } from 'react-spring'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  max-height: 100vh;
  width: 100%;
  overflow: hidden;
  border: none;
  border-radius: 0.5rem;
  justify-content: flex-end;
  .gatsby-image-wrapper {
    min-width: 300px;
    width: 100%;
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

const ImageSwitcher = props => {
  const images = useStaticQuery(query).allFile.edges.map(({ node }) => node)

  const [index, setIndex] = useState(0)

  const transitions = useTransition(
    images[index],
    image => image.childImageSharp.fluid.originalName,
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
        setIndex(state => {
          const next = state + 1
          return next === images.length ? 0 : next
        }),
      4000
    )
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <Fragment>
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
            height: '100%',
          }}
        >
          <ImageContainer ref={imageRef}>
            <Img fluid={item.childImageSharp.fluid} />
          </ImageContainer>
        </animated.div>
      ))}
    </Fragment>
  )
}

export default ImageSwitcher
