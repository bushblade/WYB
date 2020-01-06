import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ContactForm from '../components/contactform'
import { Section } from '../components/styled'

const ContactPage = () => (
  <Layout>
    <SEO title="contact" />
    <Section>
      <ContactForm />
    </Section>
  </Layout>
)

export default ContactPage
