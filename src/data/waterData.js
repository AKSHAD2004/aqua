export const IMAGES = {
  heroBottle: "https://lh3.googleusercontent.com/aida-public/AB6AXuAp-zmGUmKmYTOZ844of5jimOXYewvSeDTUjSfKbcVrvwtp_fguGzd95WvilXUnbJ2hqq9_wrCfSyCJY3uLC-IoZCMrmrtinaCjdmSIy4OsKBuQPFwYbnap41Kp4AbgVNClNAlK6n5RNskpaOH_2_XKkjIzsrm_nkuPObReXkCM93PTZdKbJiASm7UCrm1oYZnY9ZH2MkGwOjL7yAf9nn1eMCnjd4utY6u_rcx84nOBtwyA1DO9Vg5Xmg",
  crystalSplash: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMYsNOh-YasueEUYOl_zgjHKUnbpSv33ohnJvI588NUVZOM61EfAlNfcyLEE64eWBJnYGH91cqgZWE3pVbG98dZTll5EkbbsnpkKe7aTAsEC-wXg2IwMS9knpKoZjqx34pzUt9EjBf46Sh80vOHm_Q-q_isLkZDn6S71KYr0O5GtkIhH4ER9wVIUm2Ra1gcrqj-cGKqfnjKbjtPwKuFcnKhNTdx7a5rELTt1YtvZA4",
  alpineSnow: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHZHRsjuyksbAv-PAyauumZzbG4ieEVwknwJvYgvgLBOLuCjazkKcOJvAqbabWn3CCAITXRRq2Us7k7U_-1B8jcEQLk6P2x5-sfK_GDaI6M671uwbH2tuAs9sdJvlO3_5BUhoBpCb0TewIWqw2yulZdwt9MfrsfZKF2LrkwHLBrWN45ySmMSseYSZUZrVNr7gO2c6aDJJ1ZShRghYAJEo-FNhFgmVA-9mAcEqtz1K0",
  bottlingFacility: "/bottling-facility.jpg",
  profileAvatar: "https://lh3.googleusercontent.com/aida/AEtjO1WFL8TWWo7UxgpN6bh6nXyk-PjdbhmR6HZcNeyx8fuzUe41kmjFSO5e0zMoJNkypY1RsLmn7S2vuVCtaiUhFPZ6tfGHFI6MC84S0TuHxnEPuAUnQL_NNXcNhOtg8M4j_EnLEfqs4zWbs1KgVPAui32dkBvzwSgAZlbBgrYgULEoqcvZAda2oDRCIrU8biwBnqP9DartqI5_KkWbtVTiEda67PdI_jJCw6ewUqlqQLxrr6zZUVrS9bASMn7v"
};

export const COLLECTION_CATEGORIES = {
  regular: {
    id: "regular",
    name: "Regular Packaging",
    subtitle: "250ml Pocket, 500ml Everyday, 1 Litre Table",
    title: "Diamond AquaPure Retail Line",
    image: "/products/regular-packaging.jpg",
    description: "The gold standard of pure daily hydration. Engineered with diamond clarity, tamper-proof security caps, and balanced electrolytes. Suitable for homes, transit, and retail shelves.",
    sizes: [
      { id: "250", label: "250 ml", title: "250 ml Pocket Pack", caseCount: "48 Units / Master Box", desc: "Ultra-compact on-the-go hydration for single-use occasions, commuter bags, and school lunches." },
      { id: "500", label: "500 ml", title: "500 ml Everyday Pack", caseCount: "24 Units / Master Box", desc: "The perfect everyday companion for fitness enthusiasts, vehicle consoles, and workstation desks." },
      { id: "1000", label: "1 Litre", title: "1 Litre Premium Pack", caseCount: "12 Units / Master Box", desc: "The flagship premium format designed for dining tables, offices, and long journeys with balanced ionic minerals." }
    ],
    defaultSize: "1000",
    specs: {
      closure: "Tamper-Evident Screw Cap",
      material: "100% Recyclable Virgin PET (BPA Free)",
      standard: "BIS IS:14543 Verified",
      shelfLife: "12 Months from Packaging"
    }
  },
  executive: {
    id: "executive",
    name: "Corporate & Executive",
    subtitle: "Customized corporate meeting & office desk packs",
    title: "Executive Desk & Boardroom Edition",
    image: "/products/corporate-executive.png",
    description: "Sleek, minimalist design tailored for high-profile executive lounges, client boardrooms, and luxury conference tables. Premium clean labeling with crystal light reflection.",
    sizes: [
      { id: "500", label: "500 ml", title: "500 ml Executive Matte Pack", caseCount: "24 Units / Box", desc: "Refined ergonomic matte profile designed to complement modern corporate boardrooms." },
      { id: "1000", label: "1 Litre", title: "1 Litre Boardroom Carafe Pack", caseCount: "12 Units / Box", desc: "High-elegance presentation bottle for board meetings, VIP delegates, and CEO suites." }
    ],
    defaultSize: "500",
    specs: {
      closure: "Precision Ribbed High-Torque Cap",
      material: "Ultra-Clear Food-Grade Virgin Polymer",
      standard: "IS:14543 & ISO 22000 Certified",
      shelfLife: "12 Months from Packaging"
    }
  },
  hospitality: {
    id: "hospitality",
    name: "Hospitality & Events",
    subtitle: "Compact 250ml mini packs for banquet and transit",
    title: "Hospitality & Mini Banquet Pack",
    image: "/products/hospitality-events.jpg",
    description: "Convenient 250ml mini portions designed to eliminate half-drunk bottle wastage in wedding receptions, luxury airlines, luxury coaches, fine dining, and hotel guest suites.",
    sizes: [
      { id: "250", label: "250 ml", title: "250 ml Banquet Mini Pack", caseCount: "48 Units / Master Box", desc: "Eliminates leftover water waste while providing an exquisite table setting for upscale banquets." }
    ],
    defaultSize: "250",
    specs: {
      closure: "Quick-Break Safety Ring Seal",
      material: "Lightweight High-Tensile PET",
      standard: "BIS & FSSAI Hospital-Grade Approved",
      shelfLife: "12 Months from Packaging"
    }
  },
  bulk: {
    id: "bulk",
    name: "Institutional Jars",
    subtitle: "High-capacity 20 Litre multi-use safe dispenser jars",
    title: "Institutional Dispenser Jars (20L)",
    image: "/products/institutional-jars.jpg",
    description: "Multi-layered food-grade heavy-duty 20-litre jars for corporate water coolers, hospital wards, educational institutions, and residential towers. Cleaned with automated 14-step internal ozonated jet wash.",
    sizes: [
      { id: "20000", label: "20 Litre", title: "20 Litre Heavy-Duty Smart Jar", caseCount: "Direct Bulk Delivery Pallets", desc: "Engineered with anti-microbial spill-proof neck valves for sanitized office dispenser systems." }
    ],
    defaultSize: "20000",
    specs: {
      closure: "Ozone-Sealed One-Way Valve Cap",
      material: "Food-Grade Unbreakable Polycarbonate",
      standard: "IS:14543 Industrial Safety Compliant",
      shelfLife: "30 Days from Sanitized Filling"
    }
  }
};

