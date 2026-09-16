import React from "react";
import { profile } from "../data/cv"

const siteLinks = [
  { to: "#about", label: "About" },
  { to: "#experience", label: "Work" },
  { to: "#work", label: "Projects" },
  { to: "#uses", label: "Uses" },
  { to: "#contact", label: "Contact" },
]

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="container">
        <nav className="footer-nav" aria-label="Site">
          {siteLinks.map(l => (
            <a key={l.to} href={l.to}>{l.label}</a>
          ))}
        </nav>
        <div className="footer-inner">
          <span>© {year} {profile.name}. All rights reserved.</span>
          <span className="footer-links">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
