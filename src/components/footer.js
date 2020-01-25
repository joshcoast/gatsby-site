import React from "react"
import useSiteMetadata from "../hooks/use-sitemetadata"

const Footer = () => {
  const { title, description } = useSiteMetadata()
  return (
    <footer>
      <p>
        &copy; Copyright {title} - {description}{" "}
      </p>
    </footer>
  )
}

export default Footer
