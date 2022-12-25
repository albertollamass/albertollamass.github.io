import React from "react"

//Featured Companies
import gatsby from "../images/gatsby-icon.png"


// Socials
import twitter from "../images/twitter.svg"
import instagram from "../images/instagram.svg"

const featured = [
  
]

const Footer = () => {
  return (
    <footer>
      <div className="featured-companies">
        <div className="container">
          <ul>
            {featured.map(({ name, image }) => (
              <li key="name">
                <img src={image} alt={name} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer">
        <div className="inner">
          <span>© 2019 OladimejI Odunsi</span>
          <div className="socials">
            <a href="https://www.twitter.com/albertollamass">
              <img src={twitter} alt="Twitter" />
            </a>
            <a href="https://www.instagram.com/albertollamass">
              <img src={instagram} alt="Instagram" />
            </a>
          </div>
          <span>letscreate@oladimeg.com</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer