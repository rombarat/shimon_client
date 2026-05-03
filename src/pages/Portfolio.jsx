import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, X } from 'lucide-react';
import PageHero from '@/components/site/PageHero';
import CtaBlock from '@/components/site/CtaBlock';

const HERO_IMG = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6928c880d53d24dac96c5458/0d1b90055_freepik__a-wideangle-landscape-shot-of-a-secluded-luxurious__50611.png';

const PROJECTS = [
  {
    id: 'rooftop',
    title: 'גג בלב תל אביב',
    couple: 'יואב ושיר',
    date: 'מרץ 2024',
    category: 'אורבני',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6928c880d53d24dac96c5458/c7c44c871_freepik__a-cinematic-night-shot-of-a-lavish-proposal-setup-__50612.png',
    excerpt: 'הפקה דרמטית על גג מבודד בלב העיר. תאורה רכה, נרות, ובסוף — כן.',
  },
  {
    id: 'desert',
    title: 'שקיעה במכתש',
    couple: 'נועם ותמר',
    date: 'אוקטובר 2024',
    category: 'נופי',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6928c880d53d24dac96c5458/0d1b90055_freepik__a-wideangle-landscape-shot-of-a-secluded-luxurious__50611.png',
    excerpt: 'מכתש רמון, רגע לפני השקיעה. הפקה מינימליסטית מול נוף בלתי נשכח.',
  },
  {
    id: 'winter',
    title: 'לילה חורפי בגליל',
    couple: 'אלון ונועה',
    date: 'נובמבר 2024',
    category: 'חורף',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6928c880d53d24dac96c5458/c43361fef_freepik__a-romantic-winter-setup-outdoors-at-night-a-couple__50614.png',
    excerpt: 'אש, שמיכות צמר, וכוסיות יין מחומם. אינטימיות במצבה הטהור.',
  },
  {
    id: 'beach',
    title: 'חוף פרטי בקיסריה',
    couple: 'דניאל ומיכל',
    date: 'יולי 2024',
    category: 'חוף',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6928c880d53d24dac96c5458/aec010f54_freepik__cinematic-night-shot-of-a-romantic-proposal-setup-__50615.png',
    excerpt: 'חוף מבודד שהושכר במלואו. מסלול מואר עד גלי הים, וקוורטט מיתרים.',
  },
  {
    id: 'cabin',
    title: 'בקתת עץ ביערות הצפון',
    couple: 'עידו וליאור',
    date: 'דצמבר 2024',
    category: 'חורף',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6928c880d53d24dac96c5458/18a40d9ce_freepik__cinematic-lowangle-shot-of-a-couple-sitting-on-a-l__50613.png',
    excerpt: 'סוף שבוע פרטי בבקתה מעוצבת. ארוחת ערב, אש, ואור נרות בלבד.',
  },
  {
    id: 'private',
    title: 'הצעה פרטית בבית',
    couple: 'אסף ועדן',
    date: 'פברואר 2025',
    category: 'אינטימי',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6928c880d53d24dac96c5458/9d64b5daa_freepik__cinematic-medium-shot-of-a-couple-in-a-tight-emoti__50610.png',
    excerpt: 'איפה שהיו לראשונה. הסלון הפך לסט קולנועי לכל הערב.',
  },
];

const CATEGORIES = ['הכל', 'אורבני', 'נופי', 'חורף', 'חוף', 'אינטימי'];

