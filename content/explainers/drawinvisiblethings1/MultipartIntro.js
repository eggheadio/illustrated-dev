import React from 'react'
import { css } from '@emotion/core'
import { bpMinMD } from '../../../src/utils/breakpoints.js'
import Link from '../../../src/components/Link.js'

const BottomBar = () => {
  return (
    <div
      id='bottomBar'
      css={css({
        background: '#EEC57C',
        borderRadius: '12px',
        margin: '0 auto',
        height: '2px',
        width: '95%',
      })}
    />
  )
}

const PartName = props => {
  return (
    <Link noToolTip to={props.to}>
      <p
        css={css({
          color: '#464E55',
          margin: '0',
          paddingBottom: '16px',
          paddingTop: '6px',
          alignSelf: 'center',
          fontSize: '1.2em',
          lineHeight: '1.2em',
          display: 'block',
        })}>
        {props.partName}
      </p>
    </Link>
  )
}

const MultipartIntro = () => {
  return (
    <div
      css={css({
        [bpMinMD]: { gridTemplateColumns: '1fr 1fr 1fr 1fr' },
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        display: 'grid',
        gridGap: '10px',
        textAlign: 'center',
        padding: '20px 0',
        div: {
          alignSelf: 'flex-end',
          transition: '0.5s',
          ':hover': {
            '#bottomBar': {
              height: '6px',
              background: '#0CAFD2',
            },
            p: {
              color: '#0CAFD2',
              transition: '0.5s',
            },
          },
        },
        span: {
          color: '#718597',
          fontFamily: 'sans-serif',
          alignSelf: 'flex-start',
          fontSize: '0.9em',
          display: 'block',
        },
      })}>
      <div>
        <span>Part 1</span>
        <PartName to='#' partName='A Metaphorical Introduction' />
        <BottomBar />
      </div>
      <div>
        <span>Part 2</span>
        <PartName to='#' partName='Cultural Research' />
        <BottomBar />
      </div>
      <div>
        <span>Part 3</span>
        <PartName to='#' partName='Creative Play' />
        <BottomBar />
      </div>
      <div>
        <span>Part 4</span>
        <PartName to='#' partName='Composition, Colour, and Completion' />
        <BottomBar />
      </div>
    </div>
  )
}

export default MultipartIntro
