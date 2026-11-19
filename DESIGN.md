# Design System: UCSD-aligned site

Source: UC San Diego brand guidelines (brand.ucsd.edu). Values marked **[official]** come from the guidelines. Values marked **[house rule]** are our own choices, because UCSD does not publish web spacing, grids or components.

Claude: follow this file for all UI work. Do not invent new colors, fonts or spacing values.

---

## 1. Colors

### Core [official]
| Token | Name | HEX | Use |
|---|---|---|---|
| `--ucsd-navy` | Navy (PMS 2767) | `#182B49` | Primary: header, footer, headings, dark sections |
| `--ucsd-blue` | Blue (PMS 3015) | `#00629B` | Links, primary buttons, accents on light backgrounds |
| `--ucsd-gold` | Gold (PMS 1245) | `#C69214` | Small highlights; text only on Navy or Black |
| `--ucsd-yellow` | Yellow (PMS 116) | `#FFCD00` | CTAs and emphasis on Navy; never as text on white |

### Accents [official]: use sparingly, never as the dominant color
| Token | HEX |
|---|---|
| `--ucsd-cyan` (Turquoise, PMS 3115) | `#00C6D7` |
| `--ucsd-green` (PMS 7490) | `#6E963B` |
| `--ucsd-bright-yellow` (PMS 3945) | `#F3E500` |
| `--ucsd-orange` (PMS 144) | `#FC8900` |
| `--ucsd-magenta` | `#D462AD` |

### Neutrals [official]
| Token | HEX | Use |
|---|---|---|
| `--ucsd-white` | `#FFFFFF` | Default page background |
| `--ucsd-sand` | `#F5F0E6` | Alternate section background, cards |
| `--ucsd-warm-gray` | `#B6B1A9` | Borders, dividers |
| `--ucsd-cool-gray` | `#747678` | Secondary text (on white only) |
| `--ucsd-black` | `#000000` | Rarely; prefer Navy for text |

### Rules [official]
- Every design must include blue. For a secondary color, use yellow or another blue.
- Normal text needs a contrast ratio of at least **4.5:1** (WCAG AA). Large text (≥24px, or ≥18.66px bold) needs at least 3:1.

### Contrast cheat sheet (computed)
Pass = AA for normal text. Large = OK only for large text. Everything not listed fails.

| Background | Text that passes | Large text only |
|---|---|---|
| White | Navy 14.2, Blue 6.5, Cool Gray 4.6, Black | Green 3.4, Magenta 3.4 |
| Sand | Navy 12.5, Blue 5.7, Black | Cool Gray 4.0, Green 3.0, Magenta 3.0 |
| Navy | White 14.2, Sand 12.5, Bright Yellow 10.8, Yellow 9.4, Cyan 6.8, Warm Gray 6.7, Orange 5.9, Gold 5.1 | Magenta 4.2, Green 4.1 |
| Blue | White 6.5, Sand 5.7, Bright Yellow 5.0 | Yellow 4.3, Cyan 3.1 |

**Never:** Yellow, Gold, Cyan or Orange text on white; Blue text on Navy; Navy text on Blue.

---

## 2. Typography

### Fonts
| Role | Official font | Free web substitute (use this) |
|---|---|---|
| Body, subheads | Brix Sans (licensed) | **Roboto** (the brand's recommended web substitute, also used in UCSD's CMS). The print guide recommends Source Sans; pick one, don't mix. |
| Headlines (H1, eyebrows) | Refrigerator Deluxe (condensed) | **Teko** |
| Formal / long-form serif (optional) | Chronicle | Skip it, or use sparingly |
| Fallback stack | | `"Helvetica Neue", Helvetica, Arial, sans-serif` |

### Hierarchy [official, translated to CSS]
| Level | Font / weight | Case | letter-spacing | line-height |
|---|---|---|---|---|
| H1 heading | Teko 700 | UPPERCASE | 0 | 0.85 |
| H2 subheading | Roboto 900 | UPPERCASE | 0.175em | 1.6 |
| H3 eyebrow (small label above a heading) | Teko 600 | UPPERCASE | 0.08em | 1.3 |
| Body | Roboto 400 (+ italic) | Sentence case | 0 | 1.4 |

