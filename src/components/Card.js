import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Card = ({ image, className, title }) => (
  <div className={className}>
    <Img fluid={image.childImageSharp.fluid} title={title} alt={title} />
    {title}
  </div>
)

export default styled(Card)`
  margin: 2rem;
`
