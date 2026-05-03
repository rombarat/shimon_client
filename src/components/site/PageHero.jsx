import React from 'react';

export default function PageHero({ eyebrow, title, lead, image, imageAlt = '' }) {
  return (
    <>
      <style>{`
        .page-hero {
          position: relative;
          padding: 12rem 3rem 6rem;
          background: var(--brand-black);
          overflow: hidden;
          min-height: 60vh;
          display: flex;
          align-items: flex-end;
        }
        .page-hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .page-hero-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.32) grayscale(15%);
        }
        .page-hero-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(15,15,15,0.5) 0%, rgba(15,15,15,0.2) 50%, var(--brand-black) 100%);
        }
        .page-hero-content {
          position: relative;
          z-index: 1;
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
        }
        .page-hero-eyebrow {
          font-family: var(--font-body);
          font-size: 0.78rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: var(--brand-gold);
          margin-bottom: 1.5rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .page-hero-eyebrow::before {
          content: '';
          width: 40px;
          height: 1px;
          background: var(--brand-gold);
          display: inline-block;
        }
        .page-hero-title {
          font-family: var(--font-display);
          font-size: clamp(2.8rem, 7vw, 6rem);
          font-weight: 700;
          line-height: 1.05;
          letter-spacing: -0.015em;
          color: var(--brand-off-white);
          margin: 0 0 2rem;
          max-width: 900px;
        }
        .page-hero-title em {
          font-style: italic;
          font-weight: 400;
          color: var(--brand-gold);
        }
        .page-hero-lead {
          font-family: var(--font-body);
          font-size: clamp(1rem, 1.4vw, 1.2rem);
          font-weight: 300;
          line-height: 1.8;
          color: var(--brand-muted);
          max-width: 620px;
        }
        @media (max-width: 768px) {
          .page-hero {
            padding: 8rem 1.5rem 4rem;
            min-height: 50vh;
          }
        }
      `}</style>

      <section className="page-hero">
        {image && (
          <div className="page-hero-bg" aria-hidden="true">
            <img src={image} alt={imageAlt} />
          </div>
        )}
        <div className="page-hero-content">
          {eyebrow && <div className="page-hero-eyebrow">{eyebrow}</div>}
          <h1 className="page-hero-title">{title}</h1>
          {lead && <p className="page-hero-lead">{lead}</p>}
        </div>
      </section>
    </>
  );
}
