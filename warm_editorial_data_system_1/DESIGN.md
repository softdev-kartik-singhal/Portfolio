---
name: Warm Editorial Data System
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#434654'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#747686'
  outline-variant: '#c4c5d7'
  surface-tint: '#2452d6'
  primary: '#003cba'
  on-primary: '#ffffff'
  primary-container: '#2855d9'
  on-primary-container: '#d5dbff'
  inverse-primary: '#b7c4ff'
  secondary: '#4a5e8b'
  on-secondary: '#ffffff'
  secondary-container: '#b4c9fd'
  on-secondary-container: '#3f5381'
  tertiary: '#832d00'
  on-tertiary: '#ffffff'
  tertiary-container: '#ab3d00'
  on-tertiary-container: '#ffd4c4'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b7c4ff'
  on-primary-fixed: '#001551'
  on-primary-fixed-variant: '#0039b3'
  secondary-fixed: '#d9e2ff'
  secondary-fixed-dim: '#b2c6fa'
  on-secondary-fixed: '#001944'
  on-secondary-fixed-variant: '#314672'
  tertiary-fixed: '#ffdbce'
  tertiary-fixed-dim: '#ffb599'
  on-tertiary-fixed: '#370e00'
  on-tertiary-fixed-variant: '#7f2b00'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display:
    fontFamily: Playfair Display
    fontSize: 3.5rem
    fontWeight: '600'
    lineHeight: 4.25rem
    letterSpacing: -0.02em
  display-mobile:
    fontFamily: Playfair Display
    fontSize: 2.25rem
    fontWeight: '600'
    lineHeight: 2.75rem
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 2.5rem
    fontWeight: '500'
    lineHeight: 3rem
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 1.75rem
    fontWeight: '500'
    lineHeight: 2.25rem
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 1.75rem
    fontWeight: '500'
    lineHeight: 2.25rem
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: 1.75rem
    letterSpacing: 0em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.875rem
    letterSpacing: 0.005em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.625rem
    letterSpacing: 0em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.375rem
    letterSpacing: 0.005em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: 1.25rem
    letterSpacing: 0.01em
  label-technical:
    fontFamily: JetBrains Mono
    fontSize: 0.75rem
    fontWeight: '400'
    lineHeight: 1rem
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.75rem
  space-xl: 3rem
---

## Brand & Style

This design system expresses the discipline and insight of professional data analytics through the lens of high-end editorial publishing. The interface balances analytical precision with human warmth, replacing conventional tech aesthetics—such as dark terminal motifs, neon highlights, and hyper-dense dashboard layouts—with generous whitespace, considered typographic pacing, and tactile warmth.

The target audience includes hiring managers, engineering leaders, research directors, and data executives who value rigor, storytelling clarity, and refined execution. The aesthetic is anchored in **Editorial Minimalism**:
- **Warm Grounding:** An ivory-tinted backdrop paired with bright content cards creates an inviting, publication-grade reading environment.
- **Architectural Structure:** Subtle hairline dividers and generous grid margins organize complex metrics and case studies without visual clutter.
- **Controlled Accents:** Deep cobalt blue serves strictly to guide eye flow, highlight key insights, and denote interactive touchpoints.

## Colors

The color architecture relies on high legibility, deliberate contrast ratios, and warm tonal foundations across light and dark contexts.

### Light Palette (Default)
- **Canvas Background (`#F8F7F3`):** Warm ivory foundation providing warmth and reduced visual fatigue.
- **Surface Elevation (`#FFFFFF`):** Pure white used for content cards, isolated charts, and reading sheets.
- **Primary Text (`#181818`):** Deep near-black for headlines, body copy, and primary values (contrast ratio > 12:1).
- **Secondary Text (`#686868`):** Muted stone gray for captions, metadata, and supporting descriptions.
- **Primary Accent (`#2855D9`):** Cobalt blue reserved for key metrics, active states, callouts, and links.
- **Secondary Accent (`#5B6F9E`):** Slate blue for category tags, subtle data series, and chart accents.
- **Hairline Borders (`#E6E3DC`):** Delicate warm gray for structural dividers and card outlines.

### Dark Palette (Complementary)
- **Canvas Background (`#171717`):** Warm charcoal base.
- **Surface Elevation (`#222222`):** Elevated charcoal surfaces.
- **Primary Text (`#F5F3EE`):** Warm off-white for effortless contrast.
- **Secondary Text (`#B4B4B4`):** Soft silver for secondary annotations.
- **Primary Accent (`#7C9AFF`):** Soft electric blue ensuring WCAG AA compliance on dark surfaces.
- **Hairline Borders (`#2E2E2E`):** Low-contrast structural rules.

## Typography

The typographic hierarchy juxtaposes an authoritative, literary serif with an exceptionally clear geometric sans-serif:

