import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Logo from '../components/logo'

const Container = styled.header`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
  h1 {
    font-family: 'Quintessential';
    font-weight: 400;
    margin: 0 0 2.5rem 0;
    padding: 0;
    font-size: 4rem;
    text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.35);
    text-align: center;
    @media (max-width: 800px) {
      font-size: 3rem;
    }
  }
`

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  @media (max-width: 800px) {
    svg {
      width: 50%;
      height: 50%;
    }
  }
`

const IndexPage = () => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(graphql`
    query index {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title={title} />
      <Container>
        <div>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <h1>{title}</h1>
        </div>
      </Container>
    </Layout>
  )
}

export default IndexPage
