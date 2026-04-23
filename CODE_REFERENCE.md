# Quick Reference - Code Implementation

## 📌 Key Code Snippets

### 1. useActiveSection Hook - The Magic

```javascript
// src/hooks/useActiveSection.js

import { useEffect, useState } from "react";

export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const NAVBAR_HEIGHT = 70; // Adjust based on your navbar height

    const observerOptions = {
      rootMargin: `-${NAVBAR_HEIGHT}px 0px -60% 0px`,
      threshold: [0.1, 0.25, 0.5, 0.75],
    };

    let activeIndex = -1;

    const observer = new IntersectionObserver((entries) => {
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);

      if (visibleEntries.length === 0) return;

      const mostVisibleEntry = visibleEntries.reduce((prev, current) =>
        current.intersectionRatio > prev.intersectionRatio ? current : prev,
      );

      if (mostVisibleEntry?.target?.id) {
        const newIndex = sectionIds.indexOf(mostVisibleEntry.target.id);

        if (newIndex !== activeIndex) {
          activeIndex = newIndex;
          setActiveSection(mostVisibleEntry.target.id);
        }
      }
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, [sectionIds]);

  return activeSection;
}
```

**What It Does:**
- Tracks which section is most visible in the viewport
- Returns the ID of the active section
- Updates only when section actually changes (prevents re-renders)
- Automatically cleans up when component unmounts

### 2. Navbar handleNavClick Function

```javascript
// Inside Navbar component

const handleNavClick = (e, sectionId) => {
  closeMenu(); // Close mobile menu if open

  // Small delay for menu close animation
  setTimeout(() => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 70;
      const targetPosition =
        element.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  }, 50);
};
```

**What It Does:**
- Closes mobile menu
- Calculates scroll position accounting for navbar
- Scrolls smoothly to target section
- Works with browser back button

### 3. Navbar JSX - Desktop Navigation

```jsx
<div className="hidden items-center gap-3 lg:flex">
  <ul className="flex items-center gap-2 rounded-full border border-border/70 bg-surface/75 px-3 py-2">
    {navItems.map((item) => {
      const isActive = activeSection === item.id;

      return (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(e, item.id);
            }}
            className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] transition duration-300 ${
              isActive
                ? "bg-accent text-onAccent shadow-md"
                : "text-muted hover:text-text hover:bg-surface/50"
            }`}
            aria-current={isActive ? "page" : undefined}
          >
            {item.label}
          </a>
        </li>
      );
    })}
  </ul>
  <ThemeToggle theme={theme} onToggle={onToggleTheme} />
