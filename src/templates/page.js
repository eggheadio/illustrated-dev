import React from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import mdxComponents from '../components/mdx'
import Layout from '../components/layout'
import Container from '../components/container'

class PageTemplate extends React.Component {
  render() {
    const page = this.props.data.mdx
    return (
      <Layout>
        <Container>
          <h1>{page.frontmatter.title}</h1>
          <MDXRenderer components={mdxComponents}>{page.code.body}</MDXRenderer>
        </Container>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query page($id: String) {
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

export default PageTemplate
