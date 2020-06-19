import React, { useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Banner from '../components/banner'
import { Section, colours } from '../components/styled'
import About from '../components/About'
import ContactForm from '../components/contactform'
import Galleries from '../components/Galleries'

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

  const indexlinks = [
    { to: 'About', scrollto: scrollTo(aboutRef) },
    { to: 'Galleries', scrollto: scrollTo(galleryRef) },
    { to: 'Contact', scrollto: scrollTo(contactRef) },
  ]

  return (
    <Layout indexlinks={indexlinks}>
      <SEO title={title} />
      <Banner title={title} scrollToAbout={scrollTo(aboutRef)} />
      <Section bgcolor={colours.lowOpacityWhite} ref={aboutRef}>
        <About scrollToContact={scrollTo(galleryRef)} />
      </Section>
      <Section ref={galleryRef} bgcolor={colours.lowOpacityWhite}>
        <Galleries />
      </Section>

      <Section
        ref={contactRef}
        bgcolor={`linear-gradient(45deg, ${colours.lowOpacityDarkGrey} 0%, ${colours.lowOpacityLightGrey} 100%)`}
      >
        <ContactForm />
      </Section>
    </Layout>
  )
}

export default IndexPage
