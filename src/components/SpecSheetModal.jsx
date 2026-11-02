import React from 'react';

export const SpecSheetModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const mineralParameters = [
    { parameter: "pH Level", aquaPure: "7.2 - 7.6 (Optimal 7.4)", bisLimit: "6.5 - 8.5", method: "Electrometric" },
    { parameter: "Total Dissolved Solids (TDS)", aquaPure: "80 - 120 mg/L", bisLimit: "Max 500 mg/L", method: "Gravimetric" },
    { parameter: "Calcium (as Ca)", aquaPure: "12 - 16 mg/L", bisLimit: "Max 75 mg/L", method: "EDTA Titration" },
    { parameter: "Magnesium (as Mg)", aquaPure: "6 - 10 mg/L", bisLimit: "Max 30 mg/L", method: "AAS" },
    { parameter: "Potassium (as K)", aquaPure: "2 - 4 mg/L", bisLimit: "Not Specified", method: "Flame Photometry" },
    { parameter: "Chlorides (as Cl)", aquaPure: "< 15 mg/L", bisLimit: "Max 200 mg/L", method: "Argentometric" },
    { parameter: "Sulphates (as SO₄)", aquaPure: "< 10 mg/L", bisLimit: "Max 200 mg/L", method: "Turbidimetric" },
  ];

  const microParameters = [
    { test: "Escherichia coli", result: "Absent / 250ml", standard: "Absent (IS:14543)" },
    { test: "Coliform Bacteria", result: "Absent / 250ml", standard: "Absent (IS:14543)" },
    { test: "Faecal Streptococci", result: "Absent / 250ml", standard: "Absent (IS:14543)" },
    { test: "Yeast & Mould", result: "Absent / 250ml", standard: "Absent (IS:14543)" },
    { test: "Pseudomonas aeruginosa", result: "Absent / 250ml", standard: "Absent (IS:14543)" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-surface-container-lowest rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-outline-variant/40 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-surface-container-low flex items-center justify-between border-b border-outline-variant/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[24px]">description</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-primary">
                Technical Specification Sheet
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Diamond AquaPure Packaged Drinking Water (IS:14543 Verified)
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

        {/* Content */}
        <div className="p-6 overflow-y-auto flex flex-col gap-6 text-body-sm">
          {/* Chemical & Mineral Profile */}
          <div>
            <h4 className="font-label-md text-label-md font-bold text-primary mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-secondary">water</span>
              <span>1. Mineral &amp; Physico-Chemical Analysis</span>
            </h4>
            <div className="overflow-x-auto rounded-xl border border-outline-variant/30">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low text-primary font-bold">
                    <th className="p-3 border-b border-outline-variant/30">Parameter</th>
                    <th className="p-3 border-b border-outline-variant/30">Diamond AquaPure</th>
                    <th className="p-3 border-b border-outline-variant/30">Permissible BIS Limit</th>
                    <th className="p-3 border-b border-outline-variant/30">Test Method</th>
                  </tr>
                </thead>
                <tbody>
                  {mineralParameters.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-surface-container-lowest'}>
                      <td className="p-3 font-semibold text-on-surface">{row.parameter}</td>
                      <td className="p-3 font-bold text-secondary">{row.aquaPure}</td>
                      <td className="p-3 text-on-surface-variant">{row.bisLimit}</td>
                      <td className="p-3 text-on-surface-variant text-[12px]">{row.method}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Microbiological Standards */}
          <div>
            <h4 className="font-label-md text-label-md font-bold text-primary mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-secondary">biotech</span>
              <span>2. Microbiological Safety Profile (Class 10,000 Certified)</span>
            </h4>
            <div className="overflow-x-auto rounded-xl border border-outline-variant/30">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low text-primary font-bold">
                    <th className="p-3 border-b border-outline-variant/30">Organism Tested</th>
                    <th className="p-3 border-b border-outline-variant/30">AquaPure Result</th>
                    <th className="p-3 border-b border-outline-variant/30">Standard Requirement</th>
                  </tr>
                </thead>
                <tbody>
                  {microParameters.map((m, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-surface-container-lowest'}>
                      <td className="p-3 font-semibold text-on-surface">{m.test}</td>
                      <td className="p-3 font-bold text-emerald-600 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">check_circle</span>
                        <span>{m.result}</span>
                      </td>
                      <td className="p-3 text-on-surface-variant">{m.standard}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Packaging & Compliance */}
          <div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-2">
            <span className="font-bold text-primary">Packaging Compliance:</span>
            <p className="text-on-surface-variant leading-relaxed">
              Manufactured using 100% recyclable virgin food-grade PET resin conforming to IS:12252. Bottles are blow-moulded with pressurized filtered air directly preceding filling to eliminate human touch.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-surface-container-low flex items-center justify-between border-t border-outline-variant/30">
          <span className="text-[12px] text-on-surface-variant">
            Document No: AQB-QC-2025-V4 | Certified Batch Lab Report
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-primary hover:bg-primary-container text-white font-label-md text-label-md transition-all cursor-pointer"
          >
            Close Sheet
          </button>
        </div>
      </div>
    </div>
  );
};
