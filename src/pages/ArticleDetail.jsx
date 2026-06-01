import React, { useMemo } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import Seo from '@/components/site/Seo';
import { articleBySlug, articles } from '@/data/articles';

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString('he-IL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return iso;
  }
}

function Block({ block }) {
  switch (block.type) {
    case 'lead':
      return <p className="article-lead">{block.content}</p>;
    case 'h2':
      return <h2 className="article-h2">{block.content}</h2>;
    case 'h3':
      return <h3 className="article-h3">{block.content}</h3>;
    case 'p':
      return <p className="article-p">{block.content}</p>;
    case 'ul':
      return (
        <ul className="article-ul">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case 'cta':
      return (
        <div className="article-cta">
          {block.title && <div className="article-cta-title">{block.title}</div>}
          {block.body && <p className="article-cta-body">{block.body}</p>}
          <div className="article-cta-actions">
            {block.primary && (
              <Link to={block.primary.href} className="article-cta-primary">
                {block.primary.label} <ArrowLeft size={14} />
              </Link>
            )}
            {block.secondary && (
              <Link to={block.secondary.href} className="article-cta-secondary">
                {block.secondary.label}
              </Link>
            )}
          </div>
        </div>
      );
    default:
      return null;
  }
}

export default function ArticleDetail() {
  const { slug } = useParams();
  const article = articleBySlug(slug);

  const related = useMemo(() => {
    if (!article) return [];
    return articles
      .filter((a) => a.slug !== article.slug)
      .filter((a) => a.category === article.category)
      .slice(0, 3);
  }, [article]);

  if (!article) {
    return <Navigate to="/articles" replace />;
  }

  return (
    <>
      <Seo
        title={article.metaTitle || article.title}
        description={article.metaDescription}
        image={article.image}
        url={`/articles/${article.slug}`}
        type="article"
        article={{
          headline: article.title,
          datePublished: article.publishedAt,
          author: 'FOREVER',
          image: article.image,
          description: article.metaDescription,
          keywords: article.keywords,
        }}
        breadcrumbs={[
          { name: 'בית', url: '/' },
          { name: 'מאמרים', url: '/articles' },
          { name: article.title, url: `/articles/${article.slug}` },
        ]}
      />

      <style>{`
        .article-hero {
          position: relative;
          padding: 11rem 3rem 5rem;
          background: var(--brand-black);
          overflow: hidden;
          min-height: 70vh;
          display: flex;
          align-items: flex-end;
        }
        .article-hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .article-hero-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.35);
        }
        .article-hero-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(15,15,15,0.4) 0%, rgba(15,15,15,0.3) 50%, var(--brand-black) 100%);
        }
        .article-hero-content {
          position: relative;
          z-index: 1;
          max-width: 900px;
          margin: 0 auto;
          width: 100%;
        }
        .article-back {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          font-family: var(--font-body);
          font-size: 0.78rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--brand-gold);
          text-decoration: none;
          margin-bottom: 2rem;
          transition: gap 0.3s var(--ease-out);
        }
        .article-back:hover { gap: 1rem; }
        .article-category {
          font-family: var(--font-body);
          font-size: 0.72rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: var(--brand-gold);
          margin-bottom: 1.5rem;
          display: inline-flex;
          align-items: center;
          gap: 1rem;
        }
        .article-category::before {
          content: '';
          width: 32px;
          height: 1px;
          background: var(--brand-gold);
        }
        .article-title {
          font-family: var(--font-display);
          font-size: clamp(2.4rem, 5.5vw, 4.5rem);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.015em;
          color: var(--brand-off-white);
          margin: 0 0 2rem;
        }
        .article-meta {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
          font-family: var(--font-body);
          font-size: 0.85rem;
          color: var(--brand-muted);
        }
        .article-meta-item {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }
        .article-meta-item svg { color: var(--brand-gold); }

        .article-body-wrap {
          background: var(--brand-black);
          padding: 6rem 3rem;
        }
        .article-body {
          max-width: 760px;
          margin: 0 auto;
          font-family: var(--font-body);
          color: var(--brand-off-white);
          font-weight: 300;
        }
        .article-lead {
          font-family: var(--font-display);
          font-size: clamp(1.3rem, 2.2vw, 1.6rem);
          line-height: 1.6;
          color: var(--brand-off-white);
          font-weight: 400;
          letter-spacing: -0.005em;
          margin: 0 0 3rem;
          padding-bottom: 3rem;
          border-bottom: 1px solid rgba(198, 168, 124, 0.15);
        }
        .article-h2 {
          font-family: var(--font-display);
          font-size: clamp(1.7rem, 3vw, 2.25rem);
          font-weight: 600;
          line-height: 1.25;
          color: var(--brand-off-white);
          margin: 4rem 0 1.5rem;
          letter-spacing: -0.01em;
        }
        .article-h3 {
          font-family: var(--font-display);
          font-size: clamp(1.25rem, 2vw, 1.5rem);
          font-weight: 500;
          line-height: 1.35;
          color: var(--brand-gold);
          margin: 3rem 0 1rem;
        }
        .article-p {
          font-size: 1.05rem;
          line-height: 1.95;
          color: var(--brand-off-white);
          margin: 0 0 1.5rem;
          font-weight: 300;
        }
        .article-ul {
          margin: 0 0 2rem;
          padding-right: 1.5rem;
          list-style: none;
        }
        .article-ul li {
          position: relative;
          font-size: 1.05rem;
          line-height: 1.85;
          color: var(--brand-off-white);
          font-weight: 300;
          margin-bottom: 0.85rem;
          padding-right: 1.75rem;
        }
        .article-ul li::before {
          content: '';
          position: absolute;
          right: 0;
          top: 0.75rem;
          width: 8px;
          height: 1px;
          background: var(--brand-gold);
        }
        .article-cta {
          margin: 4rem 0;
          padding: 3rem;
          background: var(--brand-charcoal);
          border-right: 2px solid var(--brand-gold);
        }
        .article-cta-title {
          font-family: var(--font-display);
          font-size: 1.5rem;
          color: var(--brand-off-white);
          margin-bottom: 1rem;
          font-weight: 500;
        }
        .article-cta-body {
          font-family: var(--font-body);
          font-size: 1rem;
          line-height: 1.75;
          color: var(--brand-muted);
          font-weight: 300;
          margin: 0 0 1.75rem;
        }
        .article-cta-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .article-cta-primary {
          font-family: var(--font-body);
          font-size: 0.8rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: 0.95rem 2rem;
          background: var(--brand-gold);
          color: var(--brand-black);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          transition: all 0.3s var(--ease-out);
          border: 1px solid var(--brand-gold);
        }
        .article-cta-primary:hover {
          background: transparent;
          color: var(--brand-gold);
        }
        .article-cta-secondary {
          font-family: var(--font-body);
          font-size: 0.8rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: 0.95rem 2rem;
          color: var(--brand-off-white);
          text-decoration: none;
          border: 1px solid rgba(198, 168, 124, 0.3);
          transition: all 0.3s var(--ease-out);
        }
        .article-cta-secondary:hover {
          color: var(--brand-gold);
          border-color: var(--brand-gold);
        }

        .related-section {
          background: var(--brand-charcoal);
          padding: 6rem 3rem;
          border-top: 1px solid rgba(198, 168, 124, 0.08);
        }
        .related-wrap {
          max-width: 1400px;
          margin: 0 auto;
        }
        .related-eyebrow {
          font-family: var(--font-body);
          font-size: 0.78rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: var(--brand-gold);
          margin-bottom: 1rem;
        }
        .related-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 600;
          color: var(--brand-off-white);
          margin: 0 0 3rem;
        }
        .related-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        .related-card {
          background: var(--brand-black);
          border: 1px solid rgba(198, 168, 124, 0.08);
          padding: 2rem;
          text-decoration: none;
          color: inherit;
          transition: all 0.4s var(--ease-out);
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .related-card:hover {
          border-color: rgba(198, 168, 124, 0.4);
          transform: translateY(-4px);
        }
        .related-card-cat {
          font-family: var(--font-body);
          font-size: 0.7rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--brand-gold);
        }
        .related-card-title {
          font-family: var(--font-display);
          font-size: 1.25rem;
          line-height: 1.35;
          color: var(--brand-off-white);
          font-weight: 500;
          margin: 0;
        }
        .related-card-link {
          margin-top: auto;
          padding-top: 0.75rem;
          font-family: var(--font-body);
          font-size: 0.78rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--brand-gold);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        @media (max-width: 768px) {
          .article-hero { padding: 8rem 1.5rem 4rem; min-height: 60vh; }
          .article-body-wrap { padding: 4rem 1.5rem; }
          .article-cta { padding: 2rem 1.5rem; }
          .related-section { padding: 4rem 1.5rem; }
        }
      `}</style>

      <section className="article-hero">
        <div className="article-hero-bg" aria-hidden="true">
          <img src={article.image} alt="" />
        </div>
        <div className="article-hero-content">
          <Link to="/articles" className="article-back">
            <ArrowLeft size={14} style={{ transform: 'rotate(180deg)' }} />
            חזרה למאמרים
          </Link>
          <div className="article-category">{article.category}</div>
          <h1 className="article-title">{article.title}</h1>
          <div className="article-meta">
            <span className="article-meta-item">
              <Calendar size={14} />
              {formatDate(article.publishedAt)}
            </span>
            <span className="article-meta-item">
              <Clock size={14} />
              {article.readingTime} דקות קריאה
            </span>
          </div>
        </div>
      </section>

      <article className="article-body-wrap">
        <div className="article-body">
          {article.blocks.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>
      </article>

      {related.length > 0 && (
        <section className="related-section">
          <div className="related-wrap">
            <div className="related-eyebrow">המשיכו לקרוא</div>
            <h2 className="related-title">מאמרים נוספים</h2>
            <div className="related-grid">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/articles/${r.slug}`}
                  className="related-card"
                >
                  <div className="related-card-cat">{r.category}</div>
                  <h3 className="related-card-title">{r.title}</h3>
                  <span className="related-card-link">
                    קראו עוד <ArrowLeft size={12} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
