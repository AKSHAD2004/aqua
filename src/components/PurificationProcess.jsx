import React from 'react';
import { PURIFICATION_STAGES } from '../data/waterData';

export const PurificationProcess = () => {
  return (
    <section id="purification" className="w-full py-12 sm:py-16 lg:py-24 bg-white/30 backdrop-blur-sm relative border-b border-white/40">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header with 99.98% Efficiency Pill */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6 reveal">
          <div>
            <span className="font-label-caps text-[11px] sm:text-[12px] text-secondary font-bold tracking-widest uppercase block mb-1 sm:mb-2">
              Scientific Engineering
            </span>
            <h2 className="text-[26px] sm:text-[34px] lg:text-headline-lg font-bold text-primary font-outfit">
              The 8-Stage AquaPure Purification Journey
            </h2>
          </div>
          <div className="text-left sm:text-right flex-shrink-0">
            <span className="inline-flex items-center gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-primary/10 text-primary text-[12.5px] sm:text-label-md font-bold border border-primary/20 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span>99.98% Filtration Efficiency</span>
            </span>
          </div>
        </div>

        {/* 8-Stage Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {PURIFICATION_STAGES.map((stage, idx) => (
            <div
              key={stage.step}
              style={{ transitionDelay: `${(idx % 4) * 75}ms` }}
              className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/90 backdrop-blur-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-white/80 flex flex-col gap-2.5 sm:gap-3 relative overflow-hidden reveal-card group hover:-translate-y-1"
            >
              <div className="flex items-center justify-between z-10">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl ${stage.badgeBg} flex items-center justify-center ${stage.badgeText} font-bold text-[16px] sm:text-headline-sm shadow-sm transition-transform duration-300 group-hover:scale-105`}>
                  {stage.step}
                </div>
                <span className="material-symbols-outlined text-[20px] sm:text-[24px] text-secondary opacity-75 transition-transform duration-300 group-hover:scale-110">
                  {stage.icon}
                </span>
              </div>

              <h3 className="text-[17px] sm:text-headline-sm font-bold text-primary z-10 mt-1 font-outfit">
                {stage.title}
              </h3>

              <p className="text-[13px] sm:text-body-sm text-on-surface-variant leading-relaxed z-10 flex-grow">
                {stage.desc}
              </p>

              <div className="mt-auto pt-2.5 sm:pt-3 flex items-center gap-1.5 text-secondary font-label-caps text-[10.5px] sm:text-label-caps font-bold border-t border-outline-variant/20 z-10">
                <span className="material-symbols-outlined text-[15px] sm:text-[16px]">{stage.icon}</span>
                <span>{stage.tag}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Live Filtration Quality Indicator bar */}
        <div className="mt-8 sm:mt-12 bg-white/90 backdrop-blur-xl p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/80 shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-4 reveal">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-secondary text-[24px] sm:text-[28px] flex-shrink-0">verified</span>
            <div>
              <h4 className="text-[14px] sm:text-label-md font-bold text-primary font-outfit">Continuous In-Line Monitoring</h4>
              <p className="text-[12.5px] sm:text-body-sm text-on-surface-variant">Dual sensor TDS &amp; conductivity probes check every liter before automated filling.</p>
            </div>
          </div>
          <div className="flex items-center gap-2 self-start md:self-auto flex-wrap">
            <span className="px-2.5 sm:px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] sm:text-[12px] font-bold">Standard: 80 - 120 PPM</span>
            <span className="px-2.5 sm:px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-[11px] sm:text-[12px] font-bold">pH: 7.2 - 7.6</span>
          </div>
        </div>

      </div>
    </section>
  );
};
