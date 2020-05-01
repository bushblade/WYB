import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Card = ({ image, className, title, link }) => (
  <div className={className}>
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Img fluid={image.childImageSharp.fluid} title={title} alt={title} />
    </a>
    <h3>{title}</h3>
  </div>
)

export default styled(Card)`
  margin: 1rem;
  padding: 1rem 1rem 0 1rem;
  background: white;
  border-radius: 0.2rem;
  box-shadow: 0px 0px 89px -17px rgba(0, 0, 0, 0.5);
  transition: all 0.2s ease-in-out;
  will-change: transform;
  &:hover {
    box-shadow: 0px 0px 89px -17px rgba(0, 0, 0, 0.75);
    transform: translate3d(0, -5px, 0) scale(1.01);
  }

  h3 {
    text-align: center;
    margin: 0;
    padding: 1rem;
  }
`
