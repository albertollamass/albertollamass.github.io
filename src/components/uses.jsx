import React from "react";
import { uses } from "../data/cv";

// "Uses" section, inspired by b-r.io/uses —
// the tools actually used every day, with a one-line why.
const Uses = () => (
  <section className="section uses-section" id="uses">
    <div className="container">
      <p className="section-eyebrow">Uses</p>
      <h2 className="section-title">What I use every day to build and ship</h2>
      <p className="section-sub">
        Stack and apps I actually rely on — backend, data and AI-assisted workflows.
      </p>
      <div className="uses-grid">
        {uses.map(group => (
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

export default Uses;
