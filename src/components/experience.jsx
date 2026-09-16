import React from "react";
import { experience, profile } from "../data/cv";
import { useLang } from "../i18n";

// Work history as clean rows (Company / Role / Date),
// inspired by b-r.io's "Work" section.
const Experience = () => {
  const { t } = useLang();
  const stack = experience[0].stack;
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <p className="section-eyebrow">{t("exp.eyebrow")}</p>
        <h2 className="section-title">{t("exp.title")}</h2>
        <div className="work-list">
          {experience.map((job, idx) => (
            <article key={job.company} className="work-item">
              <div className="work-row">
                <span className="work-index">{String(idx + 1).padStart(2, "0")}</span>
                <div className="work-cell">
                  <p className="work-label">{t("exp.company")}</p>
                  <p className="work-value">{job.company}</p>
                  <p className="work-sub">{t("exp.location")}</p>
                </div>
                <div className="work-cell">
                  <p className="work-label">{t("exp.role")}</p>
                  <p className="work-value">{job.role}</p>
                </div>
                <div className="work-cell">
                  <p className="work-label">{t("exp.date")}</p>
                  <p className="work-value work-date">{t("exp.period")}</p>
                </div>
              </div>
              <ul className="work-bullets">
                {t("exp.bullets").map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <div className="pill-row">
                {stack.map(s => (
                  <span key={s} className="pill pill-light">{s}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
          {t("exp.linkedin")} ↗
        </a>
      </div>
    </section>
  );
};

export default Experience;
