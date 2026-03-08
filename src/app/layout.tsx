import type { Metadata } from "next";
import { Cinzel, Rajdhani, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema, webSiteSchema } from "@/lib/schema";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Ulysses Universe | Homer's Odyssey Reimagined Among the Stars",
    template: "%s | The Ulysses Universe",
  },
  description:
    "A space opera trilogy reimagining Homer's Odyssey. Follow Admiral Ulysses Theron across the cosmos in this epic tale of myth, technology, and the journey home.",
  metadataBase: new URL("https://theulyssesuniverse.com"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://theulyssesuniverse.com",
    siteName: "The Ulysses Universe",
    title: "The Ulysses Universe | Homer's Odyssey Reimagined Among the Stars",
    description:
      "A space opera trilogy reimagining Homer's Odyssey. Follow Admiral Ulysses Theron across the cosmos.",
    images: [
      {
        url: "/images/og/hero.webp",
        width: 1200,
        height: 630,
        alt: "The Ulysses Universe - Homer's Odyssey Reimagined Among the Stars",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Ulysses Universe",
    description:
      "A space opera trilogy reimagining Homer's Odyssey. Follow Admiral Ulysses Theron across the cosmos.",
    images: ["/images/og/hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${cinzel.variable} ${rajdhani.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      style={{ colorScheme: "dark" }}
    >
      <body className="bg-void-black text-text-primary font-body antialiased">
        <JsonLd data={organizationSchema()} />
        <JsonLd data={webSiteSchema()} />
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <div className="star-field" aria-hidden="true" />
        <Navigation />
        <main id="main-content" className="relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
