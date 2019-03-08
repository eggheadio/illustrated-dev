import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import Link from '../components/link'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import Image from '../components/image'
import SEO from '../components/seo'
import Layout from '../components/layout'

export default function Index({ data: { site, wtf } }) {
  return (
    <>
      <Layout>
        <div
          css={css({
            margin: '3em',
          })}>
          <h1>Illustrated.dev</h1>
          <div
            css={css({
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gridGap: '30px',
            })}>
            {wtf.edges.map(({ node: data }) => (
              <div>
                <Link to={data.fields.slug}>
                  <h2>{data.frontmatter.title}</h2>
                  <Img fluid={data.frontmatter.banner.childImageSharp.fluid} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Layout>
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

    wtf: allMdx(
      sort: { order: ASC, fields: fields___slug }
      filter: { fields: { collection: { eq: "wtf" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            categories
            banner {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
