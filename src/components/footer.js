import React from "react"

// Socials
import twitter from "../images/twitter.svg"
import instagram from "../images/instagram.svg"

const featured = [
  
]

const Footer = () => {
  return (
    <footer> 
      <div className="footer">
        <div className="inner">
          <span>© 2023 Alberto Llamas</span>
          <div className="socials">
            {/* <a href="https://www.twitter.com/albertollamass">
              <img src={twitter} alt="Twitter" />
            </a>
            <a href="https://www.instagram.com/albertollamass">
              <img src={instagram} alt="Instagram" />
            </a> */}
          </div>
          <span>alberto.ll.go@gmail.com</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
