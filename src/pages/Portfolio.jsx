import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
import PageHero from '@/components/site/PageHero';
import CtaBlock from '@/components/site/CtaBlock';

const PROJECTS = [
  {
    id: 'wall',
    title: 'מרפסת הכותל',
    location: 'ירושלים · העיר העתיקה',
    category: 'דתי',
    date: '2025',
    images: [
      '/portfolio/wall/01.jpg',
      '/portfolio/wall/02.jpg',
      '/portfolio/wall/03.jpg',
      '/portfolio/wall/04.jpg',
    ],
    excerpt:
      'הצעה במרפסת הציבורית של הכותל המערבי. רגע של קדושה ושקט, מול אבני העיר העתיקה — הפקה אינטימית שמשלבת מסורת ורומנטיקה בצורה הכי טבעית שיש.',
  },
  {
    id: 'mishkenot',
    title: 'משכנות שאננים',
    location: 'ירושלים',
    category: 'נופי',
    date: '2025',
    images: [
      '/portfolio/mishkenot/02.jpg',
      '/portfolio/mishkenot/03.jpg',
      '/portfolio/mishkenot/01.jpg',
    ],
    excerpt:
      'אחד המקומות הקסומים בירושלים — משכנות שאננים, מול חומות העיר העתיקה. תאורה רכה של בין הערביים, שולחן ערוך לזוג, והנוף שעושה את כל העבודה.',
  },
  {
    id: 'lev-shalom',
    title: 'אולם לב שלום',
    location: 'הפקה באולם פרטי',
    category: 'אולם',
    date: '2025',
    images: [
      '/portfolio/lev-shalom/04.jpg',
      '/portfolio/lev-shalom/01.jpg',
      '/portfolio/lev-shalom/02.jpg',
      '/portfolio/lev-shalom/03.jpg',
    ],
    excerpt:
      'הפקה מלאה באולם פרטי — סידור שולחנות, פרחים, נרות, ותאורה מותאמת. צילום מקצועי תיעד כל רגע, מהציפייה ועד הכן.',
  },
  {
    id: 'restaurant',
    title: 'מסעדה אינטימית',
    location: 'תל אביב',
    category: 'אינטימי',
    date: '2025',
    images: [
      '/portfolio/restaurant/03.jpg',
      '/portfolio/restaurant/01.jpg',
      '/portfolio/restaurant/02.jpg',
    ],
    excerpt:
      'מסעדה שהושכרה במלואה לערב אחד. תאורת נרות, מנגינה שקטה ברקע, ושולחן בודד. הפתעה שהתחילה כארוחה רגילה ונגמרה בדמעות שמחה.',
  },
];

const CATEGORIES = ['הכל', 'דתי', 'נופי', 'אולם', 'אינטימי'];

