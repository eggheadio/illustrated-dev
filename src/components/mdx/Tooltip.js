import React, { forwardRef } from 'react'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'

const Tooltip = forwardRef((props, ref) => {
  return (
    <Tippy content={props.tiptext}>
      <span ref={ref}>{props.children}</span>
    </Tippy>
  )
})

export default Tooltip

// To use in any MDX file, add 'import Tooltip from '../../../src/components/mdx/Tooltip.js' to the top.

// Then add <Tooltip tiptext="I'm working right?">Hello</Tooltip> anywhere in the body
