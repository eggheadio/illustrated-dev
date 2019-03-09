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
              fontFamily: "ff-tisa-web-pro, sans-serif"
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
                maxWidth: '33.333%',
                padding: '30px 15px',
              },
              maxWidth: '50%',
              padding: '20px 8px',
            },
            a: { color: 'black' },
          })}>
          <h1 css={css({
            h1: {
              padding: '80px',
              fontWeight: '600',
              fontSize: '80px',
            }
          })}>Web Development, Illustrated</h1>
          <Masonry css={css({
            h1: {
              fontFamily: "ff-tisa-web-pro, sans-serif",
              fontWeight: '100',
              fontSize: '32px',
              textAlign: 'center',
              marginTop: '30px',
              marginBottom: '30px',
              color: 'rgb(60, 50, 60)'
            }
          })
          } className={'masonry-item'}>
            {wtf.edges.map(({ node: data }) => (
              <div className="grid-item" key={data.id}>
                <Link to={`/${data.frontmatter.slug}`}>
                  <h1>{data.frontmatter.title}</h1>
                  <hr />
                  <Img css={css({
                    maxHeight: '300px',
                    overflow: 'hidden'
                  })}
                    fluid={data.frontmatter.image.childImageSharp.fluid} />
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
