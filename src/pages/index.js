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
    text: allMdx(filter: { fields: { collection: { eq: "drawer" } } }) {
      edges {
        node {
          id
          fields {
            slug
            collection
          }
          frontmatter {
            title
          }
        }
      }
    }
    gifs: allFile(
      filter: {
        extension: { regex: "/gif/" }
        sourceInstanceName: { eq: "drawer" }
      }
      sort: { order: DESC, fields: relativePath }
    ) {
      edges {
        node {
          name
          absolutePath
          relativePath
          relativeDirectory
          sourceInstanceName
        }
      }
    }
    images: allFile(
      filter: {
        extension: { regex: "/(jpeg|jpg|png)/" }
        sourceInstanceName: { eq: "drawer" }
      }
      sort: { order: DESC, fields: relativePath }
    ) {
      edges {
        node {
          id
          name
          relativePath
          relativeDirectory
          sourceInstanceName
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_tracedSVG
              src
              originalImg
            }
            fixed(width: 800, height: 800) {
              ...GatsbyImageSharpFixed
              src
            }
          }
        }
      }
    }
  }
`
