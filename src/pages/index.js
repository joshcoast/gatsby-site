import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import spacepic from "../images/gatsby-astronaut.png"

export default () => (
  <Layout>
    <SEO title="Hi guys, this is the home page" />
    <h1>Hello World</h1>
    <img src={spacepic} alt="Space Guy" style={{ maxWidth: "75%" }} />
    <p>
      Say hi to <Link to={"/hi-mom"}>Mom</Link>.
    </p>
    <p>
      Read more <Link to={"/about"}>about me</Link>.
    </p>
  </Layout>
)
