export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number; // BDT
  originalPrice?: number; // BDT (for discount badges)
  category: string;
  description: string;
  shortDescription?: string;
  images: string[];
  stock: number;
  featured: boolean;
  rating?: number;
  reviewCount?: number;
  purchaseLink?: string; // Direct buy URL (optional)
  tags?: string[];
  benefits?: string[];
};

export const PRODUCTS: Product[] = [
  {
    id: "prod-1",
    slug: "velvet-matte-rose-lipstick",
    name: "Velvet Matte Rose Lipstick",
    price: 950,
    originalPrice: 1200,
    category: "makeup",
    description:
      "A rich, creamy matte lipstick infused with vitamin E and nourishing rosehip oil. Provides all-day hydration with intense color payoff that glides smoothly and never dries out your lips. Perfect for everyday glam or festive evenings in Bangladesh.",
    shortDescription: "Ultra-pigmented matte lipstick with hydrating rosehip oil",
    images: [
      "/images/products/product-1.jpeg",
      "/images/products/product-2.jpeg",
      "/images/products/product-3.jpeg",
    ],
    stock: 24,
    featured: true,
    rating: 4.9,
    reviewCount: 38,
    tags: ["Best Seller", "Cruelty-Free", "Long-Lasting"],
    benefits: [
      "Lasts up to 12 hours without smudging",
      "Infused with Vitamin E & Jojoba Oil",
      "Comfortable lightweight velvet texture",
      "Safe for sensitive lips",
    ],
    purchaseLink: "https://wa.me/8801627128893",
  },
  {
    id: "prod-2",
    slug: "radiance-glow-vitamin-c-serum",
    name: "Radiance Glow Vitamin C Serum",
    price: 1650,
    originalPrice: 1950,
    category: "skincare",
    description:
      "Formulated with 15% pure ethyl ascorbic acid, hyaluronic acid, and ferulic acid. This lightweight brightening serum fades dark spots, evens out hyperpigmentation, protects against environmental pollution, and delivers a radiant glass-skin glow.",
    shortDescription: "Potent brightening serum for fading dark spots and glowing skin",
    images: [
      "/images/products/product-2.jpeg",
      "/images/products/product-1.jpeg",
      "/images/products/product-4.jpeg",
    ],
    stock: 18,
    featured: true,
    rating: 5.0,
    reviewCount: 52,
    tags: ["Top Rated", "Glass Skin", "Dermatologist Tested"],
    benefits: [
      "Visibly brightens dull complexion in 14 days",
      "Deep moisture retention with 3-molecular Hyaluronic Acid",
      "Non-greasy, fast-absorbing texture suitable for humid climates",
      "Alcohol and paraben free",
    ],
  },
  {
    id: "prod-3",
    slug: "flawless-hd-liquid-foundation",
    name: "Flawless HD Liquid Foundation",
    price: 1850,
    originalPrice: 2200,
    category: "makeup",
    description:
      "A breathable, medium-to-full buildable coverage liquid foundation with SPF 25. Delivers a natural satin finish that resists sweat and humidity throughout the day. Specially curated shades that complement warm South Asian undertones beautifully.",
    shortDescription: "Sweat-resistant medium-to-full buildable coverage with SPF 25",
    images: [
      "/images/products/product-3.jpeg",
      "/images/products/product-5.jpeg",
      "/images/products/product-6.jpeg",
    ],
    stock: 15,
    featured: true,
    rating: 4.8,
    reviewCount: 29,
    tags: ["Sweat-Proof", "SPF 25", "Natural Satin"],
    benefits: [
      "Up to 16 hours of sweat & transfer-resistant wear",
      "Formulated for South Asian skin undertones",
      "Blurring micro-powders minimize pores and fine lines",
      "Non-comedogenic (won't clog pores)",
    ],
    purchaseLink: "https://wa.me/8801627128893",
  },
  {
    id: "prod-4",
    slug: "gentle-hydrating-foam-cleanser",
    name: "Gentle Hydrating Foam Cleanser",
    price: 850,
    originalPrice: 1050,
    category: "skincare",
    description:
      "A soothing pH 5.5 balancing face wash packed with Centella Asiatica (Cica), green tea extract, and ceramide complex. Cleanses away dirt, sebum, and pollutants without stripping natural moisture, leaving skin calm, soft, and refreshed.",
    shortDescription: "Low pH balancing cleanser with Centella Asiatica & Ceramides",
    images: [
      "/images/products/product-4.jpeg",
      "/images/products/product-7.jpeg",
      "/images/products/product-8.jpeg",
    ],
    stock: 32,
    featured: true,
    rating: 4.9,
    reviewCount: 44,
    tags: ["Gentle Cleanser", "Low pH 5.5", "Cica Infused"],
    benefits: [
      "Low pH formula protects the skin moisture barrier",
      "Calms redness and acne-prone skin",
      "Rich micro-bubble lather rinses clean effortlessly",
      "Safe for daily morning and night use",
    ],
  },
  {
    id: "prod-5",
    slug: "blooming-rose-eau-de-parfum",
    name: "Blooming Rose Luxury Eau De Parfum",
    price: 2450,
    originalPrice: 2900,
    category: "fragrance",
    description:
      "An intoxicating signature scent opening with notes of fresh pink peony, wild Bulgarian rose, and sparkling bergamot, leading to a sensual base of golden amber and white musk. An unforgettable feminine fragrance that lingers for 10+ hours.",
    shortDescription: "Enchanting Bulgarian rose and amber floral perfume for women",
    images: [
      "/images/products/product-5.jpeg",
      "/images/products/product-9.jpeg",
      "/images/products/product-10.jpeg",
    ],
    stock: 12,
    featured: true,
    rating: 5.0,
    reviewCount: 61,
    tags: ["Luxury Scent", "Long-Lasting", "Signature"],
    benefits: [
      "Concentrated Eau De Parfum (EDP) formula",
      "Lasts 10+ hours on skin and fabric",
      "Elegant glass bottle with gold accents",
      "Ideal gift for weddings, parties, and special occasions",
    ],
    purchaseLink: "https://wa.me/8801627128893",
  },
  {
    id: "prod-6",
    slug: "soft-silk-powder-blush-duo",
    name: "Soft Silk Powder Blush Duo",
    price: 890,
    originalPrice: 1150,
    category: "makeup",
    description:
      "A velvety duo-compact containing both a soft coral-pink matte blush and a golden luminous topper. Micro-milled powders blend seamlessly across cheeks for a youthful, healthy flush of color that adapts to your natural skin tone.",
    shortDescription: "Silky dual-toned blush compact with matte and luminous shades",
    images: [
      "/images/products/product-6.jpeg",
      "/images/products/product-11.jpeg",
      "/images/products/product-12.jpeg",
    ],
    stock: 20,
    featured: true,
    rating: 4.7,
    reviewCount: 22,
    tags: ["Blush Duo", "Silky Touch", "Buildable"],
    benefits: [
      "Ultra-fine micro-powders blend seamlessly",
      "Buildable pigmentation from subtle glow to vivid flush",
      "Dual pan: matte day look + luminous evening topper",
      "Compact with mirror for quick on-the-go touchups",
    ],
  },
  {
    id: "prod-7",
    slug: "argan-keratin-nourishing-hair-mask",
    name: "Argan & Keratin Nourishing Hair Mask",
    price: 1350,
    originalPrice: 1600,
    category: "haircare",
    description:
      "Deep conditioning treatment enriched with pure Moroccan argan oil and hydrolyzed keratin. Repairs heat damage, tames frizzy hair, restores shine, and seals split ends for salon-soft locks right at home.",
    shortDescription: "Deep repair mask for frizzy, dry, or chemically treated hair",
    images: [
      "/images/products/product-7.jpeg",
      "/images/products/product-1.jpeg",
      "/images/products/product-3.jpeg",
    ],
    stock: 16,
    featured: false,
    rating: 4.8,
    reviewCount: 19,
    tags: ["Deep Repair", "Moroccan Argan", "Anti-Frizz"],
    benefits: [
      "Restores elasticity to brittle and heat-damaged hair",
      "Locks in moisture against humid weather frizz",
      "Silky softness noticeable from the very first wash",
      "Sulfate and silicone free",
    ],
  },
  {
    id: "prod-8",
    slug: "shea-glow-whipped-body-butter",
    name: "Shea Glow Whipped Body Butter",
    price: 980,
    originalPrice: 1250,
    category: "bodycare",
    description:
      "Whipped to fluffy perfection with raw African shea butter, sweet almond oil, and cocoa butter. Melts instantly upon skin contact to drench dry skin in long-lasting moisture with a delicious vanilla blossom fragrance.",
    shortDescription: "Ultra-rich whipped butter for 24hr velvety body hydration",
    images: [
      "/images/products/product-8.jpeg",
      "/images/products/product-4.jpeg",
      "/images/products/product-2.jpeg",
    ],
    stock: 28,
    featured: false,
    rating: 4.9,
    reviewCount: 31,
    tags: ["24hr Hydration", "Raw Shea", "Vanilla Bloom"],
    benefits: [
      "Non-sticky whipped formulation absorbs effortlessly",
      "Soothes extremely dry knees, elbows, and heels",
      "Delicious subtle floral-vanilla aroma",
      "100% vegan and organic ingredients",
    ],
  },
  {
    id: "prod-9",
    slug: "precision-pro-beauty-sponge-set",
    name: "Precision Pro Beauty Sponge Set (3-Pack)",
    price: 550,
    originalPrice: 750,
    category: "tools",
    description:
      "Tear-drop latex-free blending sponges designed for seamless foundation, concealer, and contour application. Expands when dampened for an airbrushed, streak-free complexion every single time.",
    shortDescription: "Ultra-soft micro-pore latex-free blending sponges",
    images: [
      "/images/products/product-9.jpeg",
      "/images/products/product-5.jpeg",
      "/images/products/product-6.jpeg",
    ],
    stock: 35,
    featured: false,
    rating: 4.8,
    reviewCount: 27,
    tags: ["Latex Free", "Streak Free", "Multi-Pack"],
    benefits: [
      "Expands to twice its size when wet for minimal product absorption",
      "Precision tip for under-eye concealer and nose contouring",
      "Rounded base for swift all-over face blending",
      "Easy to wash and reuse",
    ],
    purchaseLink: "https://wa.me/8801627128893",
  },
  {
    id: "prod-10",
    slug: "jade-roller-and-gua-sha-sculpting-set",
    name: "Rose Quartz Roller & Gua Sha Sculpting Set",
    price: 1150,
    originalPrice: 1450,
    category: "tools",
    description:
      "Crafted from 100% authentic natural rose quartz stone. Helps depuff eyes, promotes lymphatic drainage, sculpts jawline, and enhances serum absorption for an instant lifted facial glow.",
    shortDescription: "Authentic natural gemstone facial massage & sculpting kit",
    images: [
      "/images/products/product-10.jpeg",
      "/images/products/product-8.jpeg",
      "/images/products/product-11.jpeg",
    ],
    stock: 14,
    featured: false,
    rating: 5.0,
    reviewCount: 18,
    tags: ["Real Gemstone", "Depuffing", "Facial Sculpting"],
    benefits: [
      "Naturally cooling stone depuffs tired eyes within minutes",
      "Boosts blood circulation and facial lymphatic drainage",
      "Assists deeper penetration of face oils and serums",
      "Comes in a protective velvet storage pouch",
    ],
  },
  {
    id: "prod-11",
    slug: "hyaluronic-hydration-barrier-cream",
    name: "Hyaluronic Hydration Barrier Cream",
    price: 1450,
    originalPrice: 1750,
    category: "skincare",
    description:
      "A rich gel-cream moisturizer packed with 5 types of hyaluronic acid, panthenol (Pro-Vitamin B5), and peptide complexes. Restores compromised skin barrier, calms irritation, and locks in dewy hydration all day long.",
    shortDescription: "Dewy barrier cream with 5-type Hyaluronic Acid & Panthenol",
    images: [
      "/images/products/product-11.jpeg",
      "/images/products/product-9.jpeg",
      "/images/products/product-1.jpeg",
    ],
    stock: 22,
    featured: false,
    rating: 4.9,
    reviewCount: 35,
    tags: ["Skin Barrier", "Deep Dew", "Pro-Vitamin B5"],
    benefits: [
      "Fast-absorbing gel-cream locks in moisture without heaviness",
      "Strengthens the skin barrier against environmental stressors",
      "Leaves zero greasy residue under makeup",
      "Hypoallergenic and fragrance-free",
    ],
  },
  {
    id: "prod-12",
    slug: "night-repair-botanical-facial-oil",
    name: "Night Repair Botanical Facial Oil",
    price: 1950,
    originalPrice: 2400,
    category: "skincare",
    description:
      "A golden elixir blending cold-pressed jojoba, squalane, evening primrose, and lavender essential oils. Works overnight to regenerate skin cells, soften fine lines, and wake you up with plump, nourished skin.",
    shortDescription: "Overnight cellular regenerating squalane & botanical elixir",
    images: [
      "/images/products/product-12.jpeg",
      "/images/products/product-10.jpeg",
      "/images/products/product-2.jpeg",
    ],
    stock: 10,
    featured: false,
    rating: 5.0,
    reviewCount: 42,
    tags: ["Night Elixir", "Pure Squalane", "Cellular Repair"],
    benefits: [
      "Repairs sun and pollution damage overnight",
      "100% plant-derived squalane locks in intense hydration",
      "Relaxing natural botanical aroma aids restorative sleep",
      "Non-comedogenic and fast-absorbing oil",
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.featured);
}

export function getProductsByCategory(category: string): Product[] {
  if (!category || category === "all") return PRODUCTS;
  return PRODUCTS.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );
}

export function getRelatedProducts(
  currentId: string,
  category: string,
  limit = 4
): Product[] {
  return PRODUCTS.filter(
    (p) => p.id !== currentId && p.category.toLowerCase() === category.toLowerCase()
  ).slice(0, limit);
}
