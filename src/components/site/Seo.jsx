import { useEffect } from 'react';

const SITE_URL = 'https://forever.co.il';
const SITE_NAME = 'FOREVER';
const DEFAULT_IMAGE =
  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6928c880d53d24dac96c5458/0d1b90055_freepik__a-wideangle-landscape-shot-of-a-secluded-luxurious__50611.png';

function setMeta(attr, key, value) {
  if (!value) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

function setLink(rel, href) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function injectJsonLd(id, data) {
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

function removeJsonLd(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
}

/**
 * Seo — sets title, description, OG/Twitter tags, canonical, and JSON-LD.
 * Props:
 *   title, description, image, url (path), type ('website'|'article')
 *   article: { headline, datePublished, dateModified, author, image, description, keywords[] }
 *   breadcrumbs: [{ name, url }]
 */
export default function Seo({
  title,
  description,
  image = DEFAULT_IMAGE,
  url = '',
  type = 'website',
  article,
  breadcrumbs,
}) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — הפקות הצעות נישואין יוקרתיות`;
    const fullUrl = `${SITE_URL}${url || ''}`;
    document.title = fullTitle;

    setMeta('name', 'description', description);
    setLink('canonical', fullUrl);

    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:image', image);
    setMeta('property', 'og:url', fullUrl);
    setMeta('property', 'og:type', type);
    setMeta('property', 'og:site_name', SITE_NAME);
    setMeta('property', 'og:locale', 'he_IL');

    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', image);

    if (article) {
      injectJsonLd('jsonld-article', {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.headline || title,
        description: article.description || description,
        image: article.image || image,
        datePublished: article.datePublished,
        dateModified: article.dateModified || article.datePublished,
        author: {
          '@type': 'Organization',
          name: article.author || SITE_NAME,
        },
        publisher: {
          '@type': 'Organization',
          name: SITE_NAME,
          logo: {
            '@type': 'ImageObject',
            url: `${SITE_URL}/logo.png`,
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': fullUrl,
        },
        keywords: article.keywords ? article.keywords.join(', ') : undefined,
        inLanguage: 'he-IL',
      });
    } else {
      removeJsonLd('jsonld-article');
    }

    if (breadcrumbs && breadcrumbs.length) {
      injectJsonLd('jsonld-breadcrumbs', {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((b, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: b.name,
          item: `${SITE_URL}${b.url}`,
        })),
      });
    } else {
      removeJsonLd('jsonld-breadcrumbs');
    }

    return () => {
      removeJsonLd('jsonld-article');
      removeJsonLd('jsonld-breadcrumbs');
    };
  }, [title, description, image, url, type, article, breadcrumbs]);

  return null;
}
