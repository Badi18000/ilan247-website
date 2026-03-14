# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + Vite + Tailwind CSS marketing website for **ilan247**, a Montreal-based advertising products business (roll-ups, X-banners, large format printing, vinyl lettering).

## Commands

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build locally
```

## Architecture

- **Framework**: React 19 with React Router DOM for routing
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 3 with custom brand colors (brand: orange, accent: green)
- **Animations**: GSAP with ScrollTrigger plugin
- **Icons**: Lucide React
- **Pages**: Single-page app with hash navigation + one separate route `/roll-up-montreal`

### Key Files

- `src/App.jsx` - Main SPA with all sections (hero, services, testimonials, contact, etc.)
- `src/RollupMontrealPage.jsx` - Dedicated SEO page for "roll-up Montreal" keyword
- `tailwind.config.js` - Custom color palette (brand, accent)
- `src/index.css` - Global styles including `.section-container`, `.btn-primary`, `.card`, `.reveal-on-scroll`

### Routing

The site uses React Router with client-side routing. The `/roll-up-montreal` route requires special handling for Vercel (see `vercel.json`).

### Deployment

- **Vercel**: Primary deployment with `vercel.json` config for SPA fallback
- **Hostinger**: Backup with `public/.htaccess` for routing

### SEO

The site includes JSON-LD structured data (LocalBusiness, FAQPage) for local SEO. Images use descriptive alt attributes in French.
