import React from 'react'
import Link from './link'
import { css } from '@emotion/core'

const Navbar = function(props) {
  return (
    <ul css={{
      listStyle: 'none',
      textAlign: 'right',
      padding: '40px'
    }}>
      <li>
        <a href="/about">About</a>
    </li>
    <li>
      <a href="">Thing</a>
    </li >
  </ul >
  )
  
}

const Header = () => (
  <header
    css={css({
      paddingTop: '40px',
      paddingLeft: '40px',
      a: { color: 'rgb(70, 60, 70)' },
      h1: {
        fontFamily: 'brandon-grotesque',
        fontSize: '18px',
        fontWeight: '800',
        textTransform: 'uppercase',

      },
      textAlign: 'left',
    })}>
    <h1>
      <Link to="/">Illustrated.dev</Link>
      <Navbar />
    </h1>
  </header>
)
export default Header
