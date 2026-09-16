import React from "react";
import { skills } from "../data/cv";
import { useLang } from "../i18n";

const Skills = () => {
  const { t } = useLang();
  const groups = t("skills.groups");
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <p className="section-eyebrow">{t("skills.eyebrow")}</p>
        <h2 className="section-title">{t("skills.title")}</h2>
        <div className="skills-grid">
          {skills.map((group, i) => (
            <div key={group.category} className="skill-card">
              <h3>{groups[i] || group.category}</h3>
              <div className="pill-row">
                {group.items.map(item => (
                  <span key={item} className="pill pill-light">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
