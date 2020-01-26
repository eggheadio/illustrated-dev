import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import Link from '../components/link'
import { css } from '@emotion/core'
import SEO from '../components/seo'
import { bpMinSM, bpMinMD } from '../utils/breakpoints'
import Container from '../components/container'

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
      <SEO title='About' />
      <Container>
        <h1
          css={css({
            [bpMinSM]: {
              fontSize: '3.4rem',
            },
            textAlign: 'center',
            marginBottom: '40px',
            fontFamily: 'ff-tisa-web-pro, serif',
          })}>
          About
        </h1>
        <hr />
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
            <h2
              css={css({
                marginTop: '0.4em',
                lineHeight: '1.2em',
                fontSize: '2em',
              })}>
              Illustrated.dev explains web development & technology topics. With
              a little bit of anthropology mixed in.
            </h2>
            <div
              css={css({
                margin: '0 auto',
                marginTop: '40px',
              })}>
              <p>
                This project exists to help explain web technologies in a more
                intitutive and visual way. Visual metaphors are a wonderfully
                effective learning tool for the world of programming. All the
                abstract jargon & syntax is much easier to understand when you
                can <i>see</i> what's happening through diagrams and analogies.
              </p>
              <p>
                I make these because technology in general, and the front-end
                world in particular, is overflowing with confounding things to
                learn (and JavaScript is especially
                <span
                  aria-label='fire, banana, star, and crossbones emojis'
                  role='img'>
                  {' '}
                  🔥🍌🌟☠{' '}
                </span>{' '}
                -ing ridiculous).
              </p>
              <p>
                While I now live in the world of programmers, I originally
                trained as an anthropologist and still see everything through
                lens of cultural constructs, kinship structures, cosmologies,
                and semiotics. This inevitably shows up in some of the essays I
                publish here.
              </p>
              <p>
                You'll also find plenty of JavaScript fundamentals - those never
                go out of style. As well as posts on a whole range of
                web-related technologies like API's, React, and GraphQL.
              </p>
              <p>It's a weird mix - take it as you will.</p>
            </div>
            <div css={css({ display: 'flex', alignItems: 'center' })}>
              <Img
                css={css({
                  maxWidth: '200px',
                  width: '100%',
                  [bpMinMD]: {
                    marginTop: '40px',
                  },
                  marginTop: '20px',
                })}
                fluid={data.profilePic.childImageSharp.fluid}
              />
              <div
                css={css({
                  padding: '0 40px 0 40px',
                  [bpMinMD]: {
                    marginTop: '60px',
                  },
                  marginTop: '40px',
                  h3: {
                    margin: '0',
                  },
                })}>
                <h5>Made by</h5>
                <h3>Maggie Appleton</h3>
                <p>
                  Art director & lead illustrator at{' '}
                  <Link target='_blank' to='https://egghead.io/'>
                    @egghead
                  </Link>
                  . Accidentally became a web developer in the process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default AboutPage
