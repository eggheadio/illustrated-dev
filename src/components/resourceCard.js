import React from 'react'
import { css } from '@emotion/core'
import { bpMinSM } from '../utils/breakpoints'
import Link from './link'
import RecCourses from './recCoursesCard'

export default function ResourceCard(props) {
  // console.log('props', props)
  return (
    <>
      <div
        css={css({
          margin: '10px',
          alignSelf: 'start',
          borderRadius: '6px',
          background: 'rgba(253,252,252,1)',
          border: '1px solid rgba(255,255,255,0.7)',
          boxShadow: '5px 5px 20px 0 rgba(218,224,228,0.6)',
          justifyContent: 'space-between',
          '.gatsby-image-wrapper': {
            width: '100%',
            height: '100%',
          },
          ':hover': {
            boxShadow: '1px 2px 4px 0 rgba(190,198,206,0.7)',
            transition: 'all 0.4s ease',
            transform: 'scale(0.99)',
            border: '1px solid rgba(228,234,238,1)',
          },
          transition: 'all 0.4s ease',
        })}>
        <div
          css={css({
            justifyContent: 'space-between',
            color: '#464E55',
            transition: 'all 1s ease',
            '.dataBlock': {
              [bpMinSM]: { padding: '25px' },
              padding: '10px',
            },
            h1: {
              fontSize: '1.6em',
            },
            h5: {
              textAlign: 'right',
              fontSize: '0.8em',
              letterSpacing: '0.1em',
            },
            img: {
              height: 'auto',
              maxWidth: '100%',
              borderRadius: '6px 6px 0 0 ',
              // [bpMinMD]: { width: '200%' },
            },
            '.description': {
              lineHeight: '1.3em',
              fontSize: '1em',
            },
            ':hover': {
              h1: {
                color: '#8748C7',
              },
            },
          })}>
          <Link to={props.url}>
            <img alt={props.title} src={props.img} />
          </Link>

          <div class='dataBlock'>
            <Link to={props.url}>
              <h1>{props.title}</h1>
            </Link>

            <p class='description'>{props.description}</p>
            <h5>{props.cost}</h5>

            {props.recCourses && <RecCourses props={props.recCourses} />}
          </div>
        </div>
      </div>
    </>
  )
}
