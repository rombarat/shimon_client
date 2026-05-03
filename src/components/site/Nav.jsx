import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { to: '/', label: 'בית' },
  { to: '/about', label: 'הסיפור' },
  { to: '/services', label: 'הפקות' },
  { to: '/portfolio', label: 'תיק עבודות' },
  { to: '/process', label: 'התהליך' },
  { to: '/contact', label: 'צור קשר' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <style>{`
        .site-nav {
          position: fixed;
          inset: 0 0 auto 0;
          z-index: 100;
          padding: 1.5rem 3rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: background 0.4s var(--ease-out), padding 0.4s var(--ease-out), border-color 0.4s var(--ease-out);
          border-bottom: 1px solid transparent;
        }
        .site-nav.scrolled {
          background: rgba(15, 15, 15, 0.85);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          padding: 1rem 3rem;
          border-bottom-color: rgba(198, 168, 124, 0.12);
        }
        .site-nav .logo {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 500;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #fff;
          text-decoration: none;
          line-height: 1;
        }
        .site-nav .logo .dot {
          color: var(--brand-gold);
        }
        .nav-links {
          display: flex;
          gap: 2.5rem;
          align-items: center;
        }
        .nav-link {
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 400;
          letter-spacing: 0.18em;
          color: rgba(255,255,255,0.85);
          text-decoration: none;
          position: relative;
          padding: 6px 0;
          cursor: pointer;
          transition: color 0.3s var(--ease-out);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0; right: 0;
          width: 0; height: 1px;
          background: var(--brand-gold);
          transition: width 0.4s var(--ease-out);
        }
        .nav-link:hover { color: var(--brand-gold); }
        .nav-link:hover::after { width: 100%; }
        .nav-link.active { color: var(--brand-gold); }
        .nav-link.active::after { width: 100%; }

        .nav-toggle {
          display: none;
          background: transparent;
          border: 1px solid rgba(198, 168, 124, 0.3);
          color: #fff;
          width: 44px; height: 44px;
          align-items: center; justify-content: center;
          cursor: pointer;
          transition: all 0.3s var(--ease-out);
        }
        .nav-toggle:hover {
          border-color: var(--brand-gold);
          color: var(--brand-gold);
        }

        @media (max-width: 900px) {
          .site-nav { padding: 1.25rem 1.5rem; }
          .site-nav.scrolled { padding: 1rem 1.5rem; }
          .nav-links { display: none; }
          .nav-toggle { display: inline-flex; }
        }

        .mobile-overlay {
          position: fixed;
          inset: 0;
          background: rgba(15,15,15,0.97);
          backdrop-filter: blur(20px);
          z-index: 99;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.4s var(--ease-out);
        }
        .mobile-overlay.open {
          opacity: 1;
          pointer-events: auto;
        }
        .mobile-link {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 400;
          color: #fff;
          text-decoration: none;
          letter-spacing: 0.05em;
        }
        .mobile-link.active {
          color: var(--brand-gold);
        }
        .mobile-link:hover {
          color: var(--brand-gold);
        }
      `}</style>

      <nav className={`site-nav ${scrolled ? 'scrolled' : ''}`} dir="rtl">
        <Link to="/" className="logo" aria-label="FOREVER — דף הבית">
          FOREVER<span className="dot">.</span>
        </Link>

        <div className="nav-links">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link ${location.pathname === link.to ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className="nav-toggle"
          aria-label={open ? 'סגור תפריט' : 'פתח תפריט'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <div className={`mobile-overlay ${open ? 'open' : ''}`} dir="rtl">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`mobile-link ${location.pathname === link.to ? 'active' : ''}`}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}
