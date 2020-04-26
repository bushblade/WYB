import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const ImageWrapper = styled.div`
  border-radius: 2px;
  cursor: pointer;
`

const GalleryImage = (link) => ({ index, onClick, photo, margin, key }) => (
  <ImageWrapper
    style={{ margin, height: photo.height, width: photo.width }}
    // onClick={e => onClick(e, { index, photo })}
    key={key}
  >
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div>
        <Img
          fixed={typeof window === 'undefined' ? { src: {} } : undefined}
          fluid={photo.fluid}
        />
      </div>
    </a>
  </ImageWrapper>
)

export default GalleryImage
