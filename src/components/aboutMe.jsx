import React from "react";
import { profile } from "../data/cv";
import { useLang } from "../i18n";

// About narrative, inspired by b-r.io/about:
// first-person story, then an "elsewhere" link list.
const AboutMe = () => {
    const { t } = useLang();
    return (
        <section className="section about-section" id="about">
          <div className="container container-narrow">
            <p className="section-eyebrow">{t("about.eyebrow")}</p>
            <h2 className="section-title" id="title-about">{t("about.title")}</h2>
            <div className="about-narrative">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
              <p>{t("about.p3")}</p>
              <p>{t("about.p4")}</p>
              <ul className="about-links">
                <li><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">{t("about.linkIn")} ↗</a></li>
                <li><a href={profile.github} target="_blank" rel="noopener noreferrer">{t("about.linkGh")} ↗</a></li>
                <li><a href={`mailto:${profile.email}`}>{profile.email} ↗</a></li>
              </ul>
            </div>
          </div>
        </section>
      )
}

export default AboutMe
