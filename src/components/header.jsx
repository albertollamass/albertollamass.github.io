import * as React from "react"
import { useState } from "react"
import { profile } from "../data/cv"
import { useLang, useTheme } from "../i18n"

const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);

const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
);

const Header = () => {
  const [open, setOpen] = useState(false)
  const { lang, setLang, t } = useLang();
  const { dark, toggle } = useTheme();

  const links = [
    { to: "#about", label: t("nav.about") },
    { to: "#experience", label: t("nav.work") },
    { to: "#work", label: t("nav.projects") },
    { to: "#uses", label: t("nav.uses") },
    { to: "#education", label: t("nav.education") },
    { to: "#contact", label: t("nav.contact") },
  ]

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
              <span className="logo-name">Alberto Llamas</span>
            </a>
          </div>
          <div className="header-controls">
            <div className="lang-switch" role="group" aria-label={t("nav.lang")}>
              <button
                type="button"
                className={lang === "es" ? "active" : ""}
                onClick={() => setLang("es")}
                aria-pressed={lang === "es"}
              >
                ES
              </button>
              <button
                type="button"
                className={lang === "en" ? "active" : ""}
                onClick={() => setLang("en")}
                aria-pressed={lang === "en"}
              >
                EN
              </button>
            </div>
            <button
              type="button"
              className="icon-btn"
              onClick={toggle}
              aria-label={dark ? t("nav.toLight") : t("nav.toDark")}
              title={dark ? t("nav.toLight") : t("nav.toDark")}
            >
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              className={`nav-toggle ${open ? "open" : ""}`}
              aria-label={t("nav.menu")}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
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
                {t("nav.cv")}
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
