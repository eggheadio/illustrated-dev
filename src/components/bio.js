import React from 'react'
import { css } from '@emotion/core'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import { bpMinMD, bpMinSM, bpMinLG } from '../utils/breakpoints'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import mdx from './mdx'

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioPageQuery {
      profilePic: file(relativePath: { eq: "maggie.png" }) {
        childImageSharp {
          fluid(maxWidth: 330) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      about: mdx(fields: { slug: { regex: "//about//" } }) {
        code {
          body
        }
      }
    }
  `)
  return (
    <div
      css={css({
        [bpMinSM]: {
          marginTop: '160px',
        },
        alignItems: 'center',
        margin: '0 auto',
        marginTop: '50px',
        marginBottom: '120px',
      })}>
      <div css={css({ display: 'flex', alignItems: 'center' })}>
        <Img
          css={css({
            marginLeft: -30,
            maxWidth: '165px',
            width: '100%',
          })}
          fluid={data.profilePic.childImageSharp.fluid}
        />
        <div
          css={css({
            [bpMinSM]: { padding: '0 40px 40px 40px' },
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
          })}>
          <h3>Made by</h3>
          <h2>Maggie Appleton</h2>
        </div>
      </div>
      <div
        css={css({
          background: 'white',
          [bpMinLG]: {
            padding: '50px 120px',
          },
          marginTop: '-40px',
          //margin: 0,
          padding: '30px',
        })}>
        <MDXRenderer
          components={mdx}
          css={css({
            p: {
              [bpMinMD]: {
                fontSize: '20px',
              },
              fontSize: '15px',
            },
          })}>
          {data.about.code.body}
        </MDXRenderer>
      </div>
    </div>
  )
}
export default Bio
