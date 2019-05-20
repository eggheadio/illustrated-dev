import React from 'react'
import { css } from '@emotion/core'
import { useStaticQuery, graphql } from 'gatsby'
import SEO from '../components/seo'
import { bpMinSM, bpMinMD } from '../utils/breakpoints'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Container from '../components/container'
import Card from '../components/card'
import Link from '../components/link'

const SketchesPage = ({ data: { site, sketches } }) => {
  const data = useStaticQuery(graphql`
    query SketchesQuery {
      site {
        siteMetadata {
          title
        }
      }
      sketches: allMdx(
        sort: { order: ASC, fields: [fields___slug] }
        filter: { fields: { collection: { eq: "sketches" } } }
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
  `)

  return (
    <>
      <SEO title='Sketches' />
      <Layout>
        <Container>
          <h1
            css={css({
              [bpMinMD]: {
                fontSize: '3.2rem',
                margin: '10px auto 80px',
              },
              fontSize: '2.4rem',
              textAlign: 'center',
              fontWeight: '100',
              margin: '20px auto 60px',
              fontFamily: 'ff-tisa-web-pro, serif',
            })}>
            Sketches & WIPs
          </h1>

          <div
            css={css({
              display: 'grid',
              gridGap: '25px',

              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr) )',

              a: {
                color: 'inherit',
              },
            })}>
            {sketches.edges.map(({ node: data }) => (
              <Link to={`/sketches/${data.frontmatter.slug}`} key={data.id}>
                <Card
                  title={data.frontmatter.title}
                  image={data.frontmatter.thumbnail.childImageSharp.fluid}
                  description={data.frontmatter.description}
                  tags={data.frontmatter.tags}
                />
              </Link>
            ))}
          </div>
        </Container>
      </Layout>
    </>
  )
}

export default SketchesPage
