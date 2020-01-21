import React from 'react'
import { css } from '@emotion/core'
import { bpMinMD } from '../../utils/breakpoints'

const TwoCol = props => {
  return (
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
  )
}

export default TwoCol