export const PURIFICATION_STAGES = [
  {
    step: "01",
    title: "Dual Sand Filtration",
    desc: "Removes suspended matter, turbid silt, and granular soil particles down to 20 microns.",
    tag: "SEDIMENT CLEARANCE",
    icon: "filter_alt",
    badgeBg: "bg-primary-fixed/50",
    badgeText: "text-primary"
  },
  {
    step: "02",
    title: "Activated Carbon Filter",
    desc: "Absorbs excess chlorine, organic volatiles, and unwanted odors for crystal natural sweetness.",
    tag: "ODOR & CHLORINE ZERO",
    icon: "air",
    badgeBg: "bg-primary-fixed/50",
    badgeText: "text-primary"
  },
  {
    step: "03",
    title: "Precision Micron Polish",
    desc: "Graduated wound cartridge filtration (5μ to 1μ) intercepting microscopic traces.",
    tag: "1-MICRON CLEARANCE",
    icon: "adjust",
    badgeBg: "bg-primary-fixed/50",
    badgeText: "text-primary"
  },
  {
    step: "04",
    title: "High-Pressure RO",
    desc: "Semi-permeable polyamide membranes stripping dissolved heavy metals and pesticides.",
    tag: "MOLECULAR SEPARATION",
    icon: "water_drop",
    badgeBg: "bg-secondary-fixed/60",
    badgeText: "text-secondary"
  },
  {
    step: "05",
    title: "Vital Mineral Balance",
    desc: "Controlled re-infusion of Calcium, Magnesium & Potassium for healthy alkaline pH 7.4.",
    tag: "ESSENTIAL NUTRIENTS",
    icon: "local_pharmacy",
    badgeBg: "bg-secondary-fixed/60",
    badgeText: "text-secondary"
  },
  {
    step: "06",
    title: "UV Sterilization",
    desc: "Intense germicidal UV-C light neutralizing bacteria and viruses without chemical residual.",
    tag: "UV-C IRRADIATION",
    icon: "bolt",
    badgeBg: "bg-primary-fixed/50",
    badgeText: "text-primary"
  },
  {
    step: "07",
    title: "Ozone Enrichment",
    desc: "Active nascent oxygen sterilization maintaining absolute freshness within sealed caps.",
    tag: "LONG-LIFE FRESHNESS",
    icon: "spa",
    badgeBg: "bg-primary-fixed/50",
    badgeText: "text-primary"
  },
  {
    step: "08",
    title: "Automated Packaging",
    desc: "Sterilized air preform blowing, contact-free filling, automated torque capping & laser batch coding.",
    tag: "TRACEABILITY CODED",
    icon: "barcode_scanner",
    badgeBg: "bg-primary-fixed/50",
    badgeText: "text-primary"
  }
];

export const CERTIFICATIONS = [
  {
    code: "BIS IS:14543",
    title: "Bureau of Indian Standards",
    icon: "verified",
    desc: "Strict adherence to government packaged water standards."
  },
  {
    code: "FSSAI Certified",
    title: "Lic. 100200210058",
    icon: "health_and_safety",
    desc: "Premier Food Safety and Standards Authority accreditation."
  },
  {
    code: "ISO 22000:2018",
    title: "Food Safety Mgmt",
    icon: "workspace_premium",
    desc: "International benchmark for hygienic food processing."
  },
  {
    code: "NABL Lab Tested",
    title: "Hourly Batch Reports",
    icon: "science",
    desc: "Continual analytical chemical and micro-biological testing."
  }
];

export const TRUST_STATS = [
  { value: "99.98%", label: "Filtration Efficiency", sub: "Purity Index Rating" },
  { value: "7.4 pH", label: "Balanced Alkaline", sub: "Natural Ionic Electrolytes" },
  { value: "100%", label: "Touch-Free Bottling", sub: "Automated Cleanroom Line" },
  { value: "8-Stage", label: "RO + UV + Ozonation", sub: "Micron Precision System" }
];
