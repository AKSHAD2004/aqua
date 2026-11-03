import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BrandPhilosophy } from './components/BrandPhilosophy';
import { CollectionsShowcase } from './components/CollectionsShowcase';
import { BottlingFacility } from './components/BottlingFacility';
import { InquirySection } from './components/InquirySection';
import { Footer } from './components/Footer';
import { VirtualTourModal } from './components/VirtualTourModal';
import { SpecSheetModal } from './components/SpecSheetModal';
import { Toast } from './components/Toast';

export function App() {
  const [virtualTourOpen, setVirtualTourOpen] = useState(false);
  const [specSheetOpen, setSpecSheetOpen] = useState(false);
  const [prefillOrder, setPrefillOrder] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  // 60fps / 120fps Buttery Smooth Scroll Engine & Observer
  useEffect(() => {
    // Initialize Lenis smooth scroller
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential deceleration
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.4,
      infinite: false,
    });

    window.__lenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // 60fps / 120fps Buttery Smooth Scroll Engine & Observer
    let timerId;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Permanent one-time animation
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -20px 0px',
      }
    );

    const elements = document.querySelectorAll('.reveal, .reveal-scale, .reveal-fade, .reveal-card');
    elements.forEach((el) => observer.observe(el));

    // Instant mobile check: Reveal any elements already in or near viewport
    const checkInitialVisibility = () => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 50 && rect.bottom > -50) {
          el.classList.add('is-visible');
          observer.unobserve(el);
        }
      });
    };
    checkInitialVisibility();
    timerId = setTimeout(checkInitialVisibility, 200);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timerId);
      lenis.destroy();
      window.__lenis = null;
      observer.disconnect();
    };
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -76, duration: 1.15 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleRequestCaseOrder = (item) => {
    setPrefillOrder(item);
    scrollTo('inquiry');
    setToastMessage(`Selected ${item.title} (${item.size}). Complete the form below for case quotes.`);
  };

  return (
    <div className="min-h-screen flex flex-col font-body-md antialiased selection:bg-secondary-container selection:text-primary relative text-on-surface">
      {/* Full-Page Sweet Liquid Background Layer - GPU accelerated without bg-fixed repainting */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none gpu-accelerated"
        style={{ backgroundImage: `url('/water-bg.jpg')` }}
      >
        {/* Soft frosted ambient wash for pristine legibility and luxury liquid glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/80 backdrop-blur-[1px]" />
        
        {/* Ambient aquatic light orbs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-cyan-300/25 blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 -right-32 w-[34rem] h-[34rem] rounded-full bg-blue-300/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-10 w-96 h-96 rounded-full bg-sky-200/30 blur-3xl pointer-events-none" />
      </div>

      {/* Header */}
      <Header />

      {/* Main Content Sections with translucent glass aesthetics */}
      <main className="w-full pt-[72px] md:pt-20 flex-grow relative z-10">
        <Hero />

        <BrandPhilosophy
          onExploreFacility={() => scrollTo('where-to-find-us')}
        />

        <CollectionsShowcase
          onRequestCaseOrder={handleRequestCaseOrder}
          onOpenSpecSheet={() => setSpecSheetOpen(true)}
        />

        <BottlingFacility
          onOpenVirtualTour={() => setVirtualTourOpen(true)}
        />

        <InquirySection
          prefillOrder={prefillOrder}
          onShowToast={(msg) => setToastMessage(msg)}
        />
      </main>

      {/* Footer */}
      <Footer onScrollTo={scrollTo} />

      {/* Modals & Overlays */}
      <VirtualTourModal
        isOpen={virtualTourOpen}
        onClose={() => setVirtualTourOpen(false)}
      />

      <SpecSheetModal
        isOpen={specSheetOpen}
        onClose={() => setSpecSheetOpen(false)}
      />

      {/* Toast feedback */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage('')}
      />
    </div>
  );
}

export default App;
