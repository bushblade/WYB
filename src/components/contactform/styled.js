import styled from 'styled-components'

import { colours } from '../styled'

export const Field = styled.div`
  margin: 0 auto;
  label {
    display: block;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0.5em;
  }
  input,
  textarea {
    padding: calc(0.375em - 1px) calc(0.625em - 1px);
    height: 2.25em;
    font-family: 'Lora', cursive;
    font-size: 1.3rem;
    line-height: 1.5;
    outline: none;
    background-color: ${colours.lowOpacityWhite};
    border: 0.15rem solid ${colours.darkGrey};
    border-radius: 0.5rem;
    border-color: ${({ length, valid }) =>
      length === 0
        ? colours.darkGrey
        : valid
        ? colours.lowOpacityGreen
        : '#a94442'};
    color: #363636;
    box-shadow: inset 0 1px 5px rgba(10, 10, 10, 0.5);
    :focus,
    :active {
      outline: none;
      box-shadow: inset 0 1px 5px
        ${({ length, valid }) =>
          length === 0
            ? 'rgba(10, 10, 10, 0.1)'
            : valid
            ? colours.green
            : 'rgba(169, 68, 66, 0.5)'};
    }
    width: 100%;
  }
  textarea {
    max-height: 600px;
    min-height: 200px;
  }
`

export const Form = styled.form`
  max-width: 800px;
  margin: auto;
  padding: 3rem 1.5rem;
`

export const BtnField = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
