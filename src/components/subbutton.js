import React from 'react'
import Link from './link'
import { css } from '@emotion/core'
import { bpMinSM } from '../utils/breakpoints'
import { darken } from 'polished'

class Subbutton extends React.Component {
  render() {
    return (
      <button
        css={css({
          fontFamily: 'brandon-grotesque, sans-serif',
          fontSize: '14px',
          letterSpacing: '0.1em',
          fontWeight: '700',
          textTransform: 'uppercase',
          boxSizing: 'border-box',
          borderRadius: '4px',
          backgroundColor: '#3FCCDC',
          border: 0,
          color: '#fff',
          ':hover': {
            backgroundColor: darken(0.1, '#3FCCDC'),
            transition: 'background 250ms',
          },
          transition: 'background 250ms',
          [bpMinSM]: {
            padding: '15px 20px',
          },
          padding: '10px 10px',
          cursor: 'pointer',
        })}
        onClick={this.props.onClick}>
        Subscribe
      </button>
    )
  }
}

export default Subbutton
