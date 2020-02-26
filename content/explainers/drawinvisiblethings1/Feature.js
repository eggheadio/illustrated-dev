import React from 'react'
import Link from '../../../src/components/Link.js'
import { css } from '@emotion/core'
import { bpMinMD } from '../../../src/utils/breakpoints.js'

const Feature = props => {
  return (
    <span
      css={css({
        display: 'grid',
        gridTemplateColumns: '60% 40%',
        gridGap: '30px',
        img: {
          maxWidth: '100%',
          marginBottom: '30px',
        },
      })}>
      <img src={props.imageURL} />
      <div>
        <Link to={props.sourceURL}>
          <h6>{props.sourceTitle}</h6>
        </Link>
        <p>{props.children}</p>
      </div>
    </span>
  )
}

export default Feature
