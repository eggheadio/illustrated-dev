import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Global, css } from '@emotion/core'
import reset from '../utils/reset'
import SEO from './seo'
import './layout-styles.css'
import { bpMaxSM } from '../utils/breakpoints'
import Header from './header'

export const globalStyles = css({
  marginTop: '30px',
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
      <SEO title={data.site.siteMetadata.title} />
      <Header />

      <div
        css={{
          margin: '0 auto 3rem auto',
          [bpMaxSM]: {
            margin: '0 auto',
          },
          maxWidth: '1060px',
          width: '100%',
          padding: '0 1.0875rem 0 1.0875rem',
          paddingTop: 0,
        }}>
        {children}
      </div>
    </>
  )
}

export default Layout
