import React from "react";
import { profile } from "../data/cv"

const projects = [
    {
        key: "apne",
        title: "APNE",
        tag: "FullStack · Accessibility",
        description: "Accessible app to manage students and teachers — ordering menus, assigning tasks — for San Rafael Special Needs School in Granada.",
        stack: ["Django", "Python", "HTML", "CSS", "JavaScript", "Figma", "Jira"],
        link: "https://github.com/albertollamass/GII-DGP",
        linkLabel: "github.com/albertollamass/GII-DGP",
        image: "/images/apne.png",
    },
    {
        key: "universitter",
        title: "Universitter",
        tag: "Mobile · Backend",
        description: "Twitter-like Android app for universities and researchers. Only verified university members can publish research and news.",
        stack: ["Flutter", "Dart", "Ruby on Rails"],
        link: "https://github.com/albertollamass/Practicas-DS/tree/main/P4",
        linkLabel: "github.com/albertollamass/Practicas-DS",
        image: "/images/ds.png",
    },
    {
        key: "angry",
        title: "Angry Birds 3D",
        tag: "WebGL · Game",
        description: "3D Angry Birds-like game built with Three.js. Playable in the browser.",
        stack: ["JavaScript", "HTML", "Three.js"],
        link: "https://github.com/albertollamass/angry-birds",
        linkLabel: "github.com/albertollamass/angry-birds",
        demo: "https://albertollamass.github.io/angry-birds",
        image: "/images/angry.png",
    },
    {
        key: "infopets",
        title: "InfoPets",
        tag: "E-commerce · FullStack",
        description: "Custom pet store with login management, catalogue and shopping cart.",
        stack: ["HTML", "CSS", "JavaScript", "PHP", "SQL", "Ajax"],
        link: "https://github.com/albertollamass/GII_SIBW/",
        linkLabel: "github.com/albertollamass/GII_SIBW",
        image: "/images/sibw.png",
    },
];

// Projects section, inspired by b-r.io/projects:
// one-line intro with a GitHub pointer, then scannable cards.
const Portfolio = () => {
    return (
        <section className="section projects-section" id="work">
            <div className="container">
                <p className="section-eyebrow">Projects</p>
                <h2 className="section-title">Side projects and things I've shipped along the way</h2>
                <p className="section-sub">
                    A mix of university work, freelance and experiments across frameworks and languages.
                    You can find even more on <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>.
                    Production work at Leroy Merlin lives behind enterprise repos — happy to walk through it on a call.
                </p>
                <div className="projects-grid">
                    {projects.map(p => (
                        <article key={p.key} className="project-card">
                            <div className="project-media">
                                <img src={p.image} alt={p.title} loading="lazy" />
                            </div>
                            <div className="project-body">
                                <p className="project-tag">{p.tag}</p>
                                <h3>
                                    <a href={p.link} target="_blank" rel="noopener noreferrer">{p.title} ↗</a>
                                </h3>
                                <p>{p.description} {p.demo && (<a href={p.demo} target="_blank" rel="noopener noreferrer">Play demo ↗</a>)}</p>
                                <div className="pill-row">
                                    {p.stack.map(s => <span key={s} className="pill pill-light">{s}</span>)}
                                </div>
                                <p className="project-domain">{p.linkLabel}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio
