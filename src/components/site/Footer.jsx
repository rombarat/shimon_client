import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MessageCircle, Mail, Phone } from 'lucide-react';

const FOOTER_NAV = [
  { to: '/', label: 'בית' },
  { to: '/about', label: 'הסיפור' },
  { to: '/services', label: 'הפקות' },
  { to: '/portfolio', label: 'תיק עבודות' },
  { to: '/process', label: 'התהליך' },
  { to: '/contact', label: 'צור קשר' },
];

export default function Footer() {
  return (
    <>
      <style>{`
        .site-footer {
          background: var(--brand-charcoal);
          border-top: 1px solid rgba(198, 168, 124, 0.12);
          padding: 6rem 3rem 3rem;
          color: var(--brand-muted);
          font-family: var(--font-body);
        }
        .footer-grid {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr;
          gap: 4rem;
          padding-bottom: 4rem;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        @media (max-width: 768px) {
          .site-footer { padding: 4rem 1.5rem 2rem; }
          .footer-grid { grid-template-columns: 1fr; gap: 3rem; }
        }
        .footer-brand .footer-logo {
          font-family: var(--font-display);
          font-size: 1.4rem;
          font-weight: 500;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--brand-off-white);
          line-height: 1;
        }
        .footer-brand .footer-logo .dot { color: var(--brand-gold); }
        .footer-tag {
          margin-top: 1.5rem;
          font-size: 0.95rem;
          line-height: 1.8;
          font-weight: 300;
          max-width: 360px;
          color: var(--brand-muted);
        }
        .footer-heading {
          font-family: var(--font-body);
          font-size: 0.75rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--brand-gold);
          margin-bottom: 1.5rem;
          font-weight: 500;
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .footer-link {
          font-size: 0.9rem;
          color: var(--brand-off-white);
          text-decoration: none;
          letter-spacing: 0.08em;
          transition: color 0.3s var(--ease-out), transform 0.3s var(--ease-out);
          display: inline-block;
          width: fit-content;
        }
        .footer-link:hover {
          color: var(--brand-gold);
          transform: translateX(-4px);
        }
        .footer-contact-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.9rem;
          color: var(--brand-off-white);
          text-decoration: none;
          margin-bottom: 0.85rem;
          transition: color 0.3s var(--ease-out);
        }
        .footer-contact-row:hover { color: var(--brand-gold); }
        .footer-contact-row svg {
          color: var(--brand-gold);
          flex-shrink: 0;
        }
        .footer-socials {
          display: flex;
          gap: 0.75rem;
          margin-top: 1.5rem;
        }
        .social-button {
          width: 42px; height: 42px;
          display: inline-flex;
          align-items: center; justify-content: center;
          border: 1px solid rgba(198, 168, 124, 0.25);
          color: var(--brand-off-white);
          text-decoration: none;
          transition: all 0.3s var(--ease-out);
        }
        .social-button:hover {
          border-color: var(--brand-gold);
          color: var(--brand-gold);
          transform: translateY(-2px);
        }
        .footer-bottom {
          max-width: 1400px;
          margin: 0 auto;
          padding-top: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          font-size: 0.75rem;
          color: rgba(154,154,154,0.6);
          letter-spacing: 0.1em;
        }
        @media (max-width: 768px) {
          .footer-bottom { flex-direction: column; text-align: center; }
        }
      `}</style>

      <footer className="site-footer" dir="rtl">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              FOREVER<span className="dot">.</span>
            </Link>
            <p className="footer-tag">
              הפקות הצעות נישואין יוקרתיות. כל פרט מתוכנן בקפידה,
              כל רגע מתועד לנצח. הסיפור שלכם מתחיל כאן.
            </p>
            <div className="footer-socials">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-button"
                aria-label="אינסטגרם"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/972525970972"
                target="_blank"
                rel="noopener noreferrer"
                className="social-button"
                aria-label="וואטסאפ"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="mailto:hello@forever.co.il"
                className="social-button"
                aria-label="אימייל"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <div className="footer-heading">ניווט</div>
            <div className="footer-links">
              {FOOTER_NAV.map((link) => (
                <Link key={link.to} to={link.to} className="footer-link">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="footer-heading">צרו קשר</div>
            <a href="tel:+972525970972" className="footer-contact-row">
              <Phone size={16} />
              <span dir="ltr">052-597-0972</span>
            </a>
            <a href="mailto:hello@forever.co.il" className="footer-contact-row">
              <Mail size={16} />
              hello@forever.co.il
            </a>
            <a
              href="https://wa.me/972525970972"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-row"
            >
              <MessageCircle size={16} />
              שיחה בוואטסאפ
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} FOREVER — כל הזכויות שמורות</span>
          <span>הפקות הצעות נישואין · ישראל</span>
        </div>
      </footer>
    </>
  );
}
