import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogListing = () => {
  const data = useStaticQuery(graphql`
    query postQuery {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          id
          frontmatter {
            title
            excerpt
            slug
            date(formatString: "MM.DD.YY")
          }
        }
      }
    }
  `)

  const posts = data.allMdx.nodes

  return (
    <Layout>
      <SEO title="Blog Posts Boyz" />
      <h1>Blog Posts</h1>
      <hr />
      {posts.map(post => (
        <article key={post.id}>
          <h2>
            <Link to={`/blog/${post.frontmatter.slug}`}>
              {post.frontmatter.title}
            </Link>
          </h2>
          <p>{post.frontmatter.excerpt}</p>
        </article>
      ))}
    </Layout>
  )
}

export default BlogListing
