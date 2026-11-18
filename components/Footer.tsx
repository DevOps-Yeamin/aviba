"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Sparkles,
  ExternalLink,
  Heart,
  ShieldCheck,
  Truck,
  RotateCcw,
} from "lucide-react";
import { SITE } from "@/lib/site-config";
import { FacebookIcon } from "@/components/Icons";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-16 pb-8 border-t border-charcoal-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Value Proposition Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 mb-12 border-b border-charcoal-light text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-semibold text-sm text-white">100% Authentic Beauty</h5>
              <p className="text-xs text-gray-400">Guaranteed genuine cosmetic items</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-semibold text-sm text-white">Fast Nationwide Delivery</h5>
              <p className="text-xs text-gray-400">Cash on delivery inside Comilla & BD</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center shrink-0">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-semibold text-sm text-white">WhatsApp Direct Order</h5>
              <p className="text-xs text-gray-400">Instant confirmation & friendly support</p>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-primary/30">
                <Image
                  src="/images/logo/logo.jpeg"
                  alt="Aviba Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-serif text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Aviba
              </span>
              <span className="text-xs uppercase tracking-widest text-primary font-bold">
                Beauty
              </span>
              <Sparkles className="w-4 h-4 text-accent" />
            </Link>
            <p className="text-xs text-gray-300 leading-relaxed">
              Your trusted destination for premium skincare, makeup, and perfumes in Comilla, Bangladesh. Redefining your beauty with authentic quality products.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={SITE.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-base font-bold text-white mb-4 flex items-center gap-2">
              <span>Quick Links</span>
              <div className="h-0.5 w-6 bg-primary rounded-full" />
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-primary transition-colors">
                  Shop All Products
                </Link>
              </li>
              <li>
                <Link href="/shop#categories" className="hover:text-primary transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact & Store Location
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-primary transition-colors">
                  View Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-serif text-base font-bold text-white mb-4 flex items-center gap-2">
              <span>Categories</span>
              <div className="h-0.5 w-6 bg-primary rounded-full" />
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li>
                <Link href="/shop?category=skincare" className="hover:text-primary transition-colors">
                  Skincare Serums & Cleansers
                </Link>
              </li>
              <li>
                <Link href="/shop?category=makeup" className="hover:text-primary transition-colors">
                  Lipsticks & Foundations
                </Link>
              </li>
              <li>
                <Link href="/shop?category=fragrance" className="hover:text-primary transition-colors">
                  Luxury Perfumes & Scents
                </Link>
              </li>
              <li>
                <Link href="/shop?category=haircare" className="hover:text-primary transition-colors">
                  Hair Masks & Oils
                </Link>
              </li>
              <li>
                <Link href="/shop?category=bodycare" className="hover:text-primary transition-colors">
                  Nourishing Body Care
                </Link>
              </li>
              <li>
                <Link href="/shop?category=tools" className="hover:text-primary transition-colors">
                  Beauty Tools & Sponges
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif text-base font-bold text-white mb-4 flex items-center gap-2">
              <span>Contact Us</span>
              <div className="h-0.5 w-6 bg-primary rounded-full" />
            </h4>
            <ul className="space-y-3 text-xs text-gray-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>{SITE.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href={`tel:${SITE.phone}`} className="hover:text-primary transition-colors">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={SITE.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors"
                >
                  WhatsApp: {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href={`mailto:${SITE.email}`} className="hover:text-primary transition-colors">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Developer Credit */}
        <div className="pt-8 border-t border-charcoal-light flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            &copy; 2026 <span className="text-white font-medium">{SITE.name}</span>. All rights reserved.
          </div>

          <div className="flex items-center gap-1.5">
            <span>Developed by</span>
            <a
              href={SITE.developer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent font-semibold inline-flex items-center gap-1 transition-colors underline underline-offset-2"
            >
              <span>{SITE.developer.name}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
