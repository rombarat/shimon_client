import React from 'react';
import PageHero from '@/components/site/PageHero';
import CtaBlock from '@/components/site/CtaBlock';

const HERO_IMG = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6928c880d53d24dac96c5458/9d64b5daa_freepik__cinematic-medium-shot-of-a-couple-in-a-tight-emoti__50610.png';

const STEPS = [
  {
    n: '01',
    duration: 'יום 1 · שיחה אחת',
    title: 'היכרות',
    body: 'שיחת ייעוץ בלי התחייבות. נכיר אתכם, נשמע איך נפגשתם, מה הסיפור שלכם, מה הסגנון שלכם, מה לא היה אומר לכם דבר. אנחנו מקשיבים יותר משאנחנו מדברים.',
  },
  {
    n: '02',
    duration: 'שבוע 1 · קונספט',
    title: 'תפיסה אמנותית',
    body: 'בונים מצגת קונספט מלאה — מודבורד, פלטת צבעים, סקיצת לוקיישן, ציר זמן של הערב. מציגים אותה רק לכם, מקשיבים שוב, מתאימים את הפרטים האחרונים.',
  },
  {
    n: '03',
    duration: 'שבועות 2-6 · הפקה',
    title: 'בנייה ולוגיסטיקה',
    body: 'הצוות שלנו לוקח שליטה. רישוי, אישורים, התקנות, חזרות. אתם לא צריכים לדעת על שום פרט — רק לחיות את החיים, ולחכות לערב.',
  },
  {
    n: '04',
    duration: 'הערב הגדול',
    title: 'הרגע',
    body: 'מנהל הפקה אישי איתכם מתחילת הערב ועד סופו. כל איש צוות במקומו, סנכרון מלא, גיבוי לכל תרחיש. אתם — רק שני אנשים. הרגע הוא שלכם.',
  },
  {
    n: '05',
    duration: 'תוך שבוע',
    title: 'הזיכרון',
    body: 'תמונות ערוכות וסרט קולנועי קצר עם מוסיקה מקורית. אלבום עור בעבודת יד למבקשים. הזיכרון מתעבה לחפץ פיזי — דבר אחד שאפשר לקחת בידיים.',
  },
];

const FAQ = [
  {
    q: 'כמה זמן מראש כדאי לפנות?',
    a: 'מומלץ 6-8 שבועות לפני המועד הרצוי. הפקות קטנות יותר אפשר לבנות ב-3 שבועות, אבל ככל שמוקדם יותר — יש יותר חופש בלוקיישן, בצוות ובדיוק.',
  },
  {
    q: 'איך שומרים על הפתעה?',
    a: 'דיסקרטיות זה התחום שלנו. כל איש צוות חתום על NDA. התקשורת מולכם נשארת בערוץ סגור. אתם תקבעו מי יודע — ואנחנו נשמור על השקט המוחלט.',
  },
  {
    q: 'מה קורה אם משהו משתבש?',
    a: 'יש לנו תוכנית גיבוי לכל תרחיש — מזג אוויר, תקלה טכנית, שינוי של הרגע האחרון. צוות תגובה מוכן 24/7 ביום ההפקה. הסטטיסטיקה שלנו: 0% ביטולים בגלל לוגיסטיקה.',
  },
  {
    q: 'אפשר לבחור איש צוות ספציפי?',
    a: 'בהחלט. עובדים עם רשימה צמודה של צלמים, מעצבים ומוסיקאים. אם יש לכם מועדפים מהצוות שלנו, נשמח לסדר. גם אורחים חיצוניים אפשרי, בכפוף לתיאום.',
  },
];

