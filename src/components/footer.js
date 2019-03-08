import React from 'react'
import { css } from '@emotion/core'
import SignUp from './subscribe'

const Footer = () => (
  <footer
    css={css({
      padding: '80px 0',
      textAlign: 'center',
    })}>
    <SignUp
      css={css({
        marginBottom: '30px',
      })}
    />
    <p>© Maggie Appleton</p>
  </footer>
)
export default Footer
