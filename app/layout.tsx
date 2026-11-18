import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CartProvider } from "@/components/CartProvider";
import { SmoothScroll } from "@/components/SmoothScroll";
import { SITE } from "@/lib/site-config";
import { MessageCircle } from "lucide-react";
import { Analytics } from "@vercel/analytics/next";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | Premium Beauty & Cosmetics in Comilla`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "Aviba Beauty Shop",
    "Comilla cosmetics",
    "beauty shop Bangladesh",
    "authentic skincare Comilla",
    "makeup store Comilla",
    "perfume Bangladesh",
    "order cosmetics via WhatsApp",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.developer.name,
  metadataBase: new URL("https://aviba-beauty.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_BD",
    url: "https://aviba-beauty.vercel.app",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    siteName: SITE.name,
    images: [
      {
        url: "/images/logo/logo.jpeg",
        width: 800,
        height: 800,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
    images: ["/images/logo/logo.jpeg"],
  },
  icons: {
    icon: [
      { url: "/images/logo/logo.jpeg" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/images/logo/logo.jpeg" },
    ],
    shortcut: "/images/logo/logo.jpeg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-blush text-charcoal font-sans antialiased selection:bg-primary/20 selection:text-secondary">
        <SmoothScroll>
          <CartProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />

            {/* Floating WhatsApp Quick Action Button */}
            <a
              href={SITE.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105 group"
            >
              <MessageCircle className="w-5 h-5 fill-current animate-pulse" />
              <span className="text-xs font-bold tracking-wide hidden sm:inline">
                Order via WhatsApp
              </span>
            </a>
          </CartProvider>
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
