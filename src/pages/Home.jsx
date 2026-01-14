import React, { useEffect, useRef, useState } from 'react';

export default function Home() {

  const [showPopup, setShowPopup] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);
  const popupRef = useRef(null);

  const winterImages = [
    'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6928c880d53d24dac96c5458/18a40d9ce_freepik__cinematic-lowangle-shot-of-a-couple-sitting-on-a-l__50613.png',
    'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6928c880d53d24dac96c5458/c43361fef_freepik__a-romantic-winter-setup-outdoors-at-night-a-couple__50614.png',
    'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6928c880d53d24dac96c5458/aec010f54_freepik__cinematic-night-shot-of-a-romantic-proposal-setup-__50615.png'
  ];

  useEffect(() => {
    // Load GSAP
    const loadScripts = async () => {
      const gsapScript = document.createElement('script');
      gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
      document.head.appendChild(gsapScript);

      await new Promise(resolve => gsapScript.onload = resolve);

      const scrollTriggerScript = document.createElement('script');
      scrollTriggerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
      document.head.appendChild(scrollTriggerScript);

      await new Promise(resolve => scrollTriggerScript.onload = resolve);

      initAnimations();
    };

    loadScripts();



    // Popup timer - show after 30 seconds
    const popupTimer = setTimeout(() => {
      setShowPopup(true);
    }, 30000);

    return () => {
      clearTimeout(popupTimer);
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach(t => t.kill());
      }
    };
  }, []);

  // Image slideshow effect
  useEffect(() => {
    if (!showPopup) return;
    
    const slideInterval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % winterImages.length);
    }, 5000);

    // Animate popup entrance
    if (window.gsap && popupRef.current) {
      window.gsap.fromTo(popupRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'power3.out' }
      );
    }

    return () => clearInterval(slideInterval);
  }, [showPopup]);

  const closePopup = () => {
    if (window.gsap && popupRef.current) {
      window.gsap.to(popupRef.current, {
        opacity: 0,
        y: 30,
        scale: 0.95,
        duration: 0.4,
        ease: 'power3.in',
        onComplete: () => setShowPopup(false)
      });
    } else {
      setShowPopup(false);
    }
  };

  const handlePopupSubmit = (e) => {
    e.preventDefault();
    alert('תודה! ניצור איתך קשר בהקדם לתיאום מועד.');
    closePopup();
  };

  const initAnimations = () => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    
    if (!gsap || !ScrollTrigger) return;
    
    gsap.registerPlugin(ScrollTrigger);

    // Hero animations
    gsap.fromTo('.hero-line', 
      { opacity: 0, y: 100, skewY: 5 },
      { 
        opacity: 1, 
        y: 0, 
        skewY: 0,
        duration: 1.2, 
        stagger: 0.15,
        ease: 'power4.out',
        delay: 0.5
      }
    );

    gsap.fromTo('.hero-subtitle',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 1.3, ease: 'power3.out' }
    );

    gsap.fromTo('.scroll-indicator',
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 2 }
    );

    // Hero image slow pan
    gsap.to('.hero-image', {
      scale: 1.2,
      x: '-5%',
      duration: 20,
      ease: 'none',
      repeat: -1,
      yoyo: true
    });

    // Mask reveal animations for images
    document.querySelectorAll('.mask-reveal').forEach((container) => {
      const mask = container.querySelector('.reveal-mask');
      const image = container.querySelector('.reveal-image');
      
      if (mask && image) {
        gsap.set(mask, { scaleX: 1 });
        gsap.set(image, { scale: 1.3 });

        gsap.to(mask, {
          scaleX: 0,
          transformOrigin: 'right center',
          duration: 1.5,
          ease: 'power4.inOut',
          scrollTrigger: {
            trigger: container,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        });

        gsap.to(image, {
          scale: 1,
          duration: 1.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        });
      }
    });

    // Philosophy section animation
    gsap.fromTo('.philosophy-text',
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.philosophy-section',
          start: 'top 70%'
        }
      }
    );

    // Concept cards stagger
    gsap.fromTo('.concept-card',
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.concepts-grid',
          start: 'top 75%'
        }
      }
    );

    // Testimonial reveal
    gsap.fromTo('.testimonial-quote',
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.testimonial-section',
          start: 'top 60%'
        }
      }
    );

    // Horizontal line animations
    gsap.fromTo('.divider-line',
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.5,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: '.divider-line',
          start: 'top 85%'
        }
      }
    );

    // Contact section
    gsap.fromTo('.contact-content > *',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.contact-section',
          start: 'top 70%'
        }
      }
    );

    // Parallax effects
    gsap.to('.parallax-slow', {
      y: -100,
      ease: 'none',
      scrollTrigger: {
        trigger: '.parallax-slow',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('הפרטים נשלחו. ניצור איתך קשר בקרוב.');
  };

  return (
    <div className="forever-app" dir="rtl" ref={containerRef}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@300;400;500;700;900&family=Heebo:wght@300;400;500;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .forever-app {
          --black: #0F0F0F;
          --charcoal: #1A1A1A;
          --dark-gray: #2A2A2A;
          --off-white: #E0E0E0;
          --muted-white: #9A9A9A;
          --burgundy: #7B1E28;
          --gold: #C6A87C;
          --gold-muted: rgba(198, 168, 124, 0.3);
          
          font-family: 'Heebo', sans-serif;
          background: var(--black);
          color: var(--off-white);
          overflow-x: hidden;
        }

        /* Navigation */
        .nav {
          position: fixed;
          top: 0;
          right: 0;
          left: 0;
          z-index: 100;
          padding: 2rem 3rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          mix-blend-mode: difference;
        }

        .logo {
          font-family: 'Frank Ruhl Libre', serif;
          font-size: 1.2rem;
          font-weight: 500;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: white;
        }

        .nav-link {
          font-size: 0.85rem;
          font-weight: 400;
          letter-spacing: 0.15em;
          color: white;
          text-decoration: none;
          position: relative;
          padding-bottom: 4px;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          right: 0;
          width: 0;
          height: 1px;
          background: var(--gold);
          transition: width 0.4s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        /* Hero Section */
        .hero {
          position: relative;
          height: 100vh;
          min-height: 800px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.35) contrast(1.1);
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(15,15,15,0.4) 0%,
            rgba(15,15,15,0.2) 40%,
            rgba(15,15,15,0.8) 100%
          );
        }

        .hero-vignette {
          position: absolute;
          inset: 0;
          box-shadow: inset 0 0 200px 100px rgba(0,0,0,0.5);
        }

        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 2rem;
          max-width: 1400px;
        }

        .hero-title {
          overflow: hidden;
        }

        .hero-line {
          font-family: 'Frank Ruhl Libre', serif;
          font-size: clamp(3rem, 10vw, 8rem);
          font-weight: 900;
          line-height: 1;
          letter-spacing: -0.02em;
          display: block;
          text-transform: none;
        }

        .hero-line:nth-child(2) {
          color: var(--gold);
        }

        .hero-subtitle {
                        font-size: clamp(0.9rem, 2vw, 1.1rem);
                        font-weight: 300;
                        letter-spacing: 0.3em;
                        text-transform: uppercase;
                        color: var(--muted-white);
                        margin-top: 3rem;
                      }

                      /* Luxury CTA Button */
                      .hero-cta {
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        gap: 0.75rem;
                        margin-top: 3rem;
                        padding: 1.25rem 2.5rem;
                        background: #C6A87C;
                        border-radius: 50px;
                        text-decoration: none;
                        font-family: 'Heebo', sans-serif;
                        font-size: 1.1rem;
                        font-weight: 700;
                        color: #1a1a1a;
                        position: relative;
                        overflow: hidden;
                        box-shadow: 0 0 20px rgba(198, 168, 124, 0.4), 0 0 40px rgba(198, 168, 124, 0.2);
                        animation: pulseGlow 2s ease-in-out infinite;
                        transition: transform 0.2s ease, box-shadow 0.3s ease;
                      }

                      @keyframes pulseGlow {
                        0%, 100% { box-shadow: 0 0 20px rgba(198, 168, 124, 0.4), 0 0 40px rgba(198, 168, 124, 0.2); }
                        50% { box-shadow: 0 0 30px rgba(198, 168, 124, 0.6), 0 0 60px rgba(198, 168, 124, 0.3); }
                      }

                      .hero-cta::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: -100%;
                        width: 50%;
                        height: 100%;
                        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent);
                        transform: skewX(-25deg);
                        transition: left 0.5s ease;
                      }

                      .hero-cta:hover::before {
                        left: 150%;
                      }

                      .hero-cta:hover {
                        box-shadow: 0 0 40px rgba(198, 168, 124, 0.7), 0 0 80px rgba(198, 168, 124, 0.4);
                      }

                      .hero-cta:active {
                        transform: scale(0.98);
                      }

                      .hero-cta-icon {
                        width: 24px;
                        height: 24px;
                        fill: #1a1a1a;
                      }

        .scroll-indicator {
          position: absolute;
          bottom: 3rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          color: var(--muted-white);
        }

        .scroll-line {
          width: 1px;
          height: 60px;
          background: linear-gradient(to bottom, var(--gold), transparent);
          animation: scrollPulse 2s ease-in-out infinite;
        }

        @keyframes scrollPulse {
          0%, 100% { transform: scaleY(1); opacity: 1; }
          50% { transform: scaleY(0.5); opacity: 0.5; }
        }

        .scroll-text {
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          writing-mode: vertical-rl;
        }

        /* Philosophy Section */
        .philosophy-section {
          padding: 15rem 3rem;
          position: relative;
          background: var(--black);
        }

        .philosophy-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }

        @media (max-width: 968px) {
          .philosophy-container {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }

        .philosophy-text {
          font-family: 'Frank Ruhl Libre', serif;
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 300;
          line-height: 1.4;
          color: var(--off-white);
        }

        .philosophy-text strong {
          font-weight: 700;
          color: var(--gold);
        }

        .philosophy-image-wrapper {
          position: relative;
          aspect-ratio: 3/4;
        }

        .mask-reveal {
          position: relative;
          overflow: hidden;
          width: 100%;
          height: 100%;
        }

        .reveal-mask {
          position: absolute;
          inset: 0;
          background: var(--black);
          z-index: 2;
          transform-origin: right center;
        }

        .reveal-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(30%) contrast(1.1);
        }

        .image-caption {
          position: absolute;
          bottom: -3rem;
          right: 0;
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          color: var(--muted-white);
          text-transform: uppercase;
        }

        /* Divider */
        .divider {
          padding: 0 3rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .divider-line {
          height: 1px;
          background: linear-gradient(to left, transparent, var(--gold-muted), transparent);
          transform-origin: right center;
        }

        /* Concepts Section */
        .concepts-section {
          padding: 10rem 3rem;
          background: linear-gradient(180deg, var(--black) 0%, var(--charcoal) 50%, var(--black) 100%);
        }

        .concepts-header {
          text-align: center;
          margin-bottom: 6rem;
        }

        .concepts-label {
          font-size: 0.8rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 1.5rem;
          display: block;
        }

        .concepts-title {
          font-family: 'Frank Ruhl Libre', serif;
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

        @media (max-width: 768px) {
          .concepts-grid {
            grid-template-columns: 1fr;
          }
        }

        .concept-card {
          position: relative;
          aspect-ratio: 4/5;
          overflow: hidden;
          background: var(--charcoal);
        }

        .concept-image-wrapper {
          position: absolute;
          inset: 0;
        }

        .concept-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.4) grayscale(20%);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .concept-card:hover .concept-image {
          filter: brightness(0.6) grayscale(0%);
          transform: scale(1.05);
        }

        .concept-content {
          position: absolute;
          inset: 0;
          padding: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          background: linear-gradient(0deg, rgba(15,15,15,0.9) 0%, transparent 60%);
        }

        .concept-number {
          font-family: 'Frank Ruhl Libre', serif;
          font-size: 6rem;
          font-weight: 900;
          color: var(--gold);
          opacity: 0.2;
          position: absolute;
          top: 2rem;
          right: 2rem;
          line-height: 1;
        }

        .concept-title {
          font-family: 'Frank Ruhl Libre', serif;
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          font-weight: 700;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .concept-description {
          font-size: 0.95rem;
          font-weight: 300;
          color: var(--muted-white);
          line-height: 1.8;
          max-width: 400px;
        }

        .concept-line {
          width: 60px;
          height: 2px;
          background: var(--burgundy);
          margin-top: 1.5rem;
          transition: width 0.5s ease;
        }

        .concept-card:hover .concept-line {
          width: 100px;
          background: var(--gold);
        }

        /* Testimonial Section */
        .testimonial-section {
          padding: 12rem 3rem;
          background: var(--black);
          position: relative;
          overflow: hidden;
        }

        .testimonial-bg-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: 'Frank Ruhl Libre', serif;
          font-size: clamp(15rem, 30vw, 40rem);
          font-weight: 900;
          color: rgba(255,255,255,0.02);
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
          font-family: 'Frank Ruhl Libre', serif;
          font-size: clamp(1.8rem, 4vw, 3rem);
          font-weight: 400;
          line-height: 1.6;
          margin-bottom: 3rem;
        }

        .testimonial-quote::before {
          content: '"';
          display: block;
          font-size: 8rem;
          color: var(--burgundy);
          line-height: 0.5;
          margin-bottom: 2rem;
          opacity: 0.5;
        }

        .testimonial-author {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .author-line {
          width: 40px;
          height: 1px;
          background: var(--gold);
          margin-bottom: 1rem;
        }

        .author-name {
          font-size: 1rem;
          font-weight: 500;
          letter-spacing: 0.1em;
        }

        .author-detail {
          font-size: 0.8rem;
          color: var(--muted-white);
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        /* Stats Section */
        .stats-section {
          padding: 8rem 3rem;
          background: var(--charcoal);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4rem;
          max-width: 1000px;
          margin: 0 auto;
          text-align: center;
        }

        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        .stat-item {
          position: relative;
        }

        .stat-number {
          font-family: 'Frank Ruhl Libre', serif;
          font-size: clamp(3rem, 6vw, 5rem);
          font-weight: 300;
          color: var(--gold);
          line-height: 1;
          margin-bottom: 1rem;
        }

        .stat-label {
          font-size: 0.85rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--muted-white);
        }

        /* Contact Section */
        .contact-section {
          padding: 12rem 3rem;
          background: var(--black);
          position: relative;
        }

        .contact-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .contact-content {
          text-align: center;
        }

        .contact-label {
          font-size: 0.8rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 1.5rem;
          display: block;
        }

        .contact-title {
          font-family: 'Frank Ruhl Libre', serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 2rem;
        }

        .contact-subtitle {
          font-size: 1rem;
          color: var(--muted-white);
          font-weight: 300;
          margin-bottom: 4rem;
          line-height: 1.8;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        @media (max-width: 600px) {
          .form-row {
            grid-template-columns: 1fr;
          }
        }

        .form-group {
          position: relative;
        }

        .form-input {
          width: 100%;
          padding: 1.25rem 0;
          font-family: 'Heebo', sans-serif;
          font-size: 1rem;
          color: var(--off-white);
          background: transparent;
          border: none;
          border-bottom: 1px solid var(--dark-gray);
          transition: all 0.4s ease;
          direction: rtl;
        }

        .form-input:focus {
          outline: none;
          border-bottom-color: var(--gold);
        }

        .form-input::placeholder {
          color: var(--muted-white);
          opacity: 0.5;
        }

        .form-textarea {
          min-height: 100px;
          resize: none;
        }

        .submit-button {
          margin-top: 2rem;
          padding: 1.5rem 3rem;
          font-family: 'Heebo', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--black);
          background: var(--gold);
          border: none;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .submit-button::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 100%;
          height: 100%;
          background: var(--burgundy);
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .submit-button:hover::before {
          transform: translateX(0);
        }

        .submit-button span {
          position: relative;
          z-index: 1;
          transition: color 0.4s ease;
        }

        .submit-button:hover span {
          color: var(--off-white);
        }

        /* Winter Popup Modal */
        .popup-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
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
          max-width: 750px;
          max-height: 85vh;
          background: var(--charcoal);
          border: 1px solid var(--gold-muted);
          display: grid;
          grid-template-columns: 1fr 1fr;
          overflow-y: auto;
          box-shadow: 0 50px 100px rgba(0, 0, 0, 0.5);
        }

        @media (max-width: 768px) {
          .popup-modal {
            grid-template-columns: 1fr;
            max-height: 85vh;
            max-width: 90%;
            overflow-y: auto;
          }
          
          .popup-close {
            top: 0.5rem;
            left: 0.5rem;
            width: 32px;
            height: 32px;
            font-size: 1.2rem;
            background: rgba(0,0,0,0.7);
          }
        }

        .popup-close {
          position: absolute;
          top: 1rem;
          left: 1rem;
          width: 40px;
          height: 40px;
          background: transparent;
          border: 1px solid var(--dark-gray);
          color: var(--off-white);
          font-size: 1.5rem;
          cursor: pointer;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .popup-close:hover {
          border-color: var(--gold);
          color: var(--gold);
          transform: rotate(90deg);
        }

        .popup-images {
          position: relative;
          min-height: 250px;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .popup-images {
            min-height: 150px;
          }
        }

        .popup-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }

        .popup-slide.active {
          opacity: 1;
        }

        .popup-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.7) contrast(1.1);
        }

        .popup-slide-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(123,30,40,0.3) 0%, transparent 100%);
        }

        .slide-indicators {
          position: absolute;
          bottom: 1.5rem;
          right: 1.5rem;
          display: flex;
          gap: 0.5rem;
        }

        .slide-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255,255,255,0.3);
          transition: all 0.3s ease;
        }

        .slide-dot.active {
          background: var(--gold);
          transform: scale(1.2);
        }

        .popup-content {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .popup-content {
            padding: 1.5rem;
          }
          
          .popup-headline {
            font-size: 1.5rem;
          }
          
          .popup-subheadline {
            font-size: 0.85rem;
            margin-bottom: 1.5rem;
          }
          
          .popup-input {
            padding: 0.75rem;
          }
          
          .popup-submit {
            padding: 1rem;
          }
        }

        .popup-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(123,30,40,0.2);
          border: 1px solid var(--burgundy);
          color: var(--gold);
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
          width: fit-content;
        }

        .popup-badge::before {
          content: '❄';
          font-size: 0.9rem;
        }

        .popup-headline {
          font-family: 'Frank Ruhl Libre', serif;
          font-size: clamp(2rem, 4vw, 2.5rem);
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 1rem;
          color: var(--off-white);
        }

        .popup-headline span {
          color: var(--gold);
        }

        .popup-subheadline {
          font-size: 0.95rem;
          color: var(--muted-white);
          line-height: 1.8;
          margin-bottom: 2rem;
        }

        .popup-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .popup-input {
          width: 100%;
          padding: 1rem;
          font-family: 'Heebo', sans-serif;
          font-size: 1rem;
          color: var(--off-white);
          background: var(--black);
          border: 1px solid var(--dark-gray);
          transition: all 0.3s ease;
          direction: rtl;
        }

        .popup-input:focus {
          outline: none;
          border-color: var(--gold);
        }

        .popup-input::placeholder {
          color: var(--muted-white);
          opacity: 0.5;
        }

        .popup-submit {
          padding: 1.25rem;
          font-family: 'Heebo', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--black);
          background: linear-gradient(135deg, var(--gold) 0%, #d4b896 100%);
          border: none;
          cursor: pointer;
          transition: all 0.4s ease;
          margin-top: 0.5rem;
        }

        .popup-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(198, 168, 124, 0.3);
        }

        .popup-disclaimer {
          font-size: 0.75rem;
          color: var(--muted-white);
          opacity: 0.5;
          text-align: center;
          margin-top: 1.5rem;
        }

        /* Footer */
        .footer {
          padding: 4rem 3rem;
          background: var(--charcoal);
          border-top: 1px solid var(--dark-gray);
        }

        .footer-content {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .footer-logo {
          font-family: 'Frank Ruhl Libre', serif;
          font-size: 1rem;
          font-weight: 500;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--off-white);
        }

        .footer-links {
          display: flex;
          gap: 2rem;
        }

        .footer-link {
          font-size: 0.8rem;
          color: var(--muted-white);
          text-decoration: none;
          letter-spacing: 0.1em;
          transition: color 0.3s ease;
        }

        .footer-link:hover {
          color: var(--gold);
        }

        .footer-copyright {
          font-size: 0.75rem;
          color: var(--muted-white);
          opacity: 0.5;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .nav {
            padding: 1.5rem;
          }
          
          .philosophy-section,
          .concepts-section,
          .testimonial-section,
          .contact-section {
            padding: 6rem 1.5rem;
          }

          .stats-section {
            padding: 5rem 1.5rem;
          }

          .footer-content {
            flex-direction: column;
            text-align: center;
          }

          .footer-links {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>



      {/* Navigation */}
      <nav className="nav">
        <div className="logo">FOREVER</div>
        <a href="#contact" className="nav-link">צור קשר</a>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6928c880d53d24dac96c5458/3a553c23d_romantic-valentine-s-day-proposal-with-bended-knee-ring.jpg"
                              alt="Romantic proposal"
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

                          <a 
                            href="https://wa.me/972525970972" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hero-cta"
                          >
                            <svg className="hero-cta-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                            בואו נתכנן את הרגע שלכם
                          </a>
                        </div>


      </section>

      {/* Philosophy Section */}
      <section className="philosophy-section">
        <div className="philosophy-container">
          <div className="philosophy-text">
            אנחנו לא יוצרים אירועים.
            <br /><br />
            אנחנו יוצרים <strong>זיכרונות נצחיים</strong> — 
            רגעים שיישארו חקוקים בזיכרון, 
            סיפורים שיסופרו לדורות.
          </div>
          
          <div className="philosophy-image-wrapper parallax-slow">
            <div className="mask-reveal">
              <div className="reveal-mask" />
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6928c880d53d24dac96c5458/9d64b5daa_freepik__cinematic-medium-shot-of-a-couple-in-a-tight-emoti__50610.png"
                                      alt="Romantic moment"
                className="reveal-image"
              />
            </div>
            <span className="image-caption">רגע של נצח</span>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider">
        <div className="divider-line" />
      </div>

      {/* Concepts Section */}
      <section className="concepts-section">
        <div className="concepts-header">
          <span className="concepts-label">הקונספטים שלנו</span>
          <h2 className="concepts-title">הפקות חתימה</h2>
        </div>

        <div className="concepts-grid">
          <div className="concept-card">
            <div className="concept-image-wrapper mask-reveal">
              <div className="reveal-mask" />
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6928c880d53d24dac96c5458/c7c44c871_freepik__a-cinematic-night-shot-of-a-lavish-proposal-setup-__50612.png"
                                      alt="Dramatic night"
                className="concept-image reveal-image"
              />
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
          </div>

          <div className="concept-card">
            <div className="concept-image-wrapper mask-reveal">
              <div className="reveal-mask" />
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6928c880d53d24dac96c5458/0d1b90055_freepik__a-wideangle-landscape-shot-of-a-secluded-luxurious__50611.png"
                                      alt="Secret location"
                className="concept-image reveal-image"
              />
            </div>
            <div className="concept-content">
              <span className="concept-number">02</span>
              <h3 className="concept-title">לוקיישן סודי ומבודד</h3>
              <p className="concept-description">
                מקום שרק אתם יודעים עליו. בידוד מוחלט מהעולם, 
                רק אתם והרגע המושלם.
              </p>
              <div className="concept-line" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
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

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">147</div>
            <div className="stat-label">הפקות מושלמות</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">אמרו כן</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">∞</div>
            <div className="stat-label">זיכרונות</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="contact-container">
          <div className="contact-content">
            <span className="contact-label">בואו נדבר</span>
            <h2 className="contact-title">הרגע שלכם מתחיל כאן</h2>
            <p className="contact-subtitle">
              שיחה דיסקרטית, ללא התחייבות. 
              ספרו לנו על החזון שלכם ונהפוך אותו למציאות.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="השם שלך"
                    required
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="tel" 
                    className="form-input" 
                    placeholder="טלפון"
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <input 
                  type="email" 
                  className="form-input" 
                  placeholder="אימייל"
                />
              </div>
              
              <div className="form-group">
                <textarea 
                  className="form-input form-textarea" 
                  placeholder="ספר לנו על הרגע שאתה מדמיין..."
                />
              </div>

              <button type="submit" className="submit-button">
                <span>שלחו ונחזור אליכם</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">FOREVER — הפקות יוקרה</div>
          <div className="footer-links">
            <a href="#" className="footer-link">אינסטגרם</a>
            <a href="#" className="footer-link">וואטסאפ</a>
            <a href="#" className="footer-link">פייסבוק</a>
          </div>
          <div className="footer-copyright">© 2025 כל הזכויות שמורות</div>
        </div>
      </footer>

      {/* Winter Special Popup Modal */}
      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div 
            className="popup-modal" 
            ref={popupRef}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="popup-close" onClick={closePopup}>✕</button>
            
            {/* Image Slideshow */}
            <div className="popup-images">
              {winterImages.map((img, index) => (
                <div 
                  key={index} 
                  className={`popup-slide ${index === currentSlide ? 'active' : ''}`}
                >
                  <img src={img} alt={`Winter romance ${index + 1}`} />
                  <div className="popup-slide-overlay" />
                </div>
              ))}
              <div className="slide-indicators">
                {winterImages.map((_, index) => (
                  <div 
                    key={index} 
                    className={`slide-dot ${index === currentSlide ? 'active' : ''}`}
                  />
                ))}
              </div>
            </div>

            {/* Form Content */}
            <div className="popup-content">
              <div className="popup-badge">מבצע חורף</div>
              <h3 className="popup-headline">
                החורף הזה<br />יהיה <span>לוהט.</span>
              </h3>
              <p className="popup-subheadline">
                הטבה בלעדית להצעות בחודשי דצמבר-ינואר. 
                השאירו פרטים לקבלת החבילה המיוחדת.
              </p>
              
              <form className="popup-form" onSubmit={handlePopupSubmit}>
                <input 
                  type="text" 
                  className="popup-input" 
                  placeholder="השם שלך"
                  required
                />
                <input 
                  type="tel" 
                  className="popup-input" 
                  placeholder="מספר טלפון"
                  required
                />
                <button type="submit" className="popup-submit">
                  שריינו לי תאריך
                </button>
              </form>
              
              <p className="popup-disclaimer">
                * ההטבה בכפוף לזמינות. פרטיות מובטחת.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}