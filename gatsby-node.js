// Hey Gatsby, when you go to make pages, use templates we tell you to.
const path = require("path")

// We Hook into the createPages API (createPages is Gatsby specific).
exports.createPages = async ({
  graphql,
  actions: { createPage },
  reporter,
}) => {
  // We do a graphql query
  const postsQuery = await graphql(`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  // If there are errors in the query we spit it back.
  if (postsQuery.errors) {
    reporter.panic("unable to create post", postsQuery.errors)
  }

  // For each post that we get back we create a page.
  // -- This will be true for any Gatsby site, like using the WordPress API.
  // -- The query will be a json fetch instead of the graphql
  const posts = postsQuery.data.allMdx.nodes
  posts.forEach(post => {
    createPage({
      path: `/blog/${post.frontmatter.slug}`,
      component: require.resolve(`./src/templates/post.js`),
      context: {
        slug: post.frontmatter.slug,
      },
    })
  })
}

exports.onCreateWebpackConfig = ({ actions: { setWebpackConfig } }) => {
  setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}
