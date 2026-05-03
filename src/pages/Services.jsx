import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowLeft } from 'lucide-react';
import PageHero from '@/components/site/PageHero';
import CtaBlock from '@/components/site/CtaBlock';

const HERO_IMG = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6928c880d53d24dac96c5458/c7c44c871_freepik__a-cinematic-night-shot-of-a-lavish-proposal-setup-__50612.png';

const PACKAGES = [
  {
    name: 'Essence',
    hebrew: 'אסנס',
    tag: 'הפקה אינטימית',
    price: 'מ־12,500 ₪',
    description: 'הפקה אינטימית לזוג שיודע בדיוק מה הוא רוצה. עיצוב נקי, תאורה רכה, רגע בדיוק כמו שדמיינתם.',
    features: [
      'תכנון יצירתי וייעוץ אישי',
      'עיצוב לוקיישן + תאורה אווירתית',
      'צילום סטילס מקצועי (1.5 שעות)',
      'זר פרחים בעיצוב חתימה',
      'ליווי במקום ביום ההפקה',
      'תמונות ערוכות תוך שבוע',
    ],
    accent: false,
  },
  {
    name: 'Signature',
    hebrew: 'סיגנצ׳ר',
    tag: 'הפקת חתימה',
    price: 'מ־24,500 ₪',
    description: 'החבילה המבוקשת שלנו. הפקה קולנועית מלאה — מהקונספט הראשון ועד התמונה האחרונה. כל פרט מתוכנן.',
    features: [
      'כל מה שכלול ב-Essence',
      'קונספט קריאייטיבי מותאם אישית',
      'הפקה קולנועית עם כיוון אמנותי',
      'צילום וידאו 4K + עריכה (3 שעות)',
      'ארוחת ערב גורמה לזוג בלוקיישן',
      'מתנה אישית עם חריטה',
      'שלט / כיתוב מותאם בסצנה',
    ],
    accent: true,
  },
  {
    name: 'Bespoke',
    hebrew: 'בספוק',
    tag: 'בהזמנה אישית',
    price: 'במחיר מותאם',
    description: 'אין גבולות. הפקות ללא תקדים — מטיסות פרטיות עד הפעלה של מקום שלם. לזוגות שרוצים את הבלתי נשכח.',
    features: [
      'תכנון אסטרטגי מלא ללא הגבלה',
      'הפקה רב־מיקומית כולל חו"ל',
      'צוות מלא: צלם, וידאו, תאורה, סאונד',
      'הסעות, לינה ולוגיסטיקה מלאה',
      'אורחים, מוסיקאים, שפים — לבחירה',
      'אלבום עור בעבודת יד',
      'מנהל הפקה אישי 24/7',
    ],
    accent: false,
  },
];

const ADDONS = [
  { title: 'צלם וידאו נוסף', body: 'כיסוי מרובה זוויות לרגעים שלא חוזרים על עצמם.' },
  { title: 'נגן/זמר חי', body: 'גיטרה ספרדית, פסנתר, קוורטט מיתרים — מה שמתאים לסיפור שלכם.' },
  { title: 'זיקוקים ופירוטכניקה', body: 'בוואו רגעי, מתואם לרגע ה״כן״. רישוי וביטוח כלולים.' },
  { title: 'שמפניה ומגנום', body: 'שמפניות בוטיק, מצוננות מראש, מוגשות ברגע הנכון.' },
  { title: 'הסעה ברכב יוקרה', body: 'אוסף נדיר של רכבים — וינטג׳ או מודרניים — לבחירתכם.' },
  { title: 'שירותי דיסקרטיות', body: 'NDA לכל הצוות. מסך פרטיות מוחלט.' },
];

