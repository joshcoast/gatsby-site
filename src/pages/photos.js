import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Photos = () => {
  const data = useStaticQuery(graphql`
    query Images {
      images: allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
        nodes {
          id
          childImageSharp {
            fixed(width: 200, height: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
      image: file(relativePath: { eq: "justapic.jpg" }) {
        id
        childImageSharp {
          fixed(
            width: 400
            duotone: { highlight: "#ffffff", shadow: "#000000" }
          ) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <Layout>
      <SEO title="click click photos" />
      <h1>Photos</h1>
      <Img fixed={data.image.childImageSharp.fixed} />
      <Img fluid={data.image.childImageSharp.fluid} />
      <hr />
      {data.images.nodes.map(image => (
        <Img key={image.id} fixed={image.childImageSharp.fixed} />
      ))}
    </Layout>
  )
}

export default Photos
