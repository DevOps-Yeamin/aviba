"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Star, Plus, Minus, ShoppingBag, Check } from "lucide-react";
import { Product } from "@/lib/products";
import { formatPrice, createProductWhatsAppUrl } from "@/lib/utils";
import { WhatsAppButton } from "./WhatsAppButton";
import { useCart } from "./CartProvider";

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function QuickViewModal({ product, isOpen, onClose }: QuickViewModalProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const currentImg = product.images[selectedImage] || product.images[0];
  const waUrl = createProductWhatsAppUrl(product.name, product.price, quantity);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl border border-primary/20 max-h-[90vh] flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-2 text-gray-500 hover:text-charcoal rounded-full bg-white/80 hover:bg-white backdrop-blur shadow-sm transition-all"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Gallery Left */}
        <div className="md:w-1/2 p-6 bg-blush-50/50 flex flex-col items-center justify-center">
          <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-inner bg-white border border-primary/10">
            <Image
              src={currentImg}
              alt={product.name}
              fill
              className="object-cover transition-all duration-300"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-2 mt-4 overflow-x-auto w-full pb-1 justify-center">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative w-14 h-14 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                    selectedImage === idx
                      ? "border-primary ring-2 ring-primary/30"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image src={img} alt="Thumbnail" fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info Right */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-primary/15 text-secondary uppercase tracking-wider">
                {product.category}
              </span>
              {product.rating && (
                <div className="flex items-center text-accent text-xs font-semibold">
                  <Star className="w-3.5 h-3.5 fill-current mr-1 text-[#FFD700]" />
                  <span className="text-charcoal">{product.rating}</span>
                  {product.reviewCount && (
                    <span className="text-gray-400 ml-1">({product.reviewCount})</span>
                  )}
                </div>
              )}
            </div>

            <h3 className="font-serif text-2xl font-bold text-charcoal mb-2 leading-snug">
              {product.name}
            </h3>

            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-2xl font-bold text-secondary">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-sm line-through text-gray-400">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">
              {product.description}
            </p>

            {/* Quantity Selector */}
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Quantity:
              </span>
              <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50/50">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-1.5 text-gray-600 hover:text-charcoal hover:bg-gray-100 rounded-l-lg transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-9 text-center text-sm font-semibold text-charcoal">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-1.5 text-gray-600 hover:text-charcoal hover:bg-gray-100 rounded-r-lg transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2 pt-2 border-t border-gray-100">
            <WhatsAppButton
              url={waUrl}
              fullWidth
              size="md"
              text={`Order via WhatsApp (${formatPrice(product.price * quantity)})`}
            />

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={handleAddToCart}
                className={`w-full py-2.5 px-3 rounded-xl font-medium text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all ${
                  added
                    ? "bg-emerald-600 text-white"
                    : "bg-charcoal text-white hover:bg-black"
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" /> Added!
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" /> Add to Cart
                  </>
                )}
              </button>

              <Link
                href={`/product/${product.slug}`}
                onClick={onClose}
                className="w-full py-2.5 px-3 rounded-xl font-medium text-xs sm:text-sm flex items-center justify-center border border-gray-200 text-charcoal hover:bg-gray-50 transition-colors text-center"
              >
                Full Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
