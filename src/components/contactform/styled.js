import styled from 'styled-components'

export const Field = styled.div`
  margin: 0 auto;
  label {
    display: block;
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 0.5em;
  }
  input,
  textarea {
    outline: none;
    padding: 0 2rem;
    border: 1px solid transparent;
    border-radius: 3px;
    font-size: 1rem;
    height: 2.25em;
    line-height: 1.5;
    padding: calc(0.375em - 1px) calc(0.625em - 1px);
    background-color: whitesmoke;
    border-color: ${({ length, valid }) =>
      length === 0 ? '#dbdbdb' : valid ? 'rgb(60, 179, 113)' : '#a94442'};
    color: #363636;
    box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);
    :focus,
    :active {
      outline: none;
      box-shadow: inset 0 1px 5px
        ${({ length, valid }) =>
          length === 0
            ? 'rgba(10, 10, 10, 0.1)'
            : valid
            ? 'rgba(60, 179, 113, 0.5)'
            : 'rgba(169, 68, 66, 0.5)'};
    }
    width: 100%;
  }
  textarea {
    max-height: 600px;
    min-height: 120px;
  }
`

export const BtnField = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 780px) {
    justify-content: space-around;
  }
`