export default function Process() {
  return (
    <div className="forever-process" dir="rtl">
      <style>{`
        .forever-process { background: var(--brand-black); color: var(--brand-off-white); }
        .section { padding: 9rem 3rem; }
        @media (max-width: 768px) { .section { padding: 5rem 1.5rem; } }

        .timeline-section { background: var(--brand-black); }
        .timeline-head {
          max-width: 1000px;
          margin: 0 auto 5rem;
          text-align: center;
        }
        .timeline-eyebrow {
          font-size: 0.78rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: var(--brand-gold);
          margin-bottom: 1.5rem;
          font-weight: 500;
        }
        .timeline-title {
          font-family: var(--font-display);
          font-size: clamp(2.4rem, 5.5vw, 4rem);
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }
        .timeline-title em { font-style: italic; font-weight: 400; color: var(--brand-gold); }
        .timeline-sub {
          font-size: 1.05rem;
          line-height: 1.85;
          color: var(--brand-muted);
          font-weight: 300;
        }

        .timeline {
          max-width: 980px;
          margin: 0 auto;
          position: relative;
        }
        .timeline::before {
          content: '';
          position: absolute;
          right: 50px;
          top: 0;
          bottom: 0;
          width: 1px;
          background: linear-gradient(to bottom, transparent, var(--brand-gold-muted) 10%, var(--brand-gold-muted) 90%, transparent);
        }
        @media (max-width: 768px) {
          .timeline::before { right: 25px; }
        }

        .step {
          display: grid;
          grid-template-columns: 100px 1fr;
          gap: 2.5rem;
          margin-bottom: 5rem;
          position: relative;
        }
        .step:last-child { margin-bottom: 0; }
        @media (max-width: 768px) {
          .step { grid-template-columns: 50px 1fr; gap: 1.25rem; }
        }

        .step-number {
          font-family: var(--font-display);
          font-size: 2.2rem;
          font-weight: 300;
          color: var(--brand-gold);
          line-height: 1;
          width: 100px;
          height: 100px;
          background: var(--brand-charcoal);
          border: 1px solid var(--brand-gold-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          position: relative;
          z-index: 1;
          flex-shrink: 0;
          transition: all 0.4s var(--ease-out);
        }
        @media (max-width: 768px) {
          .step-number { width: 50px; height: 50px; font-size: 1.1rem; }
        }
        .step:hover .step-number {
          border-color: var(--brand-gold);
          background: rgba(198, 168, 124, 0.08);
          box-shadow: 0 0 0 4px rgba(198, 168, 124, 0.05);
        }
        .step-content {
          padding-top: 1.25rem;
          padding-bottom: 1.5rem;
        }
        @media (max-width: 768px) { .step-content { padding-top: 0.5rem; } }
        .step-duration {
          font-family: var(--font-body);
          font-size: 0.7rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--brand-muted);
          margin-bottom: 0.65rem;
        }
        .step-title {
          font-family: var(--font-display);
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 700;
          color: var(--brand-off-white);
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        .step-body {
          font-size: 1rem;
          line-height: 1.9;
          color: var(--brand-muted);
          font-weight: 300;
          max-width: 640px;
        }

        /* Promise */
        .promise-section { background: var(--brand-charcoal); }
        .promise-inner {
          max-width: 1000px;
          margin: 0 auto;
          text-align: center;
        }
        .promise-eyebrow {
          font-size: 0.78rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: var(--brand-gold);
          margin-bottom: 1.5rem;
          font-weight: 500;
        }
        .promise-text {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 400;
          line-height: 1.55;
          color: var(--brand-off-white);
        }
        .promise-text strong {
          color: var(--brand-gold);
          font-weight: 700;
          font-style: italic;
        }

        /* FAQ */
        .faq-section { background: var(--brand-black); }
        .faq-grid {
          max-width: 1000px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.7fr 1.3fr;
          gap: 6rem;
        }
        @media (max-width: 968px) { .faq-grid { grid-template-columns: 1fr; gap: 3rem; } }
        .faq-head .timeline-eyebrow { margin-bottom: 1.5rem; }
        .faq-head h2 {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          line-height: 1.15;
          color: var(--brand-off-white);
        }
        .faq-head h2 em { font-style: italic; font-weight: 400; color: var(--brand-gold); }
        .faq-list { display: flex; flex-direction: column; }
        .faq-item {
          padding: 2rem 0;
          border-bottom: 1px solid rgba(198, 168, 124, 0.12);
        }
        .faq-item:first-child { padding-top: 0; }
        .faq-item:last-child { border-bottom: none; }
        .faq-q {
          font-family: var(--font-display);
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--brand-off-white);
          margin-bottom: 0.85rem;
          line-height: 1.35;
        }
        .faq-a {
          font-size: 0.95rem;
          line-height: 1.85;
          color: var(--brand-muted);
          font-weight: 300;
        }
      `}</style>

      <PageHero
        eyebrow="התהליך"
        title={<>חמישה צעדים, <em>בלי לחץ.</em></>}
        lead="כל מה שאתם צריכים לעשות הוא לבחור את הרגע. בכל השאר אנחנו נטפל. הנה איך נראית הדרך מהשיחה הראשונה ועד התמונה האחרונה."
        image={HERO_IMG}
        imageAlt="זוג ברגע אינטימי"
      />

      <section className="section timeline-section">
        <div className="timeline-head">
          <div className="timeline-eyebrow">איך זה עובד</div>
          <h2 className="timeline-title">מהשיחה <em>לרגע</em></h2>
          <p className="timeline-sub">
            תהליך שעודן במשך מאות הפקות. שקוף, מסודר, ובלי הפתעות בדרך.
          </p>
        </div>

        <div className="timeline">
          {STEPS.map((s) => (
            <div key={s.n} className="step">
              <div className="step-number">{s.n}</div>
              <div className="step-content">
                <div className="step-duration">{s.duration}</div>
                <h3 className="step-title">{s.title}</h3>
                <p className="step-body">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section promise-section">
        <div className="promise-inner">
          <div className="promise-eyebrow">ההבטחה שלנו</div>
          <p className="promise-text">
            אם משהו לא בסדר — <strong>זה הבעיה שלנו.</strong> אם הכל מושלם —
            זה הזיכרון שלכם. אנחנו מתמודדים עם הלחץ כדי שאתם תזכרו רק את הרגע.
          </p>
        </div>
      </section>

      <section className="section faq-section">
        <div className="faq-grid">
          <div className="faq-head">
            <div className="timeline-eyebrow">שאלות נפוצות</div>
            <h2>כל מה ש<em>צריך לדעת</em></h2>
          </div>
          <div className="faq-list">
            {FAQ.map((f) => (
              <div key={f.q} className="faq-item">
                <h3 className="faq-q">{f.q}</h3>
                <p className="faq-a">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock
        eyebrow="הצעד הראשון"
        title="מתחילים בשיחה. הכל יבוא."
        body="חמישה צעדים, אחד אחרי השני. הצעד הראשון — תיאום שיחת ייעוץ. בלי התחייבות."
        primaryLabel="לתיאום שיחה"
      />
    </div>
  );
}
