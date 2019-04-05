import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import mdxComponents from '../components/mdx'
import Layout from '../components/layout'
import Link from '../components/link'
import Container from '../components/container'
import { bpMinMD, bpMinSM } from '../utils/breakpoints'
import SEO from '../components/seo'
import get from 'lodash/get'

class WhatTheForkTemplate extends React.Component {
  render() {
    const wtf = this.props.data.mdx
    const { next, previous } = this.props.pageContext
    const image = get(wtf, 'frontmatter.thumbnail.childImageSharp.fluid')

    return (
      <>
        <SEO
          description={wtf.frontmatter.description}
          image={image && `https://illustrated.dev${image.src}`}
          title={wtf.frontmatter.title}
        />
        <Layout>
          <Container
            noVerticalPadding
            css={css({
              [bpMinSM]: {
                marginTop: '50px',
              },
              marginTop: 0,
            })}>
            <div
              css={css({
                background: 'white',
                [bpMinMD]: { padding: '80px 20px', margin: '0' },
                padding: '40px 20px',
                marginTop: '40px',
                borderRadius: '2px',
                boxShadow: '0px 1px 2px rgba(52, 61, 68, 0.1)',
                clear: 'both',
              })}>
              <div
                css={css({
                  maxWidth: '700px',
                  margin: '0 auto',
                })}>
                <h1
                  css={css({
                    [bpMinSM]: {
                      fontSize: '2.8rem',
                    },
                    fontSize: '2.1rem',
                    textAlign: 'center',
                    fontWeight: '100',
                    marginBottom: '40px',
                    fontFamily: 'ff-tisa-web-pro, serif',
                  })}>
                  {wtf.frontmatter.title}
                </h1>
                <MDXRenderer components={mdxComponents}>
                  {wtf.code.body}
                </MDXRenderer>
              </div>
            </div>
            <div
              css={css({
                display: 'grid',
                gridTemplateColumns: previous && '1fr 2fr',
              })}>
              {previous && (
                <div
                  css={css({
                    gridColumnStart: '1',
                    margin: '80px 40px 0 0',
                    paddingRight: '40px',
                    borderRight: '1px solid hsla(200, 10%, 80%, 0.7)',
                    textAlign: 'right',
                    h4: {
                      fontFamily: 'freight-sans-pro, sans-serif',
                      textTransform: 'uppercase',
                      fontSize: '16px',
                      color: 'hsla(200, 10%, 30%, 0.7)',
                    },
                  })}>
                  <Link to={`/${previous.frontmatter.slug}`} rel="previous">
                    <h4
                      css={css({
                        opacity: '0.6',
                      })}>
                      previous
                    </h4>
                    <h2
                      css={css({
                        opacity: '0.8',
                        fontWeight: '100',
                        fontFamily: 'ff-tisa-web-pro, serif',
                        fontSize: '1.5em',
                        fontStyle: 'italic',
                      })}>
                      <svg
                        width="20px"
                        height="20.9px"
                        viewBox="0 0 12.3 20.9"
                        style={{ fill: '#40C4D4', paddingTop: '3px' }}>
                        <polygon points="9.3,15.1 5,10.5 9.3,5.8 12.3,2.7 9.8,0 4.3,5.8 0,10.5 4.3,15.1 9.8,20.9 12.3,18.3 " />
                      </svg>{' '}
                      {previous.frontmatter.title}
                    </h2>
                  </Link>
                </div>
              )}
              {next && (
                <div
                  css={css({
                    gridColumnStart: '2',
                    marginTop: '80px',

                    h4: {
                      fontFamily: 'freight-sans-pro, sans-serif',
                      textTransform: 'uppercase',
                      fontSize: '16px',
                      color: 'hsla(0, 0%, 0%, 0.5)',
                    },
                  })}>
                  <Link to={`/${next.frontmatter.slug}`} rel="next">
                    <h4>next</h4>
                    <h2
                      css={css({
                        fontWeight: '100',
                        fontFamily: 'ff-tisa-web-pro, serif',
                        fontSize: '2.2em',
                        fontStyle: 'italic',
                      })}>
                      {next.frontmatter.title}{' '}
                      <svg
                        width="20.1px"
                        height="40px"
                        viewBox="0 0 20.1 40"
                        style={{ fill: '#40C4D4', paddingTop: '18px' }}>
                        <polygon points="12.7,9.9 3.4,0 0,3.6 5.9,9.9 13.3,17.7 5.9,25.6 0,31.9 3.4,35.5 12.7,25.6 20.1,17.7 " />
                      </svg>
                    </h2>
                  </Link>
                </div>
              )}
            </div>
          </Container>
        </Layout>
      </>
    )
  }
}

export const pageQuery = graphql`
  query wtfQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        tags
        description
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        image {
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
            original {
              src
            }
          }
        }
      }
      fields {
        collection
      }
      code {
        body
      }
    }
  }
`

export default WhatTheForkTemplate
