import React from 'react'
import { TwoColumnContainer, Cell } from '../components/styled'
import ContactForm from '../components/contactform'
import Poem from '../components/Poem'

const Contact = ({ className }) => {
  return (
    <div className={className}>
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

export default Contact
