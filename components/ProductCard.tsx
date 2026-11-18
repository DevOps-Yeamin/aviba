"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, Star, ShoppingBag, Check } from "lucide-react";
import { Product } from "@/lib/products";
import { formatPrice, createProductWhatsAppUrl } from "@/lib/utils";
import { WhatsAppButton } from "./WhatsAppButton";
import { QuickViewModal } from "./QuickViewModal";
import { useCart } from "./CartProvider";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className = "" }: ProductCardProps) {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const waUrl = createProductWhatsAppUrl(product.name, product.price, 1);
  const primaryImage = product.images[0] || "/images/placeholder.jpg";
  const hoverImage = product.images[1] || primaryImage;

  return (
    <>
      <div
        className={`group relative flex flex-col rounded-2xl bg-white/90 backdrop-blur-md border border-white/60 p-3 sm:p-4 shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Badges */}
        <div className="absolute top-5 left-5 z-10 flex flex-col gap-1 items-start">
          {product.featured && (
            <span className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-xs">
              Featured
            </span>
          )}
          {product.tags?.[0] && !product.featured && (
            <span className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full bg-primary/15 text-secondary border border-primary/20">
              {product.tags[0]}
            </span>
          )}
        </div>

        {/* Product Image Area */}
        <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-blush-50/70 mb-3 border border-primary/10">
          <Link href={`/product/${product.slug}`} className="block w-full h-full">
            <Image
              src={isHovered ? hoverImage : primaryImage}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </Link>

          {/* Quick View Button */}
          <button
            onClick={() => setIsQuickViewOpen(true)}
            className="absolute bottom-2.5 right-2.5 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-200 p-2 rounded-xl bg-white/90 hover:bg-white text-charcoal shadow-md backdrop-blur-xs hover:text-primary flex items-center gap-1.5 text-xs font-medium"
            title="Quick View"
          >
            <Eye className="w-4 h-4" />
            <span className="hidden sm:inline">Quick View</span>
          </button>
        </div>

        {/* Product Information */}
        <div className="flex-1 flex flex-col">
          <div className="flex items-center justify-between gap-1 mb-1.5">
            <span className="text-[11px] font-semibold tracking-wider uppercase text-secondary">
              {product.category}
            </span>
            {product.rating && (
              <div className="flex items-center text-xs font-medium text-charcoal">
                <Star className="w-3.5 h-3.5 fill-current text-[#FFD700] mr-0.5" />
                <span>{product.rating}</span>
                {product.reviewCount && (
                  <span className="text-gray-400 text-[10px] ml-0.5">({product.reviewCount})</span>
                )}
              </div>
            )}
          </div>

          <Link href={`/product/${product.slug}`} className="group-hover:text-primary transition-colors">
            <h3 className="font-serif font-bold text-charcoal text-base sm:text-lg leading-tight line-clamp-1 mb-1.5">
              {product.name}
            </h3>
          </Link>

          <p className="text-xs text-gray-500 line-clamp-2 mb-3 leading-relaxed hidden sm:block">
            {product.shortDescription || product.description}
          </p>

          <div className="mt-auto pt-2 flex items-baseline gap-2 mb-3">
            <span className="text-lg sm:text-xl font-bold text-secondary font-serif">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-xs line-through text-gray-400">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="space-y-1.5 pt-1">
            <WhatsAppButton
              url={waUrl}
              fullWidth
              size="sm"
              text="Order via WhatsApp"
              className="text-xs py-2 shadow-xs"
            />

            <div className="flex gap-1.5">
              <button
                onClick={handleAddToCart}
                className={`flex-1 py-1.5 px-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1 transition-all ${
                  added
                    ? "bg-emerald-600 text-white"
                    : "bg-charcoal/5 hover:bg-charcoal hover:text-white text-charcoal border border-charcoal/10"
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-3.5 h-3.5" /> Added
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-3.5 h-3.5" /> Add to Cart
                  </>
                )}
              </button>

              <Link
                href={`/product/${product.slug}`}
                className="py-1.5 px-2.5 rounded-xl text-xs font-semibold border border-primary/30 text-primary hover:bg-primary/10 transition-colors text-center"
              >
                Details
              </Link>
            </div>
          </div>
        </div>
      </div>

      <QuickViewModal
        product={product}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
      />
    </>
  );
}
