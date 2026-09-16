import React from "react";
import { education, languages } from "../data/cv";

const Education = () => (
  <section className="section education-section" id="education">
    <div className="container">
      <p className="section-eyebrow">Background</p>
      <h2 className="section-title">Education &amp; languages</h2>
      <div className="edu-grid">
        <div>
          {education.map(e => (
            <article key={e.school} className="edu-card">
              <div className="edu-head">
                <h3>{e.school}</h3>
                <span className="timeline-period">{e.period}</span>
              </div>
              <p className="edu-degree">{e.degree}</p>
              <ul>
                {e.details.map(d => <li key={d}>{d}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <div className="lang-card">
          <h3>Languages</h3>
          <ul>
            {languages.map(l => (
              <li key={l.lang}><strong>{l.lang}:</strong> {l.level}</li>
            ))}
          </ul>
          <div className="cv-download-box">
            <p>Want the full detail in PDF?</p>
            <a href="/Alberto_Llamas_Gonzalez_CV.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-dark">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
