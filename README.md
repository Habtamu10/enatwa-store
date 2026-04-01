# Enatwa Store

An e-commerce store built with [Next.js](https://nextjs.org), TypeScript, and Tailwind CSS.

## Features

- 🛍️ Product listing with category filtering
- 🔍 Individual product detail pages
- 🛒 Shopping cart page
- 📱 Fully responsive design

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
  components/    # Reusable UI components (Navbar, ProductCard)
  products/      # Products listing and detail pages
  cart/          # Shopping cart page
  layout.tsx     # Root layout with Navbar and Footer
  page.tsx       # Homepage
lib/
  products.ts    # Product data and utility functions
```

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
