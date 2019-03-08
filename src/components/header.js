import React from 'react'
import Link from './link'
import { css } from '@emotion/core'

const Header = () => (
  <header
    css={css({
      padding: '30px',
      h1: {
        fontSize: '28px',
        fontWeight: '800',
      },
      textAlign: 'center',
    })}>
    <Link to="/">
      <h1>Illustrated.dev</h1>
    </Link>
  </header>
)
export default Header
