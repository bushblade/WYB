import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import { colours } from './styled'

const query = graphql`
  query poemimages {
    left: allFile(filter: { relativeDirectory: { eq: "camp&craft" } }) {
      edges {
        node {
          publicURL
          id
        }
      }
    }
    right: allFile(filter: { relativeDirectory: { eq: "flora&forage" } }) {
      edges {
        node {
          publicURL
          id
        }
      }
    }
  }
`

const Poem = ({ className }) => {
  const {
    left: { edges: leftImages },
    right: { edges: rightImages },
  } = useStaticQuery(query)
  console.log(leftImages)
  return (
    <main className={className}>
      <div className="left">
        {leftImages.map(({ node: { publicURL, id } }) => (
          <img src={publicURL} key={id} />
        ))}
      </div>
      <div className="center">
        <div className="poem">
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
      </div>
      <div className="right">
        {rightImages.map(({ node: { publicURL, id } }) => (
          <img src={publicURL} key={id} />
        ))}
      </div>
    </main>
  )
}

export default styled(Poem)`
  margin: auto;
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1.5fr 1fr;
  }
  color: ${colours.darkGrey};
  font-size: 1.5rem;
  blockquote {
    margin: 1rem 0;
    text-align: center;
    white-space: nowrap;
    line-height: 2.5rem;
  }
  .center {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  .left,
  .right {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: calc((90vh - 2.5rem) / 6);
    grid-gap: 0.5rem;
    justify-items: center;
    align-content: center;
    img {
      height: 100%;
    }
  }

  .center {
    justify-content: center;
  }
`
