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
      name: 'collection',
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
              sort: { order: ASC, fields: fields___slug }
              filter: { fields: { collection: { eq: "meta" } } }
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
                    collection
                    slug
                  }
                  frontmatter {
                    title
                    slug
                  }
                }
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
                      name
                      sourceInstanceName
                    }
                  }
                  excerpt(pruneLength: 250)
                  fields {
                    collection
                    slug
                  }
                  frontmatter {
                    title
                    slug
                  }
                }
              }
            }
            pages: allMdx(
              sort: { order: ASC, fields: fields___slug }
              filter: { fields: { collection: { eq: "pages" } } }
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
                    collection
                    slug
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

        const pages = result.data.pages.edges.filter(e => {
          return e.node.parent.sourceInstanceName === 'pages'
        })

        const meta = result.data.meta.edges.filter(e => {
          return e.node.parent.sourceInstanceName === 'meta'
        })

        const wtf = result.data.wtf.edges.filter(e => {
          return e.node.parent.sourceInstanceName === 'wtf'
        })

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
            path: node.fields.slug,
            component: path.resolve(`./src/templates/meta.js`),
            context: { id: node.id },
          })
        })

        wtf.forEach(({ node }, index) => {
          const next = index === wtf.length - 1 ? null : wtf[index + 1].node
          const previous = index === 0 ? null : wtf[index - 1].node
          createPage({
            path: node.frontmatter.slug,
            component: path.resolve(`./src/templates/wtf.js`),
            context: { id: node.id, previous, next },
          })
        })
      })
    )
  })
}
