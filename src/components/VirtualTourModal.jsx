import React, { useState } from 'react';
import { IMAGES } from '../data/waterData';

export const VirtualTourModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('filling');

  if (!isOpen) return null;

  const tourStops = {
    filling: {
      title: 'Class 10,000 Cleanroom Bottling Carousel',
      desc: 'Our high-speed rotary monobloc system rinses, fills, and caps bottles under HEPA-filtered laminar positive pressure air to prevent airborne particulates.',
      highlights: ['Positive Air Pressure (Overpressure)', 'Contactless Liquid Nozzle Dispensing', 'Sterile Nitrogen Purge']
    },
    purification: {
      title: 'Multi-Stage Reverse Osmosis & UV Matrix',
      desc: 'Industrial spiral-wound polyamide membranes filter impurities at 0.0001 microns, followed by inline high-output 254nm UV germicidal chambers.',
      highlights: ['99.98% Total Filtration Rating', 'Zero Chemical Disinfection Residual', 'Trace Ionic Mineral Infusion']
    },
    lab: {
      title: 'Certified Microbiological Quality Lab',
      desc: 'Every 60 minutes, production samples undergo rigorous laboratory incubation testing for aerobic bacterial count, coliform bacteria, and sensory clarity.',
      highlights: ['NABL Accredited Testing Protocols', 'Hourly Spectrophotometer Clarity Logs', 'Traceability QR Batch Coded']
    }
  };

  const currentStop = tourStops[activeTab];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-surface-container-lowest rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-outline-variant/40 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 bg-surface-container-low flex items-center justify-between border-b border-outline-variant/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-secondary-fixed flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[24px]">videocam</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-primary">
                Virtual Plant Tour | Aquasource Facility
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                State-of-the-Art Automated Packaging &amp; Purification Facility
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex flex-col gap-6">
          {/* Main Visual Screen */}
          <div className="relative rounded-2xl overflow-hidden aspect-video bg-black shadow-inner">
            <img 
              src={IMAGES.bottlingFacility} 
              alt="Facility Tour View" 
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
            
            <div className="absolute top-4 left-4 bg-primary/80 backdrop-blur-md px-3 py-1 rounded-full text-white text-[12px] font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span>LIVE 360° HYDRAULIC FEED</span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[11px] font-bold tracking-widest text-secondary-fixed uppercase">
                Facility Zone: {activeTab.toUpperCase()}
              </span>
              <h4 className="text-[20px] font-bold text-white mt-0.5">{currentStop.title}</h4>
            </div>
          </div>

          {/* Interactive Navigation Pills */}
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => setActiveTab('filling')}
              className={`p-3 rounded-xl text-center text-body-sm font-bold transition-all cursor-pointer ${
                activeTab === 'filling'
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-surface-container-low text-on-surface hover:bg-surface-container'
              }`}
            >
              1. Bottling Cleanroom
            </button>
            <button
              onClick={() => setActiveTab('purification')}
              className={`p-3 rounded-xl text-center text-body-sm font-bold transition-all cursor-pointer ${
                activeTab === 'purification'
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-surface-container-low text-on-surface hover:bg-surface-container'
              }`}
            >
              2. RO &amp; UV Matrix
            </button>
            <button
              onClick={() => setActiveTab('lab')}
              className={`p-3 rounded-xl text-center text-body-sm font-bold transition-all cursor-pointer ${
                activeTab === 'lab'
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-surface-container-low text-on-surface hover:bg-surface-container'
              }`}
            >
              3. Quality Testing Lab
            </button>
          </div>

          {/* Zone Details */}
          <div className="bg-surface-container-low/50 p-5 rounded-2xl border border-outline-variant/30 flex flex-col gap-3">
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {currentStop.desc}
            </p>
            <div className="flex flex-wrap gap-2 pt-2 border-t border-outline-variant/20">
              {currentStop.highlights.map((h, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-full text-secondary text-[12px] font-bold shadow-sm">
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                  {h}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-surface-container-low flex items-center justify-between border-t border-outline-variant/30">
          <span className="text-body-sm text-on-surface-variant">
            ISO 22000:2018 Certified Facility
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-primary hover:bg-primary-container text-white font-label-md text-label-md transition-all cursor-pointer"
          >
            Close Tour
          </button>
        </div>
      </div>
    </div>
  );
};
