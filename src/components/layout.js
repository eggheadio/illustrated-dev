import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Global, css } from '@emotion/core'
import { bpMinSM } from '../utils/breakpoints'
import reset from '../utils/reset'
import './layout-styles.css'
import { bpMaxSM } from '../utils/breakpoints'
import Header from './header'
import Footer from './footer'

export const globalStyles = css({
  ...reset,
})

const Layout = ({ children, background = 'transparent', noSubscribe }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <Global styles={globalStyles} />
      <Header background={background} />
      <div
        css={css({
          background: background,
        })}>
        {children}
      </div>
      <Footer noSubscribe={noSubscribe} />
    </>
  )
}

export default Layout
