import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => (
  <Layout>
    <SEO title="This is Mom Page" />
    <h1>Why, Hello Kiddo</h1>
    <p>
      Go back <Link to={"/"}>home</Link>.
    </p>
  </Layout>
)
