import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import Layout from '../components/layout'
import Link from '../components/link'
import Container from '../components/container'

class WhatTheForkTemplate extends React.Component {
  render() {
    const wtf = this.props.data.mdx
    const { next, previous } = this.props.pageContext
    return (
      <Layout background="white">
        <Container>
          <h1
            css={css({
              fontWeight: '600',
              fontSize: '40px',
              fontFamily: 'ff-tisa-web-pro, serif',
              textAlign: 'center',
            })}>
            {wtf.frontmatter.title}
          </h1>
          <Img
            css={css({ maxWidth: '700px', margin: '0 auto' })}
            fluid={wtf.frontmatter.image.childImageSharp.fluid}
          />
          <MDXRenderer>{wtf.code.body}</MDXRenderer>

          {next && (
            <Link to={`/${next.frontmatter.slug}`} rel="next">
              <div
                css={css({
                  padding: '30px',
                  marginTop: '80px',
                  textAlign: 'center',
                  border: '2px solid #f1f1f1',
                  h4: {
                    fontFamily: 'freight-sans-pro, sans-serif',
                    textTransform: 'uppercase',
                    fontSize: '16px',
                    color: 'hsla(0, 0%, 0%, 0.5)',
                  },
                })}>
                <h4>next</h4>
                <h2
                  css={css({
                    fontWeight: '100',
                    fontFamily: 'ff-tisa-web-pro, serif',
                    fontSize: '2.2em',
                    fontStyle: 'italic',
                  })}>
                  {next.frontmatter.title} <span>→</span>
                </h2>
              </div>
            </Link>
          )}
        </Container>
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
