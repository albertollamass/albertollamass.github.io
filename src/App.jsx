import * as React from "react"

import Header from "./components/header"
import Banner from "./components/banner"
import PhotoStrip from "./components/photoStrip"
import AboutMe from "./components/aboutMe"
import Experience from "./components/experience"
import Skills from "./components/skills"
import Footer from "./components/footer"
import Portfolio from "./components/portfolio"
import Uses from "./components/uses"
import ContactForm from "./components/contactForm"
import Education from "./components/education"

const App = () => (
  <div>
    <Header />
    <main>
      <Banner />
      <PhotoStrip />
      <AboutMe />
      <Experience />
      <Portfolio />
      <Skills />
      <Uses />
      <Education />
      <ContactForm />
    </main>
    <Footer />
  </div>
)

export default App
