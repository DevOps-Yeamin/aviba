import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF6B9D",
          hover: "#f5548a",
          light: "#FFF0F5",
          dark: "#e04e80",
        },
        secondary: {
          DEFAULT: "#C44569",
          hover: "#ad3859",
        },
        accent: {
          DEFAULT: "#FFD700",
          hover: "#e6c200",
        },
        blush: {
          DEFAULT: "#FFF5F0",
          50: "#FFFBF9",
          100: "#FFF5F0",
          200: "#FFE6D9",
        },
        charcoal: {
          DEFAULT: "#1A1A1A",
          light: "#2A2A2A",
          muted: "#4A4A4A",
        },
        whatsapp: {
          DEFAULT: "#25D366",
          hover: "#20bd5a",
          dark: "#128C7E",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(255, 107, 157, 0.08)",
        "glass-lg": "0 12px 40px 0 rgba(196, 69, 105, 0.12)",
        soft: "0 4px 20px -2px rgba(26, 26, 26, 0.06)",
        hover: "0 16px 32px -4px rgba(255, 107, 157, 0.18)",
      },
      backdropBlur: {
        xs: "2px",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
