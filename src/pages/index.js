import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Banner from '../components/banner'
import { Section, colours } from '../components/styled'
import About from '../components/About'
import ContactForm from '../components/contactform'
// import Galleries from '../components/Galleries'
// import Poem from '../components/Poem'

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
  const contactRef = useRef(null)
  const aboutRef = useRef(null)
  // const galleryRef = useRef(null)

  return (
    <Layout>
      <SEO title={title} />
      <Banner title={title} scrollToAbout={scrollTo(aboutRef)} />
      <Section bgcolor={colours.lowOpacityWhite} ref={aboutRef}>
        <About scrollToContact={scrollTo(contactRef)} />
      </Section>

      <Section ref={contactRef} bgcolor={colours.lowOpacityLightGrey}>
        <ContactForm />
      </Section>
    </Layout>
  )
}

export default IndexPage
