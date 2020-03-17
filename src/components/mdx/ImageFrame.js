import React from 'react'
import { css } from '@emotion/core'

const ImageFrame = props => {
  return (
    <div
      css={css({
        img: {
          maxWidth: '100%',
          border: '1px solid #e7eef3',
          borderRadius: '4px',
          boxShadow: '0px 2px 2px rgba(52, 61, 68, 0.1)',
        },
      })}>
      {props.children}
    </div>
  )
}

export default ImageFrame
