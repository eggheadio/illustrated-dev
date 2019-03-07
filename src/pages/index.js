import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import Link from '../components/link'
import Img from 'gatsby-image'
import { css } from '@emotion/core'

import SEO from '../components/seo'

export default function Index({ data: { images, site } }) {
  return (
    <>
      <SEO title={site.siteMetadata.title} />
      <div
        css={css({
          minWidth: '100vw',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        })}>
        <h1>Hello!</h1>
      </div>
    </>
  )
}

export const pageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