- **Headlines (`Playfair Display`):** Carries the narrative authority of an academic or journalistic journal. Reserved for case study titles, section leads, and key narrative points.
- **Interface & Narrative Body (`Plus Jakarta Sans`):** Delivers clean readability for methodology write-ups, analysis narratives, and navigation elements.
- **Technical Metadata (`JetBrains Mono`):** Deployed with strict discipline. It is strictly limited to data query timestamps, statistical parameters (e.g., `p < 0.01`, `R² = 0.89`), code snippets, and dataset file dimensions. Avoid decorative terminal accents, brackets, or pseudo-matrix treatments.

## Layout & Spacing

The layout is built around a fixed-max-width, 12-column editorial grid (`max-width: 1200px`) optimized for reading comfort and structured data comparison.

- **Desktop (1024px+):** 12 columns with 1.5rem (`gutter`) column separation and 3rem (`margin`) canvas inset. Asymmetrical layouts—such as a 4-column methodology sidebar alongside an 8-column analytical narrative—reinforce the publication aesthetic.
- **Tablet (768px - 1023px):** 8 columns, 1.5rem gutters, and 2rem margins. Complex side-by-side comparisons reflow to stacked vertical sections.
- **Mobile (< 768px):** 4 columns with 1rem (`gutter-mobile`) gutters and 1.25rem (`margin-mobile`) exterior padding. Dense data summaries shift from multi-column tables to clean vertical metric cards.
- **Pacing & Vertical Rhythm:** White space is utilized as a framing device. Section divides use a minimum of 4rem to 6rem vertical separation, separated by thin, warm hairline borders rather than solid fill bands.

## Elevation & Depth

This design system avoids drop shadows, intense layer blurs, and skeuomorphic bevels, choosing instead a clean, surface-oriented hierarchy:

1. **Base Layer:** The ivory canvas (`#F8F7F3` in light, `#171717` in dark) establishes the foundation.
2. **Elevated Content Surfaces:** White (`#FFFFFF`) cards and panels create primary focus zones, separated from the canvas by a crisp 1px border (`#E6E3DC`) rather than an ambient shadow.
3. **Subtle Depth:** Where focal isolation is mandatory (such as an active case study modal or interactive data filter dropdown), use a single low-intensity, wide-dispersion shadow tinted with warm neutral:
   `box-shadow: 0 8px 30px -4px rgba(24, 24, 24, 0.05);`
4. **Dividers & Rules:** Horizontal rules and grid borders are kept at exactly 1px solid, providing tactile demarcation without visual weight.

## Shapes

The shape system adopts a refined, soft-cornered geometry (level `1`, baseline 0.25rem / 4px). This subtle rounding softens technical data presentations without drifting into casual, overly bubbly forms.

- **Buttons & Interactive Tags:** 4px radius (`rounded`) maintains crisp structure while ensuring tactile affordance.
- **Content Cards & Data Visualizations:** 8px radius (`rounded-lg`) creates a subtle sheet-of-paper feel.
- **Pill Exceptions:** Filter chips and pill badges may use full border-radius for categorical tags only when required to clearly differentiate interactive badges from static tabular rows.

## Components

### Buttons
- **Primary:** Solid cobalt blue (`#2855D9`) fill with white text, 4px border-radius, medium typography weight. Clean hover state with subtle dark tint (`#1F44B2`).
- **Secondary / Ghost:** Transparent background with 1px hairline border (`#E6E3DC`) and primary text (`#181818`). Hover initiates a warm ivory background shift (`#F2EFE9`).

### Data Metric Cards
- White background container with 8px radius and 1px border (`#E6E3DC`).
- KPI values rendered in large, confident sans-serif or editorial serif with a cobalt blue tint.
- Supporting context, variance (e.g., `+14.2%`), and sample size (`n = 12,450`) placed below using secondary gray text and small monospace labels.

### Chips & Metadata Tags
- Subtle, compact tags featuring 4px or pill geometry.
- Neutral state: Ivory-tinted fill (`#F2EFE9`), dark neutral text, 0.75rem monospace or 0.8125rem sans-serif.
- Active state: Soft slate blue or muted cobalt stroke with clear typographic contrast.

### Form Inputs & Filters
- Clean input surfaces with white fill, 4px radius, 1px border (`#E6E3DC`).
- Focus state: Replaces border color with cobalt blue (`#2855D9`) without heavy outer glow rings; uses a crisp 1px outline offset.

### Lists & Case Study Summaries
- Border-separated list rows (1px hairline) instead of floating cards.
- Title in `Playfair Display`, followed by short methodological abstract in `Plus Jakarta Sans`, concluding with a metadata row (tools used, timeframe, role) set in restrained `JetBrains Mono`.

### Dividers & Rules
- 1px hairline rules using `#E6E3DC` (light) or `#2E2E2E` (dark), providing clear editorial structure across case studies.