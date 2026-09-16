import React from "react";
import { experience, profile } from "../data/cv";

// Work history as clean rows (Company / Role / Date),
// inspired by b-r.io's "Work" section.
const Experience = () => (
  <section className="section experience-section" id="experience">
    <div className="container">
      <p className="section-eyebrow">Work</p>
      <h2 className="section-title">Where I've worked</h2>
      <div className="work-list">
        {experience.map((job, idx) => (
          <article key={job.company} className="work-item">
            <div className="work-row">
              <span className="work-index">{String(idx + 1).padStart(2, "0")}</span>
              <div className="work-cell">
                <p className="work-label">Company</p>
                <p className="work-value">{job.company}</p>
                <p className="work-sub">{job.location}</p>
              </div>
              <div className="work-cell">
                <p className="work-label">Role</p>
                <p className="work-value">{job.role}</p>
              </div>
              <div className="work-cell">
                <p className="work-label">Date</p>
                <p className="work-value work-date">{job.period}</p>
              </div>
            </div>
            <ul className="work-bullets">
              {job.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <div className="pill-row">
              {job.stack.map(s => (
                <span key={s} className="pill pill-light">{s}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
      <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
        View LinkedIn ↗
      </a>
    </div>
  </section>
);

export default Experience;
