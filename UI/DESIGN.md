---
name: Rozdi Architectural Systems
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#5e5f55'
  on-secondary: '#ffffff'
  secondary-container: '#e0e0d4'
  on-secondary-container: '#62635a'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1a1c1c'
  on-tertiary-container: '#838484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#e3e3d7'
  secondary-fixed-dim: '#c7c7bb'
  on-secondary-fixed: '#1a1c15'
  on-secondary-fixed-variant: '#46483e'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '400'
    lineHeight: '1.4'
spacing:
  unit: 4px
  gutter: 24px
  margin-desktop: 64px
  margin-tablet: 32px
  margin-mobile: 16px
  container-max: 1440px
---

## Brand & Style

The design system for this product is rooted in **Architectural Minimalism** and **Precision Research**. It targets high-stakes BPO decision-makers who value clarity, rigor, and understated luxury. The UI must evoke a sense of "digital porcelain"—smooth, matte, and structural.

The visual style is a hybrid of **Minimalism** and **Glassmorphism**, emphasizing negative space and structural integrity. Every element should feel intentionally placed, avoiding unnecessary decoration in favor of functional elegance. The emotional response is one of calm authority and institutional trust.

## Colors

The palette is strictly limited to create a high-end, gallery-like atmosphere. 

- **Deep Charcoal (#1A1A1A):** Used for typography and primary structural elements to provide "weight" and authority.
- **Premium White (#FFFFFF):** The base canvas, representing purity and precision.
- **Soft Cream (#FDFDF0):** Reserved for container backgrounds and elevated surfaces to differentiate research-heavy content from the canvas.
- **Light Gray (#F9F9F9):** Used for subtle sectioning and background transitions.
- **Accents:** No vibrant accent colors are used. Differentiation is achieved through weight, scale, and texture rather than hue.

## Typography

This design system utilizes **Inter** exclusively to maintain a systematic, utilitarian aesthetic. 

- **Headlines:** Must be bold and impactful. Negative letter-spacing is applied to larger sizes to increase the feeling of "compact precision."
- **Labels:** Small caps and increased letter spacing are used for metadata and utility labels to create a sophisticated, editorial look.
- **Hierarchy:** Contrast is driven by significant jumps in font weight and size. Body text remains airy and highly legible to facilitate long-form research reading.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** with an **Asymmetric Content Model**. While the main structure aligns to a 12-column grid, individual cards and data modules should be offset or varying in width to create a modern, architectural rhythm.

- **Grid Lines:** Use thin 1px borders (`#E5E7EB`) to define zones rather than relying on heavy shadows or color blocks. This mimics architectural blueprints.
- **Whitespace:** Generous padding is mandatory. Elements should never feel crowded.
- **Breakpoints:**
  - **Desktop (1200px+):** 12 columns, 64px margins.
  - **Tablet (768px-1199px):** 8 columns, 32px margins.
  - **Mobile (Up to 767px):** 4 columns, 16px margins, vertical stack.

## Elevation & Depth

Depth is conveyed through material properties rather than traditional shadows.

1.  **Tonal Layering:** The primary depth indicator is the shift from White (#FFFFFF) to Soft Cream (#FDFDF0).
2.  **Glassmorphism:** Use backdrop filters (`blur: 20px`) with high transparency (80-90%) for navigation bars and overlays. This creates a "frosted glass" effect that feels premium and light.
3.  **Thin Outlines:** Every container uses a 1px border. For elevated states, the border remains 1px but shifts from Light Gray to Charcoal.
4.  **Matte Porcelain:** 3D assets and icons should avoid glossy highlights. Use soft, directional light to define form, mimicking the texture of unglazed clay or matte tech-wear materials.

## Shapes

The design system utilizes **Sharp (0px)** corners for all structural elements including buttons, cards, and input fields. This reinforces the "architectural precision" and high-end corporate tone. 

- **Hard Edges:** No radius on primary containers.
- **Exceptions:** Only circular elements (e.g., status indicators or profile avatars) are permitted to break the rectangular grid.

## Components

**Buttons**
- **Primary:** Solid #1A1A1A background, white text, sharp corners. No hover shadow, only a slight opacity shift to 90%.
- **Secondary:** Transparent background, 1px charcoal border, sharp corners.

**Cards (Asymmetric)**
- Use Soft Cream (#FDFDF0) for the background.
- Apply a 1px border in #E5E7EB. 
- Content within cards should have generous internal padding (min 32px).

**Input Fields**
- Minimalist underline or 1px border. 
- Labels should use the `label-sm` style, positioned above the input.
- Focus state is a simple change in border color to charcoal.

**Glass Overlays**
- Used for modals and dropdown menus. 
- White background at 85% opacity with a `backdrop-filter: blur(16px)`.

**Data Visualizations**
- Use strictly monochromatic tones (Charcoal, Gray, White). 
- Lines must be hairline thin (0.5px to 1px).