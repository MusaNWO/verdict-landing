import type { Metadata, Viewport } from "next";
import "./globals.css";
import Cursor from "@/components/Cursor";
import SplashIntro from "@/components/SplashIntro";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://verdict.app";
const SITE_NAME = "Verdict";
const TITLE = "Verdict - End the group-chat debate";
const DESCRIPTION =
  "Verdict turns the endless “idk, what do you want?” into one tap, one vote, one final answer. The group-chat debate ender - decide in about 30 seconds.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · Verdict",
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Verdict",
    "group chat",
    "group decision app",
    "decision maker",
    "ranked choice voting",
    "spin the wheel",
    "anonymous vote",
    "poll app",
    "friends decide",
    "where to eat",
    "team decisions",
    "iOS",
    "Android",
  ],
  authors: [{ name: "Verdict", url: SITE_URL }],
  creator: "Verdict",
  publisher: "Verdict",
  category: "Productivity",
  classification: "Decision making, productivity, group polls",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@verdictapp",
    creator: "@verdictapp",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  appleWebApp: {
    capable: true,
    title: "Verdict",
    statusBarStyle: "default",
  },
  manifest: "/manifest.webmanifest",
  // Icons auto-detected from app/icon.png + app/apple-icon.tsx by Next.js.
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF5EC" },
    { media: "(prefers-color-scheme: dark)", color: "#1C1820" },
  ],
  colorScheme: "light",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/verdict-logo.png`,
      sameAs: [
        "https://twitter.com/verdictapp",
        "https://www.instagram.com/verdictapp",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-US",
    },
    {
      "@type": "SoftwareApplication",
      name: SITE_NAME,
      operatingSystem: "iOS, Android",
      applicationCategory: "LifestyleApplication",
      description: DESCRIPTION,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "1240",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Schibsted+Grotesk:wght@400..900&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <SplashIntro />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
