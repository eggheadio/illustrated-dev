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
            background: ['#7A44BB', 'linear-gradient(#974DD6, #7A44BB)'],
            border: 0,
            color: '#fff',
            padding: '10px 15px',
            cursor: 'pointer',
            transition: 'background 250ms',
            ':hover': {
              background: ['#974DD6', 'linear-gradient(#B063DD, #7A44BB)'],
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
