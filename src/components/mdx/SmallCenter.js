import React from 'react'
import { css } from '@emotion/core'
import { bpMinMD } from '../../utils/breakpoints'

const SmallCenter = (props) => {
  return (
    <div
      css={css({
        [bpMinMD]: { maxWidth: '70%' },
        maxWidth: '100%',
        margin: '0 auto',
        h2: { textAlign: 'center' },
        h3: { textAlign: 'center' },
        p: { textAlign: 'center' },
      })}>
      {props.children}
    </div>
  )
}

export default SmallCenter
