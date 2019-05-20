import React from 'react'
import Link from './link'
import Subbutton from './subbutton'
import { css } from '@emotion/core'
import Container from './container'
import { bpMinMD, bpMinSM } from '../utils/breakpoints'

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
          to='/'>
          Illustrated.dev
        </Link>
      </h1>

      {/* Nav Grid Layout */}
      <div
        css={css({
          [bpMinMD]: { display: 'flex' },
        })}>
        <Link
          to='/'
          css={css({
            float: 'right',
            boxSizing: 'border-box',
            borderRadius: '4px',
            color: 'rgb(79, 88, 95)',
            [bpMinMD]: {
              padding: '15px 20px',
              display: 'block',
            },
            padding: '0px',
            display: 'none',
            fontWeight: '700',
          })}>
          Articles
        </Link>
        <Link
          to='/sketches'
          css={css({
            float: 'right',
            boxSizing: 'border-box',
            borderRadius: '4px',
            color: 'rgb(79, 88, 95)',
            [bpMinMD]: {
              padding: '15px 20px',
              display: 'block',
            },
            padding: '0px',
            display: 'none',
            fontWeight: '700',
          })}>
          Sketches
        </Link>
        {/* <Link
          to='/meta'
          css={css({
            float: 'right',
            boxSizing: 'border-box',
            borderRadius: '4px',
            color: 'rgb(79, 88, 95)',
            [bpMinMD]: {
              padding: '15px 20px',
              display: 'block',
            },
            display: 'none',
            padding: '0px',
            fontWeight: '700',
          })}>
          Meta
        </Link> */}
        <Link
          to='/about'
          css={css({
            boxSizing: 'border-box',
            borderRadius: '4px',
            color: 'rgb(79, 88, 95)',
            [bpMinMD]: {
              padding: '15px 25px',
              display: 'block',
            },
            padding: '0px',
            display: 'none',
            fontWeight: '700',
            justifySelf: 'center',
          })}>
          About
        </Link>

        <Subbutton onClick={scrollToFooter} />
      </div>
    </Container>
  </header>
)
export default Header
