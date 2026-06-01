import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import CtaBlock from '@/components/site/CtaBlock';

const HERO_IMAGE = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6928c880d53d24dac96c5458/3a553c23d_romantic-valentine-s-day-proposal-with-bended-knee-ring.jpg';

const PHILOSOPHY_IMAGE = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6928c880d53d24dac96c5458/9d64b5daa_freepik__cinematic-medium-shot-of-a-couple-in-a-tight-emoti__50610.png';

const CONCEPT_IMAGES = {
  night: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6928c880d53d24dac96c5458/c7c44c871_freepik__a-cinematic-night-shot-of-a-lavish-proposal-setup-__50612.png',
  secluded: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6928c880d53d24dac96c5458/0d1b90055_freepik__a-wideangle-landscape-shot-of-a-secluded-luxurious__50611.png',
};

const WINTER_IMAGES = [
  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6928c880d53d24dac96c5458/18a40d9ce_freepik__cinematic-lowangle-shot-of-a-couple-sitting-on-a-l__50613.png',
  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6928c880d53d24dac96c5458/c43361fef_freepik__a-romantic-winter-setup-outdoors-at-night-a-couple__50614.png',
  'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6928c880d53d24dac96c5458/aec010f54_freepik__cinematic-night-shot-of-a-romantic-proposal-setup-__50615.png',
];

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const popupRef = useRef(null);

  useEffect(() => {
    const loadScripts = async () => {
      if (window.gsap && window.ScrollTrigger) {
        initAnimations();
        return;
      }
      const gsapScript = document.createElement('script');
      gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
      document.head.appendChild(gsapScript);
      await new Promise((r) => (gsapScript.onload = r));

      const stScript = document.createElement('script');
      stScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
      document.head.appendChild(stScript);
      await new Promise((r) => (stScript.onload = r));

      initAnimations();
    };
    loadScripts();

    const t = setTimeout(() => setShowPopup(true), 30000);
    return () => {
      clearTimeout(t);
      if (window.ScrollTrigger) window.ScrollTrigger.getAll().forEach((x) => x.kill());
    };
  }, []);

  useEffect(() => {
    if (!showPopup) return;
    const i = setInterval(() => setCurrentSlide((p) => (p + 1) % WINTER_IMAGES.length), 5000);
    if (window.gsap && popupRef.current) {
      window.gsap.fromTo(
        popupRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'power3.out' },
      );
    }
    return () => clearInterval(i);
  }, [showPopup]);

  const closePopup = () => {
    if (window.gsap && popupRef.current) {
      window.gsap.to(popupRef.current, {
        opacity: 0,
        y: 30,
        scale: 0.95,
        duration: 0.4,
        ease: 'power3.in',
        onComplete: () => setShowPopup(false),
      });
    } else {
      setShowPopup(false);
    }
  };

  const handlePopupSubmit = (e) => {
    e.preventDefault();
    alert('תודה. נחזור אליכם בהקדם לתיאום מועד.');
    closePopup();
  };

  const initAnimations = () => {
    const { gsap, ScrollTrigger } = window;
    if (!gsap || !ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      '.hero-line',
      { opacity: 0, y: 100, skewY: 5 },
      { opacity: 1, y: 0, skewY: 0, duration: 1.2, stagger: 0.15, ease: 'power4.out', delay: 0.5 },
    );
    gsap.fromTo('.hero-subtitle', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, delay: 1.3, ease: 'power3.out' });
    gsap.fromTo('.hero-cta-wrap', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, delay: 1.6, ease: 'power3.out' });

    gsap.to('.hero-image', {
      scale: 1.2,
      x: '-5%',
      duration: 20,
      ease: 'none',
      repeat: -1,
      yoyo: true,
    });

    document.querySelectorAll('.mask-reveal').forEach((container) => {
      const mask = container.querySelector('.reveal-mask');
      const image = container.querySelector('.reveal-image');
      if (!mask || !image) return;
      gsap.set(mask, { scaleX: 1 });
      gsap.set(image, { scale: 1.3 });
      gsap.to(mask, {
        scaleX: 0,
        transformOrigin: 'right center',
        duration: 1.5,
        ease: 'power4.inOut',
        scrollTrigger: { trigger: container, start: 'top 75%', toggleActions: 'play none none reverse' },
      });
      gsap.to(image, {
        scale: 1,
        duration: 1.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: container, start: 'top 75%', toggleActions: 'play none none reverse' },
      });
    });

    gsap.fromTo(
      '.philosophy-text',
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.philosophy-section', start: 'top 70%' },
      },
    );

    gsap.fromTo(
      '.concept-card',
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.concepts-grid', start: 'top 75%' },
      },
    );

    gsap.fromTo(
      '.testimonial-quote',
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.testimonial-section', start: 'top 60%' },
      },
    );

    gsap.fromTo(
      '.divider-line',
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.5,
        ease: 'power3.inOut',
        scrollTrigger: { trigger: '.divider-line', start: 'top 85%' },
      },
    );

    gsap.to('.parallax-slow', {
      y: -100,
      ease: 'none',
      scrollTrigger: { trigger: '.parallax-slow', start: 'top bottom', end: 'bottom top', scrub: 1 },
    });
  };

  return (
    <div className="forever-home" dir="rtl">
      <style>{`
        .forever-home { background: var(--brand-black); color: var(--brand-off-white); }

        /* Hero */
        .hero {
          position: relative;
          height: 100vh;
          min-height: 760px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .hero-background { position: absolute; inset: 0; z-index: 0; }
        .hero-image {
          width: 100%; height: 100%;
          object-fit: cover;
          filter: brightness(0.35) contrast(1.1);
        }
        .hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, rgba(15,15,15,0.4) 0%, rgba(15,15,15,0.2) 40%, rgba(15,15,15,0.85) 100%);
        }
        .hero-vignette {
          position: absolute; inset: 0;
          box-shadow: inset 0 0 200px 100px rgba(0,0,0,0.5);
        }
        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 2rem;
          max-width: 1400px;
        }
        .hero-title { overflow: hidden; }
        .hero-line {
          font-family: var(--font-display);
          font-size: clamp(3rem, 10vw, 8rem);
          font-weight: 900;
          line-height: 1;
          letter-spacing: -0.02em;
          display: block;
        }
        .hero-line:nth-child(2) { color: var(--brand-gold); font-style: italic; font-weight: 400; }
        .hero-subtitle {
          font-family: var(--font-body);
          font-size: clamp(0.85rem, 1.6vw, 1rem);
          font-weight: 300;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--brand-muted);
          margin-top: 2.5rem;
        }
        .hero-cta-wrap { margin-top: 3rem; }
        .hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1.15rem 2.5rem;
          background: var(--brand-gold);
          color: var(--brand-black);
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-decoration: none;
          border: 1px solid var(--brand-gold);
          transition: all 0.4s var(--ease-out);
          cursor: pointer;
        }
        .hero-cta:hover {
          background: transparent;
          color: var(--brand-gold);
        }
        .hero-cta svg { transition: transform 0.4s var(--ease-out); }
        .hero-cta:hover svg { transform: translateX(-4px); }

        .scroll-indicator {
          position: absolute;
          bottom: 3rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          color: var(--brand-muted);
        }
        .scroll-line {
          width: 1px; height: 60px;
          background: linear-gradient(to bottom, var(--brand-gold), transparent);
          animation: scrollPulse 2s ease-in-out infinite;
        }
        @keyframes scrollPulse {
          0%,100% { transform: scaleY(1); opacity: 1; }
          50% { transform: scaleY(0.5); opacity: 0.5; }
        }
        .scroll-text {
          font-size: 0.65rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          writing-mode: vertical-rl;
        }

        /* Philosophy */
        .philosophy-section { padding: 12rem 3rem; background: var(--brand-black); }
        .philosophy-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }
        .philosophy-eyebrow {
          font-family: var(--font-body);
          font-size: 0.78rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: var(--brand-gold);
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .philosophy-eyebrow::before {
          content: '';
          width: 40px; height: 1px;
          background: var(--brand-gold);
          display: inline-block;
        }
        .philosophy-text {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 3.6vw, 3rem);
          font-weight: 300;
          line-height: 1.45;
          color: var(--brand-off-white);
        }
        .philosophy-text strong { font-weight: 700; color: var(--brand-gold); font-style: italic; }
        .philosophy-image-wrapper { position: relative; aspect-ratio: 3/4; }
        .mask-reveal { position: relative; overflow: hidden; width: 100%; height: 100%; }
        .reveal-mask {
          position: absolute; inset: 0;
          background: var(--brand-black);
          z-index: 2;
          transform-origin: right center;
        }
        .reveal-image {
          width: 100%; height: 100%;
          object-fit: cover;
          filter: grayscale(30%) contrast(1.1);
        }
        .image-caption {
          position: absolute;
          bottom: -2.5rem;
          right: 0;
          font-size: 0.7rem;
          letter-spacing: 0.25em;
          color: var(--brand-muted);
          text-transform: uppercase;
        }

        @media (max-width: 968px) {
          .philosophy-container { grid-template-columns: 1fr; gap: 4rem; }
        }

        .divider { padding: 0 3rem; max-width: 1400px; margin: 0 auto; }
        .divider-line {
          height: 1px;
          background: linear-gradient(to left, transparent, var(--brand-gold-muted), transparent);
          transform-origin: right center;
        }

        /* Concepts */
        .concepts-section {
          padding: 9rem 3rem;
          background: linear-gradient(180deg, var(--brand-black) 0%, var(--brand-charcoal) 50%, var(--brand-black) 100%);
        }
        .concepts-header { text-align: center; margin-bottom: 5rem; }
        .concepts-label {
          font-size: 0.78rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: var(--brand-gold);
          margin-bottom: 1.5rem;
          display: block;
          font-weight: 500;
        }
        .concepts-title {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 6vw, 5rem);
          font-weight: 700;
          line-height: 1.1;
        }
        .concepts-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }
        @media (max-width: 768px) { .concepts-grid { grid-template-columns: 1fr; } }
        .concept-card { position: relative; aspect-ratio: 4/5; overflow: hidden; background: var(--brand-charcoal); }
        .concept-image-wrapper { position: absolute; inset: 0; }
        .concept-image {
          width: 100%; height: 100%;
          object-fit: cover;
          filter: brightness(0.4) grayscale(20%);
          transition: all 0.8s var(--ease-emphasized);
        }
        .concept-card:hover .concept-image {
          filter: brightness(0.6) grayscale(0%);
          transform: scale(1.05);
        }
        .concept-content {
          position: absolute; inset: 0;
          padding: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          background: linear-gradient(0deg, rgba(15,15,15,0.92) 0%, transparent 60%);
        }
        .concept-number {
          font-family: var(--font-display);
          font-size: 6rem;
          font-weight: 900;
          color: var(--brand-gold);
          opacity: 0.18;
          position: absolute;
          top: 2rem;
          right: 2rem;
          line-height: 1;
        }
        .concept-title {
          font-family: var(--font-display);
          font-size: clamp(1.6rem, 2.6vw, 2.2rem);
          font-weight: 700;
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        .concept-description {
          font-size: 0.95rem;
          font-weight: 300;
          color: var(--brand-muted);
          line-height: 1.8;
          max-width: 400px;
        }
        .concept-line {
          width: 60px; height: 2px;
          background: var(--brand-burgundy);
          margin-top: 1.5rem;
          transition: width 0.5s var(--ease-out), background 0.5s var(--ease-out);
        }
        .concept-card:hover .concept-line { width: 100px; background: var(--brand-gold); }

        /* Testimonial */
        .testimonial-section {
          padding: 11rem 3rem;
          background: var(--brand-black);
          position: relative;
          overflow: hidden;
        }
        .testimonial-bg-text {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          font-family: var(--font-display);
          font-size: clamp(15rem, 30vw, 40rem);
          font-weight: 900;
          color: rgba(255,255,255,0.025);
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
        }
        .testimonial-container {
          max-width: 1000px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 1;
        }
        .testimonial-quote {
          font-family: var(--font-display);
          font-size: clamp(1.6rem, 3.4vw, 2.6rem);
          font-weight: 400;
          line-height: 1.6;
          margin-bottom: 3rem;
          font-style: italic;
        }
        .testimonial-quote::before {
          content: '"';
          display: block;
          font-size: 7rem;
          color: var(--brand-burgundy);
          line-height: 0.4;
          margin-bottom: 2rem;
          opacity: 0.6;
        }
        .testimonial-author { display: flex; flex-direction: column; align-items: center; gap: 0.4rem; }
        .author-line { width: 40px; height: 1px; background: var(--brand-gold); margin-bottom: 1rem; }
        .author-name { font-size: 1rem; font-weight: 500; letter-spacing: 0.1em; }
        .author-detail {
          font-size: 0.75rem;
          color: var(--brand-muted);
          letter-spacing: 0.25em;
          text-transform: uppercase;
        }

        /* Stats */
        .stats-section { padding: 7rem 3rem; background: var(--brand-charcoal); }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4rem;
          max-width: 1000px;
          margin: 0 auto;
          text-align: center;
        }
        @media (max-width: 768px) { .stats-grid { grid-template-columns: 1fr; gap: 3rem; } }
        .stat-number {
          font-family: var(--font-display);
          font-size: clamp(3rem, 6vw, 5rem);
          font-weight: 300;
          color: var(--brand-gold);
          line-height: 1;
          margin-bottom: 1rem;
        }
        .stat-label {
          font-size: 0.78rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--brand-muted);
        }

        /* Portfolio teaser */
        .teaser-section { padding: 9rem 3rem; background: var(--brand-black); }
        .teaser-inner { max-width: 1400px; margin: 0 auto; }
        .teaser-head {
          display: flex;
          justify-content: space-between;
          align-items: end;
          margin-bottom: 4rem;
          gap: 2rem;
        }
        @media (max-width: 768px) { .teaser-head { flex-direction: column; align-items: flex-start; } }
        .teaser-eyebrow {
          font-size: 0.78rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: var(--brand-gold);
          margin-bottom: 1rem;
          display: block;
        }
        .teaser-title {
          font-family: var(--font-display);
          font-size: clamp(2.2rem, 5vw, 3.6rem);
          font-weight: 700;
          line-height: 1.1;
          max-width: 600px;
        }
        .teaser-link {
          font-family: var(--font-body);
          font-size: 0.85rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--brand-gold);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: gap 0.3s var(--ease-out);
        }
        .teaser-link:hover { gap: 1rem; }

        /* Popup */
        .popup-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.85);
          backdrop-filter: blur(10px);
          z-index: 10001;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }
        .popup-modal {
          position: relative;
          width: 100%;
          max-width: 720px;
          max-height: 85vh;
          background: var(--brand-charcoal);
          border: 1px solid var(--brand-gold-muted);
          display: grid;
          grid-template-columns: 1fr 1fr;
          overflow-y: auto;
          box-shadow: 0 50px 100px rgba(0,0,0,0.5);
        }
        @media (max-width: 768px) {
          .popup-modal { grid-template-columns: 1fr; max-width: 92%; }
        }
        .popup-close {
          position: absolute;
          top: 1rem; left: 1rem;
          width: 40px; height: 40px;
          background: transparent;
          border: 1px solid var(--brand-dark);
          color: var(--brand-off-white);
          font-size: 1.4rem;
          cursor: pointer;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s var(--ease-out);
        }
        .popup-close:hover {
          border-color: var(--brand-gold);
          color: var(--brand-gold);
          transform: rotate(90deg);
        }
        .popup-images { position: relative; min-height: 250px; overflow: hidden; }
        @media (max-width: 768px) { .popup-images { min-height: 180px; } }
        .popup-slide { position: absolute; inset: 0; opacity: 0; transition: opacity 1s ease-in-out; }
        .popup-slide.active { opacity: 1; }
        .popup-slide img { width: 100%; height: 100%; object-fit: cover; filter: brightness(0.7) contrast(1.1); }
        .popup-slide-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(123,30,40,0.3) 0%, transparent 100%);
        }
        .slide-indicators {
          position: absolute;
          bottom: 1.5rem; right: 1.5rem;
          display: flex; gap: 0.5rem;
        }
        .slide-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: rgba(255,255,255,0.3);
          transition: all 0.3s var(--ease-out);
        }
        .slide-dot.active { background: var(--brand-gold); transform: scale(1.2); }
        .popup-content { padding: 2rem; display: flex; flex-direction: column; justify-content: center; }
        .popup-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.45rem 0.95rem;
          background: rgba(123,30,40,0.2);
          border: 1px solid var(--brand-burgundy);
          color: var(--brand-gold);
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
          width: fit-content;
        }
        .popup-headline {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 3vw, 2.4rem);
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 1rem;
        }
        .popup-headline span { color: var(--brand-gold); font-style: italic; font-weight: 400; }
        .popup-subheadline {
          font-size: 0.9rem;
          color: var(--brand-muted);
          line-height: 1.8;
          margin-bottom: 1.75rem;
        }
        .popup-form { display: flex; flex-direction: column; gap: 0.85rem; }
        .popup-input {
          width: 100%;
          padding: 0.95rem;
          font-family: var(--font-body);
          font-size: 0.95rem;
          color: var(--brand-off-white);
          background: var(--brand-black);
          border: 1px solid var(--brand-dark);
          transition: border-color 0.3s var(--ease-out);
          direction: rtl;
        }
        .popup-input:focus { outline: none; border-color: var(--brand-gold); }
        .popup-input::placeholder { color: var(--brand-muted); opacity: 0.55; }
        .popup-submit {
          padding: 1.05rem;
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--brand-black);
          background: var(--brand-gold);
          border: 1px solid var(--brand-gold);
          cursor: pointer;
          transition: all 0.4s var(--ease-out);
          margin-top: 0.5rem;
        }
        .popup-submit:hover { background: transparent; color: var(--brand-gold); }
        .popup-disclaimer {
          font-size: 0.7rem;
          color: var(--brand-muted);
          opacity: 0.6;
          text-align: center;
          margin-top: 1.25rem;
        }

        @media (max-width: 768px) {
          .philosophy-section,
          .testimonial-section,
          .teaser-section { padding: 6rem 1.5rem; }
          .concepts-section { padding: 5rem 1.5rem; }
          .stats-section { padding: 5rem 1.5rem; }
        }
      `}</style>

      <section className="hero">
        <div className="hero-background">
          <img
            src={HERO_IMAGE}
            alt="הצעת נישואין רומנטית"
            className="hero-image"
          />
          <div className="hero-overlay" />
          <div className="hero-vignette" />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-line">כי יש רגעים</span>
            <span className="hero-line">שחייבים</span>
            <span className="hero-line">להיות מושלמים.</span>
          </h1>
          <p className="hero-subtitle">הפקת הצעות נישואין קולנועיות</p>
          <div className="hero-cta-wrap">
            <Link to="/contact" className="hero-cta">
              <span>בואו נתכנן את הרגע שלכם</span>
              <ArrowLeft size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="philosophy-section">
        <div className="philosophy-container">
          <div>
            <div className="philosophy-eyebrow">הפילוסופיה שלנו</div>
            <div className="philosophy-text">
              אנחנו לא יוצרים אירועים.
              <br /><br />
              אנחנו יוצרים <strong>זיכרונות נצחיים</strong> —
              רגעים שיישארו חקוקים בזיכרון, סיפורים שיסופרו לדורות.
            </div>
          </div>
          <div className="philosophy-image-wrapper parallax-slow">
            <div className="mask-reveal">
              <div className="reveal-mask" />
              <img src={PHILOSOPHY_IMAGE} alt="רגע אינטימי" className="reveal-image" />
            </div>
            <span className="image-caption">רגע של נצח</span>
          </div>
        </div>
      </section>

      <div className="divider"><div className="divider-line" /></div>

      <section className="concepts-section">
        <div className="concepts-header">
          <span className="concepts-label">הקונספטים שלנו</span>
          <h2 className="concepts-title">הפקות חתימה</h2>
        </div>
        <div className="concepts-grid">
          <article className="concept-card">
            <div className="concept-image-wrapper mask-reveal">
              <div className="reveal-mask" />
              <img src={CONCEPT_IMAGES.night} alt="הפקה לילית" className="concept-image reveal-image" />
            </div>
            <div className="concept-content">
              <span className="concept-number">01</span>
              <h3 className="concept-title">הפקה לילית דרמטית</h3>
              <p className="concept-description">
                תאורה קולנועית, צללים עמוקים, ואווירה מסתורית.
                הלילה הופך לבמה המושלמת לרגע הגדול.
              </p>
              <div className="concept-line" />
            </div>
          </article>
          <article className="concept-card">
            <div className="concept-image-wrapper mask-reveal">
              <div className="reveal-mask" />
              <img src={CONCEPT_IMAGES.secluded} alt="לוקיישן סודי" className="concept-image reveal-image" />
            </div>
            <div className="concept-content">
              <span className="concept-number">02</span>
              <h3 className="concept-title">לוקיישן סודי ומבודד</h3>
              <p className="concept-description">
                מקום שרק אתם יודעים עליו. בידוד מוחלט מהעולם —
                רק אתם והרגע המושלם.
              </p>
              <div className="concept-line" />
            </div>
          </article>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="testimonial-bg-text">FOREVER</div>
        <div className="testimonial-container">
          <blockquote className="testimonial-quote">
            היא הסתכלה עליי, ובשנייה הזו הבנתי — כל התכנון, כל הפחדים,
            הכל היה שווה. הרגע הזה ישאר איתנו לנצח.
          </blockquote>
          <div className="testimonial-author">
            <div className="author-line" />
            <span className="author-name">אלון ונועה</span>
            <span className="author-detail">התארסו בנובמבר 2024</span>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-grid">
          <div><div className="stat-number">147</div><div className="stat-label">הפקות מושלמות</div></div>
          <div><div className="stat-number">100%</div><div className="stat-label">אמרו כן</div></div>
          <div><div className="stat-number">∞</div><div className="stat-label">זיכרונות</div></div>
        </div>
      </section>

      <section className="teaser-section">
        <div className="teaser-inner">
          <div className="teaser-head">
            <div>
              <span className="teaser-eyebrow">הצצה לעולם שלנו</span>
              <h2 className="teaser-title">כל הפקה — סיפור משלה.</h2>
            </div>
            <Link to="/portfolio" className="teaser-link">
              לתיק העבודות המלא <ArrowLeft size={14} />
            </Link>
          </div>
        </div>
      </section>

      <CtaBlock />

      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-modal" ref={popupRef} onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={closePopup} aria-label="סגור">✕</button>
            <div className="popup-images">
              {WINTER_IMAGES.map((img, i) => (
                <div key={i} className={`popup-slide ${i === currentSlide ? 'active' : ''}`}>
                  <img src={img} alt={`חורף ${i + 1}`} />
                  <div className="popup-slide-overlay" />
                </div>
              ))}
              <div className="slide-indicators">
                {WINTER_IMAGES.map((_, i) => (
                  <div key={i} className={`slide-dot ${i === currentSlide ? 'active' : ''}`} />
                ))}
              </div>
            </div>
            <div className="popup-content">
              <div className="popup-badge">מבצע חורף</div>
              <h3 className="popup-headline">החורף הזה<br />יהיה <span>לוהט.</span></h3>
              <p className="popup-subheadline">
                הטבה בלעדית להצעות בחודשי דצמבר—ינואר.
                השאירו פרטים לקבלת החבילה המיוחדת.
              </p>
              <form className="popup-form" onSubmit={handlePopupSubmit}>
                <input type="text" className="popup-input" placeholder="השם שלך" required />
                <input type="tel" className="popup-input" placeholder="מספר טלפון" required />
                <button type="submit" className="popup-submit">שריינו לי תאריך</button>
              </form>
              <p className="popup-disclaimer">* בכפוף לזמינות. דיסקרטיות מובטחת.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
