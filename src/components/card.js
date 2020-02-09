import React from 'react'
import { css } from '@emotion/core'
import Img from 'gatsby-image'
import { bpMinSM, bpMinMD, bpMinLG } from '../utils/breakpoints'

const Card = ({ title, image = [], description, category, date, featured }) => {
  let categoryColor
  if (category === 'explainers') {
    categoryColor = '#7A44BB'
  } else if (category === 'meta') {
    categoryColor = '#B8CB44'
  } else if (category === 'illustratednotes') {
    categoryColor = '#2EAED0'
  }

  return (
    <div
      css={css({
        [bpMinSM]: {
          height: '100%',
          flexDirection: featured ? 'row' : 'column',
          padding: '0',
        },
        padding: '20px',
        borderRadius: '5px',
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
          paddingTop: '0',
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
        '.date': {
          fontSize: '0.9em',
          display: 'flex',
          marginTop: '4px',
          color: '#7D8EB0',
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
            padding: featured ? '40px 40px 40px 40px' : '25px 25px 0 25px',
          },
          paddingBottom: 0,
          display: featured && 'flex',
          flexDirection: featured && 'column',
          justifyContent: 'space-between',
        })}>
        <h1>{title}</h1>
        <p className='date'>Updated {date}</p>
        {featured && <p className='description'>{description}</p>}
      </div>
      <div
        css={css({
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        })}>
        <Img fluid={image} />
      </div>
    </div>
  )
}

export default Card
