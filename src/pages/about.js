import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import Link from '../components/link'
import { css } from '@emotion/core'
import SEO from '../components/seo'
import { bpMinSM, bpMinMD } from '../utils/breakpoints'
import Layout from '../components/layout'
import Container from '../components/container'
import GraphicThing from '../components/GraphicThing'

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query AboutPageQuery {
      profilePic: file(relativePath: { eq: "maggie.png" }) {
        childImageSharp {
          fluid(maxWidth: 330) {
            ...GatsbyImageSharpFluid
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
              [bpMinSM]: {
                fontSize: '3.2rem',
              },
              fontSize: '2.2rem',
              textAlign: 'center',
              fontWeight: '100',
              marginBottom: '40px',
              fontFamily: 'ff-tisa-web-pro, serif',
            })}>
            About
          </h1>
          <div
            css={css({
              background: 'white',
              [bpMinMD]: { padding: '80px 40px', margin: '0' },
              padding: '60px 20px',
              marginTop: '40px',
              borderRadius: '2px',
              boxShadow: '0px 1px 2px rgba(52, 61, 68, 0.1)',
              clear: 'both',
            })}>
            <div
              css={css({
                margin: '0 auto',
                maxWidth: '700px',
              })}>
              <h1>
                Illustrated.dev explains web development through illustration.
              </h1>
              <div
                css={css({
                  maxWidth: '540px',
                  margin: '0 auto',
                  marginTop: '60px',
                })}>
                <p>
                  Most of these explainers are about JavaScript fundamentals.
                  Because those never go out of style. But I've also made a few
                  on newer tools like React, Babel, and D3.
                </p>
                <p>
                  I make these because the front-end world is overflowing with
                  confounding things to learn (and JavaScript in particular is
                  <span> 🔥❗🍌🌟☠</span> ridiculous sometimes).
                </p>
                <p>
                  Looking at the programming world through visual metaphors
                  turns out to be a really effective learning tool. All the
                  abstract jargon & syntax is much easier to understand when you
                  can <i>see</i> what's happening through diagrams and
                  analogies.
                </p>
                <p>
                  Not to mention it's a hell of a lot more interesting than
                  slogging through some fat textbook.
                </p>
              </div>
              <div css={css({ display: 'flex', alignItems: 'center' })}>
                <Img
                  css={css({
                    maxWidth: '200px',
                    width: '100%',
                    [bpMinMD]: {
                      marginTop: '60px',
                    },
                    marginTop: '40px',
                  })}
                  fluid={data.profilePic.childImageSharp.fluid}
                />
                <div
                  css={css({
                    padding: '0 40px 0 40px',
                    h3: {
                      [bpMinSM]: {
                        fontSize: '1rem',
                      },
                      fontSize: '0.8rem',
                    },
                    h2: {
                      [bpMinSM]: {
                        marginBottom: '30px',
                        fontSize: '2.1rem',
                      },
                      marginBottom: '70px',
                      fontSize: '1.8rem',
                    },
                    [bpMinMD]: {
                      marginTop: '60px',
                    },
                    marginTop: '40px',
                    fontSize: '1.8rem',
                  })}>
                  <h3>Made by</h3>
                  <h2>Maggie Appleton</h2>
                  <p>
                    Mostly illustrating & art directing for{' '}
                    <Link to=''>@egghead</Link>. Accidentally became a web
                    developer in the process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  )
}

export default AboutPage
