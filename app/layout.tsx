import type { Metadata } from "next";
import { Inter, Geist_Mono, Cormorant_Garamond, Raleway } from "next/font/google";
import Script from "next/script";
import Header from "@/app/components/Header";
import CTABanner from "@/app/components/CTABanner";
import Footer from "@/app/components/Footer";
import LoadingScreen from "@/app/components/LoadingScreen";
import ScrollReset from "@/app/components/ScrollReset";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["600", "700"],
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
  weight: ["800", "900"],
});

const SITE_URL = "https://www.dpmtrade.com"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "DPM | Premium CFD Trading Platform",
    template: "%s | DPM",
  },
  description:
    "DPM is a premier CFD broker offering Forex, Commodities, Metals, Stocks, and Futures trading via MetaTrader 5. Deep liquidity and dedicated support for retail and professional traders worldwide.",
  keywords: [
    "CFD trading",
    "forex broker",
    "MetaTrader 5",
    "online trading platform",
    "forex trading",
    "commodities trading",
    "metals trading",
    "stocks CFD",
    "futures trading",
    "copy trading",
    "DPM broker",
    "DPM trading",
  ],
  authors: [{ name: "DPM", url: SITE_URL }],
  creator: "DPM",
  publisher: "DPM",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "DPM",
    title: "DPM | Premium CFD Trading Platform",
    description:
      "Trade Forex, Commodities, Metals, Stocks & Futures with DPM — MetaTrader 5, professional-grade tools, and dedicated global support.",
    images: [
      {
        url: "/socialMedia.png",
        width: 1200,
        height: 630,
        alt: "DPM — Premium CFD Trading Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@DPMTrading",
    creator: "@DPMTrading",
    title: "DPM | Premium CFD Trading Platform",
    description:
      "Trade Forex, Commodities, Metals, Stocks & Futures with DPM — MetaTrader 5, professional-grade tools, and dedicated global support.",
    images: ["/socialMedia.png"],
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/favicon/apple-touch-icon.png", sizes: "180x180" },
    shortcut: "/favicon/favicon.ico",
  },
  manifest: "/favicon/site.webmanifest",
  category: "finance",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "DPM",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/socialMedia.png`,
  description:
    "DPM is a comprehensive CFD trading provider offering Forex, Commodities, Metals, Stocks, and Futures via MetaTrader 5.",
  sameAs: [],
  serviceType: "CFD Broker",
  areaServed: "Worldwide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} ${cormorant.variable} ${raleway.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0B111E] text-white overflow-x-hidden">
        {/* Hidden Google Translate widget anchor */}
        <div id="google_translate_element" style={{ display: 'none' }} />

        {/* Google Translate — init must run before the element script */}
        <Script id="gt-init" strategy="afterInteractive">{`
          window.googleTranslateElementInit = function() {
            new google.translate.TranslateElement({
              pageLanguage: 'en',
              autoDisplay: false,
              includedLanguages: 'en,my,th'
            }, 'google_translate_element');

            // Remove body top offset that Google Translate injects
            var observer = new MutationObserver(function() {
              if (document.body.style.top) {
                document.body.style.top = '';
              }
            });
            observer.observe(document.body, { attributes: true, attributeFilter: ['style'] });
          }
        `}</Script>
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
        <ScrollReset />
        <LoadingScreen />

        {/* ── Floating Telegram button ── */}
        <a
          href="/telegram"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-full shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
          style={{
            background: '#1a2333',
            border: '1px solid rgba(255,255,255,0.12)',
          }}
        >
          <img
            src="/Telegram_logo.svg.png"
            alt="Telegram"
            width={22}
            height={22}
            style={{ display: 'block' }}
          />
          <span className="text-white text-sm font-semibold whitespace-nowrap">
            Talk to us on Telegram
          </span>
        </a>

        <Header />
        <div className="flex-1 flex flex-col">
          {children}
        </div>
        <div className="bg-white">
          <CTABanner />
        </div>
        <Footer />
      </body>
    </html>
  );
}
