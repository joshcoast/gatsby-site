import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => (
  <Layout>
    <SEO title="Oh, you fucked up." />
    <h1>404!</h1>
    <p>page not found.</p>
    <p>
      Go <Link to={"/"}>home</Link>.
    </p>
  </Layout>
)
