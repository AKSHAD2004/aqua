---
name: Aquasource Pure
colors:
  surface: '#faf9f9'
  surface-dim: '#dadada'
  surface-bright: '#faf9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#424752'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f0'
  outline: '#727784'
  outline-variant: '#c2c6d4'
  surface-tint: '#115cb9'
  primary: '#003f87'
  on-primary: '#ffffff'
  primary-container: '#0056b3'
  on-primary-container: '#bbd0ff'
  inverse-primary: '#acc7ff'
  secondary: '#00677f'
  on-secondary: '#ffffff'
  secondary-container: '#4cd6fe'
  on-secondary-container: '#005a6f'
  tertiary: '#394156'
  on-tertiary: '#ffffff'
  tertiary-container: '#50586e'
  on-tertiary-container: '#c7cfe9'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d7e2ff'
  primary-fixed-dim: '#acc7ff'
  on-primary-fixed: '#001a40'
  on-primary-fixed-variant: '#004491'
  secondary-fixed: '#b6ebff'
  secondary-fixed-dim: '#4cd6fe'
  on-secondary-fixed: '#001f28'
  on-secondary-fixed-variant: '#004e60'
  tertiary-fixed: '#dae2fd'
  tertiary-fixed-dim: '#bec6e0'
  on-tertiary-fixed: '#131b2e'
  on-tertiary-fixed-variant: '#3f465c'
  background: '#faf9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-xl:
    fontFamily: Outfit
    fontSize: 64px
    fontWeight: '600'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-xl-mobile:
    fontFamily: Outfit
    fontSize: 38px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Outfit
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Outfit
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: 0em
  headline-md:
    fontFamily: Outfit
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Outfit
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 30px
    letterSpacing: 0em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-caps:
    fontFamily: Outfit
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.15em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 4rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.75rem
  space-xl: 3rem
---

## Brand & Style

This design system establishes a high-tier digital identity for natural mineral water and premium packaged hydration. The aesthetic centers around absolute purity, crisp alpine filtration, diamond-grade clarity, and industrial hygiene excellence. 

### Emotional Tenets
- **Purity & Clarity:** Evoking the feeling of untouched glacial streams, condensation beads on chilled bottles, and diamond facets refracting clean morning light.
- **Hygienic Precision:** Communicating modern pharmaceutical-grade filtration, touchless bottling operations, and uncompromising certified quality.
- **Effortless Hydration:** Calm, airy layouts with ample negative space that allow products to float naturally against pristine liquid backdrops.

### Design Direction: Pristine Hydro-Modernism
Blending Scandinavian architectural minimalism with subtle frosted glassmorphism and crisp, jewel-like structural borders. Surfaces feel clean, light, and airy, accented with deep maritime blues and vivid aqua highlights that guide the eye directly toward product discovery, quality specifications, and distribution networks.

## Colors

The color palette directly mirrors the facility architecture and packaging: deep structural blue, luminous aqua highlights, architectural neutral greys, and crystalline ice tints.

### Palette Hierarchy & Application
- **Primary (`#0056B3`)**: Anchors structural brand elements, persistent global navigation, prominent call-to-action buttons, key titles, and architectural framework lines.
- **Secondary (`#00B4DB`)**: The vibrant hydration accent. Used for interactive highlights, dynamic link underlines, progress indicators, mineral composition tags, and active state pill indicators.
- **Neutral Backgrounds & Canvas (`#FFFFFF` & `#F4FAFD`)**: The default backdrop represents untouched purity. `#F4FAFD` provides subtle thermal separation for specification tables, ingredient callouts, and modular card tiles.
- **Neutral Structural Surface (`#D9D9D9`)**: Used sparingly for delicate dividing lines, unselected state outlines, and architectural card boundaries.
- **Deep Slate Body Text (`#1E293B`)**: Replaces pitch black to maintain softness while ensuring contrast that exceeds WCAG AAA standards against snow and water-tinted surfaces.

## Typography

The type system balances geometric clarity with modern editorial luxury. 

- **Headlines & Display:** Handled by **Outfit**, featuring wide, geometric proportions and circular counters that echo water droplets and diamond facets. Tracking on large headlines is slightly drawn inward (-0.02em) to maintain crisp visual density.
- **Body & Functional Labels:** Handled by **Plus Jakarta Sans**, offering open apertures, balanced heights, and high legibility at micro sizes on technical bottles and certified lab spec cards.
- **Eyebrow & Category Badges:** Utilizes `label-caps` in Outfit uppercase with wide tracking (`0.15em`) to evoke luxury fragrance and bottled water editorial layouts.

## Layout & Spacing