export default function Portfolio() {
  const [filter, setFilter] = useState('הכל');
  const [selected, setSelected] = useState(null);

  const filtered = filter === 'הכל' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

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
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 1024px) { .gallery-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { .gallery-grid { grid-template-columns: 1fr; } }

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
          filter: brightness(0.55) grayscale(15%);
          transition: all 0.8s var(--ease-emphasized);
        }
        .project-card:hover .project-image {
          filter: brightness(0.75) grayscale(0%);
          transform: scale(1.05);
        }
        .project-overlay {
          position: absolute; inset: 0;
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          background: linear-gradient(0deg, rgba(15,15,15,0.92) 0%, rgba(15,15,15,0.2) 50%, transparent 100%);
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
          font-size: clamp(1.4rem, 2.2vw, 1.85rem);
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 0.5rem;
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

        /* Modal */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.92);
          backdrop-filter: blur(12px);
          z-index: 200;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: fadeIn 0.4s var(--ease-out);
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .modal {
          width: 100%;
          max-width: 980px;
          max-height: 90vh;
          background: var(--brand-charcoal);
          border: 1px solid var(--brand-gold-muted);
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          overflow: hidden;
          position: relative;
        }
        @media (max-width: 768px) {
          .modal {
            grid-template-columns: 1fr;
            max-height: 92vh;
            overflow-y: auto;
          }
        }
        .modal-image { aspect-ratio: 4/5; overflow: hidden; }
        .modal-image img {
          width: 100%; height: 100%;
          object-fit: cover;
        }
        .modal-content {
          padding: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
        }
        @media (max-width: 768px) { .modal-content { padding: 2rem; } }
        .modal-close {
          position: absolute;
          top: 1rem; left: 1rem;
          width: 40px; height: 40px;
          background: transparent;
          border: 1px solid var(--brand-dark);
          color: var(--brand-off-white);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s var(--ease-out);
        }
        .modal-close:hover {
          border-color: var(--brand-gold);
          color: var(--brand-gold);
          transform: rotate(90deg);
        }
        .modal-cat {
          font-family: var(--font-body);
          font-size: 0.7rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--brand-gold);
          margin-bottom: 1rem;
        }
        .modal-title {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 3vw, 2.4rem);
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 0.5rem;
          color: var(--brand-off-white);
        }
        .modal-meta {
          font-family: var(--font-body);
          font-size: 0.85rem;
          color: var(--brand-muted);
          margin-bottom: 1.75rem;
        }
        .modal-meta strong { color: var(--brand-gold); font-weight: 500; margin-left: 0.5rem; }
        .modal-text {
          font-size: 1rem;
          line-height: 1.85;
          color: var(--brand-off-white);
          margin-bottom: 2rem;
          font-weight: 300;
        }
        .modal-cta {
          align-self: flex-start;
          padding: 1rem 2.25rem;
          background: var(--brand-gold);
          color: var(--brand-black);
          font-family: var(--font-body);
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-decoration: none;
          border: 1px solid var(--brand-gold);
          transition: all 0.4s var(--ease-out);
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
        }
        .modal-cta:hover { background: transparent; color: var(--brand-gold); }
      `}</style>

      <PageHero
        eyebrow="תיק עבודות"
        title={<>סיפורי <em>״כן״</em></>}
        lead="כל הפקה — סיפור משלה. כל ערב — חתימה אחרת. הצצה לעולם של רגעים שעיצבנו, ולאנשים שהפקידו בידינו את הרגע הכי חשוב בחייהם."
        image={HERO_IMG}
        imageAlt="הפקה במכתש"
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
              onClick={() => setSelected(p)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') setSelected(p); }}
            >
              <img src={p.image} alt={p.title} className="project-image" loading="lazy" />
              <div className="project-overlay">
                <div className="project-cat">{p.category}</div>
                <h3 className="project-title">{p.title}</h3>
                <div className="project-meta">{p.couple} · {p.date}</div>
                <div className="project-cta">
                  <span>לסיפור המלא</span>
                  <ArrowLeft size={12} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)} aria-label="סגור">
              <X size={18} />
            </button>
            <div className="modal-image">
              <img src={selected.image} alt={selected.title} />
            </div>
            <div className="modal-content">
              <div className="modal-cat">{selected.category}</div>
              <h3 className="modal-title">{selected.title}</h3>
              <div className="modal-meta">
                <strong>{selected.couple}</strong>· {selected.date}
              </div>
              <p className="modal-text">{selected.excerpt}</p>
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
