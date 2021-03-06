import React, { useState } from 'react'

import Button from './Button'
import { Field, BtnField, Form } from './styled'
import { colours } from '../styled'
import MessageSuccess from './MessageSuccess'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const CheckValid = (...fields) =>
  fields.every(({ text, regex }) => regex.test(text))

// Component
const ContactForm = () => {
  const [sent, setSent] = useState(false)
  const [name, setName] = useState({
    text: '',
    valid: false,
    regex: /\S/,
  })
  const [email, setEmail] = useState({
    text: '',
    valid: false,
    // eslint-disable-next-line
    regex: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
  })
  const [message, setMessage] = useState({
    text: '',
    valid: false,
    regex: /\S/,
  })

  const handleSubmit = e => {
    if (CheckValid(name, email, message) && !sent) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          name: name.text,
          email: email.text,
          message: message.text,
        }),
      })
        .then(res => {
          if (res.ok) {
            clearForm()
            setSent(true)
          } else {
            throw Error(
              'something went horribly wrong! Your message was not sent!'
            )
          }
        })
        .catch(error => alert(error))
    }
    e.preventDefault()
  }

  const clearForm = () => {
    setName({ ...name, text: '' })
    setEmail({ ...email, text: '' })
    setMessage({ ...message, text: '' })
  }

  const handleChange = (state, setState) => ({ target: { value } }) => {
    setState({ ...state, valid: state.regex.test(value), text: value })
  }

  return !sent ? (
    <Form
      onSubmit={handleSubmit}
      data-netlify="true"
      name="contact"
      method="post"
    >
      <input type="hidden" name="Contact" value="contact" disabled={sent} />
      <Field valid={name.valid} length={name.text.length}>
        <label htmlFor="name">Your Name: </label>
        <input
          type="text"
          name="name"
          value={name.text}
          placeholder="Your Name"
          onChange={handleChange(name, setName)}
        />
      </Field>
      <Field valid={email.valid} length={email.text.length}>
        <label htmlFor="email">Your Email: </label>
        <input
          type="email"
          name="email"
          value={email.text}
          placeholder="you@youremail.com"
          onChange={handleChange(email, setEmail)}
          disabled={sent}
        />
      </Field>
      <Field valid={message.valid} length={message.text.length}>
        <label htmlFor="message">Message: </label>
        <textarea
          name="message"
          value={message.text}
          placeholder="What do you want to say?"
          onChange={handleChange(message, setMessage)}
          maxLength="200"
          disabled={sent}
        />
      </Field>
      <BtnField>
        <Button
          color={colours.darkGrey}
          type="submit"
          disabled={!CheckValid(name, email, message) || sent}
        >
          Send Message
        </Button>
        <Button color={colours.darkGrey} onClick={clearForm}>
          Clear Form
        </Button>
      </BtnField>
    </Form>
  ) : (
    <MessageSuccess />
  )
}

export default ContactForm
