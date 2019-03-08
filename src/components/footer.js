import React from 'react'
import { css } from '@emotion/core'
import SignUp from './subscribe'

const Footer = () => (
  <footer
    css={css({
      padding: "80px",
      textAlign: "left",
      textTransform: "uppercase",
      fontSize: "14px",
      background: "rgb(45, 45, 58)",
      color: "rgb(85, 85, 98)"
    })}
  >
    <SignUp
      css={css({
        marginBottom: "30px"
      })}
    />
    <sub>© Maggie Appleton</sub>
  </footer>
);
export default Footer
