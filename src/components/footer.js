import React from 'react'
import { css } from '@emotion/core'
import SignUp from './subscribe'
import Container from './container'

const Footer = ({ background = 'transparent' }) => (
  <footer
    css={css({
      background: background,
      marginTop: '40px',
      textAlign: 'center',
    })}>
    <Container>
      <SignUp />
      <h6 css={css({ marginTop: '80px' })}>© Maggie Appleton</h6>
    </Container>
  </footer>
)
export default Footer
