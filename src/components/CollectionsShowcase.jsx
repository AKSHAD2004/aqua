import React, { useState } from 'react';
import { COLLECTION_CATEGORIES, IMAGES } from '../data/waterData';

export const CollectionsShowcase = ({ onRequestCaseOrder, onOpenSpecSheet }) => {
  const [selectedCategory, setSelectedCategory] = useState('regular');
  const activeCategory = COLLECTION_CATEGORIES[selectedCategory];
  const [selectedSizeId, setSelectedSizeId] = useState(activeCategory.defaultSize);

  const handleCategoryChange = (catKey) => {
    setSelectedCategory(catKey);
    const cat = COLLECTION_CATEGORIES[catKey];
    setSelectedSizeId(cat.defaultSize);
  };

  const activeSize = activeCategory.sizes.find(s => s.id === selectedSizeId) || activeCategory.sizes[0];

  const handleOrderClick = () => {
    if (onRequestCaseOrder) {
      onRequestCaseOrder({
        category: activeCategory.name,
        size: activeSize.label,
        title: activeSize.title,
        caseCount: activeSize.caseCount
      });
    } else {
      document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="our-products" className="w-full py-12 sm:py-16 lg:py-24 bg-white/30 backdrop-blur-sm relative border-b border-white/40">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Title */}
        <div className="mb-8 sm:mb-12 reveal">
          <span className="font-label-caps text-[11px] sm:text-[12px] text-secondary font-bold tracking-widest uppercase block mb-2">
            Our Collections
          </span>
          <h2 className="text-[26px] sm:text-[34px] lg:text-headline-lg font-bold text-primary font-outfit">
            Ergonomic Bottles Designed For Every Moment
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Side Navigation / Segments */}
          <div className="lg:col-span-4 flex flex-col gap-2.5 sm:gap-3 reveal">
            {Object.keys(COLLECTION_CATEGORIES).map((key) => {
              const cat = COLLECTION_CATEGORIES[key];
              const isSelected = selectedCategory === key;

              return (
                <button
                  key={key}
                  onClick={() => handleCategoryChange(key)}
                  className={`text-left p-3.5 sm:p-5 rounded-xl sm:rounded-2xl transition-all duration-200 flex items-center justify-between group cursor-pointer border ${
                    isSelected
                      ? 'bg-white/95 shadow-md border-secondary/50 ring-2 ring-secondary/20'
                      : 'bg-white/75 hover:bg-white/90 backdrop-blur-md border-white/60 text-on-surface-variant'
                  }`}
                >
                  <div className="pr-2 sm:pr-4">
                    <span className={`text-[16px] sm:text-headline-sm font-bold block font-outfit ${
                      isSelected ? 'text-primary' : 'text-on-surface group-hover:text-primary transition-colors'
                    }`}>
                      {cat.name}
                    </span>
                    <span className="text-[12px] sm:text-body-sm text-on-surface-variant mt-0.5 block">
                      {cat.subtitle}
                    </span>
                  </div>
                  <span className={`material-symbols-outlined text-[20px] transition-transform duration-200 ${
                    isSelected
                      ? 'text-primary translate-x-1 font-bold'
                      : 'text-outline-variant group-hover:text-primary group-hover:translate-x-1'
                  }`}>
                    arrow_forward
                  </span>
                </button>
              );
            })}
          </div>

          {/* Center & Right Showcase Panel */}
          <div className="lg:col-span-8 bg-white/90 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-10 shadow-xl border border-white/80 flex flex-col md:flex-row items-center gap-6 sm:gap-8 relative overflow-hidden reveal">
            
            {/* Visual Display */}
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center relative min-h-[220px] sm:min-h-[280px] md:min-h-[350px]">
              <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-secondary-fixed/40 absolute blur-3xl pointer-events-none"></div>

              {/* Dynamic Image Container */}
              <div className="relative z-10 flex items-center justify-center p-2 sm:p-4 w-full">
                <img
                  key={activeCategory.id}
                  alt={`${activeCategory.title} - ${activeSize.title}`}
                  className="max-h-[220px] sm:max-h-[280px] md:max-h-[340px] w-auto max-w-full object-contain rounded-2xl shadow-xl transition-all duration-500 hover:scale-[1.03] bg-white/40 backdrop-blur-sm border border-white/60 p-1"
                  src={activeCategory.image || IMAGES.bottlingFacility}
                />
              </div>

              {/* SKU Pills for size selection */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-3 sm:mt-4 z-10">
                {activeCategory.sizes.map((size) => {
                  const isActive = size.id === selectedSizeId;
                  return (
                    <button
                      key={size.id}
                      onClick={() => setSelectedSizeId(size.id)}
                      className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[12px] sm:text-label-md transition-all cursor-pointer flex items-center gap-1 sm:gap-1.5 ${
                        isActive
                          ? 'bg-primary text-on-primary shadow-md font-bold'
                          : 'bg-surface-container-low text-on-surface hover:bg-secondary-fixed/60 border border-outline-variant/30'
                      }`}
                    >
                      {isActive && <span className="material-symbols-outlined text-[13px] sm:text-[14px]">diamond</span>}
                      <span>{size.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Product Details Column */}
            <div className="w-full md:w-1/2 flex flex-col justify-between h-full gap-4 sm:gap-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-secondary-container/30 text-secondary-container text-[10.5px] sm:text-label-caps font-bold uppercase mb-2">
                  <span className="material-symbols-outlined text-[13px] sm:text-[14px]">diamond</span>
                  <span>Active Selection: {activeSize.label}</span>
                </div>

                <h3 className="text-[20px] sm:text-headline-md font-bold text-primary font-outfit">
                  {activeSize.title}
                </h3>

                <p className="text-[13px] sm:text-body-md text-on-surface-variant mt-1.5 sm:mt-2 leading-relaxed">
                  {activeSize.desc || activeCategory.description}
                </p>
              </div>

              {/* Specifications Table */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 py-3 sm:py-4 border-y border-outline-variant/30 text-[12px] sm:text-body-sm">
                <div className="bg-white/70 backdrop-blur-sm border border-white/60 p-2 sm:p-2.5 rounded-xl">
                  <span className="text-on-surface-variant text-[11px] sm:text-[12px] block">Closure System:</span>
                  <span className="font-bold text-on-surface text-[12px] sm:text-[13px]">{activeCategory.specs.closure}</span>
                </div>
                <div className="bg-white/70 backdrop-blur-sm border border-white/60 p-2 sm:p-2.5 rounded-xl">
                  <span className="text-on-surface-variant text-[11px] sm:text-[12px] block">Packaging:</span>
                  <span className="font-bold text-on-surface text-[12px] sm:text-[13px]">{activeCategory.specs.material}</span>
                </div>
                <div className="bg-white/70 backdrop-blur-sm border border-white/60 p-2 sm:p-2.5 rounded-xl">
                  <span className="text-on-surface-variant text-[11px] sm:text-[12px] block">Case Count:</span>
                  <span className="font-bold text-primary text-[12px] sm:text-[13px]">{activeSize.caseCount}</span>
                </div>
                <div className="bg-white/70 backdrop-blur-sm border border-white/60 p-2 sm:p-2.5 rounded-xl">
                  <span className="text-on-surface-variant text-[11px] sm:text-[12px] block">Standard:</span>
                  <span className="font-bold text-secondary text-[12px] sm:text-[13px]">{activeCategory.specs.standard}</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-2.5 sm:gap-3">
                <button
                  onClick={handleOrderClick}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-container text-on-primary text-[13px] sm:text-label-md font-bold py-3 sm:py-3.5 px-4 rounded-xl shadow hover:shadow-lg transition-all cursor-pointer"
                >
                  <span>Request Case Order</span>
                  <span className="material-symbols-outlined text-[17px] sm:text-[18px]">shopping_cart_checkout</span>
                </button>

                <button
                  onClick={onOpenSpecSheet}
                  className="p-3 sm:p-3.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary transition-all flex items-center justify-center cursor-pointer border border-outline-variant/30 flex-shrink-0"
                  title="View Technical Spec Sheet"
                  aria-label="View Technical Spec Sheet"
                >
                  <span className="material-symbols-outlined text-[19px] sm:text-[20px]">description</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
