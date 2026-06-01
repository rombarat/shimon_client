import React, { useState } from 'react';
import { Phone, Mail, MapPin, Instagram, ArrowLeft } from 'lucide-react';
import PageHero from '@/components/site/PageHero';
import WhatsappIcon from '@/components/site/WhatsappIcon';

const HERO_IMG = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6928c880d53d24dac96c5458/aec010f54_freepik__cinematic-night-shot-of-a-romantic-proposal-setup-__50615.png';

const BUDGETS = ['עד ₪15,000', '₪15,000—30,000', '₪30,000—60,000', '₪60,000+'];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    location: '',
    budget: BUDGETS[1],
    story: '',
  });

  const updateField = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ name: '', phone: '', email: '', date: '', location: '', budget: BUDGETS[1], story: '' });
  };

  return (
    <div className="forever-contact" dir="rtl">
      <style>{`
        .forever-contact { background: var(--brand-black); color: var(--brand-off-white); }
        .section { padding: 9rem 3rem; }
        @media (max-width: 768px) { .section { padding: 5rem 1.5rem; } }

        .form-section { background: var(--brand-black); }
        .form-grid {
          max-width: 1300px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 6rem;
        }
        @media (max-width: 968px) { .form-grid { grid-template-columns: 1fr; gap: 4rem; } }

        .form-eyebrow {
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
        .form-eyebrow::before { content: ''; width: 40px; height: 1px; background: var(--brand-gold); }
        .form-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          line-height: 1.15;
          margin-bottom: 1.25rem;
        }
        .form-title em { font-style: italic; font-weight: 400; color: var(--brand-gold); }
        .form-lead {
          font-size: 1rem;
          line-height: 1.85;
          color: var(--brand-muted);
          font-weight: 300;
          margin-bottom: 3rem;
        }

        .form {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.75rem;
        }
        @media (max-width: 600px) { .form-row { grid-template-columns: 1fr; } }
        .field { position: relative; display: flex; flex-direction: column; }
        .field label {
          font-family: var(--font-body);
          font-size: 0.7rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--brand-muted);
          margin-bottom: 0.65rem;
          font-weight: 500;
        }
        .field input,
        .field select,
        .field textarea {
          width: 100%;
          padding: 0.95rem 0;
          font-family: var(--font-body);
          font-size: 1rem;
          color: var(--brand-off-white);
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(198, 168, 124, 0.25);
          transition: border-color 0.4s var(--ease-out);
          direction: rtl;
        }
        .field input:focus,
        .field select:focus,
        .field textarea:focus {
          outline: none;
          border-bottom-color: var(--brand-gold);
        }
        .field input::placeholder,
        .field textarea::placeholder {
          color: var(--brand-muted);
          opacity: 0.5;
        }
        .field textarea { min-height: 100px; resize: vertical; }
        .field select {
          cursor: pointer;
          background: var(--brand-black);
        }
        .field select option {
          background: var(--brand-black);
          color: var(--brand-off-white);
          padding: 0.5rem;
        }

        .submit {
          align-self: flex-start;
          margin-top: 1rem;
          padding: 1.25rem 2.75rem;
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--brand-black);
          background: var(--brand-gold);
          border: 1px solid var(--brand-gold);
          cursor: pointer;
          transition: all 0.4s var(--ease-out);
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
        }
        .submit:hover { background: transparent; color: var(--brand-gold); }
        .submit svg { transition: transform 0.4s var(--ease-out); }
        .submit:hover svg { transform: translateX(-4px); }

        .success {
          padding: 1.5rem;
          background: rgba(198, 168, 124, 0.08);
          border: 1px solid var(--brand-gold);
          color: var(--brand-gold);
          font-size: 0.95rem;
          line-height: 1.7;
          margin-top: 2rem;
        }

        /* Sidebar */
        .info-card {
          background: var(--brand-charcoal);
          padding: 3rem 2.5rem;
          border: 1px solid rgba(255,255,255,0.05);
        }
        .info-eyebrow {
          font-size: 0.75rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--brand-gold);
          margin-bottom: 1.5rem;
          font-weight: 500;
        }
        .info-title {
          font-family: var(--font-display);
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--brand-off-white);
          margin-bottom: 2rem;
          line-height: 1.25;
        }
        .info-list { display: flex; flex-direction: column; gap: 1.5rem; margin-bottom: 2.5rem; }
        .info-row {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          color: var(--brand-off-white);
          text-decoration: none;
          font-size: 0.95rem;
          transition: color 0.3s var(--ease-out);
        }
        .info-row:hover { color: var(--brand-gold); }
        .info-row svg {
          color: var(--brand-gold);
          flex-shrink: 0;
          margin-top: 3px;
        }
        .info-row .label {
          font-size: 0.7rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--brand-muted);
          display: block;
          margin-bottom: 0.25rem;
          font-weight: 500;
        }
        .info-divider {
          height: 1px;
          background: rgba(255,255,255,0.08);
          margin: 2rem 0;
        }
        .hours-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.75rem;
          font-size: 0.9rem;
          color: var(--brand-off-white);
        }
        .hours-row span:last-child { color: var(--brand-muted); }

        .promise-strip {
          background: var(--brand-charcoal);
          padding: 5rem 3rem;
          text-align: center;
        }
        @media (max-width: 768px) { .promise-strip { padding: 3rem 1.5rem; } }
        .promise-text {
          max-width: 800px;
          margin: 0 auto;
          font-family: var(--font-display);
          font-size: clamp(1.2rem, 2.2vw, 1.6rem);
          font-style: italic;
          font-weight: 400;
          line-height: 1.65;
          color: var(--brand-muted);
        }
        .promise-text strong { color: var(--brand-gold); font-style: normal; font-weight: 500; }
      `}</style>

      <PageHero
        eyebrow="צרו קשר"
        title={<>הסיפור שלכם <em>מתחיל כאן.</em></>}
        lead="שיחה דיסקרטית, ללא התחייבות. ספרו לנו מה אתם מדמיינים — או שלא יודעים בכלל איפה להתחיל. אנחנו פה כדי להקשיב."
        image={HERO_IMG}
        imageAlt="הפקה רומנטית"
      />

      <section className="section form-section">
        <div className="form-grid">
          <div>
            <div className="form-eyebrow">השאירו פרטים</div>
            <h2 className="form-title">ספרו לנו את <em>הסיפור שלכם</em></h2>
            <p className="form-lead">
              נחזור אליכם תוך 24 שעות לתיאום שיחת ייעוץ. כל שדה אופציונלי
              חוץ מהשם והטלפון — מה שתספרו, יעזור לנו להתכונן טוב יותר.
            </p>

            <form className="form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="name">השם המלא *</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="ישראל ישראלי"
                    value={form.name}
                    onChange={updateField('name')}
                  />
                </div>
                <div className="field">
                  <label htmlFor="phone">טלפון *</label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="052-000-0000"
                    value={form.phone}
                    onChange={updateField('phone')}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="field">
                  <label htmlFor="email">אימייל</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="hello@example.com"
                    value={form.email}
                    onChange={updateField('email')}
                  />
                </div>
                <div className="field">
                  <label htmlFor="date">תאריך משוער</label>
                  <input
                    id="date"
                    type="text"
                    placeholder="חודש ושנה (לדוגמה: מאי 2026)"
                    value={form.date}
                    onChange={updateField('date')}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="field">
                  <label htmlFor="location">לוקיישן מועדף</label>
                  <input
                    id="location"
                    type="text"
                    placeholder="עיר, איזור, או 'גמיש'"
                    value={form.location}
                    onChange={updateField('location')}
                  />
                </div>
                <div className="field">
                  <label htmlFor="budget">תקציב משוער</label>
                  <select id="budget" value={form.budget} onChange={updateField('budget')}>
                    {BUDGETS.map((b) => <option key={b}>{b}</option>)}
                  </select>
                </div>
              </div>

              <div className="field">
                <label htmlFor="story">קצת על הסיפור שלכם</label>
                <textarea
                  id="story"
                  placeholder="איך נפגשתם, מה היא אוהבת, מה הסגנון שלכם, האם יש רגע מיוחד שאתם רוצים לשחזר..."
                  value={form.story}
                  onChange={updateField('story')}
                />
              </div>

              <button type="submit" className="submit">
                <span>שלחו ונחזור אליכם</span>
                <ArrowLeft size={16} />
              </button>

              {submitted && (
                <div className="success">
                  תודה — קיבלנו את הפרטים. נחזור אליכם תוך 24 שעות.
                  בינתיים, הסיפור הזה כבר אצלנו, ואצלנו בלבד.
                </div>
              )}
            </form>
          </div>

          <aside>
            <div className="info-card">
              <div className="info-eyebrow">דרכים ישירות</div>
              <h3 className="info-title">מעדיפים בלי טופס?</h3>

              <div className="info-list">
                <a href="https://wa.me/972525970972" target="_blank" rel="noopener noreferrer" className="info-row">
                  <WhatsappIcon size={20} />
                  <div>
                    <span className="label">וואטסאפ</span>
                    <span>שיחה בכל זמן</span>
                  </div>
                </a>
                <a href="tel:+972525970972" className="info-row">
                  <Phone size={20} />
                  <div>
                    <span className="label">טלפון</span>
                    <span dir="ltr">052-597-0972</span>
                  </div>
                </a>
                <a href="mailto:hello@forever.co.il" className="info-row">
                  <Mail size={20} />
                  <div>
                    <span className="label">אימייל</span>
                    <span>hello@forever.co.il</span>
                  </div>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="info-row">
                  <Instagram size={20} />
                  <div>
                    <span className="label">אינסטגרם</span>
                    <span>@forever.proposals</span>
                  </div>
                </a>
                <div className="info-row">
                  <MapPin size={20} />
                  <div>
                    <span className="label">סטודיו</span>
                    <span>תל אביב · בתיאום מראש</span>
                  </div>
                </div>
              </div>

              <div className="info-divider" />

              <div className="info-eyebrow">זמני מענה</div>
              <div className="hours-row"><span>ראשון—חמישי</span><span>09:00—21:00</span></div>
              <div className="hours-row"><span>שישי</span><span>09:00—14:00</span></div>
              <div className="hours-row"><span>וואטסאפ</span><span>24/7</span></div>
            </div>
          </aside>
        </div>
      </section>

      <section className="promise-strip">
        <p className="promise-text">
          כל פנייה נענית. <strong>כל סיפור נשמע.</strong> וכל מה שתספרו — נשאר בינינו בלבד.
        </p>
      </section>
    </div>
  );
}
