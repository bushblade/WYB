import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Banner from '../components/banner'
import { Section } from '../components/styled'

const About = styled.div`
  max-width: 960px;
  margin: auto;
  padding: 3rem 0;
  color: #404040;
  font-family: 'Quintessential';
  h2 {
    font-size: 2rem;
  }
  p {
    font-size: 1.6rem;
  }
  a {
    text-decoration: none;
    font-weight: 500;
    box-shadow: inset 0 -0.175em rgba(239, 239, 239, 0.7),
      inset 0 -0.25em #555555;
    background: linear-gradient(
      0deg,
      rgba(238, 238, 238, 0) 0%,
      rgba(238, 238, 238, 0) 49%,
      rgba(238, 238, 238, 0) 100%
    );
    :active,
    :visited {
      color: #404040;
    }
    :hover {
      background: linear-gradient(
        0deg,
        rgba(238, 238, 238, 0.9) 0%,
        rgba(238, 238, 238, 0.3) 49%,
        rgba(238, 238, 238, 0) 100%
      );
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
      <Banner title={title} />
      <Section bgcolor="rgba(239, 239, 239, 0.7)">
        <About>
          <h2>Established in June of 2012</h2>
          <p>
            The West Yorkshire Bushcraft group was created in 2012 to bring
            together those interested in Bushcraft and Bushcraft related skills
            in and around West Yorkshire. We are not an organisation, business
            or charity, just a group of like minded individuals looking to share
            skills and experience.{' '}
          </p>
          <h2>What we do</h2>
          <p>
            We are very fortunate to have access to a large area of private
            woodland in which we host regular monthly meets. There is no charge
            to members for attending meets, though donations towards maintenance
            of the group are welcome.
          </p>
          <p>
            For more information or to enquire about becoming a member please
            get in touch with our{' '}
            <a
              href="https://www.facebook.com/groups/westyorkshirebushcraft.official/"
              target="_blank"
              rel="noopener noreferrer"
            >
              online community
            </a>
            , <a href="mailto:westyorkshirebushcraftgroup@gmail.com">email</a>{' '}
            us or fill in the <a href="#/contact">contact form</a> at the bottom
            of the page.
          </p>
          <p>
            Members Galleries The images in the galleries have been taken by our
            members while in attendance of meets, they are usually updated after
            each meet so if you're interested in what we get up to, please have
            a look.
          </p>
        </About>
      </Section>
    </Layout>
  )
}

export default IndexPage
