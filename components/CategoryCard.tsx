"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Palette, Heart, Flame, Smile, Scissors, ArrowUpRight } from "lucide-react";

interface CategoryCardProps {
  id: string;
  name: string;
  description: string;
  icon: string;
  count?: string;
  image?: string;
}

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-6 h-6 text-primary" />,
  Palette: <Palette className="w-6 h-6 text-primary" />,
  Heart: <Heart className="w-6 h-6 text-primary" />,
  Flame: <Flame className="w-6 h-6 text-primary" />,
  Smile: <Smile className="w-6 h-6 text-primary" />,
  Scissors: <Scissors className="w-6 h-6 text-primary" />,
};

export function CategoryCard({ id, name, description, icon, count }: CategoryCardProps) {
  return (
    <Link
      href={`/shop?category=${id}`}
      className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white/80 hover:bg-white border border-white/60 shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden"
    >
      {/* Decorative gradient blob */}
      <div className="absolute -top-12 -right-12 w-28 h-28 bg-gradient-to-br from-primary/15 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-2xl bg-blush-100 flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110 shadow-xs">
          <div className="group-hover:brightness-0 group-hover:invert transition-all">
            {iconMap[icon] || <Sparkles className="w-6 h-6 text-primary" />}
          </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-white transition-all">
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>

      <div>
        <h3 className="font-serif text-lg font-bold text-charcoal group-hover:text-primary transition-colors mb-1">
          {name}
        </h3>
        <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mb-3">
          {description}
        </p>
        {count && (
          <span className="text-[11px] font-semibold text-secondary bg-primary/10 px-2.5 py-0.5 rounded-full inline-block">
            {count}
          </span>
        )}
      </div>
    </Link>
  );
}
