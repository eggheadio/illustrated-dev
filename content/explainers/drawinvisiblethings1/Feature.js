import React from 'react'
import { css } from '@emotion/core'
import { bpMinMD } from '../../../src/utils/breakpoints.js'

const Feature = props => {
  return (
    <>
      <a href={props.url}>
        <h3>{props.name}</h3>
      </a>
      <div
        css={css({
          [bpMinMD]: { gridTemplateColumns: '1fr 1fr' },
          gridTemplateColumns: '1fr',
          display: 'grid',
          gridGap: '20px',
          img: {
            maxWidth: '100%',
          },
        })}>
        {props.children}
      </div>
    </>
  )
}

export default Feature
