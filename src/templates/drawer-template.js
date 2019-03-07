import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import ArticleLayout from '../components/article-layout'
import { bpMinLG } from '../utils/breakpoints'
import Link from '../components/link'

class DrawerTemplate extends React.Component {
  render() {
    const drawerItem = this.props.data.mdx
    return (
      <ArticleLayout>
        <h1
          css={css`
            font-size: 15px;
            text-transform: uppercase;
            letter-spacing: 1px;
            opacity: 0.7;
            ${bpMinLG} {
              ${drawerItem.frontmatter.title && 'margin-top: -10px;'}
            }
            margin-top: 20px;
          `}>
          <Link to='/'>HOME</Link> /{' '}
          <Link to={`/${drawerItem.fields.collection}`}>
            {drawerItem.fields.collection}
          </Link>{' '}
          / {drawerItem.frontmatter.title && drawerItem.frontmatter.title}
        </h1>
        <MDXRenderer>{drawerItem.code.body}</MDXRenderer>
      </ArticleLayout>
    )
  }
}

export const pageQuery = graphql`
  query DrawerQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
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

export default DrawerTemplate
