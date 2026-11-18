"use client";

import React from "react";
import Link from "next/link";
import { ShoppingBag, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface BuyNowButtonProps {
  purchaseLink?: string;
  fallbackUrl?: string;
  text?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export function BuyNowButton({
  purchaseLink,
  fallbackUrl = "/cart",
  text = "Buy Now",
  className,
  size = "md",
  fullWidth = false,
}: BuyNowButtonProps) {
  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-4 py-2.5 text-sm gap-2",
    lg: "px-6 py-3.5 text-base gap-2.5 font-semibold",
  };

  if (purchaseLink) {
    return (
      <a
        href={purchaseLink}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 border-2 border-primary text-primary hover:bg-primary hover:text-white active:scale-[0.98]",
          sizeStyles[size],
          fullWidth && "w-full",
          className
        )}
      >
        <ExternalLink className={cn(size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4")} />
        <span>{text}</span>
      </a>
    );
  }

  return (
    <Link
      href={fallbackUrl}
      className={cn(
        "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 bg-secondary text-white hover:bg-secondary-hover shadow-sm hover:shadow active:scale-[0.98]",
        sizeStyles[size],
        fullWidth && "w-full",
        className
      )}
    >
      <ShoppingBag className={cn(size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4")} />
      <span>{text}</span>
    </Link>
  );
}
