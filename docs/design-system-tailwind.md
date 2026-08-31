# Design System for Tailwind Digital

## 1. Visual Theme & Atmosphere

Tailwind Digital's visual theme radiates warmth through restraint. The entire page sits on a creamy, parchment-toned background (`#fbf7f4`) that immediately separates it from standard stark-white agency sites. The dark jet black text (`#1f2a33`) against this warm parchment creates a rich, elegant contrast ratio that is gentle on the eyes while maintaining sharp readability.

The typography pairing uses **Playfair Display** for editorial headlines and titles, paired with **Poppins** for clean, modern body copy, UI controls, and buttons.

### Hero Heading Typography Signature
The Hero Heading uses **Playfair Display Medium (Weight 500)** scaling up to `lg:text-8xl` (6rem / 96px) with tight line-height (`1.1`) and tight tracking (`tracking-tight`), coupled with a true **Italic Accent Span (Weight 500 Italic)**.

Accent colors include **Sunlit Clay** (`#d4a667`) for brand highlights, badges, key interactive focal points, page background canvas, and card surfaces, supported by **Blue Slate** (`#455a64`), **Pale Slate** (`#b7c6d1`), **Lavender Blush** (`#f2e6e6`), and **Taupe** (`#a89c93`).

What makes Tailwind Digital's visual system distinctive is its opacity-driven depth model. Rather than using a traditional gray scale, the system modulates `#1f2a33` at varying opacities (0.03, 0.04, 0.4, 0.82–0.83) to create a unified tonal range. The border system follows suit: `1px solid #b7c6d1` for light divisions and `1px solid #455a64` for stronger interactive boundaries.

**Key Characteristics:**
- Warm parchment background (`#fbf7f4`) — deliberate cream that feels hand-selected
- **Playfair Display** serif typeface for high-end editorial headlines (Hero: `lg:text-8xl` Weight 500 Medium + Italic 500)
- **Poppins** geometric sans-serif for body text, buttons, and UI controls
- 50-950 Tailwind shade scales for primary color families (Sunlit Clay ladder combines brand accent with warm canvas & card surfaces)
- Inset shadow technique on buttons: `rgba(255,255,255,0.2) 0px 0.5px 0px 0px inset, rgba(0,0,0,0.2) 0px 0px 0px 0.5px inset`
- Warm neutral border palette: `#b7c6d1` for subtle, `#455a64` for interactive elements
- Full-pill radius (`9999px`) with `#e0e6eb` background and no border used for action pills and card badges
- Focus state uses `rgba(0,0,0,0.1) 0px 4px 12px` shadow for soft, warm emphasis

---

## 2. Color Palette & 50–950 Tailwind Shade Scales

### Primary Color Palette Overview
| Color Name | Hex Code | RGB | Role / Usage |
| :--- | :--- | :--- | :--- |
| **Jet Black** | `#1f2a33` | `rgb(31, 42, 51)` | Primary text, main headings, dark CTA button fill |
| **Blue Slate** | `#455a64` | `rgb(69, 90, 100)` | Secondary headings, strong subtext, interactive borders |
| **Pale Slate** | `#b7c6d1` | `rgb(183, 198, 209)` | Card borders, dividers, chip outlines, ghost button border/hover |
| **Parchment** | `#fbf7f4` | `rgb(251, 247, 244)` | Page background canvas, card fills |
| **Sunlit Clay** | `#d4a667` | `rgb(212, 166, 103)` | Brand accent, badges, highlight CTAs, star icons, warm surfaces |
| **Lavender Blush** | `#f2e6e6` | `rgb(242, 230, 230)` | Soft tag backgrounds, subtle hover states |
| **Taupe** | `#a89c93` | `rgb(168, 156, 147)` | Captions, muted text, secondary metadata |

### 50–950 Tailwind Shade Scales

#### 1. Jet Black (`#1f2a33`)
```css
--color-jet-black-50:  #eff3f5;
--color-jet-black-100: #dfe6ec;
--color-jet-black-200: #c0cdd8;
--color-jet-black-300: #a0b4c5;
--color-jet-black-400: #819bb1;
--color-jet-black-500: #61839e;
--color-jet-black-600: #4e687e;
--color-jet-black-700: #3a4e5f;
--color-jet-black-800: #27343f;
--color-jet-black-900: #131a20;
--color-jet-black-950: #0e1216;
```

#### 2. Blue Slate (`#455a64`)
```css
--color-blue-slate-50:  #f0f3f5;
--color-blue-slate-100: #e1e7ea;
--color-blue-slate-200: #c3cfd5;
--color-blue-slate-300: #a5b8c0;
--color-blue-slate-400: #87a0ab;
--color-blue-slate-500: #698896;
--color-blue-slate-600: #546d78;
--color-blue-slate-700: #3f525a;
--color-blue-slate-800: #2a363c;
--color-blue-slate-900: #151b1e;
--color-blue-slate-950: #0f1315;
```

#### 3. Pale Slate (`#b7c6d1`)
```css
--color-pale-slate-50:  #eff3f5;
--color-pale-slate-100: #e0e6eb;
--color-pale-slate-200: #c1ced7;
--color-pale-slate-300: #a2b5c3;
--color-pale-slate-400: #839daf;
--color-pale-slate-500: #63849c;
--color-pale-slate-600: #506a7c;
--color-pale-slate-700: #3c4f5d;
--color-pale-slate-800: #28353e;
--color-pale-slate-900: #141a1f;
--color-pale-slate-950: #0e1316;
```