export default function Portfolio() {
  const [filter, setFilter] = useState('הכל');
  const [selected, setSelected] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const filtered = filter === 'הכל' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selected]);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setSelected(null);
      if (e.key === 'ArrowRight') setActiveIndex((i) => (i - 1 + selected.images.length) % selected.images.length);
      if (e.key === 'ArrowLeft') setActiveIndex((i) => (i + 1) % selected.images.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selected]);

  const openProject = (p) => {
    setSelected(p);
    setActiveIndex(0);
  };

  return (
    <div className="forever-portfolio" dir="rtl">
      <style>{`
        .forever-portfolio { background: var(--brand-black); color: var(--brand-off-white); }
        .section { padding: 6rem 3rem 9rem; }
        @media (max-width: 768px) { .section { padding: 4rem 1.5rem 6rem; } }

        .filters {
          max-width: 1400px;
          margin: 0 auto 4rem;
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        .filter-pill {
          padding: 0.7rem 1.5rem;
          font-family: var(--font-body);
          font-size: 0.78rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          background: transparent;
          border: 1px solid rgba(198, 168, 124, 0.25);
          color: var(--brand-muted);
          cursor: pointer;
          transition: all 0.3s var(--ease-out);
        }
        .filter-pill:hover {
          color: var(--brand-gold);
          border-color: var(--brand-gold);
        }
        .filter-pill.active {
          background: var(--brand-gold);
          color: var(--brand-black);
          border-color: var(--brand-gold);
        }

        .gallery-grid {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }
        @media (max-width: 768px) { .gallery-grid { grid-template-columns: 1fr; gap: 1.5rem; } }

        .project-card {
          position: relative;
          aspect-ratio: 4/5;
          overflow: hidden;
          background: var(--brand-charcoal);
          cursor: pointer;
        }
        .project-image {
          width: 100%; height: 100%;
          object-fit: cover;
          filter: brightness(0.6) grayscale(10%);
          transition: all 0.8s var(--ease-emphasized);
        }
        .project-card:hover .project-image {
          filter: brightness(0.85) grayscale(0%);
          transform: scale(1.04);
        }
        .project-overlay {
          position: absolute; inset: 0;
          padding: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          background: linear-gradient(0deg, rgba(15,15,15,0.92) 0%, rgba(15,15,15,0.2) 50%, transparent 100%);
        }
        .project-count {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          padding: 0.4rem 0.85rem;
          background: rgba(15,15,15,0.7);
          backdrop-filter: blur(6px);
          border: 1px solid var(--brand-gold-muted);
          color: var(--brand-gold);
          font-family: var(--font-body);
          font-size: 0.7rem;
          letter-spacing: 0.15em;
        }
        .project-cat {
          font-family: var(--font-body);
          font-size: 0.7rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--brand-gold);
          margin-bottom: 1rem;
        }
        .project-title {
          font-family: var(--font-display);
          font-size: clamp(1.6rem, 2.5vw, 2.1rem);
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 0.4rem;
          color: var(--brand-off-white);
        }
        .project-meta {
          font-family: var(--font-body);
          font-size: 0.85rem;
          color: var(--brand-muted);
          font-weight: 300;
          letter-spacing: 0.05em;
        }
        .project-cta {
          margin-top: 1.5rem;
          font-family: var(--font-body);
          font-size: 0.72rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--brand-off-white);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          opacity: 0;
          transform: translateY(8px);
          transition: all 0.4s var(--ease-out);
        }
        .project-card:hover .project-cta {
          opacity: 1;
          transform: translateY(0);
          color: var(--brand-gold);
        }

        /* Modal — lightbox style */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.95);
          backdrop-filter: blur(14px);
          z-index: 200;
          animation: fadeIn 0.4s var(--ease-out);
          overflow-y: auto;
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

        .modal-close {
          position: fixed;
          top: 1.5rem; left: 1.5rem;
          width: 44px; height: 44px;
          background: rgba(26,26,26,0.85);
          border: 1px solid var(--brand-gold-muted);
          color: var(--brand-off-white);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s var(--ease-out);
          z-index: 210;
        }
        .modal-close:hover {
          border-color: var(--brand-gold);
          color: var(--brand-gold);
          transform: rotate(90deg);
        }

        .modal-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 5rem 2rem 4rem;
        }
        @media (max-width: 768px) { .modal-inner { padding: 4rem 1rem 3rem; } }

        .modal-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        .modal-cat {
          font-family: var(--font-body);
          font-size: 0.72rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: var(--brand-gold);
          margin-bottom: 1rem;
        }
        .modal-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4vw, 3.2rem);
          font-weight: 700;
          line-height: 1.15;
          color: var(--brand-off-white);
          margin: 0 0 0.5rem;
        }
        .modal-meta {
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: var(--brand-muted);
          letter-spacing: 0.05em;
        }
        .modal-text {
          max-width: 620px;
          margin: 2rem auto 0;
          font-family: var(--font-body);
          font-size: 1.05rem;
          line-height: 1.85;
          color: var(--brand-off-white);
          font-weight: 300;
          text-align: center;
        }

        /* Main image carousel */
        .modal-stage {
          position: relative;
          margin-bottom: 1rem;
          background: var(--brand-charcoal);
          aspect-ratio: 4/3;
          overflow: hidden;
        }
        @media (max-width: 768px) { .modal-stage { aspect-ratio: 1/1; } }
        .modal-stage img {
          width: 100%; height: 100%;
          object-fit: contain;
          background: var(--brand-charcoal);
        }
        .stage-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px; height: 48px;
          background: rgba(15,15,15,0.7);
          border: 1px solid var(--brand-gold-muted);
          color: var(--brand-off-white);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s var(--ease-out);
        }
        .stage-nav:hover {
          background: var(--brand-gold);
          color: var(--brand-black);
        }
        .stage-nav.prev { right: 1rem; }
        .stage-nav.next { left: 1rem; }
        .stage-counter {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          padding: 0.4rem 0.9rem;
          background: rgba(15,15,15,0.75);
          color: var(--brand-gold);
          font-family: var(--font-body);
          font-size: 0.75rem;
          letter-spacing: 0.15em;
        }

        /* Thumbnails strip */
        .thumb-strip {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
          gap: 0.5rem;
          margin-top: 1rem;
        }
        .thumb {
          aspect-ratio: 4/3;
          overflow: hidden;
          background: var(--brand-charcoal);
          cursor: pointer;
          border: 1px solid transparent;
          padding: 0;
          transition: all 0.3s var(--ease-out);
        }
        .thumb img {
          width: 100%; height: 100%;
          object-fit: cover;
          opacity: 0.55;
          transition: opacity 0.3s var(--ease-out);
        }
        .thumb:hover img { opacity: 0.9; }
        .thumb.active {
          border-color: var(--brand-gold);
        }
        .thumb.active img { opacity: 1; }

        .modal-actions {
          display: flex;
          justify-content: center;
          margin-top: 3rem;
        }
        .modal-cta {
          padding: 1.15rem 2.5rem;
          background: var(--brand-gold);
          color: var(--brand-black);
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          text-decoration: none;
          border: 1px solid var(--brand-gold);
          transition: all 0.4s var(--ease-out);
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
        }
        .modal-cta:hover { background: transparent; color: var(--brand-gold); }
      `}</style>

      <PageHero
        eyebrow="תיק עבודות"
        title={<>סיפורי <em>״כן״</em></>}
        lead="כל הפקה — סיפור משלה. כל ערב — חתימה אחרת. הצצה לעולם של רגעים שעיצבנו, ולאנשים שהפקידו בידינו את הרגע הכי חשוב בחייהם."
        image={PROJECTS[0].images[0]}
        imageAlt="הפקה במרפסת הכותל"
      />

      <section className="section">
        <div className="filters">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              className={`filter-pill ${filter === c ? 'active' : ''}`}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filtered.map((p) => (
            <article
              key={p.id}
              className="project-card"
              onClick={() => openProject(p)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') openProject(p); }}
            >
              <img src={p.images[0]} alt={p.title} className="project-image" loading="lazy" />
              <div className="project-count">{p.images.length} תמונות</div>
              <div className="project-overlay">
                <div className="project-cat">{p.category}</div>
                <h3 className="project-title">{p.title}</h3>
                <div className="project-meta">{p.location} · {p.date}</div>
                <div className="project-cta">
                  <span>לגלריה המלאה</span>
                  <ArrowLeft size={12} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <button className="modal-close" onClick={() => setSelected(null)} aria-label="סגור">
            <X size={20} />
          </button>
          <div className="modal-inner" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-cat">{selected.category}</div>
              <h2 className="modal-title">{selected.title}</h2>
              <div className="modal-meta">{selected.location} · {selected.date}</div>
              <p className="modal-text">{selected.excerpt}</p>
            </div>

            <div className="modal-stage">
              <img src={selected.images[activeIndex]} alt={`${selected.title} — ${activeIndex + 1}`} />
              {selected.images.length > 1 && (
                <>
                  <button
                    className="stage-nav prev"
                    aria-label="הקודם"
                    onClick={() =>
                      setActiveIndex((i) => (i - 1 + selected.images.length) % selected.images.length)
                    }
                  >
                    <ChevronRight size={22} />
                  </button>
                  <button
                    className="stage-nav next"
                    aria-label="הבא"
                    onClick={() => setActiveIndex((i) => (i + 1) % selected.images.length)}
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <div className="stage-counter">
                    {activeIndex + 1} / {selected.images.length}
                  </div>
                </>
              )}
            </div>

            {selected.images.length > 1 && (
              <div className="thumb-strip">
                {selected.images.map((img, i) => (
                  <button
                    key={img}
                    className={`thumb ${i === activeIndex ? 'active' : ''}`}
                    onClick={() => setActiveIndex(i)}
                    aria-label={`תמונה ${i + 1}`}
                  >
                    <img src={img} alt="" loading="lazy" />
                  </button>
                ))}
              </div>
            )}

            <div className="modal-actions">
              <Link to="/contact" className="modal-cta">
                <span>הפקה דומה?</span>
                <ArrowLeft size={14} />
              </Link>
            </div>
          </div>
        </div>
      )}

      <CtaBlock
        eyebrow="הסיפור שלכם"
        title="הסיפור הבא יכול להיות שלכם"
        body="אין שתי הפקות זהות. הראיתם לעצמכם את ההפקות שעשינו — עכשיו בואו נדבר על שלכם."
        primaryLabel="לתיאום שיחה"
      />
    </div>
  );
}
