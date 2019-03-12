import React from 'react'
import { css } from '@emotion/core'
import Link from './link'
import SignUp from './subscribe'
import Container from './container'
import eggheadpwrd from '../images/egghead-powered.svg'

const Footer = ({ background = 'transparent' }) => (
  <footer
    css={css({
      background: background,
      marginTop: '60px',
    })}>
    <Container noVerticalPadding>
      <SignUp />
      <div
        css={css({
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '80px',
          h6: {
            fontSize: '18px',
            margin: 0,
          },
          img: {
            maxWidth: '140px',
            margin: 0,
          },
          'a:not(:first-of-type)': {
            padding: '20px',
            //background: 'white',
            border: '2px solid white',
            display: 'flex',
            alignItems: ' center',
            justifyContent: 'center',
            ':hover': {
              background: 'white',
            },
          },
          a: { color: 'inherit' },
          h6: { fontWeight: '500' },
        })}>
        <a href="mailto:maggie@egghead.io" aria-label="Contact me">
          <h6>© Maggie Appleton</h6>
        </a>
        <Link
          to="https://egghead.io/browse"
          aria-label="Browse development courses on egghead.io">
          <img src={eggheadpwrd} alt="Powered by egghead.io" />
        </Link>
      </div>
    </Container>
  </footer>
)
export default Footer
