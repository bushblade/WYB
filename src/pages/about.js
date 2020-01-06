import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import {
  Section,
  TwoColumnContainer,
  Cell,
  ImgContainer,
} from '../components/styled'

const query = graphql`
  query aboutImages {
    night: file(relativePath: { eq: "night.jpg" }) {
      childImageSharp {
        id
        fluid(maxWidth: 1000, quality: 75) {
          ...GatsbyImageSharpFluid
          srcWebp
          src
        }
      }
    }
    shroom: file(relativePath: { eq: "fireshroom.jpg" }) {
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

const AboutPage = () => {
  const { night, shroom } = useStaticQuery(query)
  return (
    <Layout>
      <SEO title="about" />
      <Section>
        <TwoColumnContainer>
          <Cell left hastext>
            <div>
              <h2>Established in June of 2012</h2>
              <p>
                The West Yorkshire Bushcraft group was created in 2012 to bring
                together those interested in Bushcraft and Bushcraft related
                skills in and around West Yorkshire. We are not an organisation,
                business or charity, just a group of like minded individuals
                looking to share skills and experience.{' '}
              </p>
              <h2>What we do</h2>
              <p>
                We are very fortunate to have access to a large area of private
                woodland in which we host regular monthly meets. There is no
                charge to members for attending meets, though donations towards
                maintenance of the group are welcome.
              </p>
              <p>
                For more information or to enquire about becoming a member
                please get in touch with our{' '}
                <a
                  href="https://www.facebook.com/groups/westyorkshirebushcraft.official/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  online community
                </a>
                ,{' '}
                <a href="mailto:westyorkshirebushcraftgroup@gmail.com">email</a>{' '}
                us or fill in the contact form at the bottom of the page.
              </p>
            </div>
          </Cell>
          <Cell right>
            <ImgContainer>
              <Img
                fluid={night.childImageSharp.fluid}
                style={{ margin: '1rem', maxHeight: 'calc(50vh - 4rem)' }}
                imgStyle={{ objectFit: 'contain' }}
              />
              <Img
                fluid={shroom.childImageSharp.fluid}
                style={{ margin: '1rem', maxHeight: 'calc(50vh - 4rem)' }}
                imgStyle={{ objectFit: 'contain' }}
              />
            </ImgContainer>
          </Cell>
        </TwoColumnContainer>
      </Section>
    </Layout>
  )
}

export default AboutPage
