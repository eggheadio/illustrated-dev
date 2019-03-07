import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import Link from '../components/link'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import Image from '../components/image'
import SEO from '../components/seo'
import Layout from '../components/layout'

export default function Index({ data: { site, placeholderImage } }) {
  return (
    <>
      <Layout>
        <Img fluid={placeholderImage.childImageSharp.fluid} />
        <h1>Hello!</h1>
      </Layout>
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
    placeholderImage: file(relativePath: { eq: "social-card.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
          src
        }
      }
    }
  }
`
