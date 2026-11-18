"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Truck,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { useCart } from "@/components/CartProvider";
import { formatPrice, createCartWhatsAppUrl } from "@/lib/utils";
import { SITE } from "@/lib/site-config";

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, clearCart, subtotal, totalItems } =
    useCart();

  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [orderNote, setOrderNote] = useState("");

  const handleCheckoutViaWhatsApp = () => {
    if (items.length === 0) return;

    const formattedItems = items.map((item) => ({
      name: item.product.name,
      price: item.product.price,
      quantity: item.quantity,
    }));

    const url = createCartWhatsAppUrl(formattedItems, subtotal, {
      name: customerName,
      phone: customerPhone,
      address: deliveryAddress,
      note: orderNote,
    });

    window.open(url, "_blank");
  };

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24 text-center">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-10 sm:p-16 border border-primary/15 shadow-soft">
          <div className="w-20 h-20 rounded-full bg-blush-100 text-primary flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <h1 className="font-serif text-3xl font-bold text-charcoal mb-3">
            Your Shopping Bag is Empty
          </h1>
          <p className="text-sm text-charcoal/70 max-w-md mx-auto mb-8 leading-relaxed">
            Looks like you haven&apos;t added any beauty items to your cart yet. Discover our latest lipsticks, serums, and fragrances!
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all"
          >
            <span>Explore Beauty Shop</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Page Header */}
      <div className="mb-8 flex flex-col sm:flex-row items-baseline justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-secondary text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>Shopping Bag</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-charcoal">
            Review Your Order
          </h1>
        </div>

        <button
          onClick={clearCart}
          className="text-xs text-rose-500 hover:text-rose-700 font-semibold flex items-center gap-1.5 transition-colors self-start sm:self-auto"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>Clear Shopping Bag</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Items List (Left) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-primary/15 shadow-soft divide-y divide-gray-100">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                {/* Product Media & Info */}
                <div className="flex items-center gap-4 min-w-0">
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-blush-50 shrink-0 border border-primary/10">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase font-bold text-secondary tracking-wider block">
                      {item.product.category}
                    </span>
                    <Link
                      href={`/product/${item.product.slug}`}
                      className="font-serif font-bold text-charcoal text-base hover:text-primary transition-colors block truncate"
                    >
                      {item.product.name}
                    </Link>
                    <span className="text-xs text-gray-500 font-medium">
                      Unit: {formatPrice(item.product.price)}
                    </span>
                  </div>
                </div>

                {/* Controls (Qty & Subtotal) */}
                <div className="flex items-center justify-between w-full sm:w-auto gap-4 self-end sm:self-auto">
                  {/* Quantity selector */}
                  <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50">
                    <button
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity - 1)
                      }
                      className="p-1.5 text-gray-600 hover:text-charcoal hover:bg-gray-100 rounded-l-lg transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-8 text-center text-xs font-bold text-charcoal">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity + 1)
                      }
                      className="p-1.5 text-gray-600 hover:text-charcoal hover:bg-gray-100 rounded-r-lg transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Line Total */}
                  <div className="text-right min-w-[70px]">
                    <span className="font-serif font-bold text-secondary text-sm block">
                      {formatPrice(item.product.price * item.quantity)}
                    </span>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="p-1.5 text-gray-400 hover:text-rose-500 transition-colors"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl bg-blush-50 border border-primary/15 text-xs text-charcoal/80">
            <span className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-primary" /> Delivery across Comilla town within 24 hours.
            </span>
            <Link
              href="/shop"
              className="text-primary hover:text-secondary font-semibold underline underline-offset-2"
            >
              Add more items
            </Link>
          </div>
        </div>

        {/* Checkout Summary & Customer Form (Right) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-primary/15 shadow-soft space-y-5">
            <h3 className="font-serif text-xl font-bold text-charcoal pb-3 border-b border-gray-100">
              Customer & Delivery Details
            </h3>

            {/* Customer Inputs */}
            <div className="space-y-3">
              <div>
                <label className="text-xs font-bold text-gray-600 uppercase tracking-wider block mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="e.g. Nusrat Jahan"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-primary text-charcoal"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-600 uppercase tracking-wider block mb-1">
                  Phone / WhatsApp Number
                </label>
                <input
                  type="tel"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="e.g. 017xxxxxxxx"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-primary text-charcoal"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-600 uppercase tracking-wider block mb-1">
                  Delivery Address (Comilla or Anywhere in BD)
                </label>
                <textarea
                  rows={2}
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                  placeholder="House, Road, Area, Comilla..."
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-primary text-charcoal resize-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-600 uppercase tracking-wider block mb-1">
                  Special Instructions (Optional)
                </label>
                <input
                  type="text"
                  value={orderNote}
                  onChange={(e) => setOrderNote(e.target.value)}
                  placeholder="Shade preferences, delivery time, etc."
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-primary text-charcoal"
                />
              </div>
            </div>

            {/* Order Calculations */}
            <div className="pt-4 border-t border-gray-100 space-y-2 text-xs text-gray-600">
              <div className="flex justify-between">
                <span>Total Items</span>
                <span className="font-semibold text-charcoal">{totalItems}</span>
              </div>
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-charcoal">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Comilla Delivery Fee</span>
                <span className="font-semibold text-emerald-600">Calculated on WhatsApp</span>
              </div>
              <div className="pt-3 border-t border-gray-100 flex justify-between items-baseline">
                <span className="text-sm font-bold text-charcoal">Estimated Total</span>
                <span className="font-serif text-2xl font-bold text-secondary">
                  {formatPrice(subtotal)}
                </span>
              </div>
            </div>

            {/* Checkout Via WhatsApp Button */}
            <button
              onClick={handleCheckoutViaWhatsApp}
              className="w-full py-4 px-6 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Checkout via WhatsApp</span>
            </button>

            <div className="p-3 rounded-xl bg-gray-50 border border-gray-100 text-[11px] text-gray-500 text-center leading-relaxed">
              Clicking will open WhatsApp with your full order breakdown prefilled. Our representative will confirm stock and dispatch right away.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
