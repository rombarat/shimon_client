import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock } from 'lucide-react';
import PageHero from '@/components/site/PageHero';
import CtaBlock from '@/components/site/CtaBlock';
import Seo from '@/components/site/Seo';
import { articles } from '@/data/articles';

const ALL = 'הכל';

export default function Articles() {
  const categories = useMemo(() => {
    const set = new Set(articles.map((a) => a.category));
    return [ALL, ...Array.from(set)];
  }, []);

  const [activeCategory, setActiveCategory] = useState(ALL);

  const filtered = useMemo(() => {
    if (activeCategory === ALL) return articles;
    return articles.filter((a) => a.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <Seo
        title="מאמרים ומדריכים"
        description="מדריכים, רעיונות וטיפים מקצועיים על הצעות נישואין יוקרתיות — לוקיישנים, תכנון, תקציבים, וכל מה שחשוב לדעת לפני הרגע הגדול."
        url="/articles"
        breadcrumbs={[
          { name: 'בית', url: '/' },
          { name: 'מאמרים', url: '/articles' },
        ]}
      />

      <PageHero
        eyebrow="ידע מקצועי"
        title={<>מדריכים <em>ורעיונות</em></>}
        lead="כל מה שלמדנו אחרי מאות הפקות. מדריכים ארוכים, רעיונות מעשיים והשראה לרגע הכי חשוב בחיים."
      />

      <style>{`
        .articles-section {
          background: var(--brand-black);
          padding: 6rem 3rem;
        }
        @media (max-width: 768px) {
          .articles-section { padding: 4rem 1.5rem; }
        }
        .articles-wrap {
          max-width: 1400px;
          margin: 0 auto;
        }
        .articles-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 4rem;
          justify-content: center;
        }
        .articles-filter {
          font-family: var(--font-body);
          font-size: 0.82rem;
          letter-spacing: 0.18em;
          padding: 0.7rem 1.6rem;
          background: transparent;
          border: 1px solid rgba(198, 168, 124, 0.3);
          color: var(--brand-off-white);
          cursor: pointer;
          transition: all 0.3s var(--ease-out);
        }
        .articles-filter:hover {
          border-color: var(--brand-gold);
          color: var(--brand-gold);
        }
        .articles-filter.active {
          background: var(--brand-gold);
          color: var(--brand-black);
          border-color: var(--brand-gold);
        }
        .articles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 3rem;
        }
        .article-card {
          background: var(--brand-charcoal);
          border: 1px solid rgba(198, 168, 124, 0.08);
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
          transition: all 0.4s var(--ease-out);
          overflow: hidden;
        }
        .article-card:hover {
          border-color: rgba(198, 168, 124, 0.4);
          transform: translateY(-4px);
        }
        .article-card-image {
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background: var(--brand-dark);
        }
        .article-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s var(--ease-out);
        }
        .article-card:hover .article-card-image img {
          transform: scale(1.05);
        }
        .article-card-body {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          flex: 1;
        }
        .article-card-meta {
          display: flex;
          gap: 1rem;
          align-items: center;
          font-family: var(--font-body);
          font-size: 0.72rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--brand-gold);
        }
        .article-card-meta-row {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--brand-muted);
        }
        .article-card-title {
          font-family: var(--font-display);
          font-size: 1.5rem;
          line-height: 1.3;
          font-weight: 500;
          color: var(--brand-off-white);
          margin: 0;
        }
        .article-card-excerpt {
          font-family: var(--font-body);
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--brand-muted);
          font-weight: 300;
          margin: 0;
          flex: 1;
        }
        .article-card-link {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          font-family: var(--font-body);
          font-size: 0.8rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--brand-gold);
          padding-top: 0.5rem;
        }
      `}</style>

      <section className="articles-section">
        <div className="articles-wrap">
          <div className="articles-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`articles-filter ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="articles-grid">
            {filtered.map((article) => (
              <Link
                key={article.slug}
                to={`/articles/${article.slug}`}
                className="article-card"
              >
                <div className="article-card-image">
                  <img src={article.image} alt={article.title} loading="lazy" />
                </div>
                <div className="article-card-body">
                  <div className="article-card-meta">
                    <span>{article.category}</span>
                    <span className="article-card-meta-row">
                      <Clock size={12} />
                      {article.readingTime} דק׳ קריאה
                    </span>
                  </div>
                  <h2 className="article-card-title">{article.title}</h2>
                  <p className="article-card-excerpt">{article.excerpt}</p>
                  <span className="article-card-link">
                    קראו עוד <ArrowLeft size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock
        eyebrow="מוכנים להתחיל"
        title={<>הסיפור שלכם <em>מחכה</em></>}
        body="קראתם, השראתם, עכשיו הגיע הזמן להפוך את זה למציאות. נשמח לשמוע על החלום שלכם."
        primaryHref="/contact"
        primaryLabel="צרו קשר"
      />
    </>
  );
}
