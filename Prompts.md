# Prompts.md — AI Assistance Log
## Sprint 1: The Corporate Brand — Prodesk IT Landing Page

This file logs all AI prompts used during the development of this project, as required by the Sprint 1 submission guidelines.

---

## Tool Used
- **Claude (Anthropic)** — via claude.ai

---

## Prompt Log

---

### Prompt 1
**Purpose:** Project structure planning

**Prompt:**
> "I need to build a responsive landing page for Prodesk IT using raw CSS (Flexbox/Grid). It should have a Navbar, Hero section, Services grid with 3 cards, and a Footer. How should I structure my files?"

**What I learned:**
Understood how to organize a simple HTML/CSS/JS project with separate files for structure (HTML), styling (CSS), and behavior (JS).

---

### Prompt 2
**Purpose:** Navbar layout

**Prompt:**
> "How do I align a logo to the left and navigation links to the right using CSS Flexbox?"

**What I learned:**
Used `display: flex`, `justify-content: space-between`, and `align-items: center` on the navbar container to achieve the logo-left, links-right layout.

---

### Prompt 3
**Purpose:** Responsive hamburger menu

**Prompt:**
> "How do I create a hamburger menu for mobile that toggles navigation links using vanilla JavaScript and CSS?"

**What I learned:**
Used a `<button>` with a hamburger icon, toggled a CSS class on the nav links using JavaScript `classList.toggle()`, and used a `@media` query to hide/show elements based on screen width.

---

### Prompt 4
**Purpose:** Hero section layout

**Prompt:**
> "How do I center text and a CTA button vertically and horizontally in a Hero section using CSS Flexbox?"

**What I learned:**
Used `display: flex`, `flex-direction: column`, `align-items: center`, and `justify-content: center` on the hero container with a `min-height` to fill the viewport.

---

### Prompt 5
**Purpose:** Services grid layout

**Prompt:**
> "How do I create a 3-column card grid using CSS Grid that collapses to 1 column on mobile?"

**What I learned:**
Used `display: grid`, `grid-template-columns: repeat(3, 1fr)`, and a `@media` query to switch to `grid-template-columns: 1fr` on smaller screens.

---

### Prompt 6
**Purpose:** Footer design

**Prompt:**
> "How do I build a simple footer with copyright text and social media icons using raw CSS?"

**What I learned:**
Used Flexbox to layout the footer content and added social icons using emoji or icon fonts, styled with hover effects.

---

### Prompt 7
**Purpose:** CSS hover effects on cards and buttons

**Prompt:**
> "How do I add a hover lift/shadow effect on cards and a color change on buttons using only CSS?"

**What I learned:**
Used `transition`, `transform: translateY(-5px)`, and `box-shadow` for card hover effects. Used `:hover` pseudo-class on buttons to change background color.

---

### Prompt 8
**Purpose:** Dark/Light mode toggle

**Prompt:**
> "How do I implement a dark/light mode toggle in vanilla JavaScript by toggling a CSS class on the body element?"

**What I learned:**
Created a toggle button in the navbar that runs `document.body.classList.toggle('dark-mode')` on click. Defined CSS variables for both modes under `:root` and `.dark-mode` selectors.

---

### Prompt 9
**Purpose:** Sticky navbar

**Prompt:**
> "How do I make a navbar stick to the top of the page when the user scrolls using CSS and JavaScript?"

**What I learned:**
Used `position: sticky`, `top: 0`, and `z-index` on the navbar. Optionally added a `scroll` event listener in JS to add a background/shadow class when the page is scrolled.

---

### Prompt 10
**Purpose:** Deployment

**Prompt:**
> "How do I deploy a plain HTML/CSS/JS website on Vercel? What files do I need?"

**What I learned:**
Pushed the project to a public GitHub repository and connected it to Vercel. Vercel auto-detected it as a static site and deployed it with a live URL.

---

## Notes
- All AI-generated code was reviewed and manually understood before use.
- No code was blindly copy-pasted without understanding the logic.
- Final implementation reflects my own decisions on design and structure.
