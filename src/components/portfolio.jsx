import React from "react";
import { profile } from "../data/cv"
import { useLang } from "../i18n"

const projects = [
    {
        key: "angry",
        title: "Angry Birds 3D",
        stack: ["JavaScript", "HTML", "Three.js"],
        link: "https://github.com/albertollamass/angry-birds",
        linkLabel: "github.com/albertollamass/angry-birds",
        demo: "https://albertollamas-gii.github.io/angry-birds-SG/",
        image: "/images/angry.png",
    },
    {
        key: "boralba",
        title: "Web Boralba",
        stack: ["React", "Vite", "Supabase"],
        link: "https://github.com/albertollamass/web-boralba",
        linkLabel: "github.com/albertollamass/web-boralba",
        demo: "https://albertollamass.github.io/web-boralba/",
        image: null,
    },
    {
        key: "tfg",
        title: "Peña Deportiva App",
        stack: ["Flutter", "Dart", "Firebase"],
        link: "https://github.com/albertollamass/TFG/tree/main/football_club_app",
        linkLabel: "github.com/albertollamass/TFG",
        image: null,
    },
    {
        key: "spotify",
        title: "Spotify Monthly Playlists",
        stack: ["Go", "PostgreSQL", "Spotify API"],
        link: "https://github.com/albertollamass/spotify-monthly-playlist",
        linkLabel: "github.com/albertollamass/spotify-monthly-playlist",
        image: null,
        wip: true,
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
                            {p.image && (
                                <div className="project-media">
                                    <img src={p.image} alt={p.title} loading="lazy" />
                                </div>
                            )}
                            <div className="project-body">
                                <p className="project-tag">
                                    {tags[i]}{p.wip && <span className="wip-badge">WIP</span>}
                                </p>
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
