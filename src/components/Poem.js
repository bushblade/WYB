import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Quote } from './styled'
import { colours, Cell, TwoColumnContainer } from './styled'

const imageQuery = graphql`
  query poemimages {
    desire: file(relativePath: { eq: "fireshroom.jpg" }) {
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
`

const Poem = ({ className }) => {
  const data = useStaticQuery(imageQuery)
  console.log(data)
  return (
    <div className={className}>
      <TwoColumnContainer>
        <Cell area="left">
          <Quote>
            "A place to come to fulfil desires, <br /> To meet the kind folk and
            be inspired."
          </Quote>
        </Cell>
        <Cell area="right">
          <Img
            style={{ width: '100%', height: '100%' }}
            fluid={data.desire.childImageSharp.fluid}
          />
        </Cell>
      </TwoColumnContainer>
      <TwoColumnContainer area="left" reverseMobile>
        <Cell area="left">Image</Cell>
        <Cell area="right">
          <Quote>
            "Those that like to rest and stare,
            <br />
            Them that come to give and share,
            <br />
            Some to feel the earth laid bare,
            <br />
            others just want to show they care."
          </Quote>
        </Cell>
      </TwoColumnContainer>
      <TwoColumnContainer area="left">
        <Cell area="left">
          <Quote>
            "And when they gather within the carr,
            <br />
            Blessed they are by sun, moon, and star.
            <br />
            The monthly meet aligns an ancient rhythm,
            <br />A universal heart, nature beats within them."
          </Quote>
        </Cell>
        <Cell area="right">Image</Cell>
      </TwoColumnContainer>
      <TwoColumnContainer area="left" reverseMobile>
        <Cell area="left">Image</Cell>
        <Cell area="right">
          <Quote>
            "The woodpecker knocked to the splitting of wood,
            <br />
            The songbirds smile sang for they knew it was good. <br />
            The trees looked down as they too understood,
            <br />
            Then the night embraced them as it should."
          </Quote>
        </Cell>
      </TwoColumnContainer>
    </div>
  )
}

export default styled(Poem)`
  color: ${colours.darkGrey};
  Quote {
    font-size: 1.5rem;
    text-align: center;
  }
`
