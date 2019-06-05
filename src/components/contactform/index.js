import React, { useState } from 'react'

import Button from './Button'
import { Field, BtnField } from './styled'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const ContactForm = ({ setMessageSent }) => {
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

  const CheckValid = () =>
    [name, email, message].every(({ text, regex }) => regex.test(text))

  const handleSubmit = e => {
    if (CheckValid()) {
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

  const handleChange = (value, field, set) => {
    field.regex.test(value)
      ? set({ ...field, valid: true, text: value })
      : set({ ...field, valid: false, text: value })
  }

  return (
    <form
      onSubmit={handleSubmit}
      data-netlify="true"
      name="contact"
      method="post"
    >
      <input type="hidden" name="form-name" value="contact" />
      <Field valid={name.valid} length={name.text.length}>
        <label>Your Name: </label>
        <input
          type="text"
          name="name"
          value={name.text}
          placeholder="Your Name"
          onChange={({ target: { value } }) =>
            handleChange(value, name, setName)
          }
        />
      </Field>
      <Field valid={email.valid} length={email.text.length}>
        <label>Your Email: </label>
        <input
          type="email"
          name="email"
          value={email.text}
          placeholder="you@youremail.com"
          onChange={({ target: { value } }) =>
            handleChange(value, email, setEmail)
          }
        />
      </Field>
      <Field valid={message.valid} length={message.text.length}>
        <label>Message: </label>
        <textarea
          name="message"
          value={message.text}
          placeholder="What do you want to say?"
          onChange={({ target: { value } }) =>
            handleChange(value, message, setMessage)
          }
        />
      </Field>
      <BtnField>
        <Button type="submit" disabled={!CheckValid()}>
          Send Message
        </Button>
        <Button onClick={clearForm}>Clear Form</Button>
      </BtnField>
    </form>
  )
}

export default ContactForm
