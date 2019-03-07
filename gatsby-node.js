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
            projects: allMdx(
              sort: { order: ASC, fields: fields___slug }
              filter: { fields: { collection: { eq: "projects" } } }
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
            drawer: allMdx(
              sort: { order: ASC, fields: fields___slug }
              filter: { fields: { collection: { eq: "drawer" } } }
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

        const projects = result.data.projects.edges.filter(e => {
          return e.node.parent.sourceInstanceName === 'projects'
        })

        const drawer = result.data.drawer.edges.filter(e => {
          return e.node.parent.sourceInstanceName === 'drawer'
        })

        articles.forEach(({ node }) => {
          createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/article.js`),
            context: { id: node.id },
          })
        })

        drawer.forEach(({ node }) => {
          createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/drawer-template.js`),
            context: { id: node.id },
          })
        })

        projects.forEach(({ node }, index) => {
          const previous =
            index === projects.length - 1 ? null : projects[index + 1].node
          const next = index === 0 ? null : projects[index - 1].node
          createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/project.js`),
            context: { id: node.id, previous, next },
          })
        })
      })
    )
  })
}
