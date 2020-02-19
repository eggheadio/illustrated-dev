import React from 'react'
import { css } from '@emotion/core'
import { bpMinSM } from '../../utils/breakpoints'

const FourImageGrid = props => {
  return (
    <>
      <div
        css={css({
          [bpMinSM]: {
            gridTemplateColumns: 'repeat(3, 1fr)',
          },
          gridTemplateColumns: 'repeat(2, 1fr)',
          display: 'grid',
          gridGap: '26px',
          padding: '20px 0px',
          img: {
            maxWidth: '100%',
            gridAutoFlow: 'row',
            padding: '6px',
          },
        })}>
        {props.children}
      </div>
    </>
  )
}

export default FourImageGrid