Layouts follow an open, breathable 12-column fluid grid on desktop (max container width: 1440px) and a single-column reflow on mobile.

### Grid Anatomy
- **Desktop (>= 1024px):** 12 columns with `1.5rem` (24px) gutters and `4rem` (64px) outer margin to maintain an expansive, airy frame around product bottles and photography.
- **Tablet (768px - 1023px):** 8 columns with `1.25rem` gutters and `2rem` margin.
- **Mobile (< 768px):** 4 columns with `1rem` gutters and `1.25rem` outer margins.

### Spatial Rhythm
Sections alternate between generous negative space (`space-xl` / 48px to 96px vertical padding) to replicate the pristine serenity of water landscapes, contrasting with tightly clustered data clusters (`space-xs` and `space-sm`) for mineral analysis meters and packaging capacities (250ml, 500ml, 1L).

## Elevation & Depth

Visual hierarchy uses frosted atmospheric depth and crisp light reflections rather than heavy dropshadows, reinforcing diamond purity and clear liquid.

### Layering Rules
- **Subsurface Canvas (`#FFFFFF` to `#F4FAFD`):** The ground level. Clean white or water-tinted gradient washes.
- **Translucent Hydro Cards:** White surfaces with `85%` opacity, paired with backdrop blur (`backdrop-filter: blur(12px)`) and a delicate `1px` border in `rgba(0, 180, 219, 0.15)`.
- **Soft Ambient Drops:** Floating packaging bottles and elevated drawers leverage an ambient diffused glow: `box-shadow: 0 12px 32px -8px rgba(0, 86, 179, 0.08), 0 4px 12px -2px rgba(0, 180, 219, 0.04)`.
- **Active State Glow:** Hovered cards and active bottle selector tabs trigger an accent halo: `0 0 0 1px #00B4DB, 0 8px 24px -4px rgba(0, 180, 219, 0.2)`.

## Shapes

The design system incorporates soft geometric curvature (`roundedness: 2`), reflecting ergonomic bottle silhouettes and smoothed water droplets while preserving crisp architectural foundations.

### Curvature Tokens
- **Micro UI (Badges, Buttons, Controls):** 0.5rem (8px) radius or full circular pills for tags and volume selectors.
- **Content Cards & Media Tiles:** `rounded-lg` (1rem / 16px) creates a polished, contemporary showcase frame for plant imagery and splash photography.
- **Hero Banners & Feature Glass Modules:** `rounded-xl` (1.5rem / 24px) for expansive hero sections and floating water spec sheets.
- **Bottling Line & Facility Icons:** Contained in circular or soft rounded squircle badges with delicate 1px border strokes.

## Components

### Buttons
- **Primary Action:** Solid `#0056B3` background, pure white text, font `Outfit SemiBold` (15px), 0.5rem border radius, padded with `0.875rem` vertical and `1.75rem` horizontal. On hover: transforms with `#004494` and a subtle ambient blue glow.
- **Secondary / Aqua Action:** Linear gradient background from `#0056B3` to `#00B4DB`, white text. Used exclusively for "Order Now", "Find a Distributor", or "Request Wholesale".
- **Ghost Action:** Transparent background, `1.5px` border in `#0056B3`, text in `#0056B3`. On hover: fills with `#F4FAFD`.

### Chips & Packaging Size Selectors
- **Volume Chips (250 ml, 500 ml, 1 Litre):** Pill-shaped indicators (`rounded-full`). Unselected: `#FFFFFF` fill, 1px border in `#D9D9D9`, text `#1E293B`. Selected: `#0056B3` fill, white text, with an inset diamond icon.

### Cards
- **Product Showcase Card:** Clean `#FFFFFF` or `#F4FAFD` tile with 16px corner radius. Features generous `2rem` top padding where rendered bottles float with soft vertical elevation. Includes volume badges, title, TDS/pH mineral readout, and an inline discovery link.
- **Process & Certification Card:** Pure white backdrop with a faint `1px` border in `#E2E8F0`. Uses a top-anchored circular aqua badge (`#00B4DB` at 10% opacity) enclosing deep-blue line art icons (Pure Natural Water, Safe & Clean, Healthy Choice).

### Input Fields
- Enclosed with a crisp 1px border in `#D9D9D9`. When focused, transitions to a 1.5px `#00B4DB` border with a subtle 3px cyan focus ring (`rgba(0, 180, 219, 0.15)`). Text is set in `Plus Jakarta Sans` 15px with placeholder styled in muted slate.

### Mineral & Purity Data Gauges
- Horizontal progressive progress bars with `#F4FAFD` track backgrounds and vibrant `#00B4DB` fills, communicating balanced electrolytes, neutral pH (7.2 - 7.6), and purification milestones.