import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import mdxComponents from '../components/mdx'
import Link from '../components/link'
import Container from '../components/container'
import { bpMinMD, bpMinSM } from '../utils/breakpoints'
import SEO from '../components/seo'
import get from 'lodash/get'
import Share from '../components/share'

class SketchesTemplate extends React.Component {
  render() {
    const sketches = this.props.data.mdx
    const site = this.props.data.site
    const { next, previous } = this.props.pageContext
    const thumbnail = get(
      sketches,
      'frontmatter.thumbnail.childImageSharp.fluid'
    )
    const image = get(sketches, 'frontmatter.image.childImageSharp.fluid')
    return (
      <>
        <SEO
          description={sketches.frontmatter.description}
          image={thumbnail && `https://illustrated.dev${thumbnail.src}`}
          title={sketches.frontmatter.title}
        />
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
                background: 'white',
                [bpMinSM]: { padding: '30px 20px', margin: '0' },
                padding: '10px 20px',
                marginTop: '40px',
                borderRadius: '2px',
                boxShadow: '0px 1px 2px rgba(52, 61, 68, 0.1)',
                clear: 'both',
              })}>
              <h1
                css={css({
                  [bpMinMD]: {
                    fontSize: '3rem',
                    marginBottom: '80px',
                  },
                  fontSize: '2.2rem',
                  textAlign: 'center',
                  fontWeight: '100',
                  marginBottom: '40px',
                  fontFamily: 'ff-tisa-web-pro, serif',
                })}>
                {sketches.frontmatter.title}
              </h1>
              <MDXProvider components={mdxComponents}>
                <MDXRenderer>{sketches.body}</MDXRenderer>
              </MDXProvider>
              <Share
                socialConfig={{
                  twitterHandle: site.siteMetadata.author,
                  config: {
                    url: `https://illustrated.dev/${sketches.frontmatter.slug}`,
                    title: sketches.frontmatter.title,
                    media: `${image && `https://illustrated.dev${image.src}`}`,
                  },
                }}
                tags={sketches.frontmatter.tags}
              />
            </div>
          </div>
          <div
            css={css({
              [bpMinSM]: {
                display: 'grid',
                gridTemplateColumns: previous && '1fr 2fr',
              },
              display: 'flex',
              flexDirection: 'column-reverse',
            })}>
            {previous && (
              <div
                css={css({
                  gridColumnStart: '1',
                  margin: '60px 40px 0 0',
                  paddingRight: '40px',
                  borderRight: '1px solid hsla(200, 10%, 80%, 0.7)',
                  textAlign: 'right',
                  h4: {
                    fontFamily: 'freight-sans-pro, sans-serif',
                    textTransform: 'uppercase',
                    fontSize: '18px',
                    color: 'hsla(200, 10%, 30%, 0.7)',
                  },
                })}>
                <Link to={`/${previous.frontmatter.slug}`} rel='previous'>
                  <h4
                    css={css({
                      opacity: '0.8',
                    })}>
                    previous
                  </h4>
                  <h2
                    css={css({
                      opacity: '0.8',
                      fontWeight: '100',
                      fontFamily: 'ff-tisa-web-pro, serif',
                      fontSize: '1.5em',
                      lineHeight: '1.2em',
                      fontStyle: 'italic',
                      marginBottom: '40px',
                    })}>
                    <svg
                      width='20px'
                      height='20.9px'
                      viewBox='0 0 12.3 20.9'
                      style={{ fill: '#40C4D4', paddingTop: '3px' }}>
                      <polygon points='9.3,15.1 5,10.5 9.3,5.8 12.3,2.7 9.8,0 4.3,5.8 0,10.5 4.3,15.1 9.8,20.9 12.3,18.3 ' />
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
                  marginTop: '60px',
                  h4: {
                    fontFamily: 'freight-sans-pro, sans-serif',
                    textTransform: 'uppercase',
                    fontSize: '18px',
                    color: 'hsla(0, 0%, 0%, 0.5)',
                  },
                })}>
                <Link to={`/${next.frontmatter.slug}`} rel='next'>
                  <h4>next</h4>
                  <h2
                    css={css({
                      fontWeight: '100',
                      fontFamily: 'ff-tisa-web-pro, serif',
                      fontSize: '2.2em',
                      fontStyle: 'italic',
                      lineHeight: '1.2em',
                      marginBottom: '80px',
                    })}>
                    {next.frontmatter.title}{' '}
                    <svg
                      width='20.1px'
                      height='40px'
                      viewBox='0 0 20.1 40'
                      style={{ fill: '#40C4D4', paddingTop: '18px' }}>
                      <polygon points='12.7,9.9 3.4,0 0,3.6 5.9,9.9 13.3,17.7 5.9,25.6 0,31.9 3.4,35.5 12.7,25.6 20.1,17.7 ' />
                    </svg>
                  </h2>
                </Link>
              </div>
            )}
          </div>
        </Container>
      </>
    )
  }
}

export const pageQuery = graphql`
  query sketchesQuery($id: String) {
    site {
      siteMetadata {
        author
      }
    }
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        tags
        slug
        date(formatString: "MMMM DD, YYYY")
        description
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
            original {
              src
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
        category
      }

      body
    }
  }
`

export default SketchesTemplate
