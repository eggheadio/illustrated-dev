import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import Layout from '../components/layout'
import Link from '../components/link'

class WhatTheForkTemplate extends React.Component {
  render() {
    const wtf = this.props.data.mdx
    const { next, previous } = this.props.pageContext
    return (
      <Layout>
        <h1 css={css({ textAlign: 'center' })}>{wtf.frontmatter.title}</h1>
        <Img fluid={wtf.frontmatter.image.childImageSharp.fluid} />
        <MDXRenderer>{wtf.code.body}</MDXRenderer>
        {next && (
          <Link to={`/${next.fields.slug}`} rel="next">
            <div
              css={css({
                padding: '30px',
                textAlign: 'center',
                h4: {
                  fontFamily: 'Brandon Grotesque, sans-serif',
                  textTransform: 'uppercase',
                  fontSize: '16px',
                  color: 'hsla(0, 0%, 0%, 0.5)',
                },
              })}>
              <h4>next</h4>
              <h2>
                {next.frontmatter.title} <span>→</span>
              </h2>
            </div>
          </Link>
        )}
        {!next && (
          <Link to={`/${previous.fields.slug}`} rel="previous">
            <div
              css={css({
                padding: '30px',
                textAlign: 'center',
                h4: {
                  fontFamily: 'Brandon Grotesque, sans-serif',
                  textTransform: 'uppercase',
                  fontSize: '16px',
                  color: 'hsla(0, 0%, 0%, 0.5)',
                },
              })}>
              <h4>previous</h4>
              <h2>
                <span>←</span> {previous.frontmatter.title}
              </h2>
            </div>
          </Link>
        )}
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query wtfQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
