import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import {
  colours,
  DownButton,
  TwoColumnContainer,
  Cell,
  ImgContainer,
} from './styled'

const query = graphql`
  query poemImages {
    mike: file(relativePath: { eq: "mikefire.jpg" }) {
      childImageSharp {
        id
        fluid(maxWidth: 1000, quality: 75) {
          ...GatsbyImageSharpFluid
          srcWebp
          src
        }
      }
    }
    parachute: file(relativePath: { eq: "parachute.jpg" }) {
      childImageSharp {
        id
        fluid(maxWidth: 1000, quality: 75) {
          ...GatsbyImageSharpFluid
          srcWebp
          src
        }
      }
    }
  }
`

const Poem = ({ className }) => {
  const { mike, parachute } = useStaticQuery(query)
  return (
    <div className={className}>
      <TwoColumnContainer reverseOnMobile>
        <Cell left>
          <ImgContainer>
            <Img
              fluid={mike.childImageSharp.fluid}
              style={{ margin: '1rem', maxHeight: 'calc(50vh - 4rem)' }}
              imgStyle={{ objectFit: 'contain' }}
            />
            <Img
              fluid={parachute.childImageSharp.fluid}
              style={{ margin: '1rem', maxHeight: 'calc(50vh - 4rem)' }}
              imgStyle={{ objectFit: 'contain' }}
            />
          </ImgContainer>
        </Cell>
        <Cell right>
          <div style={{ margin: 'auto' }}>
            <blockquote>
              A place to come to fulfil desires
              <br />
              To meet the kind folk and be inspired.
            </blockquote>
            <blockquote>
              Those that like to rest and stare,
              <br />
              Them that come to give and share,
              <br />
              Some to feel the earth laid bare,
              <br />
              others just want to show they care.
            </blockquote>
            <blockquote>
              And when they gather within the carr,
              <br />
              Blessed they are by sun, moon, and star.
              <br />
              The monthly meet aligns an ancient rhythm,
              <br />A universal heart, nature beats within them.
            </blockquote>
            <blockquote>
              The woodpecker knocked to the splitting of wood,
              <br /> The songbirds smile sang for they knew it was good.
              <br />
              The trees looked down as they too understood,
              <br />
              Then the night embraced them as it should.
            </blockquote>
            <blockquote>6.6.19 NB</blockquote>
          </div>
        </Cell>
      </TwoColumnContainer>
    </div>
  )
}

export default styled(Poem)`
  width: 100%;
  color: ${colours.darkGrey};
  font-size: 1.5rem;
  blockquote {
    margin: 1rem 0;
    text-align: center;
    white-space: nowrap;
    line-height: 2.5rem;
  }
`