export default function Services() {
  return (
    <div className="forever-services" dir="rtl">
      <style>{`
        .forever-services { background: var(--brand-black); color: var(--brand-off-white); }
        .section { padding: 9rem 3rem; }
        @media (max-width: 768px) { .section { padding: 5rem 1.5rem; } }

        .packages-section { background: var(--brand-black); }
        .packages-head {
          max-width: 1200px;
          margin: 0 auto 5rem;
          text-align: center;
        }
        .packages-eyebrow {
          font-size: 0.78rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: var(--brand-gold);
          margin-bottom: 1.5rem;
          font-weight: 500;
        }
        .packages-title {
          font-family: var(--font-display);
          font-size: clamp(2.4rem, 5.5vw, 4rem);
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }
        .packages-title em { font-style: italic; font-weight: 400; color: var(--brand-gold); }
        .packages-sub {
          font-size: 1.05rem;
          line-height: 1.85;
          color: var(--brand-muted);
          font-weight: 300;
          max-width: 620px;
          margin: 0 auto;
        }

        .packages-grid {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }
        @media (max-width: 1024px) { .packages-grid { grid-template-columns: 1fr; gap: 1rem; } }

        .pkg-card {
          background: var(--brand-charcoal);
          border: 1px solid rgba(255,255,255,0.05);
          padding: 3rem 2.5rem;
          display: flex;
          flex-direction: column;
          transition: all 0.5s var(--ease-out);
          position: relative;
        }
        .pkg-card.accent {
          background: linear-gradient(180deg, var(--brand-charcoal) 0%, #1f1a14 100%);
          border-color: var(--brand-gold-muted);
        }
        .pkg-card:hover {
          border-color: var(--brand-gold);
          transform: translateY(-4px);
        }
        .pkg-badge {
          position: absolute;
          top: -1px; right: 2.5rem;
          background: var(--brand-gold);
          color: var(--brand-black);
          font-family: var(--font-body);
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          padding: 0.4rem 0.9rem;
        }
        .pkg-tag {
          font-family: var(--font-body);
          font-size: 0.72rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--brand-gold);
          margin-bottom: 1.25rem;
          font-weight: 500;
        }
        .pkg-name {
          font-family: var(--font-display);
          font-size: 2.2rem;
          font-weight: 700;
          line-height: 1;
          margin-bottom: 0.4rem;
          color: var(--brand-off-white);
        }
        .pkg-name-he {
          font-family: var(--font-display);
          font-size: 1rem;
          color: var(--brand-muted);
          letter-spacing: 0.05em;
          margin-bottom: 1.5rem;
        }
        .pkg-price {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 400;
          color: var(--brand-gold);
          margin-bottom: 1.75rem;
          padding-bottom: 1.75rem;
          border-bottom: 1px solid rgba(198, 168, 124, 0.18);
        }
        .pkg-desc {
          font-size: 0.95rem;
          line-height: 1.85;
          color: var(--brand-muted);
          font-weight: 300;
          margin-bottom: 2rem;
          min-height: 6rem;
        }
        .pkg-features {
          list-style: none;
          padding: 0;
          margin: 0 0 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.95rem;
          flex-grow: 1;
        }
        .pkg-features li {
          font-size: 0.9rem;
          color: var(--brand-off-white);
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          line-height: 1.55;
        }
        .pkg-features li svg {
          color: var(--brand-gold);
          flex-shrink: 0;
          margin-top: 4px;
        }
        .pkg-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.65rem;
          padding: 1rem 2rem;
          font-family: var(--font-body);
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--brand-off-white);
          background: transparent;
          border: 1px solid rgba(198, 168, 124, 0.5);
          text-decoration: none;
          transition: all 0.4s var(--ease-out);
          cursor: pointer;
        }
        .pkg-cta:hover {
          background: var(--brand-gold);
          color: var(--brand-black);
          border-color: var(--brand-gold);
        }
        .pkg-cta svg { transition: transform 0.4s var(--ease-out); }
        .pkg-cta:hover svg { transform: translateX(-4px); }
        .pkg-card.accent .pkg-cta {
          background: var(--brand-gold);
          color: var(--brand-black);
          border-color: var(--brand-gold);
        }
        .pkg-card.accent .pkg-cta:hover {
          background: transparent;
          color: var(--brand-gold);
        }

        /* Add-ons */
        .addons-section { background: var(--brand-charcoal); }
        .addons-head {
          max-width: 1200px;
          margin: 0 auto 4rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: end;
        }
        @media (max-width: 768px) {
          .addons-head { grid-template-columns: 1fr; gap: 1.5rem; }
        }
        .addons-title {
          font-family: var(--font-display);
          font-size: clamp(2.2rem, 4.5vw, 3.4rem);
          font-weight: 700;
          line-height: 1.15;
        }
        .addons-title em { font-style: italic; font-weight: 400; color: var(--brand-gold); }
        .addons-sub {
          font-size: 0.95rem;
          line-height: 1.9;
          color: var(--brand-muted);
          font-weight: 300;
        }
        .addons-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          border-top: 1px solid rgba(198, 168, 124, 0.12);
          border-right: 1px solid rgba(198, 168, 124, 0.12);
        }
        @media (max-width: 900px) { .addons-grid { grid-template-columns: 1fr; border-right: none; } }
        .addon-cell {
          padding: 2.5rem 2rem;
          border-bottom: 1px solid rgba(198, 168, 124, 0.12);
          border-left: 1px solid rgba(198, 168, 124, 0.12);
          transition: background 0.4s var(--ease-out);
        }
        .addon-cell:hover { background: rgba(198, 168, 124, 0.04); }
        @media (max-width: 900px) { .addon-cell { border-left: none; } }
        .addon-title {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--brand-off-white);
          margin-bottom: 0.85rem;
        }
        .addon-body {
          font-size: 0.9rem;
          color: var(--brand-muted);
          line-height: 1.8;
          font-weight: 300;
        }

        /* Note */
        .note-section { background: var(--brand-black); padding: 5rem 3rem; }
        .note-inner {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }
        .note-text {
          font-family: var(--font-display);
          font-size: clamp(1.4rem, 2.4vw, 1.8rem);
          font-weight: 400;
          font-style: italic;
          color: var(--brand-muted);
          line-height: 1.6;
        }
        .note-text strong { color: var(--brand-gold); font-style: normal; font-weight: 500; }
      `}</style>

      <PageHero
        eyebrow="ההפקות"
        title={<>שלוש דרגות, <em>אינסוף וריאציות.</em></>}
        lead="בחרו את ההיקף שמתאים לכם. כל חבילה היא נקודת התחלה — כל פרט בה ניתן לעיצוב לפי הסיפור שלכם."
        image={HERO_IMG}
        imageAlt="הפקת הצעת נישואין"
      />

      <section className="section packages-section">
        <div className="packages-head">
          <div className="packages-eyebrow">החבילות</div>
          <h2 className="packages-title">אדריכלות של <em>רגע.</em></h2>
          <p className="packages-sub">
            מהפקה אינטימית במזח שקט, ועד הפקה רב־לוקיישנית עם צוות של עשרים —
            יש לנו את הקצב שמתאים לסיפור שלכם.
          </p>
        </div>

        <div className="packages-grid">
          {PACKAGES.map((p) => (
            <article key={p.name} className={`pkg-card ${p.accent ? 'accent' : ''}`}>
              {p.accent && <div className="pkg-badge">המבוקשת ביותר</div>}
              <div className="pkg-tag">{p.tag}</div>
              <div className="pkg-name">{p.name}</div>
              <div className="pkg-name-he">{p.hebrew}</div>
              <div className="pkg-price">{p.price}</div>
              <p className="pkg-desc">{p.description}</p>
              <ul className="pkg-features">
                {p.features.map((f) => (
                  <li key={f}>
                    <Check size={16} strokeWidth={2.5} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="pkg-cta">
                <span>בחירה ותיאום</span>
                <ArrowLeft size={14} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section addons-section">
        <div className="addons-head">
          <h2 className="addons-title">תוספות <em>ושכלולים</em></h2>
          <p className="addons-sub">
            כל הפקה ניתנת להרחבה. הוסיפו את המגעים הקטנים שהופכים ערב טוב
            לערב שלא נשכח.
          </p>
        </div>
        <div className="addons-grid">
          {ADDONS.map((a) => (
            <div key={a.title} className="addon-cell">
              <h3 className="addon-title">{a.title}</h3>
              <p className="addon-body">{a.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="note-section">
        <div className="note-inner">
          <p className="note-text">
            המחירים מהווים נקודת פתיחה. <strong>כל הצעת מחיר מותאמת אישית</strong> לפי הקונספט,
            הלוקיישן, ולוח הזמנים — אחרי שיחה אחת, ארוכה.
          </p>
        </div>
      </section>

      <CtaBlock
        eyebrow="שיחת היכרות"
        title="לא בטוחים איזו חבילה? נדבר."
        body="שיחת ייעוץ של 30 דקות, בלי התחייבות. נכיר אתכם, נשמע על החזון — ונמליץ על המסלול שמתאים."
        primaryLabel="לתיאום שיחה"
      />
    </div>
  );
}