#### 4. Sunlit Clay (`#d4a667`) — Combined Brand Accent, Page Canvas & Card Surfaces
```css
--color-sunlit-clay-50:  #f9f3eb;
--color-sunlit-clay-100: #f4e8d7;
--color-sunlit-clay-200: #e9d1af;
--color-sunlit-clay-300: #ddba88;
--color-sunlit-clay-400: #d2a360;
--color-sunlit-clay-500: #c78b38;
--color-sunlit-clay-600: #9f702d;
--color-sunlit-clay-700: #775422;
--color-sunlit-clay-800: #503816;
--color-sunlit-clay-900: #281c0b;
--color-sunlit-clay-950: #1c1408;
```

#### 5. Lavender Blush (`#f2e6e6`)
```css
--color-lavender-blush-50:  #f6eeee;
--color-lavender-blush-100: #eedddd;
--color-lavender-blush-200: #dcbcbc;
--color-lavender-blush-300: #cb9a9a;
--color-lavender-blush-400: #ba7878;
--color-lavender-blush-500: #a85757;
--color-lavender-blush-600: #874545;
--color-lavender-blush-700: #653434;
--color-lavender-blush-800: #432323;
--color-lavender-blush-900: #221111;
--color-lavender-blush-950: #180c0c;
```

#### 6. Taupe (`#a89c93`)
```css
--color-taupe-50:  #f4f2f1;
--color-taupe-100: #e8e5e3;
--color-taupe-200: #d2cbc6;
--color-taupe-300: #bbb1aa;
--color-taupe-400: #a4988e;
--color-taupe-500: #8e7e71;
--color-taupe-600: #71655b;
--color-taupe-700: #554b44;
--color-taupe-800: #39322d;
--color-taupe-900: #1c1917;
--color-taupe-950: #141210;
```

---

## 3. Typography Rules

### Font Family
- **Headings & Titles**: `Playfair Display`, serif (Weights: 400, 500 Medium, 600, 700, Italic)
- **Body & UI**: `Poppins`, sans-serif (Weights: 300, 400, 500, 600)

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Color |
|------|------|------|--------|-------------|----------------|-------|
| Hero Display Heading | Playfair Display | `text-5xl sm:text-6xl md:text-7xl lg:text-8xl` (6rem / 96px) | 500 Medium | 1.10 (tight) | -0.5px (tight) | `#1f2a33` |
| Hero Accent Italic | Playfair Display | `text-5xl sm:text-6xl md:text-7xl lg:text-8xl` (6rem / 96px) | 500 Italic | 1.10 (tight) | -0.5px (tight) | `#1f2a33` |
| Section Heading | Playfair Display | 48px (3.00rem) | 500/600 | 1.05 (tight) | -0.5px | `#1f2a33` |
| Sub-heading | Playfair Display | 36px (2.25rem) | 500/600 | 1.10 (tight) | normal | `#455a64` |
| Card Title | Playfair Display | 20px (1.25rem) | 600 | 1.25 (tight) | normal | `#1f2a33` |
| Body Large | Poppins | 18px (1.13rem) | 400 | 1.40 | normal | `#455a64` |
| Body | Poppins | 16px (1.00rem) | 400 | 1.50 | normal | `#455a64` |
| Button | Poppins | 16px (1.00rem) | 500 | 1.50 | normal | `#fbf7f4` |
| Caption | Poppins | 14px (0.88rem) | 400 | 1.50 | normal | `#a89c93` |

---

## 4. Component Stylings

### Buttons

**Primary Dark (Inset Shadow)**
- Background: `#1f2a33` (Jet Black)
- Text: `#fbf7f4` (Parchment)
- Font: `Poppins`, Weight 500
- Padding: 10px 20px
- Radius: 6px
- Shadow: `rgba(255,255,255,0.2) 0px 0.5px 0px 0px inset, rgba(0,0,0,0.2) 0px 0px 0px 0.5px inset, rgba(0,0,0,0.05) 0px 1px 2px 0px`
- Active: opacity 0.85
- Focus: `rgba(0,0,0,0.1) 0px 4px 12px` shadow
- Use: Primary CTA ("Start Building", "Get Started")

**Ghost / Outline**
- Default Background: transparent
- Default Text: `#1f2a33` (Jet Black)
- Default Border: `1px solid #b7c6d1` (Pale Slate)
- Hover Background: `#b7c6d1` (Pale Slate)
- Hover Border: `1px solid #b7c6d1` (Pale Slate)
- Hover Text: `#1f2a33` (Jet Black)
- Font: `Poppins`, Weight 500
- Padding: 10px 20px
- Radius: 6px
- Use: Secondary actions ("View Documentation", "Log In")

**Cream Surface**
- Background: `#fbf7f4` (Parchment)
- Text: `#1f2a33` (Jet Black)
- Padding: 8px 16px
- Radius: 6px
- No border
- Active: opacity 0.8
- Use: Tertiary actions, toolbar buttons

**Pill Icon Button & Card Badges**
- Background: `#e0e6eb` (Pale Slate 100)
- Text: `#1f2a33` (Jet Black)
- Radius: 9999px (full pill)
- Border: No border
- Hover: opacity 0.8
- Use: Action pills, icon buttons, card badges (`Template`, `Featured`, `Starter`)
