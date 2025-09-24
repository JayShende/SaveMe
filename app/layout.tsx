import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TanstackProvider } from "@/components/providers/tasnstack-provider";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BookmarkMe - Your Safe Place for All Links",
  description:
    "Save and organize unlimited links from Instagram, Twitter, and the web. Never lose track of important content again with our powerful search and tagging system.",
  keywords: [
    "bookmark manager",
    "link organizer",
    "save links",
    "bookmark app",
    "link collection",
    "social media bookmarks",
    "Instagram bookmarks",
    "Twitter bookmarks",
    "web bookmarks",
    "link management",
    "digital organization",
    "content curation",
  ],
  authors: [{ name: "BookmarkMe Team" }],
  creator: "BookmarkMe",
  publisher: "BookmarkMe",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://bookmarkme.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BookmarkMe - Your Safe Place for All Links",
    description:
      "Save and organize unlimited links from Instagram, Twitter, and the web. Never lose track of important content again with our powerful search and tagging system.",
    url: "https://bookmarkme.app",
    siteName: "BookmarkMe",
    images: [
      {
        url: "/images/preview.png",
        width: 1200,
        height: 630,
        alt: "BookmarkMe App Preview - Save and organize your links",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BookmarkMe - Your Safe Place for All Links",
    description:
      "Save and organize unlimited links from Instagram, Twitter, and the web. Never lose track of important content again.",
    images: ["/images/preview.png"],
    creator: "@bookmarkme",
  },
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
  verification: {
    google: "your-google-verification-code",
  },
  category: "productivity",
  classification: "Bookmark Management Application",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "BookmarkMe",
    "application-name": "BookmarkMe",
    "msapplication-TileColor": "#10b981",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#10b981",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TanstackProvider>{children}</TanstackProvider>
        <Toaster />
      </body>
    </html>
  );
}
