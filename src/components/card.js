import React from 'react'
import { css } from '@emotion/core'
import Img from 'gatsby-image'
import { bpMaxSM, bpMaxMD, bpMinSM, bpMinMD } from '../utils/breakpoints'

const Card = ({ title, image = [], description, date, tags }) => (
  <div
    css={css({
      background: 'white',
      [bpMinMD]: {
        height: '440px',
      },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      ':hover': {
        boxShadow: '0 10px 30px -10px rgba(0,0,0,0.15)',
        transition: 'all 250ms ease',
      },
      transition: 'all 250ms ease',
      img: { margin: 0 },
      h1: {
        fontSize: '23px',
        fontWeight: '300',
        height: '60px',
        lineHeight: '1.2',
      },
    })}>
    <div
      css={css({
        padding: '50px 50px 0 50px',
      })}>
      <h1>{title}</h1>
      {description}
      {date}
    </div>
    <div>
      <Img fluid={image} />
    </div>
  </div>
)
export default Card
