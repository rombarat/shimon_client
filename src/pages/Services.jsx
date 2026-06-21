import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowLeft } from 'lucide-react';
import PageHero from '@/components/site/PageHero';
import CtaBlock from '@/components/site/CtaBlock';

const HERO_IMG = '/portfolio/lev-shalom/02.jpg';
const SIGNATURE_IMG = '/portfolio/lev-shalom/01.jpg';

// What the full, end-to-end accompaniment covers — from the first idea to the last toast.
const INCLUDES = [
  {
    n: '01',
    title: 'תכנון וקונספט',
    body: 'מהרעיון הראשון ועד ציר הזמן של הערב. בונים יחד קונספט שמתאים בדיוק לסיפור שלכם — ומנהלים את כל הפרטים מאחורי הקלעים.',
  },
  {
    n: '02',
    title: 'הטבעת',
    body: 'אנחנו מחוברים ישירות לבורסה ליהלומים. נלווה אתכם בבחירת הטבעת ובהזמנתה — בשקיפות מלאה, באיכות גבוהה, ובלי תיווך מיותר.',
  },
  {
    n: '03',
    title: 'עיצוב הלוקיישן',
    body: 'פרחים, תאורה אווירתית, ריהוט ואלמנטים מותאמים. הופכים כל מקום — מגג בלב העיר ועד מרפסת מול הכותל — לבמה של הרגע.',
  },
  {
    n: '04',
    title: 'תיעוד קולנועי',
    body: 'צלם סטילס וצלם וידאו שיודעים לתפוס את ה"כן" מהזווית הנכונה, בלי להיראות. תמונות וסרט קצר שמרגישים כמו סצנה מתוך סרט.',
  },
  {
    n: '05',
    title: 'פרטים ממותגים',
    body: 'כוסות עם השמות שלכם, שלט ניאון אישי, מתנה עם חריטה — הנגיעות הקטנות שהופכות ערב יפה לערב שהוא רק שלכם.',
  },
  {
    n: '06',
    title: 'הוצאה לפועל',
    body: 'מנהל הפקה אישי איתכם לאורך כל הערב. כל איש צוות במקומו, סנכרון מלא וגיבוי לכל תרחיש. אתם רק נוכחים ברגע.',
  },
];

// Three scales of production — no fixed price; every production is built and quoted personally.
const LEVELS = [
  {
    name: 'Essence',
    hebrew: 'אסנס',
    tag: 'הפקה אינטימית',
    description: 'הפקה אינטימית לזוג שיודע בדיוק מה הוא רוצה. עיצוב נקי, תאורה רכה, רגע בדיוק כמו שדמיינתם.',
    features: [
      'תכנון יצירתי וייעוץ אישי',
      'ליווי בבחירת הטבעת מול הבורסה ליהלומים',
      'עיצוב לוקיישן + תאורה אווירתית',
      'צילום סטילס מקצועי',
      'זר פרחים בעיצוב חתימה',
      'ליווי במקום ביום ההפקה',
    ],
    accent: false,
  },
  {
    name: 'Signature',
    hebrew: 'סיגנצ׳ר',
    tag: 'הפקת חתימה',
    description: 'הבחירה המבוקשת שלנו. ליווי קולנועי מלא — מהקונספט הראשון ועד התמונה האחרונה. כל פרט מתוכנן.',
    features: [
      'כל מה שכלול ב-Essence',
      'קונספט קריאייטיבי מותאם אישית',
      'צילום וידאו 4K + עריכה קולנועית',
      'ארוחת ערב גורמה לזוג בלוקיישן',
      'פרטים ממותגים — כוסות עם השמות שלכם',
      'שלט ניאון / כיתוב מותאם בסצנה',
    ],
    accent: true,
  },
  {
    name: 'Bespoke',
    hebrew: 'בספוק',
    tag: 'בהזמנה אישית',
    description: 'אין גבולות. הפקות ללא תקדים — מטיסות פרטיות עד הפעלה של מקום שלם. לזוגות שרוצים את הבלתי נשכח.',
    features: [
      'תכנון אסטרטגי מלא ללא הגבלה',
      'הפקה רב־לוקיישנית כולל חו"ל',
      'צוות מלא: צלם, וידאו, תאורה, סאונד',
      'הסעות, לינה ולוגיסטיקה מלאה',
      'אורחים, מוסיקאים, שפים — לבחירה',
      'מנהל הפקה אישי 24/7',
    ],
    accent: false,
  },
];

