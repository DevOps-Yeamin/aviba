"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Truck,
  Banknote,
  Heart,
  CheckCircle2,
  Send,
  MessageCircle,
} from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { CategoryCard } from "@/components/CategoryCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CATEGORIES, SITE } from "@/lib/site-config";
import { getFeaturedProducts } from "@/lib/products";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const featuredProducts = getFeaturedProducts();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 🌸 HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-16 md:py-20 lg:py-24">
        {/* Soft Background Accents */}
        <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -right-20 w-80 h-80 rounded-full bg-accent/15 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-primary/25 shadow-xs backdrop-blur-xs">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
                  Premium Cosmetics in Comilla
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal tracking-tight leading-[1.15]">
                Beauty <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-secondary">Redefined</span> with Authentic Luxury
              </h1>

              <p className="text-base sm:text-lg text-charcoal/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Discover genuine skincare, radiant makeup, and captivating fragrances handpicked for you. Fast doorstep delivery and hassle-free Cash on Delivery across Comilla and all of Bangladesh.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/shop"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-lg hover:shadow-primary/25 transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <WhatsAppButton
                  text="Order via WhatsApp"
                  size="lg"
                  className="w-full sm:w-auto text-sm sm:text-base"
                />
              </div>

              {/* Trust Micro-Metrics */}
              <div className="pt-6 border-t border-primary/10 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                <div>
                  <div className="font-serif text-2xl font-bold text-secondary">100%</div>
                  <div className="text-xs text-charcoal/70">Authentic Items</div>
                </div>
                <div>
                  <div className="font-serif text-2xl font-bold text-secondary">24h</div>
                  <div className="text-xs text-charcoal/70">Comilla Delivery</div>
                </div>
                <div>
                  <div className="font-serif text-2xl font-bold text-secondary">5.0 ★</div>
                  <div className="text-xs text-charcoal/70">Customer Rating</div>
                </div>
              </div>
            </motion.div>

            {/* Right Hero Image Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Hero Card */}
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <Image
                    src="/images/products/product-1.jpeg"
                    alt="Aviba Beauty Hero Product"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />

                  {/* Floating tag inside photo */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/60 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-secondary tracking-widest block">
                          Best Seller
                        </span>
                        <h4 className="font-serif font-bold text-charcoal text-base">
                          Velvet Matte Rose Lipstick
                        </h4>
                        <span className="text-sm font-bold text-primary">৳ 950 BDT</span>
                      </div>
                      <Link
                        href="/product/velvet-matte-rose-lipstick"
                        className="p-2.5 rounded-xl bg-primary text-white hover:bg-primary-dark transition-colors"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 p-3.5 rounded-2xl bg-white shadow-xl border border-primary/20 flex items-center gap-3 animate-bounce duration-1000">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center font-bold">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-charcoal">Direct WhatsApp</div>
                    <div className="text-[10px] text-gray-500">Order in 1 Click</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🏷️ CATEGORY GRID */}
      <section id="categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary">
            Curated Beauty Collections
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-charcoal">
            Explore by Category
          </h2>
          <p className="text-sm text-charcoal/70">
            Find the perfect beauty products tailored to your skin and style.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CATEGORIES.map((cat) => (
            <CategoryCard
              key={cat.id}
              id={cat.id}
              name={cat.name}
              description={cat.description}
              icon={cat.icon}
              count={cat.count}
            />
          ))}
        </div>
      </section>

      {/* ✨ FEATURED PRODUCTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-baseline justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-secondary">
              Handpicked For You
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-charcoal">
              Featured Products
            </h2>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-secondary transition-colors"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 🛡️ WHY CHOOSE AVIBA (3 Columns) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-white via-blush-50 to-white border border-primary/20 p-8 sm:p-12 shadow-soft">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary">
              The Aviba Promise
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-charcoal">
              Why Choose Aviba Beauty Shop?
            </h2>
            <p className="text-sm text-charcoal/70">
              We take pride in bringing pure, trusted, and luxurious cosmetics directly to Comilla and all over Bangladesh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1. Authentic Products */}
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white shadow-xs border border-primary/10 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-blush-100 text-primary flex items-center justify-center mb-5 border border-primary/20">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-xl font-bold text-charcoal mb-2">
                100% Authentic Products
              </h3>
              <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed">
                Zero duplicates or replicas. Every skincare, makeup, and perfume item in our collection is strictly genuine, tested, and high-grade.
              </p>
            </div>

            {/* 2. Fast Delivery */}
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white shadow-xs border border-primary/10 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-blush-100 text-primary flex items-center justify-center mb-5 border border-primary/20">
                <Truck className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-xl font-bold text-charcoal mb-2">
                Fast & Safe Delivery
              </h3>
              <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed">
                Rapid delivery within Comilla town (within 24 hours) and fast, securely packaged shipping throughout all districts of Bangladesh.
              </p>
            </div>

            {/* 3. Cash on Delivery */}
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white shadow-xs border border-primary/10 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-blush-100 text-primary flex items-center justify-center mb-5 border border-primary/20">
                <Banknote className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-xl font-bold text-charcoal mb-2">
                Cash on Delivery (COD)
              </h3>
              <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed">
                Shop with complete peace of mind. Inspect your parcel and pay when it arrives at your doorstep or through instant bKash / Nagad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 💌 NEWSLETTER SIGNUP */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-charcoal text-white p-8 sm:p-12 text-center shadow-xl">
          {/* Subtle Pink Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-lg mx-auto space-y-4">
            <div className="w-12 h-12 rounded-full bg-white/10 text-primary flex items-center justify-center mx-auto">
              <Sparkles className="w-6 h-6" />
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold">
              Join the Aviba VIP Beauty Circle
            </h3>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Subscribe to get exclusive WhatsApp discounts, restock alerts on viral beauty items, and seasonal sale promotions.
            </p>

            {subscribed ? (
              <div className="p-4 rounded-xl bg-emerald-900/60 border border-emerald-500 text-emerald-200 text-sm font-semibold flex items-center justify-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                Thank you! You are subscribed to Aviba VIP updates.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 pt-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-primary"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm hover:opacity-95 transition-all flex items-center justify-center gap-2 shrink-0 shadow-md"
                >
                  <span>Subscribe</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}

            <div className="text-[11px] text-gray-400">
              No spam, ever. Unsubscribe anytime.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
