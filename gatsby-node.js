/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const {createFilePath} =  require(`gatsby-source-filesystem`)
const path = require(`path`)
const execa = require('execa')

exports.onCreateNode = ({node, getNode, actions}) => {
  const { createNodeField } = actions

  if(node.internal.type === `Mdx`){

    const slug = createFilePath({node, getNode})
    const { stdout } = execa.sync('git', [
      'log',
      '-1',
      '--pretty=format:%aI',
      '--',
      node.fileAbsolutePath
    ])

    createNodeField({
      node,
      name: `slug`,
      value: `/writing` + slug,
    })
    createNodeField({
      node,
      name: `lastUpdated`,
      value: new Date(stdout),
    })
  }
}

exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions
  const result = await graphql(`
  query Slugs {
    allMdx {
      edges {
        node {
          fields {
            slug
          }
        }
      }
    }
  }
  `)

  result.data.allMdx.edges.forEach( ({node}) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if(stage === "build-html"){
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: `${process.env.PWD}` + '/node_modules/react-tiny-link/',
            use: loaders.null(),
          },
        ],
      },
    })
  }
}