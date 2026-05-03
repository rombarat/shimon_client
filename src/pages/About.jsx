import React from 'react';
import PageHero from '@/components/site/PageHero';
import CtaBlock from '@/components/site/CtaBlock';

const HERO_IMG = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6928c880d53d24dac96c5458/9d64b5daa_freepik__cinematic-medium-shot-of-a-couple-in-a-tight-emoti__50610.png';
const FOUNDER_IMG = 'https://images.unsplash.com/photo-1521579772-af31c87a3275?w=1200&q=80&auto=format';
const STORY_IMG_1 = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6928c880d53d24dac96c5458/c43361fef_freepik__a-romantic-winter-setup-outdoors-at-night-a-couple__50614.png';
const STORY_IMG_2 = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6928c880d53d24dac96c5458/aec010f54_freepik__cinematic-night-shot-of-a-romantic-proposal-setup-__50615.png';

const VALUES = [
  {
    n: '01',
    title: 'דיסקרטיות מוחלטת',
    body: 'הסיפור שלכם שייך לכם. אנחנו עובדים בשקט, בלי רעש, בלי חשיפה. רק אנחנו, אתם, והרגע.',
  },
  {
    n: '02',
    title: 'אסתטיקה קולנועית',
    body: 'כל פריים, כל זווית, כל גוון נבחר בקפידה. הפקה שמרגישה כמו סצנה מתוך סרט שתרצו לחיות בו שוב ושוב.',
  },
  {
    n: '03',
    title: 'התאמה אישית',
    body: 'אין שתי הצעות זהות. אנחנו מתחילים מהסיפור שלכם — ובונים סביבו עולם שלם.',
  },
];

