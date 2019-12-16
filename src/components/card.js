import React from 'react'
import { css } from '@emotion/core'
import Img from 'gatsby-image'
import { bpMinSM, bpMinMD, bpMinLG } from '../utils/breakpoints'

const Card = ({
  title,
  image = [],
  description,
  category,
  date,
  tags = [],
  featured,
  children,
}) => {
  let categoryColor
  if (category === 'explainers') {
    categoryColor = '#7053AE'
  } else if (category === 'meta') {
    categoryColor = '#B8CB44'
  } else if (category === 'sketchnotes') {
    categoryColor = '#3FCCDC'
  }

  return (
    <div
      css={css({
        [bpMinSM]: {
          height: '450px',
          flexDirection: featured ? 'row' : 'column',
        },
        padding: '5px',
        borderTop: featured ? `4px solid ${categoryColor}` : 'none',
        background: 'white',
        position: 'relative',
        boxShadow: '0px 1px 2px rgba(52, 61, 68, 0.05)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        '.gatsby-image-wrapper': {
          [bpMinLG]: {
            width: featured ? '500px' : '100%',
            height: featured ? '500px' : '100%',
          },
          [bpMinSM]: {
            width: featured ? '380px' : '100%',
            height: featured ? '380px' : '100%',
          },
          width: '100%',
          height: '100%',
        },
        h1: {
          [bpMinSM]: { fontSize: featured ? '42px' : '26px' },
          fontSize: '1.3rem',
          fontWeight: '300',
          height: featured ? 'auto' : '20px',
          lineHeight: '1.2',
          marginBottom: '0',
          display: 'inline-block',
        },
        p: {
          fontSize: '1em',
          fontFamily: 'freight-sans-pro',
        },
        '.description': {
          [bpMinMD]: {
            display: 'inline-block',
          },
          fontFamily: 'ff-tisa-web-pro, serif',
          fontWeight: '100',
          fontSize: '28px',
          zIndex: 1,
          lineHeight: 1.2,
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
          [bpMinSM]: {
            padding: featured ? '40px 40px 40px 40px' : '40px 40px 0 40px',
          },
          paddingBottom: 0,
          display: featured && 'flex',
          flexDirection: featured && 'column',
          justifyContent: 'space-between',
        })}>
        <h1>{title}</h1>
        {featured && <p className='description'>{description}</p>}
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
}

export default Card
