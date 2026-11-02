# Aquasource Beverages | Diamond AquaPure (React.js)

A modern, high-performance **React 18 + Vite + Tailwind CSS** application converted from the Aquasource pure water web project, strictly adhering to the design specifications in [DESIGN.md](file:///d:/ITPL/Water/DESIGN.md).

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
By default, the Vite dev server starts on [http://localhost:3000](http://localhost:3000).

### 3. Production Build
```bash
npm run build
```
Creates an optimized production bundle in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```text
├── index.html                    # HTML entry point with Outfit & Plus Jakarta Sans typography
├── package.json                  # Scripts & dependencies (React 18, Vite, Tailwind CSS)
├── vite.config.js                # Vite configuration with React plugin
├── tailwind.config.js            # Design tokens & color palette matching DESIGN.md
├── postcss.config.js             # PostCSS Tailwind + Autoprefixer configuration
├── src/
│   ├── main.jsx                  # React application root mount
│   ├── App.jsx                   # Central page orchestrator & state manager
│   ├── index.css                 # Base resets, custom scrollbars, and styling layers
│   ├── data/
│   │   └── waterData.js          # Structured data for collections, 8-stage filtration, specs & certifications
│   └── components/
│       ├── Header.jsx            # Announcement topbar, brand logo, navigation with dropdown, mobile drawer
│       ├── Hero.jsx              # Hero section with diamond glow, trust badges & pH 7.4 indicators
│       ├── BrandPhilosophy.jsx   # Purity philosophy & dual visual feature cards (TDS, minerals, hygiene)
│       ├── CollectionsShowcase.jsx # Interactive SKU switcher (250ml, 500ml, 1L, 20L) & specs table
│       ├── BottlingFacility.jsx  # World-class plant showcase with cleanroom & automation callouts
│       ├── PurificationProcess.jsx # 8-stage RO+UV+Ozone bento grid with step cards
│       ├── Certifications.jsx    # BIS IS:14543, FSSAI, ISO 22000, NABL test accreditations
│       ├── InquirySection.jsx    # Interactive Corporate & Institutional supply form with validation
│       ├── Footer.jsx            # Brand summary, collections, distribution contacts & legal links
│       ├── VirtualTourModal.jsx  # Interactive 360° Cleanroom & Plant tour modal
│       ├── SpecSheetModal.jsx    # Laboratory chemical & microbiological specification sheet modal
│       └── Toast.jsx             # Notification feedback system
```

---

## ✨ Features & Enhancements

- **Interactive Collections Switcher:** Dynamically change packaging format (Regular, Executive, Hospitality, Bulk 20L) and switch SKU bottle sizes with instant specification updates.
- **Request Case Order Connection:** Clicking *"Request Case Order"* in any collection pre-fills the Wholesale Inquiry form and smoothly scrolls to it.
- **360° Virtual Plant Tour Modal:** Interactive tour of the Class 10,000 cleanroom, RO+UV matrix, and in-house testing lab.
- **Technical Spec Sheet Modal:** Full physico-chemical and microbiological lab test data with BIS permissible limits.
- **Responsive Mobile Navigation:** Full slide-out drawer menu for mobile and tablet screens.
- **Interactive Supply Form:** Validated input fields, category selector, feedback spinner, and instant submission state.
- **Strict Design Token Harmony:** Direct implementation of the brand palette from `DESIGN.md` (Purity Blue `#003f87`, Hydro Aqua `#00677f`, Ice Tints, and geometric Outfit & Plus Jakarta Sans typography).
