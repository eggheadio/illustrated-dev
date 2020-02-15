import GatsbyLink from 'gatsby-link'
import React, { forwardRef } from 'react'
import { css } from '@emotion/core'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/shift-away.css'
import './link-tooltip-theme.css'

const LinkTooltip = forwardRef((props, ref) => {
  const noToolTip = props.noToolTip
  if (noToolTip === true) {
    return (
      <div
        css={css({
          display: 'inline-block',
          transition: 'all 0.4s',
        })}>
        <span ref={ref}>{props.children}</span>
      </div>
    )
  }
  return (
    <Tippy
      duration='600'
      distance='2'
      theme='linktooltip'
      interactive={true}
      arrow={false}
      animation='shift-away'
      content={props.link}>
      <div
        css={css({
          display: 'inline-block',
          transition: 'all 0.4s',
        })}>
        <span ref={ref}>{props.children}</span>
      </div>
    </Tippy>
  )
})

const Link = ({ noToolTip, children, to, ...other }) => {
  const internal = /^\/(?!\/)/.test(to)

  if (internal) {
    return (
      <GatsbyLink to={to} {...other}>
        {children}
      </GatsbyLink>
    )
  }

  return (
    <a target='_blank' rel='noopener noreferrer' href={to} {...other}>
      <LinkTooltip noToolTip={noToolTip} link={to}>
        {children}
      </LinkTooltip>
    </a>
  )
}

export default Link
