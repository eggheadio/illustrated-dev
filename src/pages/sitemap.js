import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import Link from '../components/link'

export default function SiteMap({ data: { explainers, meta } }) {
  return (
    <Main>
      <h1>Table of Contents</h1>

      <h2>Illustrated Articles</h2>
      {explainers.edges.map(({ node: data }) => (
        <div>
          <h3>
            <Link to={`/${data.fields.slug}`}>{data.frontmatter.title}</Link>
          </h3>
          <p>{data.excerpt}</p>
        </div>
      ))}
      <h2>The Metalayer</h2>
      {meta.edges.map(({ node: data }) => (
        <div>
          <h3>
            <Link to={`/${data.fields.slug}`}>{data.frontmatter.title}</Link>
          </h3>
          <p>{data.excerpt}</p>
        </div>
      ))}
    </Main>
  )
}

const Main = styled.main`
  margin: 0 auto;
  max-width: 500px;
  padding: 50px 10px;

  h2 {
    margin-top: 2em;
  }
  div {
    margin: 20px 0;
    h3 {
      font-size: 24px;
      line-height: 1;
      margin: 0;
    }
    p {
      margin-top: 10px;
    }
  }
`

export const pageQuery = graphql`
  query ToCPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    explainers: allMdx(
      sort: { order: ASC, fields: fields___slug }
      filter: { fields: { category: { eq: "explainers" } } }
    ) {
      edges {
        node {
          id
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          fields {
            category
            slug
          }
          excerpt(pruneLength: 50)
          frontmatter {
            title
          }
        }
      }
    }
    meta: allMdx(
      sort: { order: ASC, fields: fields___slug }
      filter: { fields: { category: { eq: "meta" } } }
    ) {
      edges {
        node {
          id
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          fields {
            category
            slug
          }
          excerpt(pruneLength: 50)
          frontmatter {
            title
          }
        }
      }
    }
  }
`
