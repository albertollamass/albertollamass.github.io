import React, { useState } from "react";
import { profile } from "../data/cv";

const FORM_ENDPOINT = "https://getform.io/f/d91e3a53-12c4-44fd-8bb6-0ff5f82f53b7";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
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
            <h2>Thank you!</h2>
            <p>Message received — I'll get back to you soon at your email.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="container container-narrow">
        <p className="section-eyebrow">Contact</p>
        <h2 className="section-title">Let's work together</h2>
        <p className="section-sub">
          Based in {profile.location} · usually replies within 48h.
          Prefer email? <a href={`mailto:${profile.email}`}>{profile.email}</a> · {profile.phone} ·{" "}
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
            <label htmlFor="cf-name">Name</label>
            <input id="cf-name" type="text" placeholder="Your name" name="name" required />
          </div>
          <div className="form-row">
            <label htmlFor="cf-email">Email</label>
            <input id="cf-email" type="email" placeholder="you@company.com" name="email" required />
          </div>
          <div className="form-row">
            <label htmlFor="cf-msg">Message</label>
            <textarea id="cf-msg" placeholder="Tell me about your project, role or idea…" name="message" rows={5} required />
          </div>
          <button className="btn btn-primary" type="submit">
            Send a message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
