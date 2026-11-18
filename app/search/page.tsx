"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Search, Sparkles, ArrowRight } from "lucide-react";
import { PRODUCTS, Product } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<Product[]>([]);

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const q = query.toLowerCase().trim();
    const matched = PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags?.some((t) => t.toLowerCase().includes(q))
    );
    setResults(matched);
  }, [query]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Search Header */}
      <div className="max-w-2xl mx-auto text-center mb-10 space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-secondary text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          <span>Product Search</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-charcoal">
          Find Your Beauty Favorites
        </h1>

        {/* Search input field */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type lipstick, serum, foundation, rose fragrance..."
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-primary/25 bg-white shadow-soft focus:outline-none focus:border-primary text-charcoal text-base"
          />
        </div>

        {/* Suggested keywords */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-xs text-gray-500">
          <span>Popular:</span>
          {["Lipstick", "Serum", "Foundation", "Perfume", "Cica Cleanser"].map((word) => (
            <button
              key={word}
              onClick={() => setQuery(word)}
              className="px-2.5 py-1 rounded-full bg-white/80 hover:bg-white text-charcoal border border-primary/15 transition-all shadow-xs"
            >
              {word}
            </button>
          ))}
        </div>
      </div>

      {/* Results Section */}
      <div>
        {query.trim() ? (
          <div>
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-gray-100">
              <span className="text-sm font-semibold text-charcoal">
                Search Results for &ldquo;{query}&rdquo;
              </span>
              <span className="text-xs text-gray-500">
                Found {results.length} {results.length === 1 ? "product" : "products"}
              </span>
            </div>

            {results.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {results.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white/80 rounded-2xl p-12 text-center border border-primary/15 shadow-soft max-w-lg mx-auto">
                <div className="w-16 h-16 rounded-full bg-blush-100 text-primary flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-bold text-charcoal mb-2">
                  No matching products
                </h3>
                <p className="text-sm text-gray-500 mb-6">
                  We couldn&apos;t find any item matching &ldquo;{query}&rdquo;. Check for spelling errors or try a broader keyword.
                </p>
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-primary-dark transition-all"
                >
                  <span>Browse Full Collection</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-sm text-gray-500 mb-4">
              Enter any product name or ingredient above to search our catalog.
            </p>
            <Link
              href="/shop"
              className="text-xs font-semibold text-primary hover:underline"
            >
              Or browse all products in the shop &rarr;
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-sm text-gray-500">Loading search...</div>}>
      <SearchContent />
    </Suspense>
  );
}
