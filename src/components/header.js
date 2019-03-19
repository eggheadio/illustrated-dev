import React from 'react'
import Link from './link'
import Subbutton from './subbutton'
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

const Header = ({ background, scrollToFooter }) => (
  <header
    css={css({
      background: background,
      paddingTop: "40px",
      a: {
        fontFamily: "brandon-grotesque, sans-serif",
        fontSize: "14px",
        letterSpacing: "0.1em",
        fontWeight: "700",
        textTransform: "uppercase",
        margin: 0,
        textAlign: "left"
      }
    })}
  >
    <Container noVerticalPadding>
      <h1>
        <Link
          css={css({
            border: "2px solid #FFFFFF",
            boxSizing: "border-box",
            borderRadius: "4px",
            color: "rgb(79, 88, 95)",
            padding: "15px 20px",
            fontWeight: "700",
            float: "left"
          })}
          to="/"
        >
          Illustrated.dev
        </Link>
        {/* <Navbar /> */}
        <Subbutton onClick={scrollToFooter}/>
      </h1>
    </Container>
  </header>
);
export default Header
