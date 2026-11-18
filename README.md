# 📘 README.md — Aviba Beauty Shop

Below is a complete, production-ready `README.md` file for the **Aviba Beauty Shop** project. Copy the entire code block and save it as `README.md` in your project root.

---

```markdown
# 🌸 Aviba Beauty Shop

A modern, responsive e-commerce website for **Aviba Beauty Shop** — a premium beauty & cosmetics store based in Comilla, Bangladesh. Built with Next.js 15, Tailwind CSS, and Framer Motion, featuring WhatsApp ordering and direct purchase links.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=flat-square&logo=tailwindcss)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

---

## 📖 Overview

Aviba Beauty Shop is a lightweight, fast, and mobile-first online store for beauty products (skincare, makeup, fragrance, haircare, body care, tools). Customers browse products, search instantly, and place orders directly through **WhatsApp** or via **direct purchase links** — no complex checkout required.

---

## ✨ Features

- 🛍️ **Product Catalog** — Grid + detail pages with images, prices (BDT), and descriptions
- 🔍 **Live Search** — Instant client-side search by name or category
- 💬 **WhatsApp Ordering** — One-click order button on every product, with pre-filled message
- 🛒 **Cart System** — Local storage cart with WhatsApp checkout
- 🔗 **Direct Purchase Links** — Optional per-product "Buy Now" button
- 🎨 **Modern UI** — Glassmorphism, soft shadows, Rose/Gold palette, Playfair + Inter fonts
- 📱 **Fully Responsive** — Mobile, tablet, and desktop optimized
- ⚡ **Fast** — Next.js App Router, image optimization, code splitting
- 🌐 **SEO Ready** — Meta tags, Open Graph, Product schema JSON-LD, sitemap
- ♿ **Accessible** — WCAG AA contrast, keyboard navigation, min 44px tap targets

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + shadcn/ui |
| Animation | Framer Motion + Lenis |
| Icons | Lucide React |
| Images | Cloudinary (or local `/public/images`) |
| State | React Context API (Cart) |
| Deployment | Vercel |

---

## 📁 Project Structure

```
aviba-beauty/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                    # Homepage
│   ├── shop/page.tsx               # All products
│   ├── product/[slug]/page.tsx     # Product detail
│   ├── search/page.tsx             # Search results
│   ├── cart/page.tsx               # Cart
│   ├── contact/page.tsx            # Contact Us
│   └── about/page.tsx              # About
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ProductCard.tsx
│   ├── WhatsAppButton.tsx
│   ├── SearchBar.tsx
│   ├── CategoryCard.tsx
│   └── CartProvider.tsx
├── lib/
│   ├── products.ts                 # Product data
│   ├── site-config.ts              # Site-wide constants
│   └── utils.ts
├── public/
│   └── images/products/            # Product images
├── styles/
│   └── globals.css
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.17
- **npm** / **pnpm** / **yarn**
- **Git**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/aviba-beauty-shop.git
cd aviba-beauty-shop

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

---

## ⚙️ Configuration

### Site Config (`lib/site-config.ts`)

All contact details, WhatsApp number, and links live in one place. **Edit this file to update site-wide info.**

```typescript
export const SITE = {
  name: "Aviba Beauty Shop",
  phone: "01627128893",
  whatsapp: "8801627128893",
  whatsappLink: "https://wa.me/8801627128893",
  email: "ms9588110@gmail.com",
  address: "Comilla, Bangladesh, 3500",
  facebook: "#", // Replace with real Facebook page URL
  developer: {
    name: "Revlio",
    url: "https://revlio.net",
  },
};
```

### Product Data (`lib/products.ts`)

Add or edit products here:

```typescript
export const products: Product[] = [
  {
    id: "1",
    slug: "rose-lipstick",
    name: "Rose Velvet Lipstick",
    price: 550,
    category: "Makeup",
    description: "Long-lasting matte finish lipstick in deep rose shade.",
    images: ["/images/products/lipstick-1.jpg"],
    stock: 20,
    featured: true,
    purchaseLink: "", // Optional
  },
  // ...more products
];
```

---

## 💬 WhatsApp Order Flow

When a customer clicks **"Order via WhatsApp"**, the following link is opened:

```
https://wa.me/8801627128893?text=
Hello Aviba Beauty Shop, I want to order:
Product: [PRODUCT_NAME]
Price: ৳[PRICE]
Quantity: [QTY]
Please confirm availability and delivery time. Thank you!
```

The message is URL-encoded automatically by `<WhatsAppButton />`.

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary (Rose) | `#FF6B9D` |
| Secondary (Deep Rose) | `#C44569` |
| Accent (Gold) | `#FFD700` |
| Background (Blush) | `#FFF5F0` |
| Dark (Charcoal) | `#1A1A1A` |
| Heading Font | Playfair Display |
| Body Font | Inter |
| Radius | 16–24px (`rounded-2xl`) |

---

## 📦 Adding Product Images

1. Place images in `public/images/products/`
2. Recommended: `.webp` or `.jpg`, 800×800px, <200KB each
3. Update the `images` array in `lib/products.ts`

For **Cloudinary**, upload images and paste the URLs into `products.ts` directly.

---

## 🚢 Deployment (Vercel)

### One-click deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Manual deploy

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

---

## 📞 Contact & Support

| Channel | Info |
|---------|------|
| 📱 Phone | [01627128893](tel:01627128893) |
| 💬 WhatsApp | [01627128893](https://wa.me/8801627128893) |
| ✉️ Email | [ms9588110@gmail.com](mailto:ms9588110@gmail.com) |
| 📍 Address | Comilla, Bangladesh, 3500 |
| 🔗 Facebook | [Page Link](#) _(update in `site-config.ts`)_ |

---

## 👨‍💻 Developer

**Developed by [Revlio](https://revlio.net)**

For web development inquiries, visit [revlio.net](https://revlio.net).

---

## 📋 Roadmap

- [x] Project setup + Tailwind + shadcn/ui
- [x] Navbar + Footer with contact info
- [x] Product data structure (`products.ts`)
- [x] Homepage + product cards
- [x] Product detail page with WhatsApp order
- [x] Search functionality
- [x] Cart with WhatsApp checkout
- [x] Contact + About pages
- [ ] Facebook Page integration
- [ ] Admin dashboard for product uploads
- [ ] bKash / Nagad payment integration
- [ ] Order tracking system

---

## 📄 License

This project is proprietary and owned by **Aviba Beauty Shop**.  
Unauthorized copying, distribution, or commercial use without written permission is prohibited.

© 2026 Aviba Beauty Shop. All rights reserved.

---

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [Vercel](https://vercel.com/)
```

---

## 📝 Notes for You

- ✅ Replace `#` in the Facebook field with your real page link
- ✅ Confirm `revlio.net` is the correct developer link (verify before launch)
- ✅ Add product images to `/public/images/products/` before going live
- ✅ Update `lib/products.ts` with your actual products, prices (৳), and descriptions
- ⚠️ The project is marked **proprietary** — change license if you want it open source

---

Want me to also generate a **`LICENSE`** file, **`CONTRIBUTING.md`**, or a **`.env.example`** file? Just ask! 🚀
