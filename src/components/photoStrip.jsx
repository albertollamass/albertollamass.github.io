import React from "react";
import { useLang } from "../i18n";

// Personal photo strip, inspired by b-r.io's homepage collage.
// Images live in public/images — swap the files to update.
const srcs = [
  "/images/orla.jpg",
  "/images/me.jpg",
  "/images/bbal.jpg",
  "/images/bow.jpg",
];

const PhotoStrip = () => {
  const { t } = useLang();
  const alts = t("photos.items");
  return (
    <section className="photo-strip" aria-label={t("photos.label")}>
      <div className="container">
        <div className="strip-track">
          {srcs.map((src, i) => (
            <figure key={src} className="strip-item">
              <img src={src} alt={alts[i] || ""} loading="lazy" width={420} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoStrip;