const ADDONS = [
  { title: 'צלם וידאו נוסף', body: 'כיסוי מרובה זוויות לרגעים שלא חוזרים על עצמם.' },
  { title: 'נגן/זמר חי', body: 'גיטרה ספרדית, פסנתר, קוורטט מיתרים — מה שמתאים לסיפור שלכם.' },
  { title: 'זיקוקים ופירוטכניקה', body: 'וואו רגעי, מתואם לרגע ה״כן״. רישוי וביטוח כלולים.' },
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

        /* Includes — the A-Z experience */
        .includes-section { background: var(--brand-black); }
        .includes-head {
          max-width: 1000px;
          margin: 0 auto 5rem;
          text-align: center;
        }
        .section-eyebrow {
          font-size: 0.78rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: var(--brand-gold);
          margin-bottom: 1.5rem;
          font-weight: 500;
        }
        .section-title {
          font-family: var(--font-display);
          font-size: clamp(2.4rem, 5.5vw, 4rem);
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }
        .section-title em { font-style: italic; font-weight: 400; color: var(--brand-gold); }
        .section-sub {
          font-size: 1.05rem;
          line-height: 1.85;
          color: var(--brand-muted);
          font-weight: 300;
          max-width: 640px;
          margin: 0 auto;
        }
        .includes-grid {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          border-top: 1px solid rgba(198, 168, 124, 0.12);
          border-right: 1px solid rgba(198, 168, 124, 0.12);
        }
        @media (max-width: 900px) { .includes-grid { grid-template-columns: 1fr; border-right: none; } }
        .include-cell {
          padding: 3rem 2.5rem;
          border-bottom: 1px solid rgba(198, 168, 124, 0.12);
          border-left: 1px solid rgba(198, 168, 124, 0.12);
          transition: background 0.4s var(--ease-out);
        }
        @media (max-width: 900px) { .include-cell { border-left: none; } }
        .include-cell:hover { background: rgba(198, 168, 124, 0.04); }
        .include-num {
          font-family: var(--font-display);
          font-size: 2.2rem;
          font-weight: 300;
          color: var(--brand-gold);
          line-height: 1;
          margin-bottom: 1.25rem;
          opacity: 0.7;
        }
        .include-title {
          font-family: var(--font-display);
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--brand-off-white);
          margin-bottom: 0.85rem;
        }
        .include-body {
          font-size: 0.92rem;
          line-height: 1.8;
          color: var(--brand-muted);
          font-weight: 300;
        }

        /* Signature details — image + ring/glasses story */
        .signature-section { background: var(--brand-charcoal); }
        .signature-grid {
          max-width: 1300px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }
        @media (max-width: 968px) { .signature-grid { grid-template-columns: 1fr; gap: 3rem; } }
        .signature-image {
          aspect-ratio: 4/5;
          overflow: hidden;
        }
        .signature-image img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 1.2s var(--ease-emphasized);
        }
        .signature-image:hover img { transform: scale(1.04); }
        .signature-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4vw, 3.2rem);
          font-weight: 700;
          line-height: 1.15;
          margin-bottom: 1.5rem;
        }
        .signature-title em { font-style: italic; font-weight: 400; color: var(--brand-gold); }
        .signature-body p {
          font-size: 1.05rem;
          line-height: 1.9;
          color: var(--brand-muted);
          font-weight: 300;
          margin-bottom: 1.25rem;
        }
        .signature-body strong { color: var(--brand-off-white); font-weight: 500; }

        /* Levels */
        .levels-section { background: var(--brand-black); }
        .levels-head { max-width: 1000px; margin: 0 auto 5rem; text-align: center; }
        .levels-grid {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }
        @media (max-width: 1024px) { .levels-grid { grid-template-columns: 1fr; gap: 1rem; } }

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
        .pkg-card:hover { border-color: var(--brand-gold); transform: translateY(-4px); }
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
        .pkg-features li svg { color: var(--brand-gold); flex-shrink: 0; margin-top: 4px; }
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
        .pkg-cta:hover { background: var(--brand-gold); color: var(--brand-black); border-color: var(--brand-gold); }
        .pkg-cta svg { transition: transform 0.4s var(--ease-out); }
        .pkg-cta:hover svg { transform: translateX(-4px); }
        .pkg-card.accent .pkg-cta { background: var(--brand-gold); color: var(--brand-black); border-color: var(--brand-gold); }
        .pkg-card.accent .pkg-cta:hover { background: transparent; color: var(--brand-gold); }

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
        @media (max-width: 768px) { .addons-head { grid-template-columns: 1fr; gap: 1.5rem; } }
        .addons-title {
          font-family: var(--font-display);
          font-size: clamp(2.2rem, 4.5vw, 3.4rem);
          font-weight: 700;
          line-height: 1.15;
        }
        .addons-title em { font-style: italic; font-weight: 400; color: var(--brand-gold); }
        .addons-sub { font-size: 0.95rem; line-height: 1.9; color: var(--brand-muted); font-weight: 300; }
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
        .addon-body { font-size: 0.9rem; color: var(--brand-muted); line-height: 1.8; font-weight: 300; }

        /* Note */
        .note-section { background: var(--brand-black); padding: 5rem 3rem; }
        .note-inner { max-width: 800px; margin: 0 auto; text-align: center; }
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
        eyebrow="השירות"
        title={<>ליווי מלא, <em>מ-א׳ ועד הרגע.</em></>}
        lead="לא חבילה — חוויה שלמה. אנחנו לוקחים אתכם מהרעיון הראשון, דרך הטבעת, העיצוב והתיעוד, ועד ניהול הערב עצמו. אתם רק נוכחים ברגע."
        image={HERO_IMG}
        imageAlt="הפקת הצעת נישואין יוקרתית"
      />

      <section className="section includes-section">
        <div className="includes-head">
          <div className="section-eyebrow">מה כולל הליווי</div>
          <h2 className="section-title">הכל במקום <em>אחד.</em></h2>
          <p className="section-sub">
            מהמחשבה הראשונה ועד התמונה האחרונה — אנחנו מטפלים בכל פרט.
            אלה ששת התחומים שאנחנו לוקחים על עצמנו, כדי שלכם יישאר רק לחיות את הרגע.
          </p>
        </div>
        <div className="includes-grid">
          {INCLUDES.map((it) => (
            <div key={it.n} className="include-cell">
              <div className="include-num">{it.n}</div>
              <h3 className="include-title">{it.title}</h3>
              <p className="include-body">{it.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section signature-section">
        <div className="signature-grid">
          <div className="signature-image">
            <img src={SIGNATURE_IMG} alt="טבעת אירוסין ושמפניה בהפקת FOREVER" />
          </div>
          <div>
            <div className="section-eyebrow">הפרטים שעושים את ההבדל</div>
            <h2 className="signature-title">מהטבעת <em>ועד הכוסות.</em></h2>
            <div className="signature-body">
              <p>
                <strong>הטבעת.</strong> אנחנו מחוברים ישירות לבורסה ליהלומים —
                ויכולים ללוות אתכם בבחירת הטבעת ובהזמנתה, בשקיפות מלאה ובאיכות
                שתחזיק לכל החיים. בלי לרוץ בין חנויות, בלי תיווך מיותר.
              </p>
              <p>
                <strong>הפרטים הממותגים.</strong> כוסות שמפניה עם השמות שלכם,
                שלט ניאון אישי, מתנה עם חריטה — הנגיעות הקטנות שהופכות הפקה
                יפה לרגע שהוא רק שלכם, ולא של אף אחד אחר.
              </p>
              <p>
                כל פרט נבחר יחד אתכם, ומבוצע על ידינו — בתכנון ובהוצאה לפועל.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section levels-section">
        <div className="levels-head">
          <div className="section-eyebrow">היקפי הפקה</div>
          <h2 className="section-title">שלוש דרגות, <em>אינסוף וריאציות.</em></h2>
          <p className="section-sub">
            מהפקה אינטימית במרפסת שקטה ועד הפקה רב־לוקיישנית עם צוות שלם —
            בוחרים את ההיקף שמתאים לסיפור שלכם. כל הפקה נבנית ומתומחרת אישית.
          </p>
        </div>

        <div className="levels-grid">
          {LEVELS.map((p) => (
            <article key={p.name} className={`pkg-card ${p.accent ? 'accent' : ''}`}>
              {p.accent && <div className="pkg-badge">המבוקשת ביותר</div>}
              <div className="pkg-tag">{p.tag}</div>
              <div className="pkg-name">{p.name}</div>
              <div className="pkg-name-he">{p.hebrew}</div>
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
                <span>לשיחה והצעה אישית</span>
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
            אין מחיר אחד, ואין שתי הפקות זהות. <strong>כל הצעת מחיר נבנית אישית</strong> לפי
            הקונספט, הלוקיישן וההיקף — אחרי שיחה אחת, ארוכה ובלי התחייבות.
          </p>
        </div>
      </section>

      <CtaBlock
        eyebrow="שיחת היכרות"
        title="לא בטוחים מאיפה להתחיל? נדבר."
        body="שיחת ייעוץ ללא התחייבות. נכיר אתכם, נשמע על החזון — ונבנה יחד את ההפקה והצעת המחיר שמתאימות בדיוק לכם."
        primaryLabel="לתיאום שיחה"
      />
    </div>
  );
}
