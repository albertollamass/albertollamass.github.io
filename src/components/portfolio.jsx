import React from "react";
import { profile } from "../data/cv"
import { useLang } from "../i18n"

const projects = [
    {
        key: "apne",
        title: "APNE",
        stack: ["Django", "Python", "HTML", "CSS", "JavaScript", "Figma", "Jira"],
        link: "https://github.com/albertollamass/GII-DGP",
        linkLabel: "github.com/albertollamass/GII-DGP",
        image: "/images/apne.png",
    },
    {
        key: "universitter",
        title: "Universitter",
        stack: ["Flutter", "Dart", "Ruby on Rails"],
        link: "https://github.com/albertollamass/Practicas-DS/tree/main/P4",
        linkLabel: "github.com/albertollamass/Practicas-DS",
        image: "/images/ds.png",
    },
    {
        key: "angry",
        title: "Angry Birds 3D",
        stack: ["JavaScript", "HTML", "Three.js"],
        link: "https://github.com/albertollamass/angry-birds",
        linkLabel: "github.com/albertollamass/angry-birds",
        demo: "https://albertollamass.github.io/angry-birds",
        image: "/images/angry.png",
    },
    {
        key: "infopets",
        title: "InfoPets",
        stack: ["HTML", "CSS", "JavaScript", "PHP", "SQL", "Ajax"],
        link: "https://github.com/albertollamass/GII_SIBW/",
        linkLabel: "github.com/albertollamass/GII_SIBW",
        image: "/images/sibw.png",
    },
];

// Projects section, inspired by b-r.io/projects:
// one-line intro with a GitHub pointer, then scannable cards.
const Portfolio = () => {
    const { t } = useLang();
    const tags = t("pf.tags");
    const descs = t("pf.descs");
    return (
        <section className="section projects-section" id="work">
            <div className="container">
                <p className="section-eyebrow">{t("pf.eyebrow")}</p>
                <h2 className="section-title">{t("pf.title")}</h2>
                <p className="section-sub">
                    {t("pf.subA")} <a href={profile.github} target="_blank" rel="noopener noreferrer">{t("pf.subB")} ↗</a>.{" "}
                    {t("pf.subC")}
                </p>
                <div className="projects-grid">
                    {projects.map((p, i) => (
                        <article key={p.key} className="project-card">
                            <div className="project-media">
                                <img src={p.image} alt={p.title} loading="lazy" />
                            </div>
                            <div className="project-body">
                                <p className="project-tag">{tags[i]}</p>
                                <h3>
                                    <a href={p.link} target="_blank" rel="noopener noreferrer">{p.title} ↗</a>
                                </h3>
                                <p>{descs[i]} {p.demo && (<a href={p.demo} target="_blank" rel="noopener noreferrer">{t("pf.demo")} ↗</a>)}</p>
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
