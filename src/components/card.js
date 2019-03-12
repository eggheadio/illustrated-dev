import React from 'react'
import { css } from '@emotion/core'
import Img from 'gatsby-image'
import { bpMinSM, bpMinMD } from '../utils/breakpoints'

const Card = ({
  title,
  image = [],
  description,
  date,
  tags = [],
  featured,
  children,
}) => (
  <div
    css={css({
      [bpMinSM]: {
        height: featured ? '380px' : '440px',
        flexDirection: featured ? 'row' : 'column',
      },
      background: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      '.gatsby-image-wrapper': {
        [bpMinSM]: {
          width: featured ? '330px' : '100%',
          height: featured ? '330px' : '100%',
        },
        width: '100%',
        height: '100%',
      },

      h1: {
        [bpMinSM]: { fontSize: featured ? '30px' : '23px' },
        fontSize: '23px',
        fontWeight: '300',
        height: featured ? 'auto' : '60px',
        lineHeight: '1.2',
      },
      '.description': {
        [bpMinMD]: {
          display: 'block',
        },
        fontFamily: 'brandon-grotesque, sans-serif',
        fontSize: '20px',
        lineHeight: 1.4,
        opacity: 0.9,
        display: 'none',
        margin: 0,
      },
      ':hover': {
        boxShadow: '0 10px 30px -10px rgba(0,0,0,0.15)',
        transition: 'all 250ms ease',
        h1: {
          color: 'inherit',
        },
        '.tags': {
          display: 'block',
        },
      },
      transition: 'all 250ms ease',
      '.tags': {
        display: featured ? 'block' : 'none',
      },
    })}>
    <div
      css={css({
        padding: featured ? '50px 40px 50px 50px' : '50px 50px 0 50px',
        display: featured && 'flex',
        flexDirection: featured && 'column',
        justifyContent: 'space-between',
      })}>
      <h1>{title}</h1>
      {featured && <p className="description">{description}</p>}
      {/* {tags && (
        <div className="tags">
          {tags.map(tag => (
            <span
              css={css({
                marginRight: '10px',
                fontFamily: 'brandon-grotesque, sans-serif',
              })}>
              {tag}
            </span>
          ))}
        </div>
      )} */}
    </div>
    <div
      css={css({
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
      })}>
      <Img fluid={image} />
      {children}
    </div>
  </div>
)
export default Card
