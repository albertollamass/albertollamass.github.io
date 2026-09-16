import React from "react";
import { profile } from "../data/cv";
import { useLang } from "../i18n";

// Homepage hero, inspired by b-r.io:
// one strong statement, a short paragraph with inline links,
// socials and two actions. Photos live in the strip below.
const Banner = () => {
    const { t } = useLang();
    return (
        <section className="hero">
            <div className="container container-narrow">
                <div className="hero-avatar">
                    <img
                        src="/images/me.jpg"
                        alt={t("hero.avatarAlt")}
                        width={72}
                        height={72}
                        className="avatar-img"
                    />
                </div>
                <h1 className="hero-title">{t("hero.title")}</h1>
                <p className="hero-summary">
                    {t("hero.a")} <strong>{profile.name}</strong>{t("hero.b")}{" "}
                    <strong>Leroy Merlin</strong> {t("hero.c")} {t("location")} {t("hero.d")}{" "}
                    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">{t("hero.linkedin")}</a>.
                </p>
                <div className="hero-socials">
                    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn ↗</a>
                    <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub ↗</a>
                    <a href={`mailto:${profile.email}`} aria-label="Email">Email ↗</a>
                </div>
                <div className="hero-buttons">
                    <a href="#experience" className="btn btn-primary">{t("hero.viewWork")}</a>
                    <a href={profile.cvPdfPath} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                        {t("hero.downloadCV")}
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Banner
