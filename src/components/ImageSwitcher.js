import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const ImageContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .gatsby-image-wrapper {
    min-width: 300px;
    width: 100%;
    max-height: 86vh;
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

  useEffect(() => {
    let interval = setInterval(
      () =>
        setIndex(state => {
          const next = state + 1
          return next === images.length ? 0 : next
        }),
      4000
    )
    return clearInterval(interval)
  }, [])

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
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
          <ImageContainer>
            <Img fluid={item.childImageSharp.fluid} />
          </ImageContainer>
        </animated.div>
      ))}
    </div>
  )
}

export default ImageSwitcher
