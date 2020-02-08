import React from 'react'
import { css } from '@emotion/core'
import { bpMinMD } from '../../utils/breakpoints'

const ImageGrid = props => {
  return (
    <>
      <div
        css={css({
          [bpMinMD]: { gridTemplateColumns: '1fr 1fr' },
          gridTemplateColumns: '1fr',
          display: 'grid',
          gridGap: '20px',
          img: {
            maxWidth: '100%',
            gridAutoFlow: 'row',
          },
        })}>
        {props.children}
      </div>
    </>
  )
}

export default ImageGrid
