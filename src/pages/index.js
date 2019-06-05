import React, { useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
// import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Banner from '../components/banner'
import { Section, TwoColumnContainer, colours } from '../components/styled'
import About from '../components/About'
import ContactForm from '../components/contactform'

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
  const galleryRef = useRef(null)

  return (
    <Layout>
      <SEO title={title} />
      <Banner title={title} aboutRef={aboutRef} />
      <Section bgcolor={colours.lowOpacityWhite} ref={aboutRef}>
        <About contactRef={contactRef} />
      </Section>
      <Section ref={galleryRef} bgcolor={colours.lowOpacityWhite}>
        Maybe a gallery
      </Section>
      <Section ref={contactRef} bgcolor={colours.lowOpacityLightGrey}>
        <TwoColumnContainer>
          <ContactForm />
          <div style={{ textAlign: 'center' }}>
            social links
            <ul>
              <li>Facebook</li>
              <li>YouTube</li>
              <li>Email</li>
            </ul>
          </div>
        </TwoColumnContainer>
      </Section>
    </Layout>
  )
}

export default IndexPage
