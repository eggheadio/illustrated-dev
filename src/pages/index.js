import React from 'react'
import { graphql } from 'gatsby'
import Link from '../components/link'
import { css } from '@emotion/core'
import SEO from '../components/seo'
import {
  bpMinSM,
  bpMinMD,
  bpMaxMD,
  bpMinLG,
  bpMaxLG,
} from '../utils/breakpoints'
import Layout from '../components/layout'
import Container from '../components/container'
import Card from '../components/card'
import Bio from '../components/bio'
import eggheadpwrd from "../images/egghead-powered.svg";

export default function Index({ data: { site, wtf } }) {
  return (
    <>
      <SEO title={site.siteMetadata.title} />
      <Layout>
        <Container
          css={css({
            [bpMinMD]: { paddingTop: "auto", paddingBottom: 0 },
            paddingTop: "auto"
          })}
        >
          <h1
            css={css({
              textAlign: "left",
              paddingBottom: "40px",
              marginTop: "60px",
              fontWeight: "600",
              clear: "both",
              [bpMinMD]: {
                fontSize: "4.4em",
                marginTop: "0px"
              },
              fontSize: "3em",
              letterSpacing: "-0.02em"
            })}
          >
            Web development,
            <br />
            illustrated.
          </h1>
          <div
            css={css({
              display: "grid",
              [bpMaxMD]: {
                gridTemplateColumns: "33% 33% 33%"
              },
              [bpMinMD]: {
                gridTemplateColumns: "33% 33% 33%"
              },
              [bpMinLG]: {
                gridTemplateColumns: "33% 33% 33%"
              },
              [bpMaxLG]: {
                gridTemplateColumns: "33% 33% 33%"
              },
              gridGap: "25px",
              a: {
                color: "inherit"
              }
            })}
          >
            {wtf.edges.map(({ node: data }) => (
              <Link
                to={`/${data.frontmatter.slug}`}
                key={data.id}
                css={
                  data.frontmatter.featured &&
                  css({
                    [bpMinSM]: {
                      gridColumnStart: "1",
                      gridColumnEnd: "3"
                    },
                    borderTop: "4px solid #3FCCDC"
                  })
                }
              >
                <Card
                  title={data.frontmatter.title}
                  image={data.frontmatter.thumbnail.childImageSharp.fluid}
                  featured={data.frontmatter.featured}
                  description={data.frontmatter.description}
                  tags={data.frontmatter.tags}
                />
              </Link>
            ))}
          </div>
        </Container>
        <Container
          noVerticalPadding
          css={css({
            [bpMinMD]: {
              padding: "auto",
              paddingBottom: "30px"
            },
            padding: 0
          })}
        >
          <Bio />
          <Link
            to="https://egghead.io/"
            aria-label="Browse development courses on egghead.io"
          >
            <img
              css={css({
                margin: "80px auto 60px",
                display: "flex"
              })}
              src={eggheadpwrd}
              alt="Powered by egghead.io"
            />
          </Link>
        </Container>
      </Layout>
    </>
  );
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
            tags
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
