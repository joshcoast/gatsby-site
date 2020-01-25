import React from "react"
import useSiteMetadata from "../hooks/use-sitemetadata"
import { Link } from "gatsby"

const Header = () => {
  const { title, description } = useSiteMetadata()
  return (
    <header>
      <h1>
        <Link to={`/`}>{title}</Link>
      </h1>
      <p>
        <em>
          <small>{description}</small>
        </em>
      </p>
      <nav>
        <ul>
          <li>
            <Link to={"/"} activeClassName="active">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"} activeClassName="active">
              About
            </Link>
          </li>
          <li>
            <Link to={"/photos"} activeClassName="active">
              Photos
            </Link>
          </li>
          <li>
            <Link to={"/hi-mom"} activeClassName="active">
              Hi Mom
            </Link>
          </li>
          <li>
            <Link to={"/blog"} activeClassName="active" partiallyActive={true}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
