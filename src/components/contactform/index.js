import React, { useState } from 'react'

import Button from './Button'
import { Field, BtnField, Form } from './styled'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const CheckValid = (...fields) =>
  fields.every(({ text, regex }) => regex.test(text))

// Component
const ContactForm = ({ setMessageSent }) => {
  const [name, setName] = useState({
    text: '',
    valid: false,
    regex: /\S/,
  })
  const [email, setEmail] = useState({
    text: '',
    valid: false,
    regex: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
  })
  const [message, setMessage] = useState({
    text: '',
    valid: false,
    regex: /\S/,
  })

  const handleSubmit = e => {
    if (CheckValid(name, email, message)) {
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
            // setMessageSent(true)
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
    state.regex.test(value)
      ? setState({ ...state, valid: true, text: value })
      : setState({ ...state, valid: false, text: value })
  }

  return (
    <Form
      onSubmit={handleSubmit}
      data-netlify="true"
      name="contact"
      method="post"
    >
      <input type="hidden" name="Form-name" value="contact" />
      <Field valid={name.valid} length={name.text.length}>
        <label>Your Name: </label>
        <input
          type="text"
          name="name"
          value={name.text}
          placeholder="Your Name"
          onChange={handleChange(name, setName)}
        />
      </Field>
      <Field valid={email.valid} length={email.text.length}>
        <label>Your Email: </label>
        <input
          type="email"
          name="email"
          value={email.text}
          placeholder="you@youremail.com"
          onChange={handleChange(email, setEmail)}
        />
      </Field>
      <Field valid={message.valid} length={message.text.length}>
        <label>Message: </label>
        <textarea
          name="message"
          value={message.text}
          placeholder="What do you want to say?"
          onChange={handleChange(message, setMessage)}
        />
      </Field>
      <BtnField>
        <Button type="submit" disabled={!CheckValid(name, email, message)}>
          Send Message
        </Button>
        <Button onClick={clearForm}>Clear Form</Button>
      </BtnField>
    </Form>
  )
}

export default ContactForm
