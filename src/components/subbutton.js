import React from 'react'
import { css } from '@emotion/core'
import { bpMinSM } from '../utils/breakpoints'
import { darken } from 'polished'

class Subbutton extends React.Component {
  render() {
    return (
      <button
        css={css({
          display: 'none',
          [bpMinSM]: {
            display: 'block',
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
            padding: '10px 15px',
            cursor: 'pointer',
            transition: 'background 250ms',
            ':hover': {
              backgroundColor: darken(0.1, '#3FCCDC'),
              transition: 'background 250ms',
            },
          },
        })}
        onClick={this.props.onClick}>
        Subscribe
      </button>
    )
  }
}

export default Subbutton
