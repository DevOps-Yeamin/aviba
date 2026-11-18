"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Search, X, ArrowRight } from "lucide-react";
import { PRODUCTS, Product } from "@/lib/products";
import { formatPrice } from "@/lib/utils";

interface SearchBarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchBar({ isOpen, onClose }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
      setResults([]);
    }
  }, [isOpen]);

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
    ).slice(0, 5);
    setResults(matched);
  }, [query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-charcoal/60 backdrop-blur-sm transition-opacity">
      <div className="mx-auto max-w-3xl px-4 pt-20">
        <div className="relative rounded-2xl bg-white shadow-2xl border border-primary/20 overflow-hidden">
          <form onSubmit={handleSubmit} className="flex items-center px-4 py-3 border-b border-gray-100">
            <Search className="w-5 h-5 text-primary shrink-0 mr-3" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search lipsticks, serums, foundations, fragrances..."
              className="w-full text-base sm:text-lg text-charcoal placeholder-gray-400 bg-transparent outline-none"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="p-1 text-gray-400 hover:text-charcoal mr-2"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="text-xs font-semibold px-2.5 py-1 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200"
            >
              ESC
            </button>
          </form>

          {/* Quick Suggestions / Results */}
          {query.trim() && (
            <div className="max-h-96 overflow-y-auto p-4 divide-y divide-gray-50">
              {results.length > 0 ? (
                <>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    Found {results.length} quick matches
                  </div>
                  {results.map((product) => (
                    <Link
                      key={product.id}
                      href={`/product/${product.slug}`}
                      onClick={onClose}
                      className="flex items-center gap-3 py-2.5 px-2 rounded-xl hover:bg-blush-100 transition-colors"
                    >
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-blush-50 shrink-0 border border-primary/10">
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-charcoal truncate">
                          {product.name}
                        </h4>
                        <span className="text-xs text-secondary font-medium capitalize">
                          {product.category}
                        </span>
                      </div>
                      <div className="text-sm font-semibold text-charcoal">
                        {formatPrice(product.price)}
                      </div>
                    </Link>
                  ))}
                  <div className="pt-3 mt-2 text-center">
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-dark"
                    >
                      View all results for &ldquo;{query}&rdquo; <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </>
              ) : (
                <div className="py-8 text-center text-sm text-gray-500">
                  No products matching &ldquo;{query}&rdquo;.
                </div>
              )}
            </div>
          )}

          {!query.trim() && (
            <div className="p-4 bg-blush-50/50">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2">
                Popular Searches
              </span>
              <div className="flex flex-wrap gap-2">
                {["Lipstick", "Vitamin C", "Foundation", "Rose Perfume", "Face Wash", "Hair Mask"].map(
                  (tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => setQuery(tag)}
                      className="text-xs px-3 py-1.5 rounded-full bg-white border border-primary/20 text-charcoal hover:border-primary hover:text-primary transition-all shadow-xs"
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
