import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import ArticleLayout from '../components/article-layout'
import { bpMinLG } from '../utils/breakpoints'
import Link from '../components/link'

class ArticleTemplate extends React.Component {
  render() {
    const article = this.props.data.mdx
    return (
      <ArticleLayout>
        <div
          css={css`
            font-size: 15px;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 40px;
            opacity: 0.7;
            margin-top: 20px;
          `}>
          <Link to='/'>HOME</Link> /
          <div
            css={css`
              position: absolute;
              background: rgba(0, 0, 0, 0.08);
              padding: 5px 10px;
              margin-left: 50px;
            `}>
            <Link to='/projects'>Projects</Link> -{' '}
            <Link to='/screenshots'>Screenshots</Link> -{' '}
          </div>
          <Link
            to={`/${article.fields.collection}`}
            css={css`
              font-weight: bold;
            `}>
            {article.fields.collection}
          </Link>{' '}
          / {article.frontmatter.title && article.frontmatter.title}
        </div>
        <h2>{article.frontmatter.description}</h2>
        <hr />
        <MDXRenderer>{article.code.body}</MDXRenderer>
      </ArticleLayout>
    )
  }
}

export const pageQuery = graphql`
  query ArticleQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        description
      }
      fields {
        collection
      }
      code {
        body
      }
    }
  }
`

export default ArticleTemplate
