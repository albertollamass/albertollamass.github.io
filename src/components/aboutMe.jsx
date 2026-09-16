import React from "react";
import { profile } from "../data/cv";

// About narrative, inspired by b-r.io/about:
// first-person story, then an "elsewhere" link list.
const AboutMe = () => {
    return (
        <section className="section about-section" id="about">
          <div className="container container-narrow">
            <p className="section-eyebrow">About</p>
            <h2 className="section-title" id="title-about">I'm Alberto. I live in Madrid, building and sharing the journey.</h2>
            <div className="about-narrative">
              <p>
                I studied Computer Engineering at the University of Granada (2019–2023, 7.8/10,
                honors in Agile Development Methodologies) because I liked creating things from
                scratch. That instinct still drives my work today.
              </p>
              <p>
                I currently work at <strong>Leroy Merlin</strong> as a FullStack Developer, building
                web apps at enterprise level — event-driven microservices with Spring Boot and Kafka,
                production backends migrated from Express to NestJS under hexagonal architecture,
                and frontends with Vue 3 + Pinia. Most of my time goes into making complex systems
                feel straightforward for the people using them.
              </p>
              <p>
                My expertise is full-stack, but I really love the platform side: data pipelines in
                BigQuery, ETL modernized from Pentaho to DBT with CI/CD on Argo Workflows, and
                AI-assisted engineering — I defined spec-driven development practices and trained
                150+ engineers on compliant, effective AI tooling use.
              </p>
              <p>
                When I'm not working, you'll usually find me playing sports, travelling, or
                tinkering with side projects — some of which are below.
              </p>
              <ul className="about-links">
                <li><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">Connect on LinkedIn ↗</a></li>
                <li><a href={profile.github} target="_blank" rel="noopener noreferrer">Follow on GitHub ↗</a></li>
                <li><a href={`mailto:${profile.email}`}>{profile.email} ↗</a></li>
              </ul>
            </div>
          </div>
        </section>
      )
}

export default AboutMe
