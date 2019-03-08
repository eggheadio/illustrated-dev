import React from 'react'
import Link from './link'
import { css } from '@emotion/core'

const Header = () => (
  <header
    css={css({
      padding: '30px',
    })}>
    <Link to="/">
      <h1>Illustrated.tech</h1>
    </Link>
  </header>
)
export default Header
