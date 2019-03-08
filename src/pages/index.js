import React from 'react'
import { graphql } from 'gatsby'
import Link from '../components/link'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import SEO from '../components/seo'
import { bpMinMD } from '../utils/breakpoints'
import Layout from '../components/layout'
import Masonry from 'react-masonry-component'

export default function Index({ data: { site, wtf } }) {
  return (
    <>
      <Layout>
        <SEO title={site.siteMetadata.title} />
        <div
          css={css({
            // display: 'grid',
            // gridTemplateColumns: '1fr 1fr 1fr',
            // gridGap: '30px',
            '.grid-item': {
              width: '100%',

              [bpMinMD]: {
                maxWidth: '33.33333%',
                padding: '25px',
              },
              maxWidth: '50%',
              padding: '20px 8px',
            },
            a: { color: 'black' },
          })}>
          <Masonry className={'masonry-item'}>
            {wtf.edges.map(({ node: data }) => (
              <div className="grid-item" key={data.id}>
                <Link to={`/${data.fields.slug}`}>
                  <h2>{data.frontmatter.title}</h2>
                  <Img fluid={data.frontmatter.image.childImageSharp.fluid} />
                </Link>
              </div>
            ))}
          </Masonry>
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
            slug
            title
            categories
            image {
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