export default function About() {
  return (
    <div className="forever-about" dir="rtl">
      <style>{`
        .forever-about { background: var(--brand-black); color: var(--brand-off-white); }
        .section { padding: 9rem 3rem; }
        @media (max-width: 768px) { .section { padding: 5rem 1.5rem; } }

        .story-grid {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }
        @media (max-width: 968px) { .story-grid { grid-template-columns: 1fr; gap: 3rem; } }
        .story-eyebrow {
          font-family: var(--font-body);
          font-size: 0.78rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: var(--brand-gold);
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          font-weight: 500;
        }
        .story-eyebrow::before { content: ''; width: 40px; height: 1px; background: var(--brand-gold); }
        .story-title {
          font-family: var(--font-display);
          font-size: clamp(2.2rem, 4.5vw, 3.6rem);
          font-weight: 700;
          line-height: 1.15;
          margin-bottom: 2rem;
          color: var(--brand-off-white);
        }
        .story-title em { font-style: italic; font-weight: 400; color: var(--brand-gold); }
        .story-body p {
          font-size: 1.05rem;
          line-height: 1.9;
          color: var(--brand-muted);
          font-weight: 300;
          margin-bottom: 1.25rem;
        }
        .story-image {
          position: relative;
          aspect-ratio: 4/5;
          overflow: hidden;
        }
        .story-image img {
          width: 100%; height: 100%;
          object-fit: cover;
          filter: grayscale(20%) contrast(1.05);
          transition: transform 1.2s var(--ease-emphasized);
        }
        .story-image:hover img { transform: scale(1.04); }
        .story-image-caption {
          position: absolute;
          bottom: 1.5rem; right: 1.5rem;
          font-size: 0.7rem;
          letter-spacing: 0.25em;
          color: var(--brand-off-white);
          text-transform: uppercase;
          background: rgba(15,15,15,0.6);
          padding: 0.5rem 1rem;
          backdrop-filter: blur(6px);
        }

        .values-section { background: var(--brand-charcoal); }
        .values-head {
          max-width: 1400px;
          margin: 0 auto 5rem;
          text-align: center;
        }
        .values-eyebrow {
          font-size: 0.78rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: var(--brand-gold);
          margin-bottom: 1.5rem;
          font-weight: 500;
        }
        .values-title {
          font-family: var(--font-display);
          font-size: clamp(2.2rem, 5vw, 4rem);
          font-weight: 700;
          line-height: 1.1;
        }
        .values-grid {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          border-top: 1px solid rgba(198, 168, 124, 0.12);
        }
        @media (max-width: 900px) {
          .values-grid { grid-template-columns: 1fr; }
        }
        .value-cell {
          padding: 4rem 2.5rem;
          border-bottom: 1px solid rgba(198, 168, 124, 0.12);
          border-left: 1px solid rgba(198, 168, 124, 0.12);
          transition: background 0.4s var(--ease-out);
          position: relative;
        }
        .value-cell:last-child { border-left: none; }
        @media (max-width: 900px) {
          .value-cell { border-left: none; }
          .value-cell:last-child { border-bottom: none; }
        }
        .value-cell:hover { background: rgba(198, 168, 124, 0.04); }
        .value-num {
          font-family: var(--font-display);
          font-size: 3rem;
          font-weight: 300;
          color: var(--brand-gold);
          line-height: 1;
          margin-bottom: 1.5rem;
          opacity: 0.7;
        }
        .value-title {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--brand-off-white);
        }
        .value-body {
          font-size: 0.95rem;
          line-height: 1.8;
          color: var(--brand-muted);
          font-weight: 300;
        }

        /* Founder */
        .founder-section { background: var(--brand-black); }
        .founder-grid {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 6rem;
          align-items: center;
        }
        @media (max-width: 968px) { .founder-grid { grid-template-columns: 1fr; gap: 3rem; } }
        .founder-image {
          aspect-ratio: 3/4;
          overflow: hidden;
        }
        .founder-image img {
          width: 100%; height: 100%;
          object-fit: cover;
          filter: grayscale(40%) contrast(1.05);
        }
        .founder-quote {
          font-family: var(--font-display);
          font-size: clamp(1.5rem, 2.6vw, 2.1rem);
          font-style: italic;
          font-weight: 400;
          line-height: 1.55;
          color: var(--brand-off-white);
          margin-bottom: 2.5rem;
        }
        .founder-quote::before {
          content: '"';
          display: block;
          font-size: 5rem;
          color: var(--brand-burgundy);
          line-height: 0.4;
          margin-bottom: 1.5rem;
          opacity: 0.7;
        }
        .founder-name {
          font-family: var(--font-display);
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--brand-gold);
          margin-bottom: 0.5rem;
        }
        .founder-role {
          font-family: var(--font-body);
          font-size: 0.78rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--brand-muted);
        }

        .press-section { background: var(--brand-charcoal); padding: 5rem 3rem; }
        .press-inner {
          max-width: 1400px;
          margin: 0 auto;
          text-align: center;
        }
        .press-label {
          font-size: 0.7rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: var(--brand-muted);
          margin-bottom: 2.5rem;
        }
        .press-row {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 4rem;
          flex-wrap: wrap;
          font-family: var(--font-display);
          font-size: 1.4rem;
          font-weight: 500;
          letter-spacing: 0.15em;
          color: var(--brand-off-white);
          opacity: 0.55;
        }
      `}</style>

      <PageHero
        eyebrow="הסיפור שלנו"
        title={<>כל רגע גדול <em>מתחיל בסוד.</em></>}
        lead="FOREVER נולדה מתוך אובססיה אחת — לתת לרגע הכי חשוב בחיים את הבמה שמגיעה לו. אנחנו לא מפיקים אירועים. אנחנו אדריכלים של זיכרונות."
        image={HERO_IMG}
        imageAlt="זוג בהפקה רומנטית"
      />

      <section className="section">
        <div className="story-grid">
          <div>
            <div className="story-eyebrow">הסיפור</div>
            <h2 className="story-title">איך הכל <em>התחיל</em></h2>
            <div className="story-body">
              <p>
                לפני כמה שנים, חבר ביקש עזרה. הוא רצה להציע נישואין —
                אבל לא ידע איך לתרגם את הרגש לחוויה. רצה משהו שיהיה ראוי
                לאישה שהוא אוהב.
              </p>
              <p>
                בנינו לו לילה אחד. סודי, מבודד, מעוצב. כשהיא אמרה כן —
                הבנו שמצאנו ייעוד. רגעים גדולים לא קורים סתם. הם נבנים
                ביד אחת בקפידה אובססיבית.
              </p>
              <p>
                מאז, כל הפקה היא הפקה אחת — של זוג אחד. בלי שכפול, בלי
                שגרה. רק אתם, הסיפור שלכם, והערב שיהפוך לזיכרון של פעם בחיים.
              </p>
            </div>
          </div>
          <div className="story-image">
            <img src={STORY_IMG_1} alt="הפקה רומנטית בלילה" />
            <span className="story-image-caption">הפקה ראשונה · 2021</span>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="values-head">
          <div className="values-eyebrow">העקרונות שלנו</div>
          <h2 className="values-title">שלוש מחויבויות,<br />ללא פשרות.</h2>
        </div>
        <div className="values-grid">
          {VALUES.map((v) => (
            <div key={v.n} className="value-cell">
              <div className="value-num">{v.n}</div>
              <h3 className="value-title">{v.title}</h3>
              <p className="value-body">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section founder-section">
        <div className="founder-grid">
          <div className="founder-image">
            <img src={FOUNDER_IMG} alt="המייסד" />
          </div>
          <div>
            <div className="story-eyebrow">המייסד</div>
            <blockquote className="founder-quote">
              ההפקה הכי טובה היא זו שאיש לא רואה. רק את הרגע. רק את
              ההסתכלות בעיניים. רק את ה״כן״.
            </blockquote>
            <div className="founder-name">דניאל ברק</div>
            <div className="founder-role">מייסד · מנהל יצירתי</div>
          </div>
        </div>
      </section>

      <section className="press-section">
        <div className="press-inner">
          <div className="press-label">סופרו עלינו</div>
          <div className="press-row">
            <span>VOGUE</span>
            <span>HARPER'S</span>
            <span>TIME OUT</span>
            <span>HAARETZ</span>
            <span>YEDIOT</span>
          </div>
        </div>
      </section>

      <CtaBlock
        eyebrow="מוכנים להתחיל"
        title="בואו נשמע את הסיפור שלכם"
        body="כל הפקה מתחילה בשיחה אחת. ספרו לנו עליה, על המקום שבו נפגשתם, על הרגע שאתם רוצים לעצב — ואנחנו נבנה סביבכם עולם."
        primaryLabel="לתיאום שיחה"
      />
    </div>
  );
}
