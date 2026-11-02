import React from 'react';
import { CERTIFICATIONS } from '../data/waterData';

export const Certifications = () => {
  return (
    <section id="certifications" className="w-full py-12 sm:py-16 bg-white/40 backdrop-blur-sm relative border-b border-white/40">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="bg-white/75 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 border border-white/70 shadow-lg reveal">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            {/* Left Description */}
            <div className="lg:col-span-4">
              <span className="font-label-caps text-[11px] sm:text-[12px] text-secondary font-bold tracking-widest uppercase block mb-1">
                Government &amp; Global Accreditations
              </span>
              <h3 className="text-[22px] sm:text-[28px] font-bold text-primary font-outfit">
                Certified for Highest Food Safety
              </h3>
              <p className="text-[13.5px] sm:text-body-md text-on-surface-variant mt-2 leading-relaxed">
                Every Diamond AquaPure bottle is manufactured in compliance with stringent national and international drinking water mandates.
              </p>
            </div>

            {/* Accreditations Grid */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.code}
                  className="bg-white/90 backdrop-blur-md p-3.5 sm:p-5 rounded-xl sm:rounded-2xl shadow-sm text-center flex flex-col items-center justify-center border border-white/80"
                >
                  <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-secondary-fixed/30 flex items-center justify-center text-primary mb-2.5 sm:mb-3">
                    <span className="material-symbols-outlined text-[24px] sm:text-[30px] text-primary">
                      {cert.icon}
                    </span>
                  </div>
                  <span className="text-[13px] sm:text-label-md font-bold text-on-surface font-outfit">
                    {cert.code}
                  </span>
                  <span className="text-[11px] sm:text-body-sm text-on-surface-variant mt-0.5 leading-snug">
                    {cert.title}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
