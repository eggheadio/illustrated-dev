import React from 'react'
import Link from './link'
import Subbutton from './subbutton'
import { css } from '@emotion/core'
import Container from './container'
import { bpMinSM } from '../utils/breakpoints'

const Header = ({ background, scrollToFooter }) => (
  <header
    css={css({
      background: background,
      [bpMinSM]: {
        paddingTop: '40px',
      },
      paddingTop: '10px',
      a: {
        fontFamily: 'brandon-grotesque, sans-serif',
        fontSize: '14px',
        letterSpacing: '0.1em',
        fontWeight: '700',
        textTransform: 'uppercase',
        margin: 0,
      },
    })}>
    <Container
      noVerticalPadding
      css={css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      })}>
      <h1>
        <Link
          css={css({
            borderRadius: '4px',
            color: 'rgb(79, 88, 95)',
            [bpMinSM]: {
              border: '2px solid #FFFFFF',
              padding: '15px 20px',
            },
            padding: '0px',
            fontWeight: '700',
          })}
          to="/">
          Illustrated.dev
        </Link>
      </h1>
      <Subbutton onClick={scrollToFooter} />
    </Container>
  </header>
)
export default Header
