const { createFilePath } = require('gatsby-source-filesystem')
const _ = require('lodash')
const slugify = require('@sindresorhus/slugify')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode })
    const parent = getNode(_.get(node, 'parent'))
    createNodeField({
      name: 'slug',
      node,
      value: `${_.get(parent, 'sourceInstanceName')}${_.get(
        node,
        'internal.frontmatter.slug',
        value
      )}`,
    })
    createNodeField({
      name: 'category',
      node,
      value: _.get(parent, 'sourceInstanceName'),
    })
  }
}
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            meta: allMdx(
              sort: { order: DESC, fields: [frontmatter___date] }
              filter: { frontmatter: { category: { eq: "meta" } } }
            ) {
              edges {
                node {
                  id
                  parent {
                    ... on File {
                      name
                      sourceInstanceName
                    }
                  }
                  excerpt(pruneLength: 250)
                  fields {
                    category
                  }
                  frontmatter {
                    title
                    slug
                  }
                }
              }
            }
            illustratednotes: allMdx(
              sort: { order: DESC, fields: [frontmatter___date] }
              filter: { frontmatter: { category: { eq: "illustrated notes" } } }
            ) {
              edges {
                node {
                  id
                  parent {
                    ... on File {
                      name
                      sourceInstanceName
                    }
                  }
                  excerpt(pruneLength: 250)
                  fields {
                    category
                  }
                  frontmatter {
                    title
                    slug
                    date
                    category
                  }
                }
              }
            }
            explainers: allMdx(
              sort: {
                order: DESC
                fields: [frontmatter___featured, frontmatter___date]
              }
              filter: { frontmatter: { category: { eq: "explainers" } } }
            ) {
              edges {
                node {
                  id
                  parent {
                    ... on File {
                      name
                      sourceInstanceName
                    }
                  }
                  excerpt(pruneLength: 250)
                  fields {
                    category
                  }
                  frontmatter {
                    title
                    slug
                    date
                    category
                  }
                }
              }
            }
            pages: allMdx(
              sort: { order: DESC, fields: [frontmatter___date] }
              filter: { frontmatter: { category: { eq: "pages" } } }
            ) {
              edges {
                node {
                  id
                  parent {
                    ... on File {
                      name
                      sourceInstanceName
                    }
                  }
                  excerpt(pruneLength: 250)
                  fields {
                    category
                  }
                  frontmatter {
                    title
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.error(result.errors)
          reject(result.errors)
        }

        const pages = result.data.pages.edges

        const meta = result.data.meta.edges

        const illustratednotes = result.data.illustratednotes.edges

        const explainers = result.data.explainers.edges

        const allPosts = illustratednotes.concat(explainers)

        pages.forEach(({ node }) => {
          createPage({
            path: `${
              node.frontmatter.title
                ? slugify(node.frontmatter.title)
                : node.fields.slug
            }`,
            component: path.resolve(`./src/templates/page.js`),
            context: { id: node.id },
          })
        })

        meta.forEach(({ node }) => {
          createPage({
            path: `${node.frontmatter.slug}`,
            component: path.resolve(`./src/templates/meta.js`),
            context: { id: node.id },
          })
        })

        allPosts.forEach(({ node }, index) => {
          const next =
            index === allPosts.length - 1 ? null : allPosts[index + 1].node
          const previous = index === 0 ? null : allPosts[index - 1].node
          createPage({
            path: `${node.frontmatter.slug}`,
            component: path.resolve(`./src/templates/allPosts.js`),
            context: { id: node.id, previous, next },
          })
        })
      })
    )
  })
}
