import React from 'react'
import { css } from '@emotion/core'
import { bpMinMD } from '../../utils/breakpoints'

const SmallCenter = props => {
  return (
    <div
      css={css({
        [bpMinMD]: { maxWidth: '70%' },
        maxWidth: '100%',
        margin: '0 auto',
      })}>
      {props.children}
    </div>
  )
}

export default SmallCenter
