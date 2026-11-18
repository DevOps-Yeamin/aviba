"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Sparkles,
  Search,
  ShoppingBag,
  Menu,
  X,
  Phone,
  MessageCircle,
} from "lucide-react";
import { useCart } from "./CartProvider";
import { SearchBar } from "./SearchBar";
import { SITE } from "@/lib/site-config";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Categories", href: "/shop#categories" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-gradient-to-r from-secondary via-primary to-secondary text-white text-[11px] sm:text-xs py-1.5 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 shrink-0" />
        <span>Authentic Cosmetics in Comilla &bull; Fast Delivery &bull; Cash on Delivery Available</span>
        <a
          href={SITE.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-1 underline underline-offset-2 ml-2 hover:text-accent font-semibold"
        >
          <MessageCircle className="w-3 h-3" /> WhatsApp: {SITE.phone}
        </a>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/85 backdrop-blur-md shadow-sm border-b border-primary/10 py-3"
            : "bg-white/70 backdrop-blur-md border-b border-primary/5 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Left */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-primary/20 shadow-xs group-hover:scale-105 transition-transform">
              <Image
                src="/images/logo/logo.jpeg"
                alt="Aviba Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex items-baseline">
              <span className="font-serif text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent group-hover:opacity-90 transition-opacity">
                Aviba
              </span>
              <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-secondary ml-1.5 hidden xs:inline">
                Beauty
              </span>
              <Sparkles className="w-3.5 h-3.5 text-accent ml-1 -mt-2 group-hover:rotate-12 transition-transform" />
            </div>
          </Link>

          {/* Desktop Center Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors relative py-1 ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-charcoal/80 hover:text-primary"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full animate-in fade-in" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Icon */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 sm:p-2.5 rounded-full text-charcoal hover:text-primary hover:bg-blush-100 transition-colors"
              title="Search products"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Cart Icon */}
            <Link
              href="/cart"
              className="relative p-2 sm:p-2.5 rounded-full text-charcoal hover:text-primary hover:bg-blush-100 transition-colors"
              title="Shopping Cart"
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute top-1 right-1 w-5 h-5 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center animate-in zoom-in shadow-xs">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </Link>

            {/* WhatsApp Direct Link (Desktop) */}
            <a
              href={SITE.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#25D366] text-white text-xs font-semibold hover:bg-[#20bd5a] shadow-xs transition-all hover:shadow-md"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-charcoal hover:text-primary md:hidden"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-in Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-charcoal/50 backdrop-blur-xs animate-in fade-in">
          <div className="fixed inset-y-0 right-0 w-3/4 max-w-xs bg-white shadow-2xl p-6 flex flex-col justify-between animate-in slide-in-from-right duration-300">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="font-serif text-2xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                    Aviba
                  </span>
                  <Sparkles className="w-4 h-4 text-accent" />
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-gray-500 hover:text-charcoal hover:bg-gray-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-3 py-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-base font-medium px-3 py-2 rounded-xl transition-colors ${
                      pathname === link.href
                        ? "bg-blush-100 text-primary font-semibold"
                        : "text-charcoal hover:bg-gray-50 hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="space-y-3 pt-6 border-t border-gray-100">
              <a
                href={SITE.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] text-white text-sm font-semibold flex items-center justify-center gap-2 hover:bg-[#20bd5a] shadow-xs"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:${SITE.phone}`}
                className="w-full py-2.5 px-4 rounded-xl border border-gray-200 text-charcoal text-sm font-semibold flex items-center justify-center gap-2 hover:bg-gray-50"
              >
                <Phone className="w-4 h-4" />
                <span>Call {SITE.phone}</span>
              </a>

              <div className="text-center text-[11px] text-gray-400 pt-2">
                {SITE.address}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Full-width Search Bar Overlay */}
      <SearchBar isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
