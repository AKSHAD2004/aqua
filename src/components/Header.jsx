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
        window.__lenis.scrollTo(element, { offset: -64, duration: 1.15 });
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
      {/* Crisp White, Compact Navbar Bar */}
      <div className={`h-14 md:h-16 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-[0_4px_25px_rgba(0,0,0,0.08)] border-b border-slate-200/80 py-1' 
          : 'bg-white/90 backdrop-blur-xl shadow-[0_2px_15px_rgba(0,0,0,0.05)] border-b border-slate-200/60'
      } px-3 sm:px-6 lg:px-12`}>
        <div className="w-full max-w-[1360px] mx-auto h-full flex items-center justify-between gap-3 sm:gap-4">
          
          {/* Brand Logo Section with Official Diamond AquaPure Logo */}
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
              className="flex items-center gap-2 group py-0.5"
            >
              <img 
                src="/logo.png" 
                alt="Diamond AquaPure" 
                className="h-8 sm:h-9 md:h-11 w-auto max-w-[130px] sm:max-w-[160px] md:max-w-none object-contain transition-transform duration-300 group-hover:scale-105" 
              />
            </a>
          </div>

          {/* Desktop Navigation Links - Black Text with Subtle Hover Pill */}
          <nav className="hidden lg:flex items-center gap-1.5 md:gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="px-3.5 py-1.5 rounded-full text-slate-800 hover:text-[#0056b3] hover:bg-sky-50/80 active:bg-sky-100 text-[13.5px] md:text-[14px] font-semibold tracking-wide transition-all font-outfit cursor-pointer flex items-center gap-1 group"
              >
                <span>
                  {item.label}
                </span>
              </button>
            ))}
          </nav>

          {/* Desktop Right CTA Pill */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => scrollTo('inquiry')}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-[#003f87] to-[#00677f] hover:from-[#002f67] hover:to-[#00576f] text-white text-[13px] font-bold tracking-wider uppercase font-outfit transition-all shadow-[0_4px_14px_rgba(0,63,135,0.25)] hover:shadow-[0_6px_20px_rgba(0,63,135,0.35)] cursor-pointer flex items-center gap-1.5 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="material-symbols-outlined text-[16px] text-[#38bdf8]">shopping_bag</span>
              <span>Order Supply</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 rounded-lg bg-slate-100 hover:bg-slate-200 text-black flex items-center justify-center transition-colors border border-slate-200 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              <span className="material-symbols-outlined text-[22px]">
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
