import React from 'react'
import { graphql } from 'gatsby'
import Link from '../components/link'
import { css } from '@emotion/core'
import SEO from '../components/seo'
import { bpMinMD } from '../utils/breakpoints'
import Container from '../components/container'
import eggheadpwrd from '../images/egghead-powered.svg'
import MainCardGrid from '../components/MainCardGrid'

export default function Index({ data: { site, allMdx, sketches } }) {
  return (
    <>
      <SEO title={site.siteMetadata.title} />
      <Container
        css={css({
          [bpMinMD]: { paddingTop: '20px', paddingBottom: 0 },
          paddingTop: 'auto',
        })}>
        <h1
          css={css({
            textAlign: 'left',
            fontWeight: '600',
            clear: 'both',
            [bpMinMD]: {
              padding: '30px 0 0 0',
              fontSize: '3em',
            },
            fontSize: '2em',
            marginBottom: '1em',
            lineHeight: '1.2em',
            letterSpacing: '-0.02em',
          })}>
          Illustrated explanations of web development, technology & a little bit
          of anthropology.
          <br />
        </h1>

        {/* Article Grid Section */}

        <MainCardGrid posts={allMdx.edges} />
      </Container>
      <Container
        noVerticalPadding
        maxWidth={900}
        css={css({
          [bpMinMD]: {
            padding: 'auto',
            paddingBottom: '30px',
          },
          padding: 0,
        })}>
        <Link
          to='https://egghead.io/'
          aria-label='Browse development courses on egghead.io'>
          <img
            css={css({
              margin: '80px auto 60px',
              display: 'flex',
            })}
            src={eggheadpwrd}
            alt='Powered by egghead.io'
          />
        </Link>
      </Container>
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
    allMdx(
      sort: {
        order: DESC
        fields: [frontmatter___date, frontmatter___featured]
      }
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
            date(formatString: "MMMM DD, YYYY")
            category
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
