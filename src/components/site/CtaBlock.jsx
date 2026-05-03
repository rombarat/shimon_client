import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MessageCircle } from 'lucide-react';

export default function CtaBlock({
  eyebrow = 'הצעד הבא',
  title = 'הרגע שלכם מתחיל בשיחה',
  body = 'שיחה דיסקרטית, ללא התחייבות. ספרו לנו על החזון שלכם — ונהפוך אותו למציאות.',
  primaryHref = '/contact',
  primaryLabel = 'בואו נדבר',
  whatsapp = true,
}) {
  return (
    <>
      <style>{`
        .cta-block {
          padding: 9rem 3rem;
          background: linear-gradient(180deg, var(--brand-black) 0%, var(--brand-charcoal) 100%);
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .cta-block::before {
          content: '';
          position: absolute;
          inset: auto 0 0 0;
          height: 1px;
          background: linear-gradient(to left, transparent, var(--brand-gold-muted), transparent);
        }
        .cta-block-inner {
          max-width: 800px;
          margin: 0 auto;
        }
        .cta-eyebrow {
          font-family: var(--font-body);
          font-size: 0.78rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: var(--brand-gold);
          margin-bottom: 1.75rem;
          font-weight: 500;
        }
        .cta-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 5vw, 4rem);
          font-weight: 700;
          line-height: 1.15;
          color: var(--brand-off-white);
          margin: 0 0 1.5rem;
        }
        .cta-body {
          font-family: var(--font-body);
          font-size: 1rem;
          font-weight: 300;
          line-height: 1.8;
          color: var(--brand-muted);
          margin-bottom: 3rem;
        }
        .cta-actions {
          display: inline-flex;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        .btn-primary, .btn-ghost {
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: 1.25rem 2.5rem;
          border: 1px solid var(--brand-gold);
          cursor: pointer;
          transition: all 0.4s var(--ease-out);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: transparent;
        }
        .btn-primary {
          background: var(--brand-gold);
          color: var(--brand-black);
        }
        .btn-primary:hover {
          background: transparent;
          color: var(--brand-gold);
        }
        .btn-ghost {
          color: var(--brand-off-white);
          border-color: rgba(198, 168, 124, 0.4);
        }
        .btn-ghost:hover {
          color: var(--brand-gold);
          border-color: var(--brand-gold);
        }
        .btn-primary svg, .btn-ghost svg {
          transition: transform 0.4s var(--ease-out);
        }
        .btn-primary:hover svg {
          transform: translateX(-4px);
        }
        @media (max-width: 768px) {
          .cta-block { padding: 5rem 1.5rem; }
        }
      `}</style>

      <section className="cta-block">
        <div className="cta-block-inner">
          {eyebrow && <div className="cta-eyebrow">{eyebrow}</div>}
          <h2 className="cta-title">{title}</h2>
          {body && <p className="cta-body">{body}</p>}
          <div className="cta-actions">
            <Link to={primaryHref} className="btn-primary">
              <span>{primaryLabel}</span>
              <ArrowLeft size={16} />
            </Link>
            {whatsapp && (
              <a
                href="https://wa.me/972525970972"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <MessageCircle size={16} />
                <span>שיחה בוואטסאפ</span>
              </a>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
