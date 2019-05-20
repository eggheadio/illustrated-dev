import React from 'react'
import { css } from '@emotion/core'
import { bpMaxSM, bpMinMD } from '../utils/breakpoints'

const Container = props => {
  const {
    maxWidth = 1130,
    noHorizontalPadding = false,
    noVerticalPadding = false,
    ...restProps
  } = props
  return (
    <div
      css={css`
        width: 100%;
        margin: 0 auto;
        max-width: ${maxWidth + (noHorizontalPadding ? 0 : 60)}px;
        ${bpMinMD} {
          padding: ${noVerticalPadding ? 0 : 80}px
            ${noHorizontalPadding ? 0 : 60}px;
        }
        padding: ${noVerticalPadding ? 0 : '20'}px
          ${noHorizontalPadding ? 0 : '20'}px;
        ${bpMaxSM} {
          padding: ${noVerticalPadding ? 0 : '20'}px
            ${noHorizontalPadding ? 0 : '20'}px;
        }
      `}
      {...restProps}>
      {props.children}
    </div>
  )
}

export default Container
