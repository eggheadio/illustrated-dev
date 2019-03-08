import React from 'react'
import Link from './link'
import { css } from '@emotion/core'

const Header = () => (
  <header
    css={css({
      paddingTop: '40px',
      h1: {
        fontSize: '28px',
        fontWeight: '800',
      },
      textAlign: 'center',
    })}>
    <h1>
      <Link to="/">Illustrated.dev</Link>
    </h1>
  </header>
)
export default Header
