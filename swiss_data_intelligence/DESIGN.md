---
name: Swiss Data Intelligence
colors:
  surface: '#131412'
  surface-dim: '#131412'
  surface-bright: '#393937'
  surface-container-lowest: '#0d0e0d'
  surface-container-low: '#1b1c1a'
  surface-container: '#1f201e'
  surface-container-high: '#292a28'
  surface-container-highest: '#343533'
  on-surface: '#e4e2de'
  on-surface-variant: '#e4beb5'
  inverse-surface: '#e4e2de'
  inverse-on-surface: '#30312e'
  outline: '#ab8981'
  outline-variant: '#5b403a'
  surface-tint: '#ffb4a2'
  primary: '#ffb4a2'
  on-primary: '#621100'
  primary-container: '#ff572e'
  on-primary-container: '#560e00'
  inverse-primary: '#b52800'
  secondary: '#4edea3'
  on-secondary: '#003824'
  secondary-container: '#00a572'
  on-secondary-container: '#00311f'
  tertiary: '#c8c6c1'
  on-tertiary: '#30312d'
  tertiary-container: '#92918c'
  on-tertiary-container: '#2a2a27'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad2'
  primary-fixed-dim: '#ffb4a2'
  on-primary-fixed: '#3c0700'
  on-primary-fixed-variant: '#8a1c00'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#e4e2dc'
  tertiary-fixed-dim: '#c8c6c1'
  on-tertiary-fixed: '#1b1c18'
  on-tertiary-fixed-variant: '#474743'
  background: '#131412'
  on-background: '#e4e2de'
  surface-variant: '#343533'
typography:
  display:
    fontFamily: Space Grotesk
    fontSize: 3.75rem
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Space Grotesk
    fontSize: 2.25rem
    fontWeight: '600'
    lineHeight: '1.15'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 2.5rem
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 1.75rem
    fontWeight: '500'
    lineHeight: '1.25'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 1.75rem
    fontWeight: '500'
    lineHeight: '1.3'
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 1.25rem
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Newsreader
    fontSize: 1.25rem
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: -0.005em
  body-md:
    fontFamily: Newsreader
    fontSize: 1.0625rem
    fontWeight: '400'
    lineHeight: '1.65'
    letterSpacing: 0em
  body-sm:
    fontFamily: Newsreader
    fontSize: 0.9375rem
    fontWeight: '400'
    lineHeight: '1.55'
    letterSpacing: 0em
  mono-data:
    fontFamily: JetBrains Mono
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: -0.01em
  mono-meta:
    fontFamily: JetBrains Mono
    fontSize: 0.6875rem
    fontWeight: '400'
    lineHeight: '1.4'
    letterSpacing: 0.06em
  label:
    fontFamily: Space Grotesk
    fontSize: 0.8125rem
    fontWeight: '500'
    lineHeight: '1.3'
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
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
  space-3xl: 6rem
---

## Brand & Style

This design system expresses the intersection of rigorous Swiss typography and high-performance data systems. Designed for an elite data analyst portfolio, it rejects whimsical decoration in favor of analytical clarity, architectural grid discipline, and deliberate contrast. 

The aesthetic is anchored in modernist editorial layout: high-contrast hierarchies, monospaced metadata fixtures, calibrated hairline dividers, and decisive accents. The emotional resonance is authoritative, razor-sharp, and quietly confident—evoking the technical credibility of modern developer platforms like Linear, the typographical exactitude of high-end business journalism, and the refinement of a dedicated intelligence agency.

## Colors

The palette operates on a dual-mode foundation with surgical intent:

### Dark Mode (Default)
- **Base Canvas:** `#111210` (deep charcoal with organic warmth; non-pure black)
- **Surface / Container:** `#191A17`
- **Sub-surface / Active Tint:** `#222420`
- **Text Primary:** `#F3F1EC` (creamy warm white, eliminating eye fatigue)
- **Text Secondary / Metadata:** `#8E8D88` (neutral slate gray)
- **Border / Divider:** `rgba(243, 241, 236, 0.08)` (subtle structural hairlines)

### Light Mode
- **Base Canvas:** `#F7F6F2` (tactile unbleached rag paper tone)
- **Surface / Container:** `#FFFFFF`
- **Sub-surface / Active Tint:** `#EFECE6`
- **Text Primary:** `#20211F` (deep mineral charcoal)
- **Text Secondary / Metadata:** `#6F6E69`
- **Border / Divider:** `rgba(32, 33, 31, 0.08)`

