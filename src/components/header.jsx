import * as React from "react"
import { useState } from "react"
import { profile } from "../data/cv"

const links = [
  { to: "#about", label: "About" },
  { to: "#experience", label: "Work" },
  { to: "#work", label: "Projects" },
  { to: "#uses", label: "Uses" },
  { to: "#education", label: "Education" },
  { to: "#contact", label: "Contact" },
]

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container">
        <div className="inner-header">
          <div className="logo">
            <a href="#top" onClick={() => setOpen(false)} className="logo-link">
              <img
                src="/images/me.jpg"
                alt="Alberto Llamas"
                width={32}
                height={32}
                className="logo-avatar"
              />
              Alberto Llamas
            </a>
          </div>
          <button
            className={`nav-toggle ${open ? "open" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </button>
          <div className={`navigation ${open ? "open" : ""}`}>
            <nav onClick={() => setOpen(false)}>
              {links.map(l => (
                <a key={l.to} href={l.to}>
                  {l.label}
                </a>
              ))}
              <a
                className="nav-cta"
                href={profile.cvPdfPath}
                target="_blank"
                rel="noopener noreferrer"
              >
                CV
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
