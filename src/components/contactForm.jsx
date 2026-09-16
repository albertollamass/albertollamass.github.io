import React, { useState } from "react";
import { profile } from "../data/cv";
import { useLang } from "../i18n";

const FORM_ENDPOINT = "https://getform.io/f/d91e3a53-12c4-44fd-8bb6-0ff5f82f53b7";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLang();
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <section className="section contact-section" id="contact">
        <div className="container container-narrow">
          <div className="contact-success">
            <h2>{t("contact.thanks")}</h2>
            <p>{t("contact.thanksSub")}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="container container-narrow">
        <p className="section-eyebrow">{t("contact.eyebrow")}</p>
        <h2 className="section-title">{t("contact.title")}</h2>
        <p className="section-sub">
          {t("contact.basedIn")} {t("location")} · {t("contact.replies")}.
          {" "}{t("contact.prefer")} <a href={`mailto:${profile.email}`}>{profile.email}</a> · {profile.phone} ·{" "}
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
        </p>
        <form
          action={FORM_ENDPOINT}
          onSubmit={handleSubmit}
          method="POST"
          target="_blank"
          className="contact-form"
        >
          <div className="form-row">
            <label htmlFor="cf-name">{t("contact.name")}</label>
            <input id="cf-name" type="text" placeholder={t("contact.phName")} name="name" required />
          </div>
          <div className="form-row">
            <label htmlFor="cf-email">{t("contact.email")}</label>
            <input id="cf-email" type="email" placeholder={t("contact.phEmail")} name="email" required />
          </div>
          <div className="form-row">
            <label htmlFor="cf-msg">{t("contact.message")}</label>
            <textarea id="cf-msg" placeholder={t("contact.phMsg")} name="message" rows={5} required />
          </div>
          <button className="btn btn-primary" type="submit">
            {t("contact.send")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
