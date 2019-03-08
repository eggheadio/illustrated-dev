import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Global, css } from '@emotion/core'
import reset from '../utils/reset'
import './layout-styles.css'
import { bpMaxSM } from '../utils/breakpoints'
import Header from './header'
import Footer from './footer'

export const globalStyles = css({
  ...reset,
})

const Layout = ({ children }) => {
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
      <Header />
      <div
        css={{
          margin: '0 auto 3rem auto',
          [bpMaxSM]: {
            margin: '0 auto',
          },
          maxWidth: '1200px',
          width: '100%',
          padding: '0 1.0875rem 0 1.0875rem',
          paddingTop: 0,
        }}>
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout
