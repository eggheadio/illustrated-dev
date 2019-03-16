import React from 'react'
import { css } from '@emotion/core'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import { bpMinMD } from '../utils/breakpoints'
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
    <div css={css({ maxWidth: '80%', alignItems: "center", margin: 'auto', marginTop: "160px", marginBottom: "120px" })}>
      <div css={css({ display: "flex", alignItems: "center" })}>
        <Img
          css={css({
            marginLeft: 0,
            maxWidth: "165px",
            width: "100%"
          })}
          fluid={data.profilePic.childImageSharp.fluid}
        />
        <div css={css({ padding: "0 40px 40px 40px" })}>
          <h5>Made by</h5>
          <h2>Maggie Appleton</h2>
        </div>
      </div>
      <div
        css={css({
          background: "white",
          [bpMinMD]: {
            padding: "50px 150px"
          },
          marginTop: "-35px",
          padding: "30px"
        })}
      >
        <MDXRenderer
          components={mdx}
          css={css({
            p: {
              [bpMinMD]: {
                fontSize: "20px"
              },
              fontSize: "15px"
            }
          })}
        >
          {data.about.code.body}
        </MDXRenderer>
      </div>
    </div>
  );
}
export default Bio
