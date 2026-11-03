import React, { useState, useEffect } from 'react';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      if (window.__lenis) {
        window.__lenis.scrollTo(element, { offset: -74, duration: 1.15 });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { label: 'About Us', id: 'about-us', icon: 'info', desc: 'Our Pure Journey & Purity Heritage' },
    { label: 'Our Products', id: 'our-products', icon: 'water_drop', desc: '250ml, 500ml, 1L & 20L Formats' },
    { label: 'Our Services', id: 'our-services', icon: 'local_shipping', desc: 'Wholesale, Bulk & Event Hydration' },
    { label: 'Where to Find Us', id: 'where-to-find-us', icon: 'location_on', desc: 'Modern Plant & Distribution Hubs' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Crisp White, Refined Luxury Navbar */}
      <div className={`transition-all duration-300 ${
        scrolled 
          ? 'h-16 md:h-[72px] bg-white/98 backdrop-blur-xl shadow-[0_4px_25px_rgba(0,0,0,0.07)] border-b border-slate-200/80' 
          : 'h-[72px] md:h-20 bg-white/95 backdrop-blur-xl shadow-[0_2px_15px_rgba(0,0,0,0.04)] border-b border-slate-200/60'
      } px-4 sm:px-6 lg:px-12`}>
        <div className="w-full max-w-[1360px] mx-auto h-full flex items-center justify-between gap-3 sm:gap-4">
          
          {/* Dual Brand Logo Section: Aquasource in front + Diamond AquaPure beside */}
          <div className="flex items-center">
            <a 
              href="#" 
              onClick={(e) => { 
                e.preventDefault(); 
                if (window.__lenis) { 
                  window.__lenis.scrollTo(0, { duration: 1.15 }); 
                } else { 
                  window.scrollTo({ top: 0, behavior: 'smooth' }); 
                } 
              }} 
              className="flex items-center gap-1.5 sm:gap-2.5 md:gap-3 group py-1"
              aria-label="Aquasource Beverages & Diamond AquaPure"
            >
              {/* Front Logo: Aquasource Beverages */}
              <img 
                src="/aquasource-logo.png" 
                alt="Aquasource Beverages" 
                className={`${
                  scrolled 
                    ? 'h-7 sm:h-8 md:h-9 lg:h-10' 
                    : 'h-8 sm:h-9 md:h-11 lg:h-12'
                } w-auto object-contain transition-all duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.05)]`} 
              />

              {/* Elegant Vertical Divider */}
              <span className={`${
                scrolled ? 'h-4 sm:h-5 md:h-6' : 'h-5 sm:h-6 md:h-7'
              } w-[1px] bg-slate-300/80 transition-all duration-300 flex-shrink-0`} />

              {/* Beside Logo: Diamond AquaPure */}
              <img 
                src="/diamond-aquapure-logo.png" 
                alt="Diamond AquaPure" 
                className={`${
                  scrolled 
                    ? 'h-6 sm:h-7 md:h-8 lg:h-9' 
                    : 'h-7 sm:h-8 md:h-10 lg:h-11'
                } w-auto object-contain transition-all duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.05)]`} 
              />
            </a>
          </div>

          {/* Desktop Navigation Links - Sunrich Aqua Clean Styling */}
          <nav className="hidden lg:flex items-center gap-1.5 md:gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="px-4 py-2 rounded-full text-slate-700 hover:text-[#0056b3] hover:bg-sky-50/80 active:bg-sky-100 text-[13.5px] font-medium tracking-[0.03em] transition-all cursor-pointer flex items-center gap-1.5 group"
              >
                <span>
                  {item.label}
                </span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-xl bg-slate-50 hover:bg-slate-100 active:bg-slate-200 text-slate-800 flex items-center justify-center transition-all border border-slate-200/80 focus:outline-none focus:ring-2 focus:ring-[#0056b3]/25 cursor-pointer shadow-sm"
              aria-label="Toggle navigation menu"
            >
              <span className="material-symbols-outlined text-[24px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>

        </div>
      </div>

      {/* Clean White Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-2xl border-b border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.12)] px-4 py-3 sm:py-4 max-h-[calc(100vh-3.5rem)] overflow-y-auto animate-fadeIn text-slate-900">
          <div className="flex flex-col gap-2">
            {/* Mobile Drawer Dual Brand Header */}
            <div className="flex items-center gap-2 pb-2.5 mb-1 border-b border-slate-100 px-1">
              <img src="/aquasource-logo.png" alt="Aquasource" className="h-7 w-auto object-contain" />
              <span className="h-4 w-px bg-slate-300/80" />
              <img src="/diamond-aquapure-logo.png" alt="Diamond AquaPure" className="h-6 w-auto object-contain" />
            </div>

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="w-full text-left p-3 rounded-xl bg-slate-50 hover:bg-slate-100 active:bg-blue-50 transition-all border border-slate-200/80 flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 group-hover:bg-[#0056b3] transition-colors flex items-center justify-center text-[#0056b3] group-hover:text-white">
                    <span className="material-symbols-outlined text-[17px]">{item.icon}</span>
                  </div>
                  <div>
                    <span className="text-[14px] font-bold text-black block font-outfit group-hover:text-[#0056b3] transition-colors">
                      {item.label}
                    </span>
                    <span className="text-[11px] text-slate-500 block">
                      {item.desc}
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-[16px] text-slate-400 group-hover:text-[#0056b3] group-hover:translate-x-0.5 transition-all">
                  arrow_forward_ios
                </span>
              </button>
            ))}

            {/* Quick Contact Line */}
            <div className="pt-2 mt-1 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-600 px-2">
              <a href="tel:+919975928716" className="flex items-center gap-1.5 text-black hover:text-[#0056b3] font-medium">
                <span className="material-symbols-outlined text-[14px] text-[#0056b3]">call</span>
                <span>+91 99759 28716</span>
              </a>
              <a href="mailto:info.diamondaquapure@gmail.com" className="flex items-center gap-1.5 text-[#0056b3] hover:text-black font-semibold">
                <span className="material-symbols-outlined text-[14px]">mail</span>
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
