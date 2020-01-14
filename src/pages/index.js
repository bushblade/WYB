import React, { useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
// import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Banner from '../components/banner'
import { Section, colours } from '../components/styled'
import About from '../components/About'
import ContactForm from '../components/contactform'
// import Galleries from '../components/Galleries'
import Poem from '../components/Poem'

const scrollTo = ref => () => ref.current.scrollIntoView({ behavior: 'smooth' })

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
