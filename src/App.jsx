import * as React from "react"
import { LanguageProvider, ThemeProvider } from "./i18n"

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
  <LanguageProvider>
    <ThemeProvider>
      <div id="top">
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
    </ThemeProvider>
  </LanguageProvider>
)

export default App
