"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  Plus,
  Minus,
  ShoppingBag,
  ShieldCheck,
  Truck,
  RotateCcw,
  Check,
  Share2,
} from "lucide-react";
import { Product } from "@/lib/products";
import { formatPrice, createProductWhatsAppUrl } from "@/lib/utils";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BuyNowButton } from "@/components/BuyNowButton";
import { ProductCard } from "@/components/ProductCard";
import { useCart } from "@/components/CartProvider";

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export function ProductDetailClient({
  product,
  relatedProducts,
}: ProductDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [copied, setCopied] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleShare = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const currentImg = product.images[selectedImage] || product.images[0];
  const totalPrice = product.price * quantity;
  const waUrl = createProductWhatsAppUrl(product.name, product.price, quantity);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Breadcrumb */}
      <nav className="text-xs text-gray-500 mb-6 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/shop" className="hover:text-primary transition-colors">
          Shop
        </Link>
        <span>/</span>
        <Link
          href={`/shop?category=${product.category}`}
          className="hover:text-primary transition-colors capitalize"
        >
          {product.category}
        </Link>
        <span>/</span>
        <span className="text-charcoal font-medium truncate max-w-xs">
          {product.name}
        </span>
      </nav>

      {/* Main Product Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-primary/15 shadow-soft mb-16">
        {/* Left: Image Gallery */}
        <div className="lg:col-span-6 flex flex-col items-center">
          {/* Main Selected Image */}
          <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-blush-50 border border-primary/15 shadow-inner">
            <Image
              src={currentImg}
              alt={product.name}
              fill
              priority
              className="object-cover transition-all duration-300"
              sizes="(max-width: 1024px) 100vw, 600px"
            />
            {product.featured && (
              <span className="absolute top-4 left-4 z-10 text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-xs">
                Featured Item
              </span>
            )}
          </div>

          {/* Thumbnails (Up to 4+ thumbnails) */}
          {product.images.length > 1 && (
            <div className="flex gap-3 mt-4 overflow-x-auto w-full pb-1 justify-start sm:justify-center">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                    selectedImage === idx
                      ? "border-primary ring-2 ring-primary/30 scale-105"
                      : "border-transparent opacity-75 hover:opacity-100 hover:border-primary/40"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} thumbnail ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Product Details */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/15 text-secondary uppercase tracking-widest">
                {product.category}
              </span>

              <button
                onClick={handleShare}
                className="text-xs text-gray-500 hover:text-primary flex items-center gap-1 transition-colors px-2.5 py-1 rounded-lg border border-gray-200"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{copied ? "Link Copied!" : "Share"}</span>
              </button>
            </div>

            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-charcoal mb-3 leading-snug">
              {product.name}
            </h1>

            {/* Star Rating */}
            {product.rating && (
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center text-[#FFD700]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating || 5)
                          ? "fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs font-bold text-charcoal">
                  {product.rating} / 5.0
                </span>
                {product.reviewCount && (
                  <span className="text-xs text-gray-400">
                    ({product.reviewCount} customer reviews)
                  </span>
                )}
                <span className="text-xs text-emerald-600 font-semibold ml-2">
                  &bull; In Stock ({product.stock} left)
                </span>
              </div>
            )}

            {/* Price (৳ BDT, bold gold / accent) */}
            <div className="flex items-baseline gap-3 mb-6 p-4 rounded-2xl bg-blush-50/70 border border-primary/15">
              <span className="text-3xl sm:text-4xl font-extrabold text-secondary font-serif">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-lg line-through text-gray-400">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
              {product.originalPrice && (
                <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-[#FFD700]/30 text-charcoal border border-[#FFD700]/50 ml-auto">
                  Save ৳{product.originalPrice - product.price}
                </span>
              )}
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                About This Product
              </h3>
              <p className="text-sm text-charcoal/80 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Key Benefits List */}
            {product.benefits && product.benefits.length > 0 && (
              <div className="mb-6 p-4 rounded-xl bg-white border border-primary/10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-secondary mb-2.5">
                  Key Benefits & Highlights
                </h4>
                <ul className="space-y-1.5">
                  {product.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-charcoal/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-charcoal">
                Quantity:
              </span>
              <div className="flex items-center border border-gray-300 rounded-xl bg-white shadow-xs">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-2.5 text-gray-600 hover:text-charcoal hover:bg-gray-100 rounded-l-xl transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center text-sm font-bold text-charcoal">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-2.5 text-gray-600 hover:text-charcoal hover:bg-gray-100 rounded-r-xl transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <span className="text-xs text-gray-500 font-medium">
                Total: <strong className="text-secondary">{formatPrice(totalPrice)}</strong>
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-4 border-t border-gray-100">
            {/* Primary Green WhatsApp Button */}
            <WhatsAppButton
              url={waUrl}
              fullWidth
              size="lg"
              text={`Order via WhatsApp (${formatPrice(totalPrice)})`}
              className="shadow-md text-base"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Buy Now Button (redirects to purchaseLink if provided, else checkout) */}
              <BuyNowButton
                purchaseLink={product.purchaseLink}
                fallbackUrl="/cart"
                fullWidth
                size="md"
                text="Buy Now"
              />

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                className={`w-full py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
                  added
                    ? "bg-emerald-600 text-white"
                    : "bg-charcoal text-white hover:bg-black"
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" /> Added to Cart!
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" /> Add to Cart
                  </>
                )}
              </button>
            </div>

            {/* Trust Assurances */}
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-100 text-center">
              <div className="p-2">
                <ShieldCheck className="w-4 h-4 text-primary mx-auto mb-1" />
                <span className="text-[10px] text-gray-500 block">100% Genuine</span>
              </div>
              <div className="p-2">
                <Truck className="w-4 h-4 text-primary mx-auto mb-1" />
                <span className="text-[10px] text-gray-500 block">Comilla COD</span>
              </div>
              <div className="p-2">
                <RotateCcw className="w-4 h-4 text-primary mx-auto mb-1" />
                <span className="text-[10px] text-gray-500 block">Fast Response</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                You May Also Like
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-charcoal">
                Related Products
              </h2>
            </div>
            <Link
              href={`/shop?category=${product.category}`}
              className="text-xs font-semibold text-primary hover:underline"
            >
              More in {product.category} &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relProduct) => (
              <ProductCard key={relProduct.id} product={relProduct} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
