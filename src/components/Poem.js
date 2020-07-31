import React from 'react'
import styled from 'styled-components'

const Poem = ({ className }) => {
  return (
    <div className={className}>
      <p>
        A place to come to fulfil desires <br />
        To meet the kind folk and be inspired.
      </p>
      <p>
        Those that like to rest and stare, <br />
        Them that come to give and share,
        <br />
        Some to feel the earth laid bare, <br />
        others just want to show they care.
      </p>
      <p>
        And when they gather within the carr,
        <br />
        Blessed they are by sun, moon,
        <br />
        and star. The monthly meet aligns an ancient rhythm,
        <br />
        A universal heart,
        <br />
        nature beats within them.
      </p>
      <p>6.6.19 NB</p>
    </div>
  )
}

export default styled(Poem)`
  width: 100%;
  font-size: 1.5rem;
  padding: 1.5rem;
  @media (max-width: 1000px) {
    margin-bottom: 3rem;
  }
`
