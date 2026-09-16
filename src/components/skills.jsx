import React from "react";
import { skills } from "../data/cv";

const Skills = () => (
  <section className="section skills-section" id="skills">
    <div className="container">
      <p className="section-eyebrow">Skills</p>
      <h2 className="section-title">Stack &amp; practices</h2>
      <div className="skills-grid">
        {skills.map(group => (
          <div key={group.category} className="skill-card">
            <h3>{group.category}</h3>
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

export default Skills;