- Body size on the web: **12–16px** [official]. Use 16px for main text and 14px for captions [house rule].
- Body text is never all caps or all bold [official].
- Headlines stand out through size, color or font contrast [official].

### Type scale [house rule]
H1 `clamp(2.5rem, 6vw, 4.5rem)` · H2 `1.5rem` · H3 eyebrow `1rem` · body `1rem` · small `0.875rem`

---

## 3. Spacing, layout and margins [house rule]
UCSD does not publish these, so use these values everywhere:

- **Spacing scale (4px base):** 4, 8, 12, 16, 24, 32, 48, 64, 96px. No values outside this scale.
- **Content max-width:** 1200px, centered. Long text blocks max 70ch.
- **Page side margins:** 16px on mobile, 24px on tablet, 32px on desktop (≥1024px).
- **Section vertical padding:** 48px on mobile, 96px on desktop.
- **Grid:** 12 columns, 24px gutter (4 columns on mobile).
- **Breakpoints:** 640 / 768 / 1024 / 1280px.
- **Radius:** 4px for buttons and inputs, 8px for cards. No pill shapes, no huge rounding.
- **Shadows:** minimal. Prefer a 1px Warm Gray border.

---

## 4. Components [house rule, using official colors]
- **Header:** Navy background, white site name at top left, logo area at top right (that is UCSD's placement convention).
- **Primary button:** Yellow background, Navy text, 600 weight, 12px 24px padding, 4px radius. On hover, darken to Gold background with Navy text.
- **Secondary button:** Blue background with white text, or a 2px Blue outline with Blue text on white.
- **Links:** Blue, underlined in body text. On Navy, use Yellow or White.
- **Cards:** White or Sand background, 1px Warm Gray border, 8px radius, 24px padding.
- **Focus states:** visible 2px Cyan (on Navy) or Blue (on white) outline with a 2px offset. Never remove the outline.
- **Footer:** Navy background, Sand or White text.

---

## 5. Logos [official]
- On official campus websites the UCSD logo goes in the masthead, usually with the site name at top left and the logo at top right.
- In color, the logo always uses Navy (PMS 2767) and Gold (PMS 1245).
- For an AS or student-org site, use AS's own logo, and confirm with AS before using the UC San Diego logo. Don't imply university endorsement on an unofficial site.

---

## 6. Don'ts
- No purple or indigo, no gradients other than subtle Navy→Blue, no glassmorphism.
- No emoji as icons. Use one icon set consistently (e.g. Lucide).
- No centered-everything layouts. Left-align body text.
- No accent color as the dominant color of a page.
- Don't mix Roboto and Source Sans.

---

## 7. CSS tokens
```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400&family=Teko:wght@600;700&display=swap');

:root {
  /* core */
  --ucsd-navy: #182B49;
  --ucsd-blue: #00629B;
  --ucsd-gold: #C69214;
  --ucsd-yellow: #FFCD00;
  /* accents */
  --ucsd-cyan: #00C6D7;
  --ucsd-green: #6E963B;
  --ucsd-bright-yellow: #F3E500;
  --ucsd-orange: #FC8900;
  --ucsd-magenta: #D462AD;
  /* neutrals */
  --ucsd-white: #FFFFFF;
  --ucsd-sand: #F5F0E6;
  --ucsd-warm-gray: #B6B1A9;
  --ucsd-cool-gray: #747678;

  /* type */
  --font-body: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-display: "Teko", "Roboto Condensed", "Arial Narrow", sans-serif;

  /* spacing */
  --space-1: 4px;  --space-2: 8px;  --space-3: 12px; --space-4: 16px;
  --space-5: 24px; --space-6: 32px; --space-7: 48px; --space-8: 64px; --space-9: 96px;

  --container: 1200px;
  --radius-sm: 4px;
  --radius-md: 8px;
}

body { font-family: var(--font-body); font-size: 16px; line-height: 1.4; color: var(--ucsd-navy); background: var(--ucsd-white); }
h1 { font-family: var(--font-display); font-weight: 700; text-transform: uppercase; line-height: 0.85; letter-spacing: 0; }
h2 { font-family: var(--font-body); font-weight: 900; text-transform: uppercase; letter-spacing: 0.175em; line-height: 1.6; }
.eyebrow { font-family: var(--font-display); font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; line-height: 1.3; }
a { color: var(--ucsd-blue); }
```
