import React from "react";
import { profile } from "../data/cv";
import { useLang } from "../i18n";

const Education = () => {
  const { t } = useLang();
  return (
    <section className="section education-section" id="education">
      <div className="container">
        <p className="section-eyebrow">{t("edu.eyebrow")}</p>
        <h2 className="section-title">{t("edu.title")}</h2>
        <div className="edu-grid">
          <div>
            <article className="edu-card">
              <div className="edu-head">
                <h3>{t("edu.school")}</h3>
                <span className="timeline-period">{t("edu.period")}</span>
              </div>
              <p className="edu-degree">{t("edu.degree")}</p>
              <ul>
                {t("edu.details").map(d => <li key={d}>{d}</li>)}
              </ul>
            </article>
          </div>
          <div className="lang-card">
            <h3>{t("edu.langsTitle")}</h3>
            <ul>
              {t("edu.langs").map(l => (
                <li key={l.lang}><strong>{l.lang}:</strong> {l.level}</li>
              ))}
            </ul>
            <div className="cv-download-box">
              <p>{t("edu.cvBox")}</p>
              <a href={profile.cvPdfPath} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
                {t("edu.downloadCV")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
