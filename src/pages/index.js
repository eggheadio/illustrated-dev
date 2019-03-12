import React from 'react'
import { graphql } from 'gatsby'
import Link from '../components/link'
import { css } from '@emotion/core'
import SEO from '../components/seo'
import { bpMinSM } from '../utils/breakpoints'
import Layout from '../components/layout'
import Container from '../components/container'
import Card from '../components/card'
import Bio from '../components/bio'

export default function Index({ data: { site, wtf } }) {
  return (
    <>
      <SEO title={site.siteMetadata.title} />
      <Layout>
        <Container>
          <h1 css={css({ textAlign: 'center', marginBottom: '50px' })}>
            Web Development, Illustrated
          </h1>
          <div
            css={css({
              display: 'grid',
              [bpMinSM]: {
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr) )',
              },
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr) )',
              gridGap: '20px',
              a: {
                color: 'inherit',
              },
            })}>
            {wtf.edges.map(({ node: data }) => (
              <Link
                to={`/${data.frontmatter.slug}`}
                key={data.id}
                css={
                  data.frontmatter.featured &&
                  css({
                    [bpMinSM]: {
                      gridColumnStart: '1',
                      gridColumnEnd: '3',
                    },
                  })
                }>
                <Card
                  title={data.frontmatter.title}
                  image={data.frontmatter.thumbnail.childImageSharp.fluid}
                  featured={data.frontmatter.featured}
                  description={data.frontmatter.description}
                />
              </Link>
            ))}
          </div>
          <Bio />
        </Container>
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
      sort: { order: ASC, fields: [fields___slug, frontmatter___featured] }
      filter: { fields: { collection: { eq: "wtf" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            slug
            title
            featured
            description
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
