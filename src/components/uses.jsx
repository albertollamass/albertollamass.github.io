import React from "react";
import { useLang } from "../i18n";

// "Uses" section, inspired by b-r.io/uses —
// the tools actually used every day, with a one-line why.
const Uses = () => {
  const { t } = useLang();
  return (
    <section className="section uses-section" id="uses">
      <div className="container">
        <p className="section-eyebrow">{t("uses.eyebrow")}</p>
        <h2 className="section-title">{t("uses.title")}</h2>
        <p className="section-sub">{t("uses.sub")}</p>
        <div className="uses-grid">
          {t("uses.groups").map(group => (
            <div key={group.group} className="uses-card">
              <h3>{group.group}</h3>
              <ul>
                {group.items.map(item => (
                  <li key={item.name}>
                    <strong>{item.name}</strong>
                    <span>{item.note}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Uses;
