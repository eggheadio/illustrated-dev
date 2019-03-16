import React from 'react'
import { css } from '@emotion/core'
import SignUp from './subscribe'
import Container from './container'

const Footer = ({ background = '#303745', noSubscribe }) => (
  <footer
    css={css({
      background: background
    })}>
    <Container noVerticalPadding>
      {!noSubscribe && <SignUp />}
      <div
        css={css({
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '80px',
          color: 'rgb(80, 100, 110)',
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
          <h6 css={css({
            paddingBottom: "30px"
          })}>© Maggie Appleton</h6>
        </a>
      </div>
    </Container>
  </footer>
)
export default Footer
