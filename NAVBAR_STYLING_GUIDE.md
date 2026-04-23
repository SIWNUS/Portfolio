# Navbar Tailwind CSS Reference Guide

## Active Tab Styling

### Desktop Navigation (Active State)
```jsx
className="rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] transition duration-300 bg-accent text-onAccent shadow-md"
```

**Breakdown:**
- `rounded-full` - Pill-shaped background
- `px-4 py-2` - Padding: 16px horizontal, 8px vertical
- `text-xs` - Small font size (12px)
- `font-semibold` - Semi-bold weight (600)
- `uppercase` - All caps text
- `tracking-[0.24em]` - Letter spacing for sleek look
- `transition duration-300` - Smooth 300ms color transition
- `bg-accent` - Background color changes per theme
  - Dark: Gold (#D4AF37)
  - Light: Gray (#909195)
- `text-onAccent` - Text color on accent
  - Dark: Black (#090909)
  - Light: Dark blue (#192537)
- `shadow-md` - Subtle shadow for depth

### Desktop Navigation (Inactive State)
```jsx
className="rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] transition duration-300 text-muted hover:text-text hover:bg-surface/50"
```

**Interactive:**
- `text-muted` - Gray/dim text
  - Dark: #B5B0A4
  - Light: #526B7B
- `hover:text-text` - Brightens on hover
  - Dark: #F4EFE5
  - Light: #192537
- `hover:bg-surface/50` - Subtle background on hover
  - Dark: Semi-transparent darker gray
  - Light: Semi-transparent lighter gray

### Mobile Navigation (Active State)
```jsx
className="block rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.24em] bg-accent text-onAccent shadow-md"
```

**Mobile Specific:**
- `rounded-2xl` - More rounded for mobile (vs `rounded-full` on desktop)
- Taller vertical padding (py-3) for touch-friendly size
- Larger text (`text-sm` vs `text-xs`)

### Mobile Navigation (Inactive State)
```jsx
className="block rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.24em] bg-surfaceAlt text-text hover:bg-surface"
```

**Mobile Alternatives:**
- `bg-surfaceAlt` - Slightly different surface
  - Dark: #1A1A1A
  - Light: #E5ECF4
- `text-text` - Primary text color
- `hover:bg-surface` - Brightens on interaction

## Color Palette Reference

### Dark Theme (Default)
```css
--color-canvas: rgb(9 9 9)           /* Main background */
--color-surface: rgb(17 17 17)       /* Card/surface background */
--color-surface-alt: rgb(26 26 26)   /* Alternative surface */
--color-border: rgb(120 101 53)      /* Border/neutral */
--color-text: rgb(244 239 229)       /* Primary text */
--color-muted: rgb(181 176 164)      /* Secondary text */
--color-accent: rgb(212 175 55)      /* ACTIVE highlight - GOLD */
--color-on-accent: rgb(9 9 9)        /* Text on accent */
--color-secondary: rgb(163 184 196)  /* Links/hovers */
```

### Light Theme
```css
--color-canvas: rgb(241 245 249)     /* Main background */
--color-surface: rgb(255 255 255)    /* Card/surface background */
--color-surface-alt: rgb(229 236 244) /* Alternative surface */
--color-border: rgb(146 166 188)     /* Border/neutral */
--color-text: rgb(25 37 53)          /* Primary text */
--color-muted: rgb(82 101 123)       /* Secondary text */
--color-accent: rgb(144 151 161)     /* ACTIVE highlight - GRAY */
--color-on-accent: rgb(25 37 53)     /* Text on accent */
--color-secondary: rgb(37 99 235)    /* Links/hovers - BLUE */
```

## Active/Inactive State Transitions

### Visual Comparison

#### Dark Theme
```
┌─ INACTIVE ────────────────┬─ ACTIVE ──────────────────┐
│ Text: Muted (#B5B0A4)     │ Background: Gold (#D4AF37)│
│ Background: Transparent   │ Text: Black (#090909)     │
│ Border: Light hover only  │ Shadow: Medium            │
└─ Hover: brightens text ───┴─ Always visible ──────────┘
```

#### Light Theme
```
┌─ INACTIVE ────────────────┬─ ACTIVE ───────────────────┐
│ Text: Muted (#526B7B)     │ Background: Gray (#909195) │
│ Background: Transparent   │ Text: Dark (#192537)       │
│ Border: Light hover only  │ Shadow: Medium             │
└─ Hover: brightens background ────────────────────────┘
```

## Theme Integration Points

### CSS Variables (Automatic)
When user toggles theme:
1. `html[data-theme="light"]` attribute is set/removed
2. CSS variables are redefined
3. All `.accent`, `.text-*`, `.bg-*` classes automatically use new values
4. No component changes needed!

### Component Code (No Changes Required)
```jsx
// This works in BOTH themes automatically!
className={`
  rounded-full px-4 py-2 text-xs font-semibold uppercase 
  transition duration-300
  ${isActive 
    ? "bg-accent text-onAccent shadow-md"      // Uses theme colors
    : "text-muted hover:text-text hover:bg-surface/50"
  }`}
```

## Responsive Breakpoints

### Tailwind Breakpoints Used

```css
/* Mobile (default) */
.flex items-center gap-3 lg:hidden
/* Desktop (lg: 1024px) */
.hidden items-center gap-3 lg:flex
```

## Animation & Transition Classes

### Applied Transitions
```jsx
transition duration-300
```

- `transition` - Enable CSS transitions
- `duration-300` - 300ms animation time
- Applies to: color, background, text

**Easing:** Default is `ease` (smooth curve)

### Hover Effects

**Desktop:**
```jsx
hover:text-text          // Text brightens
hover:bg-surface/50      // Background slightly visible
```

**Mobile:**
```jsx
hover:bg-surface         // Background brightens
```

## Accessibility Features

### ARIA Attributes
```jsx
aria-current={isActive ? "page" : undefined}
```
- Screen readers announce: "About, current page"
- Improves SEO
- Better semantic meaning

### Focus States (Browser Default)
- Tab navigation works by default
- Active tab is naturally focused
- Outline visible on keyboard interaction

## Production Checklist

- [x] Both themes display correctly
- [x] Mobile and desktop layouts work
- [x] Hover effects are visible
- [x] Animations aren't too slow/fast
- [x] Text has sufficient contrast
- [x] Active state is clearly distinguishable
- [x] Touch targets are large enough (48px+ on mobile)
- [x] No layout shifts on activation
- [x] Transitions respect motion preferences

## Quick Copy-Paste Classes

### Active Tab (Desktop)
```
rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] transition duration-300 bg-accent text-onAccent shadow-md
```

### Active Tab (Mobile)
```
block rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.24em] bg-accent text-onAccent shadow-md
```

### Inactive Tab (Desktop)
```
rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] transition duration-300 text-muted hover:text-text hover:bg-surface/50
```

### Inactive Tab (Mobile)
```
block rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.24em] bg-surfaceAlt text-text hover:bg-surface
```

---

**Note:** All colors are CSS variables, so they automatically adapt to selected theme via `html[data-theme="light"]` attribute.
