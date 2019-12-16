const path = require('path')
const here = (...p) => path.join(__dirname, ...p)
const _ = require('lodash')

module.exports = {
  siteMetadata: {
    title: `Illustrated.dev`,
    description: `Illustrated web development & javascript tutorials`,
    author: '@mappletons',
    twitterUsername: '@mappletons',
    image: '/static/images/id_opengraph.png',
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-remark-images',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        globalScope: `
          import ResponsiveEmbed from "react-responsive-embed";
          import { TwitterTweetEmbed } from "react-twitter-embed";
          export default { ResponsiveEmbed, TwitterTweetEmbed };
        `,
        defaultLayouts: {
          default: here('./src/components/layout.js'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 900,
              linkImagesToOriginal: false,
              wrapperStyle: {
                float: 'left',
              },
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /content/,
        },
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/sketchnotes/`,
        name: 'sketchnotes',
        ignore: [`**/\.*`], // ignore files starting with a dot,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/explainers/`,
        name: 'explainers',
        ignore: [`**/\.*`], // ignore files starting with a dot,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: '',
        head: true,
      },
    },
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Illustrated.dev',
        short_name: 'Illustrated.dev',
        background_color: '#3FCCDC',
        theme_color: '#3FCCDC',
        display: 'minimal-ui',
        icon: 'src/images/id_favicon.svg', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: 'vre2jfc',
          families: [
            'FF Tisa Web Pro:100,300,800',
            'Brandon Grotesque:400,700',
            'Freight Sans Pro:300,400,600',
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        // this base query will be merged with any queries in each feed
        query: `
          {
            site {
              siteMetadata {
                title
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({query: {site, allMdx}}) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.description,
                  image_url: `https://${site.siteMetadata.title}/images/id_favicon.svg`,
                  url: `https://${site.siteMetadata.title}/${edge.node.frontmatter.slug}`,
                  guid: `https://${site.siteMetadata.title}/${edge.node.frontmatter.slug}`,
                  enclosure: {
                    url: `${site.siteMetadata.title}${edge.node.frontmatter.thumbnail.childImageSharp.original.src}`,
                  },
                  custom_elements: [{'content:encoded': edge.node.html}],
                })
              })
            },
            query: `
              {
                allMdx(
                  sort: { order: ASC, fields: [frontmatter___featured, frontmatter___date] }
                  filter: { fields: { collection: { eq: "wtf" } } }
                ) {
                  edges {
                    node {
                      id
                      html
                      fields {
                        slug
                      }
                      frontmatter {
                        slug
                        title
                        description
                        type
                        featured
                        thumbnail {
                          childImageSharp {
                            original {
                              src
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'Illustrated.dev',
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
