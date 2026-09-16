import React from "react";
import { profile } from "../data/cv";

// Homepage hero, inspired by b-r.io:
// one strong statement, a short paragraph with inline links,
// socials and two actions. Photos live in the strip below.
const Banner = () => {
    return (
        <section className="hero">
            <div className="container container-narrow">
                <div className="hero-avatar">
                    <img
                        src="/images/me.jpg"
                        alt="Alberto Llamas González"
                        width={72}
                        height={72}
                        className="avatar-img"
                    />
                </div>
                <h1 className="hero-title">Software engineer building event-driven products.</h1>
                <p className="hero-summary">
                    I'm <strong>Alberto Llamas González</strong>, FullStack Developer at{" "}
                    <strong>Leroy Merlin</strong> in {profile.location} — microservices with
                    Spring Boot + Kafka, APIs with NestJS, frontends with Vue 3, and data
                    platforms on BigQuery + DBT. I also lead AI tooling enablement and share
                    the journey on <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>.
                </p>
                <div className="hero-socials">
                    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn ↗</a>
                    <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub ↗</a>
                    <a href={`mailto:${profile.email}`} aria-label="Email">Email ↗</a>
                </div>
                <div className="hero-buttons">
                    <a href="#experience" className="btn btn-primary">View work</a>
                    <a href={profile.cvPdfPath} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                        Download CV
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Banner
