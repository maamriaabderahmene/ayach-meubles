import type { Metadata, Viewport } from "next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ConditionalLayout from "@/components/ConditionalLayout";
import MetaPixel from "@/components/MetaPixel";
import { I18nProvider, translations } from "@/lib/i18n";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.zak-shop-officiel.com";
const SITE_NAME = "ZAK SHOP";
const SITE_TAGLINE = "ملابس فاخرة | Mode Premium";

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "زاك شوب — أفضل وجهة لملابس الرجال والنساء ذات الجودة العالية بأسعار مناسبة. توصيل سريع لجميع ولايات الجزائر. ZAK SHOP — La meilleure destination mode en Algérie.",
  keywords:
    "zak shop, زاك شوب, ملابس جزائر, mode algérie, vêtements homme femme algérie, boutique en ligne algérie, livraison algérie, زاك-شوب-أوفيسيال, clothing algeria, fashion algeria, zak-shop-officiel",
  authors: [{ name: "ZAK SHOP" }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
    languages: { ar: "/", fr: "/" },
  },
  openGraph: {
    type: "website",
    locale: "ar_DZ",
    alternateLocale: "fr_DZ",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description:
      "زاك شوب — متجر الأزياء الأول في الجزائر. ملابس عالية الجودة, توصيل سريع, أسعار تنافسية.",
    images: [
      { url: "/og-image.jpg", width: 1200, height: 630, alt: "ZAK SHOP — Mode Premium Algérie" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description:
      "زاك شوب — ملابس فاخرة, توصيل سريع لجميع ولايات الجزائر. Livraison rapide partout en Algérie.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg",  type: "image/svg+xml" },
      { url: "/favicon.ico",  sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0F0F0F",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      className={`${montserrat.variable} ${cormorant.variable}`}
      dir="rtl"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Italiana&display=swap"
          rel="stylesheet"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `:root { --font-italiana: 'Italiana', Georgia, serif; }`,
          }}
        />
      </head>
      <body>
        <I18nProvider initialLocale="ar" translations={translations}>
          {/* Schema.org Structured Data — ZAK SHOP */}
          <Script
            id="schema-org"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "ClothingStore",
                    "@id": `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.zak-shop-officiel.com"}/#store`,
                    name: "ZAK SHOP",
                    alternateName: "زاك شوب",
                    url:  process.env.NEXT_PUBLIC_SITE_URL || "https://www.zak-shop-officiel.com",
                    description: "متجر الأزياء الأول في الجزائر — ملابس رجال ونساء عالية الجودة بأسعار تنافسية. La meilleure boutique de mode en Algérie.",
                    image: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.zak-shop-officiel.com"}/og-image.jpg`,
                    priceRange: "$$",
                    currenciesAccepted: "DZD",
                    paymentAccepted: "Cash, Livraison contre remboursement",
                    areaServed: "DZ",
                    inLanguage: ["ar", "fr"],
                    aggregateRating: {
                      "@type": "AggregateRating",
                      ratingValue: "4.8",
                      reviewCount: "1240",
                    },
                    sameAs: [
                      "https://www.instagram.com/zakshop_officiel",
                      "https://www.facebook.com/zakshop.officiel",
                      "https://www.tiktok.com/@zakshop_officiel",
                    ],
                  },
                  {
                    "@type": "WebSite",
                    "@id": `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.zak-shop-officiel.com"}/#website`,
                    url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.zak-shop-officiel.com",
                    name: "ZAK SHOP",
                    potentialAction: {
                      "@type": "SearchAction",
                      target: {
                        "@type": "EntryPoint",
                        urlTemplate: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.zak-shop-officiel.com"}/products?q={search_term_string}`,
                      },
                      "query-input": "required name=search_term_string",
                    },
                  },
                ],
              }),
            }}
          />

          <MetaPixel />
          <ConditionalLayout>{children}</ConditionalLayout>
        </I18nProvider>
      </body>
    </html>
  );
}
