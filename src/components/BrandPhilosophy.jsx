import React from 'react';
import { IMAGES } from '../data/waterData';

export const BrandPhilosophy = ({ onLearnPurificationClick }) => {
  return (
    <section id="about-us" className="w-full py-12 sm:py-16 lg:py-24 bg-white/40 backdrop-blur-sm relative border-b border-white/40">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Tag & Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mb-10 sm:mb-14 items-start reveal">
          <div className="lg:col-span-5">
            <span className="font-label-caps text-[11px] sm:text-[12px] text-secondary font-bold tracking-widest uppercase block mb-2 sm:mb-3">
              Bottled Water At Its Most Pure. No Compromises.
            </span>
            <h2 className="text-[26px] sm:text-[34px] lg:text-headline-lg font-bold tracking-tight text-primary leading-tight font-outfit">
              The Diamond Standard <br className="hidden sm:inline" />of Natural Hydration.
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-3 sm:gap-4">
            <p className="text-[14px] sm:text-[16px] lg:text-body-lg text-on-surface-variant leading-relaxed">
              Aquasource Beverages crafts Diamond AquaPure with an uncompromising philosophy: water must remain as clear and energizing as its origin. We eliminate impurities while safeguarding revitalizing electrolytes, producing table-ready clarity that uplifts wellness, hospitality, and daily performance.
            </p>
            <div className="flex items-center gap-6 pt-1 sm:pt-2">
              <button
                onClick={onLearnPurificationClick || (() => {
                  document.getElementById('purification')?.scrollIntoView({ behavior: 'smooth' });
                })}
                className="inline-flex items-center gap-2 font-label-md text-[13.5px] sm:text-label-md text-primary font-bold hover:text-primary-container transition-colors group cursor-pointer"
              >
                <span>Learn our purification science</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1.5 transition-transform">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Dual Visual Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Card 1: Crisp Purity & Splash */}
          <div className="group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white/85 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col border border-white/70 reveal">
            <div className="h-60 sm:h-72 md:h-80 w-full overflow-hidden relative">
              <img
                alt="Close-up of a chilled crystal glass bottle of Diamond AquaPure water surrounded by water splashes"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src={IMAGES.crystalSplash}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/30 to-transparent"></div>
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-on-primary">
                <span className="font-label-caps text-[10.5px] sm:text-[11px] text-secondary-fixed font-bold uppercase tracking-wider block mb-1">
                  Purity Verified
                </span>
                <h3 className="text-[20px] sm:text-headline-md font-bold text-on-primary font-outfit">
                  Crystal Clear Equilibrium
                </h3>
              </div>
            </div>

            <div className="p-5 sm:p-6 lg:p-8 flex flex-col gap-3">
              <p className="text-[13.5px] sm:text-body-md text-on-surface-variant leading-relaxed">
                Every batch maintains optimal TDS (Total Dissolved Solids) levels between 80 to 120 ppm, ensuring crisp palate lightness without stripping valuable ionic minerals.
              </p>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-primary font-label-md text-[12px] sm:text-[13px] pt-2 border-t border-outline-variant/20">
                <span className="inline-flex items-center gap-1.5 bg-secondary-fixed/30 px-2.5 sm:px-3 py-1 rounded-full text-secondary font-medium">
                  <span className="material-symbols-outlined text-[16px] sm:text-[18px]">check_circle</span> Calcium (Ca²⁺)
                </span>
                <span className="inline-flex items-center gap-1.5 bg-secondary-fixed/30 px-2.5 sm:px-3 py-1 rounded-full text-secondary font-medium">
                  <span className="material-symbols-outlined text-[16px] sm:text-[18px]">check_circle</span> Magnesium (Mg²⁺)
                </span>
                <span className="inline-flex items-center gap-1.5 bg-secondary-fixed/30 px-2.5 sm:px-3 py-1 rounded-full text-secondary font-medium">
                  <span className="material-symbols-outlined text-[16px] sm:text-[18px]">check_circle</span> Potassium (K⁺)
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Modern Fresh Mountain Stream / Botanical Clean */}
          <div className="group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white/85 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col border border-white/70 reveal">
            <div className="h-60 sm:h-72 md:h-80 w-full overflow-hidden relative">
              <img
                alt="Chilled water bottle resting on fresh snow with pink Himalayan rock salt crystals and cucumber slices"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src={IMAGES.alpineSnow}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/30 to-transparent"></div>
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-on-primary">
                <span className="font-label-caps text-[10.5px] sm:text-[11px] text-secondary-fixed font-bold uppercase tracking-wider block mb-1">
                  Untouched Hygiene
                </span>
                <h3 className="text-[20px] sm:text-headline-md font-bold text-on-primary font-outfit">
                  Alpine Freshness &amp; Vitality
                </h3>
              </div>
            </div>

            <div className="p-5 sm:p-6 lg:p-8 flex flex-col gap-3">
              <p className="text-[13.5px] sm:text-body-md text-on-surface-variant leading-relaxed">
                From our automated cleanrooms to sealed tamper-evident containers, experience mountain-spring purity untainted by environmental pollutants or manual touch.
              </p>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-primary font-label-md text-[12px] sm:text-[13px] pt-2 border-t border-outline-variant/20">
                <span className="inline-flex items-center gap-1.5 bg-secondary-fixed/30 px-2.5 sm:px-3 py-1 rounded-full text-secondary font-medium">
                  <span className="material-symbols-outlined text-[16px] sm:text-[18px]">verified</span> Zero Pathogens
                </span>
                <span className="inline-flex items-center gap-1.5 bg-secondary-fixed/30 px-2.5 sm:px-3 py-1 rounded-full text-secondary font-medium">
                  <span className="material-symbols-outlined text-[16px] sm:text-[18px]">verified</span> 100% Food-Grade PET
                </span>
                <span className="inline-flex items-center gap-1.5 bg-secondary-fixed/30 px-2.5 sm:px-3 py-1 rounded-full text-secondary font-medium">
                  <span className="material-symbols-outlined text-[16px] sm:text-[18px]">verified</span> BPA &amp; Phthalate Free
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
