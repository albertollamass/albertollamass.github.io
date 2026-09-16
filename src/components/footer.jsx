import React from "react";
import { profile } from "../data/cv"
import { useLang } from "../i18n"

const Footer = () => {
  const { t } = useLang();
  const year = new Date().getFullYear()
  const siteLinks = [
    { to: "#about", label: t("nav.about") },
    { to: "#experience", label: t("nav.work") },
    { to: "#work", label: t("nav.projects") },
    { to: "#uses", label: t("nav.uses") },
    { to: "#contact", label: t("nav.contact") },
  ]
  return (
    <footer className="site-footer">
      <div className="container">
        <nav className="footer-nav" aria-label="Site">
          {siteLinks.map(l => (
            <a key={l.to} href={l.to}>{l.label}</a>
          ))}
        </nav>
        <div className="footer-inner">
          <span>© {year} {profile.name}. {t("footer.rights")}</span>
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
