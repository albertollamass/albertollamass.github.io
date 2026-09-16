import React from "react";

// Personal photo strip, inspired by b-r.io's homepage collage.
// Images live in public/images — swap the files to update.
const photos = [
  { src: "/images/orla.jpg", alt: "Alberto Llamas — portrait" },
  { src: "/images/me.jpg", alt: "Alberto Llamas" },
  { src: "/images/bbal.jpg", alt: "Playing basketball" },
  { src: "/images/bow.jpg", alt: "Archery" },
];

const PhotoStrip = () => (
  <section className="photo-strip" aria-label="Personal photos">
    <div className="container">
      <div className="strip-track">
        {photos.map(p => (
          <figure key={p.src} className="strip-item">
            <img src={p.src} alt={p.alt} loading="lazy" width={420} />
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default PhotoStrip;
