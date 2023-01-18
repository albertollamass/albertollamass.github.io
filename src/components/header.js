import * as React from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Header = () => (
  <header>
    <div className="container">
      <div className="inner-header">
        <div className="logo">
          <Link to="/">Alberto Llamas</Link>
        </div>
        <div className="navigation">
          <nav>
            <AnchorLink to="/#title-about">
              About Me
            </AnchorLink>
            <Link to="/#work">Work</Link>
            <Link to="/#contact">Contact</Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Header
