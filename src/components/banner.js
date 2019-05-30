import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Logo from './logo'

const Container = styled.header`
  min-height: 100vh;
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
  width: 100%;
`

const Title = styled.h1`
  font-family: 'Quintessential';
  font-weight: 400;
  margin: 0;
  padding: 0;
  font-size: 4rem;
  text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.35);
  text-align: center;
`

const SVGwrapper = styled.div`
  display: flex;
  justify-content: center;
`

const BannerWrapper = styled.div``

const Banner = () => {
  const data = useStaticQuery(graphql`
    query bannerQuery {
      site {
        siteMetadata {
          title
        }
      }
      mainImage: file(relativePath: { eq: "sunrise-background01.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 75, grayscale: true) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Container>
      <BannerWrapper>
        <Img
          fluid={data.mainImage.childImageSharp.fluid}
          alt="sunrise"
          style={{ objectFit: 'cover' }}
        />
      </BannerWrapper>
      <div>
        <SVGwrapper>
          <Logo />
        </SVGwrapper>
        <Title>{data.site.siteMetadata.title}</Title>
      </div>
    </Container>
  )
}

export default Banner
