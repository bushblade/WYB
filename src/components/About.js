import React from 'react'
// import Img from 'gatsby-image'
// import Logo from '../images/WYB-logo-web-plain.svg'
// import Img from 'gatsby-image'
import styled from 'styled-components'

import { TwoColumnContainer, Cell } from './styled'
import ImageSwitcher from './ImageSwitcher'

const About = ({ className }) => {
  return (
    <div className={className}>
      <TwoColumnContainer gap="3rem">
        <Cell left>
          <article>
            <h2>Established June 2012</h2>
            <p>
              The West Yorkshire Bushcraft group was created in 2012 to bring
              together those interested in Bushcraft and Bushcraft related
              skills in and around West Yorkshire. We are not an organization,
              business or charity, just a group of like minded individuals
              looking to share skills and experience.{' '}
            </p>
          </article>
          <article>
            <h2>What we do</h2>
            <p>
              We are very fortunate to have access to a large area of private
              woodland in which we host regular monthly meets. There is no
              charge to members for attending meets, though donations towards
              maintenance of the group are welcome.
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
              ,{' '}
              <a href="mailto:westyorkshirebushcraftgroup@gmail.com">
                email us
              </a>{' '}
              or fill in the contact form at the bottom of the page.
            </p>
          </article>
        </Cell>
        <Cell right>
          <ImageSwitcher />
        </Cell>
      </TwoColumnContainer>
    </div>
  )
}

export default styled(About)`
  display: flex;
  align-items: center;
  height: 100%;
`
