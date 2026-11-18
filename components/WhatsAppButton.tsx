"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  url?: string;
  phone?: string;
  message?: string;
  text?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "outline" | "pill";
  fullWidth?: boolean;
  onClick?: () => void;
}

export function WhatsAppButton({
  url,
  phone = "8801627128893",
  message = "Hello Aviba Beauty Shop, I would like to make an inquiry.",
  text = "Order via WhatsApp",
  className,
  size = "md",
  variant = "solid",
  fullWidth = false,
  onClick,
}: WhatsAppButtonProps) {
  const targetUrl =
    url || `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-4 py-2.5 text-sm gap-2",
    lg: "px-6 py-3.5 text-base gap-2.5 font-semibold",
  };

  const variantStyles = {
    solid:
      "bg-[#25D366] text-white hover:bg-[#20bd5a] shadow-sm hover:shadow-md hover:shadow-emerald-500/20 active:scale-[0.98]",
    outline:
      "border-2 border-[#25D366] text-[#128C7E] hover:bg-[#25D366]/10 active:scale-[0.98]",
    pill:
      "bg-[#25D366] text-white hover:bg-[#20bd5a] rounded-full shadow-lg hover:shadow-emerald-500/30 active:scale-[0.98]",
  };

  return (
    <a
      href={targetUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 cursor-pointer select-none",
        sizeStyles[size],
        variantStyles[variant],
        fullWidth && "w-full",
        className
      )}
    >
      <MessageCircle className={cn(size === "sm" ? "w-4 h-4" : size === "lg" ? "w-5 h-5" : "w-4.5 h-4.5", "shrink-0 fill-current")} />
      <span>{text}</span>
    </a>
  );
}
