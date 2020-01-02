import React from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import mdxComponents from '../components/mdx'
import Container from '../components/container'

class PageTemplate extends React.Component {
  render() {
    const page = this.props.data.mdx
    return (
      <Container>
        <h1>{page.frontmatter.title}</h1>
        <MDXProvider components={mdxComponents}>
          <MDXRenderer>{page.body}</MDXRenderer>
        </MDXProvider>
      </Container>
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
        category
      }

      body
    }
  }
`

export default PageTemplate
