import React from 'react'
import { css } from '@emotion/core'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import { bpMaxSM, bpMaxMD, bpMinSM, bpMinMD } from '../utils/breakpoints'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

const Bio = ({ children }) => {
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
    <div css={css({ marginTop: '100px' })}>
      <div css={css({ display: 'flex', alignItems: 'center' })}>
        <Img
          css={css({
            [bpMinMD]: { marginLeft: '-60px' },
            marginLeft: 0,
            maxWidth: '165px',
            width: '100%',
          })}
          fluid={data.profilePic.childImageSharp.fluid}
        />
        <div css={css({ padding: '0 40px 40px 40px' })}>
          <h5>HEY, I'M</h5>
          <h2>Maggie Appleton</h2>
        </div>
      </div>
      <div
        css={css({
          background: 'white',
          [bpMinMD]: {
            padding: '100px 150px',
            marginTop: '-50px',
          },
          padding: '30px',
        })}>
        <MDXRenderer>{data.about.code.body}</MDXRenderer>
      </div>
    </div>
  )
}
export default Bio
