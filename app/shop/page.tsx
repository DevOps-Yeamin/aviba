"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Search,
  SlidersHorizontal,
  X,
  Sparkles,
  ArrowUpDown,
  RotateCcw,
} from "lucide-react";
import { PRODUCTS, Product } from "@/lib/products";
import { CATEGORIES } from "@/lib/site-config";
import { ProductCard } from "@/components/ProductCard";
import { formatPrice } from "@/lib/utils";

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [maxPrice, setMaxPrice] = useState<number>(3000);
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState<boolean>(false);

  // Compute filtered & sorted products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (
        selectedCategory !== "all" &&
        product.category.toLowerCase() !== selectedCategory.toLowerCase()
      ) {
        return false;
      }
      // Price filter
      if (product.price > maxPrice) {
        return false;
      }
      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchName = product.name.toLowerCase().includes(q);
        const matchCat = product.category.toLowerCase().includes(q);
        const matchDesc = product.description.toLowerCase().includes(q);
        const matchTags = product.tags?.some((t) => t.toLowerCase().includes(q));
        if (!matchName && !matchCat && !matchDesc && !matchTags) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return (b.rating || 0) - (a.rating || 0);
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedCategory, searchQuery, sortBy, maxPrice]);

  const resetFilters = () => {
    setSelectedCategory("all");
    setSearchQuery("");
    setMaxPrice(3000);
    setSortBy("featured");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Page Header */}
      <div className="mb-8 text-center sm:text-left">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-secondary text-xs font-semibold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          <span>Complete Catalog</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-charcoal">
          Shop Beauty Essentials
        </h1>
        <p className="text-sm text-charcoal/70 mt-1">
          Explore {PRODUCTS.length} authentic cosmetics, skincare, and fragrance collections.
        </p>
      </div>

      {/* Top Search & Filter Bar */}
      <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 border border-primary/15 shadow-soft mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name, brand, or tag..."
            className="w-full pl-10 pr-8 py-2 text-sm rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-primary text-charcoal"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-charcoal"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter Controls (Category Pills on medium+, Sort dropdown) */}
        <div className="flex items-center justify-between w-full md:w-auto gap-3">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setIsFilterDrawerOpen(true)}
            className="md:hidden flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gray-100 text-charcoal text-xs font-semibold hover:bg-gray-200"
          >
            <SlidersHorizontal className="w-4 h-4 text-primary" />
            <span>Filters</span>
          </button>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 ml-auto">
            <span className="text-xs text-gray-500 hidden sm:inline flex items-center gap-1">
              <ArrowUpDown className="w-3.5 h-3.5" /> Sort:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs sm:text-sm py-2 px-3 rounded-xl border border-gray-200 bg-white font-medium text-charcoal focus:outline-none focus:border-primary cursor-pointer"
            >
              <option value="featured">Featured & Best Sellers</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="name">Alphabetical (A-Z)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Content Layout (Sidebar + Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Desktop Sidebar Filters */}
        <aside className="hidden md:block md:col-span-1 space-y-6">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-5 border border-primary/15 shadow-soft space-y-6 sticky top-28">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <span className="font-serif font-bold text-charcoal text-base">Filter Catalog</span>
              <button
                onClick={resetFilters}
                className="text-xs text-secondary hover:underline flex items-center gap-1 font-medium"
              >
                <RotateCcw className="w-3 h-3" /> Reset
              </button>
            </div>

            {/* Categories */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-3">
                Categories
              </label>
              <div className="space-y-1.5">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`w-full text-left text-xs font-medium px-3 py-2 rounded-xl transition-colors flex items-center justify-between ${
                    selectedCategory === "all"
                      ? "bg-primary text-white font-semibold"
                      : "text-charcoal hover:bg-blush-100"
                  }`}
                >
                  <span>All Products</span>
                  <span className="text-[10px] opacity-75">({PRODUCTS.length})</span>
                </button>
                {CATEGORIES.map((cat) => {
                  const count = PRODUCTS.filter((p) => p.category === cat.id).length;
                  const isActive = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full text-left text-xs font-medium px-3 py-2 rounded-xl transition-colors flex items-center justify-between ${
                        isActive
                          ? "bg-primary text-white font-semibold"
                          : "text-charcoal hover:bg-blush-100"
                      }`}
                    >
                      <span>{cat.name}</span>
                      <span className="text-[10px] opacity-75">({count})</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Price Slider */}
            <div className="pt-4 border-t border-gray-100">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Max Price
                </label>
                <span className="text-xs font-bold text-secondary">
                  {formatPrice(maxPrice)}
                </span>
              </div>
              <input
                type="range"
                min={500}
                max={3000}
                step={50}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-primary cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                <span>৳ 500</span>
                <span>৳ 3,000</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid Area */}
        <main className="md:col-span-3">
          {/* Active Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xs text-gray-500 font-medium">
              Showing {filteredProducts.length} results
            </span>
            {selectedCategory !== "all" && (
              <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-primary/10 text-secondary font-medium">
                {CATEGORIES.find((c) => c.id === selectedCategory)?.name || selectedCategory}
                <button onClick={() => setSelectedCategory("all")}>
                  <X className="w-3 h-3 hover:text-charcoal" />
                </button>
              </span>
            )}
            {searchQuery && (
              <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-primary/10 text-secondary font-medium">
                &ldquo;{searchQuery}&rdquo;
                <button onClick={() => setSearchQuery("")}>
                  <X className="w-3 h-3 hover:text-charcoal" />
                </button>
              </span>
            )}
            {maxPrice < 3000 && (
              <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-primary/10 text-secondary font-medium">
                Up to {formatPrice(maxPrice)}
                <button onClick={() => setMaxPrice(3000)}>
                  <X className="w-3 h-3 hover:text-charcoal" />
                </button>
              </span>
            )}
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="bg-white/80 rounded-2xl p-12 text-center border border-primary/10 shadow-soft">
              <div className="w-16 h-16 rounded-full bg-blush-100 text-primary flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-bold text-charcoal mb-2">
                No products found
              </h3>
              <p className="text-sm text-gray-500 max-w-sm mx-auto mb-6">
                We couldn&apos;t find anything matching your current filters. Try adjusting your search query or reset your filters.
              </p>
              <button
                onClick={resetFilters}
                className="px-6 py-2.5 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-primary-dark transition-all"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </main>
      </div>

      {/* Mobile Filters Drawer */}
      {isFilterDrawerOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-charcoal/50 backdrop-blur-xs">
          <div className="fixed inset-y-0 right-0 w-4/5 max-w-xs bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <span className="font-serif font-bold text-lg text-charcoal">Filters</span>
                <button
                  onClick={() => setIsFilterDrawerOpen(false)}
                  className="p-1 rounded-lg text-gray-500 hover:text-charcoal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Categories in Drawer */}
              <div className="py-4">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-3">
                  Category
                </span>
                <div className="space-y-1">
                  <button
                    onClick={() => {
                      setSelectedCategory("all");
                      setIsFilterDrawerOpen(false);
                    }}
                    className={`w-full text-left text-xs font-medium px-3 py-2 rounded-xl ${
                      selectedCategory === "all"
                        ? "bg-primary text-white"
                        : "text-charcoal hover:bg-gray-100"
                    }`}
                  >
                    All Categories ({PRODUCTS.length})
                  </button>
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setSelectedCategory(cat.id);
                        setIsFilterDrawerOpen(false);
                      }}
                      className={`w-full text-left text-xs font-medium px-3 py-2 rounded-xl ${
                        selectedCategory === cat.id
                          ? "bg-primary text-white"
                          : "text-charcoal hover:bg-gray-100"
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range in Drawer */}
              <div className="py-4 border-t border-gray-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    Max Price
                  </span>
                  <span className="text-xs font-bold text-secondary">
                    {formatPrice(maxPrice)}
                  </span>
                </div>
                <input
                  type="range"
                  min={500}
                  max={3000}
                  step={50}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-primary cursor-pointer"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 space-y-2">
              <button
                onClick={() => {
                  resetFilters();
                  setIsFilterDrawerOpen(false);
                }}
                className="w-full py-2.5 text-xs font-semibold text-gray-600 hover:text-charcoal border border-gray-200 rounded-xl"
              >
                Clear Filters
              </button>
              <button
                onClick={() => setIsFilterDrawerOpen(false)}
                className="w-full py-2.5 text-xs font-semibold text-white bg-primary rounded-xl"
              >
                Show Results
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-sm text-gray-500">Loading shop...</div>}>
      <ShopContent />
    </Suspense>
  );
}
