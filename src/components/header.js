import React from 'react'
import Link from './link'
import { css } from '@emotion/core'
import Container from './container'

// const Navbar = function(props) {
//   return (
//     <ul css={{
//       listStyle: 'none',
//       textAlign: 'right',
//       padding: '40px'
//     }}>
//       <li>
//         <a href="/about">About</a>
//     </li>
//     <li>
//       <a href="">Thing</a>
//     </li >
//   </ul >
//   )

// }

const Header = ({ background }) => (
  <header
    css={css({
      background: background,
      paddingTop: '25px',
      a: { color: 'rgb(70, 60, 70)' },
      h1: {
        fontFamily: 'freight-sans-pro',
        fontSize: '18px',
        fontWeight: '600',
        textTransform: 'uppercase',
        margin: 0,
        textAlign: 'center',
      },
    })}>
    <Container noVerticalPadding>
      <h1>
        <Link to="/">Illustrated.dev</Link>
        {/* <Navbar /> */}
      </h1>
    </Container>
  </header>
)
export default Header
