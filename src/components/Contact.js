import React from 'react'
import { TwoColumnContainer, Cell } from '../components/styled'
import ContactForm from '../components/contactform'
import styled from 'styled-components'
import Poem from '../components/Poem'
import useIsMobile from '../hooks/useIsMobile'

const Contact = ({ className }) => {
  const mobile = useIsMobile(800)
  return (
    <div className={className}>
      <header>
        <h2>Contact {mobile ? 'WYB' : 'West Yorkshire Bushcraft'}</h2>
        <p>
          For questions, comments and membership enquiries please get in
          touch...
        </p>
      </header>
      <TwoColumnContainer>
        <Cell left>
          <ContactForm />
        </Cell>
        <Cell right>
          <Poem />
        </Cell>
      </TwoColumnContainer>
    </div>
  )
}

export default styled(Contact)`
  header {
    width: 100%;
    height: 100%;
    padding: 0 2rem 1rem 2rem;
    @media (min-width: 1000px) {
      padding: 0 3rem 1rem 3rem;
    }
  }
`
