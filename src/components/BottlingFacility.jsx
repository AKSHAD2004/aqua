import React from 'react';
import { IMAGES } from '../data/waterData';

export const BottlingFacility = ({ onOpenVirtualTour }) => {
  return (
    <section id="where-to-find-us" className="w-full py-12 sm:py-16 lg:py-24 bg-white/40 backdrop-blur-sm relative border-b border-white/40">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 reveal">
          <span className="font-label-caps text-[11px] sm:text-[12px] text-[#0284c7] font-bold tracking-[0.18em] uppercase block mb-2">
            Our Modern Bottling Plant
          </span>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-bold tracking-tight text-gradient-luxury leading-tight font-outfit">
            Purity Crafted In A World-Class Facility
          </h2>
          <p className="text-[14.5px] sm:text-[16.5px] text-slate-700 mt-2 sm:mt-3 leading-relaxed font-normal">
            Aquasource Beverages operates an advanced manufacturing unit engineered for sterile integrity, automated blow-moulding, precision RO filtration, and strict zero-touch hygiene protocols.
          </p>
        </div>

        {/* Facility Image Showcase (Uncovered, Full Visibility) */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl bg-surface-container-low border border-outline-variant/30 group reveal">
          <img
            alt="Aquasource Beverages modern bottling facility architecture, stainless steel tanks, and Diamond AquaPure product line"
            className="w-full h-auto object-cover max-h-[360px] sm:max-h-[500px] lg:max-h-[640px] transition-transform duration-700 group-hover:scale-[1.02]"
            src={IMAGES.bottlingFacility}
          />
        </div>

        {/* Feature Cards Placed Below the Image (No Overlap) */}
        <div className="mt-6 sm:mt-8 bg-white/95 backdrop-blur-2xl p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-xl border border-white/80 reveal-card">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            <div className="flex items-start gap-3 sm:gap-4 p-2 sm:p-3 rounded-xl hover:bg-white/60 transition-colors">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-secondary-fixed/50 flex items-center justify-center text-primary flex-shrink-0 shadow-sm">
                <span className="material-symbols-outlined text-[20px] sm:text-[24px]">factory</span>
              </div>
              <div>
                <h4 className="text-[14px] sm:text-label-md font-bold text-primary font-outfit">
                  Cleanroom Air Filtration
                </h4>
                <p className="text-[12.5px] sm:text-body-sm text-on-surface-variant mt-0.5 sm:mt-1 leading-relaxed">
                  Class 10,000 positive air pressure preventing microscopic airborne contaminants during filling.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4 p-2 sm:p-3 rounded-xl hover:bg-white/60 transition-colors">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-secondary-fixed/50 flex items-center justify-center text-primary flex-shrink-0 shadow-sm">
                <span className="material-symbols-outlined text-[20px] sm:text-[24px]">precision_manufacturing</span>
              </div>
              <div>
                <h4 className="text-[14px] sm:text-label-md font-bold text-primary font-outfit">
                  Zero-Touch Automation
                </h4>
                <p className="text-[12.5px] sm:text-body-sm text-on-surface-variant mt-0.5 sm:mt-1 leading-relaxed">
                  Fully synchronized rinsing, filling, and capping carousel operating without human contact.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4 p-2 sm:p-3 rounded-xl hover:bg-white/60 transition-colors">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-secondary-fixed/50 flex items-center justify-center text-primary flex-shrink-0 shadow-sm">
                <span className="material-symbols-outlined text-[20px] sm:text-[24px]">biotech</span>
              </div>
              <div>
                <h4 className="text-[14px] sm:text-label-md font-bold text-primary font-outfit">
                  In-House Quality Lab
                </h4>
                <p className="text-[12.5px] sm:text-body-sm text-on-surface-variant mt-0.5 sm:mt-1 leading-relaxed">
                  Hourly analytical assessments for microbial counts, pH balance, and total dissolved solids.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