### Signal Colors (Shared)
- **Primary Accent (`#FF572E`):** Vivid burnt orange reserved strictly for high-conviction actions, focal highlights, active states, and cursor-linked hover interactions. Never use as generic background fills.
- **Data Metric Accent (`#10B981`):** Restrained emerald green for verified statistics, positive delta indicators, live system pings, and model confidence scores.

## Typography

Typography establishes an intellectual dialog between three disciplined typefaces:
- **Headings (Space Grotesk):** Provides structural, technical geometry. Tight trackings (`-0.01em` to `-0.03em`) mimic Swiss architectural posters.
- **Narrative Prose (Newsreader):** Injects editorial depth and long-form authority into case studies and analyst conclusions.
- **Telemetry & Labels (JetBrains Mono):** Drives precision for KPIs, execution times, sample sizes, methodology labels, and technical footnotes. All caps tracking (`0.06em`) applies to `mono-meta`.

## Layout & Spacing

The layout is built on an asymmetric 12-column Swiss grid system, balanced by deliberate whitespace and rigorous vertical flow:
- **Desktop (>= 1024px):** 12 columns with `1.5rem` gutters and `3rem` margins (max container width: `1280px`). Content follows 7:5 or 8:4 splits for narrative-to-telemetry visual tension.
- **Tablet (768px - 1023px):** 8 columns with `1.25rem` gutters and `2rem` margins.
- **Mobile (< 768px):** 4 columns with `1rem` gutters and `1.25rem` margins. Complex analytical modules stack vertically, with data readouts placed above narrative conclusions.

Spacing uses strict 4px/8px increments. Vertical rhythm between sections relies on `space-2xl` and `space-3xl`, creating the pacing of a physical editorial publication rather than a condensed web app.

## Elevation & Depth

This design system eliminates traditional soft drop shadows in favor of **structural boundary elevation**:
- **Borders & Dividers:** Visual layer segregation is achieved using `1px` structural hairlines (`rgba(243, 241, 236, 0.08)` in dark mode and `rgba(32, 33, 31, 0.08)` in light mode).
- **Z-Index Stratification:** Modals, floating inspector panels, and tooltips use backdrop filters (`backdrop-filter: blur(12px)`) combined with a `1px` high-contrast outer edge and solid dark underlay (`#191A17` at 85% opacity).
- **Ambient Hover Glow:** Interactive cards elevate on hover via subtle directional borders (`#FF572E` at 30% border opacity) without translating across the Y-axis.

## Shapes

The shape system is crisp, structural, and restrained:
- Base elements (buttons, badge tags, inputs) carry a subtle `2px` to `4px` corner radius (`roundedness: 1`).
- Larger containers and interactive project cells use a maximum of `6px` corner radius.
- Standard pills or circular avatars are avoided; interactive indicators, verification tags, and metric indicators remain strictly rectangular with `2px` micro-radii to preserve the engineering blueprint aesthetic.

## Components

### Project & Analysis Display (Anti-Cards)
- Avoid drop-shadowed white/dark cards. Instead, enclose case studies in continuous hairline grid cells (`1px` border with full grid alignment).
- Include an active metadata bar at the top of each cell rendered in `mono-meta` (e.g., `// REF: 042 / METRIC: +34.2% / PYTHON-DUCKDB`).

### Buttons & Interactive Controls
- **Primary Action:** Sharp `2px` radius, background `#FF572E`, foreground `#FFFFFF`, typography `label`. Hover triggers a crisp inversion to a transparent background with a `1px` `#FF572E` border.
- **Secondary Action:** Transparent base, hairline border (`rgba(243, 241, 236, 0.15)`), text `#F3F1EC`, hover state shifts surface to `#222420`.
- **Text Action:** `mono-data` with a leading dynamic symbol (`-> [01] Case Study`), underlines only on hover.

### Data Metric Displays & Telemetry Badges
- **Metric Tile:** Large `Space Grotesk` numerical value anchored by a top hairline border, followed by a `mono-data` description and an `#10B981` positive confirmation indicator.
- **Status Indicator:** `6px` square dot (not circular) pulsing subtly via CSS opacity next to green monospace text (`LIVE PIPELINE`, `VERIFIED RECOVERY`).

### Input Fields & Selectors
- Background `#191A17` (light mode `#FFFFFF`), `1px` hairline stroke border.
- Focus switches the border color directly to `#FF572E` without fuzzy focus rings.
- Placeholder text rendered in `Newsreader` italic, while active user-input renders in `Space Grotesk`.

### Lists & Case Study Indexes
- Border-bottom table layouts with alternating row highlighting.
- Left column anchors the case number in `mono-meta` (`01`, `02`), center column houses the project title in `Space Grotesk`, right column aligns business impact metrics in `#10B981`.