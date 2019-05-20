import React, { useRef } from 'react'
import { InView } from 'react-intersection-observer'
import { css } from '@emotion/core'

// const swapColor = () => {}

const GraphicThing = () => (
  <InView threshold='0.5' as='div' onChange={inView => console.log('this')}>
    <h3
      css={css({
        color: 'blue',
      })}>
      I'm a scrolling element
    </h3>
  </InView>
)

export default GraphicThing
