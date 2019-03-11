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
          margin: '0 auto',
          [bpMaxSM]: {
            margin: '0 auto',
          },
          maxWidth: '1300px',
          width: '100%',
          textAlign: 'center'
        }}>
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout
