import React, { useState, useEffect } from 'react';

export const InquirySection = ({ prefillOrder, onShowToast }) => {
  const [formData, setFormData] = useState({
    contactName: '',
    companyName: '',
    phoneNumber: '',
    deliveryCity: '',
    requirement: '200-500',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (prefillOrder) {
      setFormData(prev => ({
        ...prev,
        notes: `Interested in: ${prefillOrder.title} (${prefillOrder.size}, ${prefillOrder.caseCount})`
      }));
    }
  }, [prefillOrder]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onShowToast) {
        onShowToast('Supply request received! Our dispatch desk will contact you within 2 hours.');
      }
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      contactName: '',
      companyName: '',
      phoneNumber: '',
      deliveryCity: '',
      requirement: '200-500',
      notes: ''
    });
  };

  return (
    <section id="our-services" className="w-full py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-primary via-primary-container to-secondary text-on-primary relative overflow-hidden">
      {/* Background Rings */}
      <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-secondary-fixed-dim/15 blur-3xl pointer-events-none"></div>
      <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-white/5 blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Inquiry Headline & Perks */}
          <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-6 reveal">
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
              <span className="material-symbols-outlined text-[17px] text-secondary-fixed">local_shipping</span>
              <span className="font-label-caps text-[11px] text-secondary-fixed font-bold tracking-widest uppercase">
                Wholesale &amp; Enterprise Supply
              </span>
            </div>

            <h2 className="text-[26px] sm:text-[36px] lg:text-[44px] font-bold leading-tight text-on-primary font-outfit">
              Partner With Diamond AquaPure For Your Organization
            </h2>

            <p className="text-[14px] sm:text-body-lg text-primary-fixed leading-relaxed">
              Reliable on-time delivery across hotels, conventions, corporate headquarters, and retail distributors with guaranteed freshness and custom labeling possibilities.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2 sm:pt-4">
              <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-[18px] sm:text-[20px] text-secondary-fixed">calendar_month</span>
                </div>
                <span className="text-[13px] sm:text-label-md text-on-primary font-medium">Scheduled Route Delivery</span>
              </div>

              <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-[18px] sm:text-[20px] text-secondary-fixed">sell</span>
                </div>
                <span className="text-[13px] sm:text-label-md text-on-primary font-medium">Tiered Wholesale Pricing</span>
              </div>

              <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-[18px] sm:text-[20px] text-secondary-fixed">branding_watermark</span>
                </div>
                <span className="text-[13px] sm:text-label-md text-on-primary font-medium">Custom Event Sleeves</span>
              </div>

              <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-[18px] sm:text-[20px] text-secondary-fixed">support_agent</span>
                </div>
                <span className="text-[13px] sm:text-label-md text-on-primary font-medium">Dedicated Account Lead</span>
              </div>
            </div>
          </div>

          {/* Quick Inquiry Form Card */}
          <div className="lg:col-span-6 bg-surface-container-lowest text-on-surface p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-2xl border border-white/60 reveal">
            <h3 className="text-[20px] sm:text-headline-md font-bold text-primary mb-1 sm:mb-2 font-outfit">
              Request Institutional Supply
            </h3>
            <p className="text-[12.5px] sm:text-body-sm text-on-surface-variant mb-5 sm:mb-6">
              Fill out your hydration requirements for a prompt quotation within 2 business hours.
            </p>

            {submitted ? (
              <div className="p-5 sm:p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center flex flex-col items-center gap-3 animate-fadeIn">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <span className="material-symbols-outlined text-[28px] sm:text-[32px]">check_circle</span>
                </div>
                <h4 className="text-[18px] sm:text-headline-sm font-bold text-emerald-900 font-outfit">
                  Supply Request Received!
                </h4>
                <p className="text-[13px] sm:text-body-md text-emerald-700 max-w-sm">
                  Thank you, <span className="font-bold">{formData.contactName || 'Partner'}</span>. Our dispatch coordinator is reviewing your requirement for <span className="font-bold">{formData.companyName || 'your company'}</span> and will connect within 2 business hours.
                </p>
                <button
                  onClick={handleReset}
                  className="mt-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-[13px] sm:text-label-md font-bold transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form className="flex flex-col gap-3.5 sm:gap-4" onSubmit={handleSubmit}>
                
                {prefillOrder && (
                  <div className="p-3 rounded-xl bg-secondary-fixed/40 border border-secondary/30 flex items-center justify-between text-[12px] sm:text-body-sm">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[16px] sm:text-[18px]">shopping_cart</span>
                      <span className="font-bold text-primary">Selected: {prefillOrder.title} ({prefillOrder.size})</span>
                    </div>
                    <span className="text-secondary font-medium text-[11px] sm:text-[12px]">{prefillOrder.caseCount}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-[12px] sm:text-label-md font-semibold text-on-surface mb-1">
                      Contact Name *
                    </label>
                    <input
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low border border-outline-variant/30 text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary text-[13.5px] sm:text-body-md transition-all"
                      placeholder="e.g. Ramesh Sharma"
                      required
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] sm:text-label-md font-semibold text-on-surface mb-1">
                      Company / Organization *
                    </label>
                    <input
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low border border-outline-variant/30 text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary text-[13.5px] sm:text-body-md transition-all"
                      placeholder="e.g. Grand Horizon Hotel"
                      required
                      type="text"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-[12px] sm:text-label-md font-semibold text-on-surface mb-1">
                      Phone Number *
                    </label>
                    <input
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low border border-outline-variant/30 text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary text-[13.5px] sm:text-body-md transition-all"
                      placeholder="+91 98400 00000"
                      required
                      type="tel"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] sm:text-label-md font-semibold text-on-surface mb-1">
                      Delivery City / Location *
                    </label>
                    <input
                      name="deliveryCity"
                      value={formData.deliveryCity}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low border border-outline-variant/30 text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary text-[13.5px] sm:text-body-md transition-all"
                      placeholder="e.g. Miraj / Sangli / Kolhapur"
                      required
                      type="text"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[12px] sm:text-label-md font-semibold text-on-surface mb-1">
                    Monthly Volume Requirement
                  </label>
                  <select
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low border border-outline-variant/30 text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary text-[13.5px] sm:text-body-md transition-all cursor-pointer"
                  >
                    <option value="50-200">50 - 200 Cases / Month</option>
                    <option value="200-500">200 - 500 Cases / Month (Recommended)</option>
                    <option value="500-2000">500 - 2,000 Cases / Month (Tier 1)</option>
                    <option value="2000+">2,000+ Cases / Month (Direct Factory Contract)</option>
                    <option value="event">Single Large Event / Wedding / Conference</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[12px] sm:text-label-md font-semibold text-on-surface mb-1">
                    Order Details &amp; Packaging Notes
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low border border-outline-variant/30 text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary text-[13.5px] sm:text-body-md transition-all resize-none"
                    placeholder="Specify bottle format preferences (250ml, 500ml, 1L, 20L) or recurring frequency..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-1 bg-primary hover:bg-primary-container text-on-primary font-bold text-[14px] sm:text-label-md py-3 sm:py-3.5 px-6 rounded-xl shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      <span>Submitting Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Supply Request</span>
                      <span className="material-symbols-outlined text-[18px]">send</span>
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};