</div>
```

**Key Points:**
- Active: Gold/gray background with shadow
- Inactive: Text only with hover effect
- aria-current helps accessibility
- Tablet/desktop only (hidden below lg)

### 4. Navbar JSX - Mobile Navigation

```jsx
{isOpen ? (
  <div className="border-t border-border/60 bg-surface/95 px-5 py-4 lg:hidden">
    <ul className="flex flex-col gap-2">
      {navItems.map((item) => {
        const isActive = activeSection === item.id;

        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(e, item.id);
              }}
              className={`block rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.24em] transition ${
                isActive
                  ? "bg-accent text-onAccent shadow-md"
                  : "bg-surfaceAlt text-text hover:bg-surface"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              {item.label}
            </a>
          </li>
        );
      })}
    </ul>
  </div>
) : null}
```

**Key Points:**
- Larger text and padding for mobile
- Touch-friendly sizing
- Auto-closes via handleNavClick's closeMenu()
- Mobile only (hidden on lg and above)

### 5. Section Structure Example

```jsx
// src/components/AboutSection.jsx

export function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <Reveal>
        <SectionIntro
          eyebrow="About"
          title="Building software close to real operations"
          description="My work is shaped by environments where software needs to be useful."
        />
      </Reveal>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        {/* Content here */}
      </div>
    </section>
  );
}
```

**Critical:** 
- Section must have `id="about"` (or matching ID from navItems)
- ID must be unique across page
- Section root element should be `<section>` tag

### 6. CSS Setup

```css
/* src/styles/index.css */

html {
  scroll-behavior: smooth; /* Enable smooth scroll */
}

/* Respect user's motion preferences */
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
```

**Note:** This is already in your index.css, no changes needed!

### 7. Tailwind Config Colors

```javascript
// tailwind.config.js - Already configured!

colors: {
  canvas: "rgb(var(--color-canvas) / <alpha-value>)",
  surface: "rgb(var(--color-surface) / <alpha-value>)",
  accent: "rgb(var(--color-accent) / <alpha-value>)", // Changes with theme!
  text: "rgb(var(--color-text) / <alpha-value>)",
  muted: "rgb(var(--color-muted) / <alpha-value>)",
  // ... etc
}
```

**How It Works:**
- Uses CSS variables for all colors
- CSS variables change when theme switches
- Tailwind classes automatically update!

---

## 🎨 Tailwind Classes Quick Reference

### Active Tab Classes

**Desktop Active:**
```
rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] transition duration-300 bg-accent text-onAccent shadow-md
```

**Mobile Active:**
```
block rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.24em] bg-accent text-onAccent shadow-md
```

### Inactive Tab Classes

**Desktop Inactive:**
```
rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] transition duration-300 text-muted hover:text-text hover:bg-surface/50
```

**Mobile Inactive:**
```
block rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.24em] bg-surfaceAlt text-text hover:bg-surface
```

---

## 🔧 Customization Guide

### Change Navbar Height

```javascript
// In useActiveSection.js
const NAVBAR_HEIGHT = 70; // Change this to your navbar height

// Also in handleNavClick
const navbarHeight = 70; // And this
```

**How to find your navbar height:**
1. Open DevTools (F12)
2. Inspect navbar element
3. Look at computed height
4. Update both constants

### Adjust Scroll Offset

If sections highlight too early/late:

```javascript
// In useActiveSection.js
const observerOptions = {
  rootMargin: `-${NAVBAR_HEIGHT}px 0px -60% 0px`,
  //                                 ^^^
  // Change this number to adjust when lower sections become active
  // -60% = current setting (good default)
  // -70% = lower sections take longer to activate
  // -50% = lower sections activate sooner
};
```

### Change Smooth Scroll Speed

```javascript
// In handleNavClick
window.scrollTo({
  top: targetPosition,
  behavior: "smooth", // Built-in, no customization possible
  // For custom speeds, use .animate() but causes issues
  // Smooth is best for all browsers/devices
});
```

### Update Animation Duration

```jsx
// In Navbar JSX - active/inactive classes
className={`rounded-full px-4 py-2 ... transition duration-300 ${
  // duration-300 = 300ms transition
  // Change to duration-200 for faster (200ms)
  // Change to duration-500 for slower (500ms)
}`}
```

---

## 🐛 Common Issues & Fixes

### Section Not Highlighting

**Check:**
```bash
# 1. Does section have an ID?
grep 'id="about"' src/components/AboutSection.jsx

# 2. Is it in navItems?
grep -A 6 'navItems = ' src/data/portfolio.js

# 3. Are there any console errors?
# Open DevTools → Console → look for red errors
```

### Wrong Section Stays Active

**Likely Cause:** rootMargin values are off

**Fix:**
```javascript
// Try these values:
rootMargin: `-70px 0px -70% 0px`  // More aggressive bottom
rootMargin: `-70px 0px -50% 0px`  // Less aggressive bottom
rootMargin: `-80px 0px -60% 0px`  // Increase top offset
```

### Smooth Scroll Not Working

**Check:**
1. CSS has `scroll-behavior: smooth;` ✓ (you do)
2. Not in prefers-reduced-motion state
3. Browser supports smooth scroll (all modern browsers do)

**Note:** There's no way to adjust scroll speed in CSS, it's handled by browser

### Mobile Menu Doesn't Close

**Check:**
```jsx
// Make sure this exists in handleNavClick:
const handleNavClick = (e, sectionId) => {
  closeMenu(); // Must call this!
  
  setTimeout(() => {
    // scroll code
  }, 50);
};
```

---

## 📊 Testing Code

### Manual Test Script

```javascript
// Paste in console to test IntersectionObserver

const sections = document.querySelectorAll('[id]');
sections.forEach(section => {
  const rect = section.getBoundingClientRect();
  const visible = rect.top < window.innerHeight && rect.bottom > 0;
  console.log(`${section.id}: top=${rect.top}, bottom=${rect.bottom}, visible=${visible}`);
});
```

### Check Active Section

```javascript
// In browser console
const activeTab = document.querySelector('[aria-current="page"]');
console.log('Active section:', activeTab?.textContent);
```

### Debug Navbar Height

```javascript
// In browser console
const navbar = document.querySelector('header');
console.log('Navbar height:', navbar.offsetHeight);
```

---

## 🚀 Performance Tips

1. **Avoid too many threshold values:**
   ```javascript
   threshold: [0.1, 0.25, 0.5, 0.75] // Good (4 values)
   threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] // Too many!
   ```

2. **Don't scroll on every pixel:**
   - Already handled by `behavior: "smooth"`
   - Native implementation is most efficient

3. **Keep section IDs simple:**
   - Use lowercase: `id="about"` ✓
   - Not: `id="AboutMeSection"` ✗

---

## ✅ Verification Checklist

After implementing:

- [ ] All sections have unique IDs matching navItems
- [ ] Navbar highlights correct section when scrolling
- [ ] No console errors or warnings
- [ ] Mobile menu closes after clicking nav items
- [ ] Smooth scroll works when clicking navbar
- [ ] Theme toggle updates active tab color
- [ ] Works in both dark and light themes
- [ ] No flickering between sections
- [ ] Touch targets on mobile are large (48px+)
- [ ] Keyboard tab navigation works

---

**Ready to deploy!** No additional configuration needed.
