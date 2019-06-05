import React, { useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
// import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Banner from '../components/banner'
import { Section } from '../components/styled'
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

  return (
    <Layout>
      <SEO title={title} />
      <Banner title={title} aboutRef={aboutRef} />
      <Section bgcolor="rgba(239, 239, 239, 0.7)" ref={aboutRef}>
        <About contactRef={contactRef} />
      </Section>
      <Section>Maybe a gallery</Section>
      <Section ref={contactRef}>
        <ContactForm />
      </Section>
    </Layout>
  )
}

export default IndexPage
