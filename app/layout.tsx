import type { Metadata } from "next";
import { Inter, Geist_Mono, Cormorant_Garamond, Raleway } from "next/font/google";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import LoadingScreen from "@/app/components/LoadingScreen";
import ScrollReset from "@/app/components/ScrollReset";
import SmoothScroll from "@/app/components/SmoothScroll";
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

export const metadata: Metadata = {
  title: "DPM",
  description: "Premium Trading Platform",
  openGraph: {
    title: "DPM",
    description: "Premium Trading Platform",
    images: [{ url: "/socialMedia.png", width: 1200, height: 630, alt: "DPM" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DPM",
    description: "Premium Trading Platform",
    images: ["/socialMedia.png"],
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/favicon/apple-touch-icon.png" },
    other: [
      { rel: "manifest", url: "/favicon/site.webmanifest" },
    ],
  },
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
      <body className="min-h-full flex flex-col bg-[#0B111E] text-white overflow-x-hidden">
        <ScrollReset />
        <SmoothScroll />
        <LoadingScreen />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
