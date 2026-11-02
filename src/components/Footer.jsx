import React from 'react';

export const Footer = ({ onSelectCollection, onScrollTo }) => {
  const handleNav = (id) => {
    if (onScrollTo) {
      onScrollTo(id);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer 
      className="w-full relative overflow-hidden pt-12 sm:pt-space-xl pb-6 sm:pb-space-lg text-white border-t border-white/15 shadow-[0_-12px_40px_rgba(3,21,45,0.45)] bg-cover bg-center bg-no-repeat z-10"
      style={{ backgroundImage: `url('/footer-water-bg.jpg')` }}
    >
      {/* High-Luminance Atmospheric Overlay to accentuate water droplets with deep luxury contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#03152d]/90 via-[#051c3d]/85 to-[#020d1c]/94 backdrop-blur-[1px] pointer-events-none" />

      {/* Aquatic Glowing Ambient Orbs */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#00b4db]/15 blur-3xl pointer-events-none" />
      <div className="absolute top-10 left-1/4 w-80 h-80 rounded-full bg-[#0080ff]/15 blur-3xl pointer-events-none" />

      {/* Content Container */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-gutter mb-10 sm:mb-space-xl">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col gap-3.5 sm:gap-space-md">
            <div className="flex items-center gap-space-sm">
              <img 
                src="/logo.png" 
                alt="Diamond AquaPure" 
                className="h-11 sm:h-12 md:h-14 w-auto object-contain filter drop-shadow-[0_0_2px_rgba(255,255,255,0.85)] drop-shadow-[0_4px_16px_rgba(56,189,248,0.4)]" 
              />
            </div>

            <p className="text-[13.5px] sm:text-body-md text-slate-200/90 leading-relaxed max-w-sm">
              Bottle water, pure quality that you can trust. Pure. Safe. Healthy Everyday. Engineered with automated touchless packaging and multi-stage alpine reverse osmosis.
            </p>

            {/* Follow our journey Social Buttons */}
            <div className="pt-2 sm:pt-3 flex flex-col gap-2.5 sm:gap-3">
              <span className="text-[17px] sm:text-[19px] font-semibold text-white tracking-tight font-outfit">
                Follow our journey
              </span>
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#1877F2] text-white flex items-center justify-center shadow-[0_4px_14px_rgba(24,119,242,0.4)] hover:scale-110 hover:shadow-[0_6px_20px_rgba(24,119,242,0.6)] transition-all cursor-pointer"
                  aria-label="Follow our journey on Facebook"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-white" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shadow-[0_4px_14px_rgba(220,39,67,0.4)] hover:scale-110 hover:shadow-[0_6px_20px_rgba(220,39,67,0.6)] transition-all cursor-pointer"
                  aria-label="Follow our journey on Instagram"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-white" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* X */}
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black text-white flex items-center justify-center border border-white/25 shadow-[0_4px_14px_rgba(0,0,0,0.5)] hover:scale-110 hover:border-white/50 transition-all cursor-pointer"
                  aria-label="Follow our journey on X"
                >
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FF0000] text-white flex items-center justify-center shadow-[0_4px_14px_rgba(255,0,0,0.4)] hover:scale-110 transition-all cursor-pointer"
                  aria-label="Follow our journey on YouTube"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-white" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919975928716"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:scale-110 transition-all cursor-pointer"
                  aria-label="Connect with us on WhatsApp"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-white" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.075-1.745-.371-1.397-.562-2.315-1.975-2.385-2.068-.07-.093-.568-.755-.568-1.44 0-.685.358-1.02.485-1.161.127-.14.278-.175.371-.175.093 0 .185.001.266.005.087.004.203-.033.318.243.116.277.394.96.429 1.03.035.07.058.151.011.243-.046.092-.07.15-.139.231-.07.082-.147.184-.21.247-.07.07-.143.146-.061.286.082.14.364.6.782.972.539.479.993.627 1.133.697.14.07.221.059.303-.036.082-.095.349-.406.442-.545.093-.139.186-.116.313-.07.128.046.812.383.951.453.14.07.232.104.267.162.035.058.035.337-.109.742zM12.031 0C5.398 0 .022 5.376.022 12.01c0 2.12.553 4.188 1.602 6.009L0 24l6.168-1.618A11.96 11.96 0 0 0 12.031 24C18.665 24 24.04 18.625 24.04 11.99 24.04 5.356 18.665 0 12.031 0zm0 21.84c-1.802 0-3.568-.485-5.111-1.4l-.366-.217-3.799.996 1.014-3.702-.239-.38A9.845 9.845 0 0 1 2.185 12c0-5.429 4.417-9.846 9.846-9.846 5.43 0 9.847 4.417 9.847 9.846 0 5.43-4.417 9.84-9.847 9.84z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Collections Column */}
          <div className="lg:col-span-2 flex flex-col gap-2.5 sm:gap-space-sm">
            <span className="text-[13px] sm:text-label-md text-[#38bdf8] font-bold uppercase tracking-wider font-outfit">
              Collections
            </span>
            <ul className="flex flex-col gap-2 sm:gap-2.5 text-[13px] sm:text-body-sm text-slate-300">
              <li 
                onClick={() => handleNav('collections')} 
                className="hover:text-white hover:translate-x-1 transition-all cursor-pointer flex items-center gap-1.5 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>250 ml Pocket Pack</span>
              </li>
              <li 
                onClick={() => handleNav('collections')} 
                className="hover:text-white hover:translate-x-1 transition-all cursor-pointer flex items-center gap-1.5 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>500 ml Regular Pack</span>
              </li>
              <li 
                onClick={() => handleNav('collections')} 
                className="hover:text-white hover:translate-x-1 transition-all cursor-pointer flex items-center gap-1.5 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>1 Litre Premium Pack</span>
              </li>
              <li 
                onClick={() => handleNav('collections')} 
                className="hover:text-white hover:translate-x-1 transition-all cursor-pointer flex items-center gap-1.5 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>Institutional Supply (20L)</span>
              </li>
              <li 
                onClick={() => handleNav('inquiry')} 
                className="hover:text-white hover:translate-x-1 transition-all cursor-pointer flex items-center gap-1.5 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>Custom Event Labeling</span>
              </li>
            </ul>
          </div>

          {/* Company & Hygiene Column */}
          <div className="lg:col-span-3 flex flex-col gap-2.5 sm:gap-space-sm">
            <span className="text-[13px] sm:text-label-md text-[#38bdf8] font-bold uppercase tracking-wider font-outfit">
              Company &amp; Hygiene
            </span>
            <ul className="flex flex-col gap-2 sm:gap-2.5 text-[13px] sm:text-body-sm text-slate-300">
              <li 
                onClick={() => handleNav('brand-philosophy')} 
                className="hover:text-white hover:translate-x-1 transition-all cursor-pointer flex items-center gap-1.5 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>About Aquasource Philosophy</span>
              </li>
              <li 
                onClick={() => handleNav('facility')} 
                className="hover:text-white hover:translate-x-1 transition-all cursor-pointer flex items-center gap-1.5 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>Modern Bottling Plant</span>
              </li>
              <li 
                onClick={() => handleNav('facility')} 
                className="hover:text-white hover:translate-x-1 transition-all cursor-pointer flex items-center gap-1.5 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>Zero-Touch Hygiene Standards</span>
              </li>
              <li 
                onClick={() => handleNav('facility')} 
                className="hover:text-white hover:translate-x-1 transition-all cursor-pointer flex items-center gap-1.5 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>Sustainability &amp; Virgin PET</span>
              </li>
              <li 
                onClick={() => handleNav('facility')} 
                className="hover:text-white hover:translate-x-1 transition-all cursor-pointer flex items-center gap-1.5 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] opacity-0 group-hover:opacity-100 transition-opacity" />
                <span>Facility &amp; Cleanroom Tech</span>
              </li>
            </ul>
          </div>

          {/* Plant & Distribution Column */}
          <div className="lg:col-span-3 flex flex-col gap-2.5 sm:gap-space-sm">
            <span className="text-[13px] sm:text-label-md text-[#38bdf8] font-bold uppercase tracking-wider font-outfit">
              Plant &amp; Distribution
            </span>

            {/* Plant & Office Address Card in Glassmorphism */}
            <div className="flex items-start gap-2.5 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 shadow-[0_4px_20px_rgba(0,0,0,0.25)] text-slate-200 transition-all">
              <span className="material-symbols-outlined text-[18px] sm:text-[20px] text-[#38bdf8] flex-shrink-0 mt-0.5">location_on</span>
              <div className="text-[12px] sm:text-[12.5px] leading-relaxed">
                <span className="font-bold text-white block text-[12.5px] sm:text-[13px] mb-0.5 font-outfit">Factory &amp; Registered Address:</span>
                <p className="text-slate-300">
                  Gt no: 1954/9, Bhokre Coloney,<br />
                  Subhashnager, Atpost: Malgaon,<br />
                  Tal: Miraj, Dist: Sangli.<br />
                  Pin: 416407
                </p>
              </div>
            </div>

            {/* Contact Phone Numbers */}
            <div className="flex flex-col gap-1 sm:gap-1.5 pt-1 text-[12.5px] sm:text-body-sm">
              <span className="font-bold text-white text-[12.5px] sm:text-[13px] flex items-center gap-1.5 font-outfit">
                <span className="material-symbols-outlined text-[16px] sm:text-[17px] text-[#38bdf8]">call</span>
                <span>Phone Numbers:</span>
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-1 text-[12px] sm:text-[13px] pl-4 sm:pl-5 text-slate-300">
                <a href="tel:+919975928716" className="hover:text-[#38bdf8] transition-colors flex items-center gap-1 group">
                  <span className="text-[#38bdf8] group-hover:translate-x-0.5 transition-transform">›</span>
                  <span>+91 99759 28716</span>
                </a>
                <a href="tel:+919766818623" className="hover:text-[#38bdf8] transition-colors flex items-center gap-1 group">
                  <span className="text-[#38bdf8] group-hover:translate-x-0.5 transition-transform">›</span>
                  <span>+91 97668 18623</span>
                </a>
                <a href="tel:+918600710179" className="hover:text-[#38bdf8] transition-colors flex items-center gap-1 group">
                  <span className="text-[#38bdf8] group-hover:translate-x-0.5 transition-transform">›</span>
                  <span>+91 86007 10179</span>
                </a>
                <a href="tel:+917743949512" className="hover:text-[#38bdf8] transition-colors flex items-center gap-1 group">
                  <span className="text-[#38bdf8] group-hover:translate-x-0.5 transition-transform">›</span>
                  <span>+91 77439 49512</span>
                </a>
                <a href="tel:+919970801452" className="hover:text-[#38bdf8] transition-colors flex items-center gap-1 group">
                  <span className="text-[#38bdf8] group-hover:translate-x-0.5 transition-transform">›</span>
                  <span>+91 99708 01452</span>
                </a>
              </div>
            </div>

            {/* Email Contact */}
            <div className="pt-0.5">
              <a 
                href="mailto:info.diamondaquapure@gmail.com" 
                className="flex items-center gap-1.5 sm:gap-2 hover:text-[#38bdf8] transition-colors text-[12px] sm:text-[13px] text-slate-300 group"
              >
                <span className="material-symbols-outlined text-[16px] sm:text-[17px] text-[#38bdf8]">mail</span>
                <span className="font-medium break-all group-hover:text-white transition-colors">info.diamondaquapure@gmail.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-4 sm:pt-space-md border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11.5px] sm:text-body-sm text-slate-400 text-center sm:text-left">
          <div>
            <span>© {new Date().getFullYear()} Aquasource Beverages Private Limited. All rights reserved.</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-space-lg text-[11.5px] sm:text-[13px]">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); alert("Aquasource Privacy Policy: Customer data is processed solely for logistics fulfillment and regulatory compliance."); }} className="hover:text-[#38bdf8] transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" onClick={(e) => { e.preventDefault(); alert("Aquasource Terms: Water supplies adhere to IS:14543 standards and food regulatory guidelines."); }} className="hover:text-[#38bdf8] transition-colors">
              Terms &amp; Conditions
            </a>
            <a href="#compliance" onClick={(e) => { e.preventDefault(); alert("Compliance: All batches tested and certified through accredited in-house and NABL laboratories."); }} className="hover:text-[#38bdf8] transition-colors">
              Quality Compliance
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
