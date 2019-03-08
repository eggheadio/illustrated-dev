import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import Link from '../components/link'
import Layout from '../components/layout'

export default function SiteMap({ data: { wtf, articles } }) {
  return (
    <Layout>
      <Main>
        <h1>Table of Contents</h1>

        <h2>What The Fork Series</h2>
        {wtf.edges.map(({ node: data }) => (
          <div>
            <h3>
              <Link to={`/${data.fields.slug}`}>{data.frontmatter.title}</Link>
            </h3>
            <p>{data.excerpt}</p>
          </div>
        ))}
        <h2>Blog</h2>
        {articles.edges.map(({ node: data }) => (
          <div>
            <h3>
              <Link to={`/${data.fields.slug}`}>{data.frontmatter.title}</Link>
            </h3>
            <p>{data.excerpt}</p>
          </div>
        ))}
      </Main>
    </Layout>
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
    wtf: allMdx(
      sort: { order: ASC, fields: fields___slug }
      filter: { fields: { collection: { eq: "wtf" } } }
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
            collection
            slug
          }
          excerpt(pruneLength: 50)
          frontmatter {
            title
          }
        }
      }
    }
    articles: allMdx(
      sort: { order: ASC, fields: fields___slug }
      filter: { fields: { collection: { eq: "articles" } } }
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
            collection
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
