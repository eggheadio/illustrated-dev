import React from 'react'
import { css } from '@emotion/core'

const NotesContainer = (props) => {
  return (
    <div
      css={css({
        maxWidth: '760px',
        margin: '0 auto',
      })}>
      {props.children}
    </div>
  )
}

export default NotesContainer
