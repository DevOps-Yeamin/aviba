import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Heart,
  ShieldCheck,
  Award,
  Users,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { SITE } from "@/lib/site-config";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Aviba Beauty Shop — our passion for authentic skincare, makeup, and fragrances in Comilla, Bangladesh.",
};

export default function AboutPage() {
  return (
    <div className="space-y-16 sm:space-y-24 py-8 sm:py-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-secondary text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>Our Brand Story</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal leading-tight">
              Empowering Your Natural Beauty with <span className="text-secondary">Authentic Care</span>
            </h1>

            <p className="text-base text-charcoal/80 leading-relaxed">
              Founded in Comilla, Bangladesh, <strong>Aviba Beauty Shop</strong> was born with a singular mission: to make 100% authentic, high-performance skincare, cosmetics, and luxury fragrances easily accessible to beauty enthusiasts across the country.
            </p>

            <p className="text-sm text-charcoal/70 leading-relaxed">
              In a market crowded with counterfeit and low-grade cosmetic products, Aviba stands as a beacon of trust, quality, and personalized beauty advice. We believe everyone deserves makeup and skincare formulas that enhance their glow while keeping skin healthy and protected.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/shop"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <WhatsAppButton text="Chat with Us on WhatsApp" size="md" />
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-square max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-blush-100">
              <Image
                src="/images/logo/logo.jpeg"
                alt="Aviba Beauty Shop Story"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 450px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary">
            What Drives Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-charcoal">
            The Pillars of Aviba
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-primary/15 shadow-soft hover:shadow-hover transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blush-100 text-primary flex items-center justify-center mb-5 border border-primary/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-charcoal mb-2">
              Uncompromising Authenticity
            </h3>
            <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed">
              We source directly through licensed distributors and authorized importers. Every bottle, lipstick tube, and serum is 100% genuine.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-primary/15 shadow-soft hover:shadow-hover transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blush-100 text-primary flex items-center justify-center mb-5 border border-primary/20">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-charcoal mb-2">
              Customer First & Consultation
            </h3>
            <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed">
              Not sure which foundation shade or acne serum suits your skin? Our WhatsApp beauty advisors are always one click away to guide you for free.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-primary/15 shadow-soft hover:shadow-hover transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blush-100 text-primary flex items-center justify-center mb-5 border border-primary/20">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-charcoal mb-2">
              Affordable Luxury
            </h3>
            <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed">
              We believe premium beauty shouldn&apos;t come with exorbitant markups. We deliver honest, competitive Bangladeshi pricing on every item.
            </p>
          </div>
        </div>
      </section>

      {/* Comilla Local Hub Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-charcoal via-charcoal-light to-charcoal text-white p-8 sm:p-12 shadow-xl border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-accent text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>Proudly Based in Comilla</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">
              Visit or Order Right From Comilla, BD
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-md">
              Located in Comilla 3500. Enjoy swift 24-hour delivery inside Comilla town and express courier to all 64 districts.
            </p>
          </div>

          <div className="shrink-0">
            <WhatsAppButton
              size="lg"
              text="Connect with Store"
              className="text-sm shadow-md"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
