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
      <SEO title={site.siteMetadata.title} />
      <Layout>
        <div
          css={css({
            h1: {
              fontFamily: 'Brandon Grotesque, sans-serif',
              fontWeight: 500,
              fontSize: '24px',
              textAlign: 'center',
              opacity: 0.8,
              marginTop: '30px',
              marginBottom: '15px',
            },
            hr: {
              width: '20px',
              height: '2px',
              background: '#FF7B53',
              margin: '0 auto',
              borderRadius: '1px',
            },
            'a:hover': {
              h1: {
                opacity: 1,
              },
            },
            '.grid-item': {
              width: '100%',

              [bpMinMD]: {
                maxWidth: '50%',
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
                <Link to={`/${data.frontmatter.slug}`}>
                  <h1>{data.frontmatter.title}</h1>
                  <hr />
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
