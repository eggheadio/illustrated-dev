import React from 'react'
import { css } from '@emotion/core'
import Img from 'gatsby-image'
import { bpMinMD } from '../utils/breakpoints'

const Card = ({ title, image = [], description, date, featured }) => (
  <div
    css={css({
      background: 'white',
      [bpMinMD]: {
        height: '440px',
        flexDirection: featured ? 'row' : 'column',
      },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      '.gatsby-image-wrapper': {
        [bpMinMD]: {
          width: featured ? '400px' : '100%',
          height: featured ? '400px' : '100%',
        },
        width: '100%',
        height: '100%',
      },

      img: {
        margin: 0,
      },
      h1: {
        [bpMinMD]: { fontSize: featured ? '30px' : '23px' },
        fontSize: '23px',
        fontWeight: '300',
        height: featured ? 'auto' : '60px',
        lineHeight: '1.2',
      },
      '.description': {
        fontSize: '20px',
        lineHeight: 1.4,
        opacity: 0.9,
        display: 'none',
        [bpMinMD]: {
          display: 'block',
        },
      },
      ':hover': {
        boxShadow: '0 10px 30px -10px rgba(0,0,0,0.15)',
        transition: 'all 250ms ease',
        h1: {
          color: 'inherit',
        },
      },
      transition: 'all 250ms ease',
    })}>
    <div
      css={css({
        padding: featured ? '50px' : '50px 50px 0 50px',
        display: featured && 'flex',
        flexDirection: featured && 'column',
        justifyContent: 'space-between',
      })}>
      <h1>{title}</h1>
      {featured && <p className="description">{description}</p>}
    </div>
    <div
      css={css({
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
      })}>
      <Img fluid={image} />
    </div>
  </div>
)
export default Card
