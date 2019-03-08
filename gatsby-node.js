const { createFilePath } = require('gatsby-source-filesystem')
const _ = require('lodash')

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
            articles: allMdx(
              sort: { order: ASC, fields: fields___slug }
              filter: { fields: { collection: { eq: "articles" } } }
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

        const articles = result.data.articles.edges.filter(e => {
          return e.node.parent.sourceInstanceName === 'articles'
        })

        const wtf = result.data.wtf.edges.filter(e => {
          return e.node.parent.sourceInstanceName === 'wtf'
        })

        articles.forEach(({ node }) => {
          createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/article.js`),
            context: { id: node.id },
          })
        })

        wtf.forEach(({ node }, index) => {
          const previous = index === wtf.length - 1 ? null : wtf[index + 1].node
          const next = index === 0 ? null : wtf[index - 1].node
          createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/wtf.js`),
            context: { id: node.id, previous, next },
          })
        })
      })
    )
  })
}
