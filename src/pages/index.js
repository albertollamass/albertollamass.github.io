import * as React from "react"
import "../styles/styles.scss"


//Import Components
import Header from "../components/header"
import Banner from "../components/banner"
import AboutMe from "../components/aboutMe"
import Footer from "../components/footer"
import Portfolio from "../components/portfolio"
import ContactForm from "../components/contactForm"

const IndexPage = () => (
  <div>
    <Header />
    <Banner />
    <AboutMe/>
    <Portfolio />
    <ContactForm/>
    <Footer />
  </div>
)

export default IndexPage
