import React from 'react'
import Link from '../../../src/components/Link.js'
import { css } from '@emotion/core'
import { bpMinMD } from '../../../src/utils/breakpoints.js'

const Feature = props => {
  return (
    <span
      css={css({
        [bpMinMD]: {
          gridTemplateColumns: '40% 60%',
        },
        marginTop: '60px',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridGap: '30px',
        img: {
          maxWidth: '100%',
          borderRadius: '5px',
        },
      })}>
      <div>
        <Link to={props.sourceURL}>
          <h5>{props.sourceTitle}</h5>
        </Link>
        <p>{props.children}</p>
      </div>
      <img src={props.imageURL} />
    </span>
  )
}

export default Feature
