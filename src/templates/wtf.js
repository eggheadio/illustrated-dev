import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import Layout from '../components/layout'
import Link from '../components/link'
import Container from '../components/container'
import {
  bpMinSM,
  bpMinMD,
  bpMaxMD,
  bpMinLG,
  bpMaxLG
} from "../utils/breakpoints";

class WhatTheForkTemplate extends React.Component {
  render() {
    const wtf = this.props.data.mdx
    const { next, previous } = this.props.pageContext
    return (
      <Layout>
        <Container>
          <div
            css={css({
              background: "white",
              [bpMinMD]: { padding: "80px 20px", margin: '0' },
              padding: "40px 20px",
              marginTop: "40px",
              borderRadius: "2px",
              boxShadow: "0px 1px 2px rgba(52, 61, 68, 0.1)",
              clear: "both"
            })}
          >
            <h1
              css={css({
                fontWeight: "100",
                fontSize: "40px",
                paddingBottom: "40px",
                fontFamily: "ff-tisa-web-pro, serif",
                textAlign: "center"
              })}
            >
              {wtf.frontmatter.title}
            </h1>
            <a
              href={`${wtf.frontmatter.image.childImageSharp.original.src}`}
              css={css({ cursor: "zoom-in" })}
            >
              <Img
                css={css({ margin: "0 auto", maxWidth: "700px" })}
                fluid={wtf.frontmatter.image.childImageSharp.fluid}
              />
            </a>
            <MDXRenderer>{wtf.code.body}</MDXRenderer>
          </div>

          {next && (
            <Link to={`/${next.frontmatter.slug}`} rel="next">
              <div
                css={css({
                  marginTop: "80px",
                  textAlign: "center",
                  h4: {
                    fontFamily: "freight-sans-pro, sans-serif",
                    textTransform: "uppercase",
                    fontSize: "16px",
                    color: "hsla(0, 0%, 0%, 0.5)"
                  }
                })}
              >
                <h4>next</h4>
                <h2
                  css={css({
                    fontWeight: "100",
                    fontFamily: "ff-tisa-web-pro, serif",
                    fontSize: "2.2em",
                    fontStyle: "italic"
                  })}
                >
                  {next.frontmatter.title} <span>→</span>
                </h2>
              </div>
            </Link>
          )}
        </Container>
      </Layout>
    );
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
