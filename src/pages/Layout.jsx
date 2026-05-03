import React, { useEffect } from 'react';
import Nav from '@/components/site/Nav';
import Footer from '@/components/site/Footer';
import PageTransition from '@/components/site/PageTransition';

export default function Layout({ children }) {
  useEffect(() => {
    document.body.classList.add('brand-mode');
    document.documentElement.setAttribute('lang', 'he');
    document.documentElement.setAttribute('dir', 'rtl');
    return () => document.body.classList.remove('brand-mode');
  }, []);

  return (
    <div dir="rtl" className="forever-shell">
      <Nav />
      <main>
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </div>
  );
}
