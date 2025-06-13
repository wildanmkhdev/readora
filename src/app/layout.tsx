import { ReactNode } from "react";
import { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footed from "./components/Footed";
import Script from "next/script";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Readdora - Toko Buku Online",
    template: "%s | Readdora",
  },
  description: "Readdora adalah platform buku digital terbaik untuk menemukan dan membeli buku favoritmu dengan mudah.",
  keywords: [
    "buku",
    "ebook",
    "toko buku",
    "buku digital",
    "readdora",
    "baca buku online",
    "platform buku Indonesia",
  ],
  metadataBase: new URL("https://readdora.web.id"),
  openGraph: {
    title: "Readdora - Toko Buku Online",
    description: "Temukan buku terbaik dan ebook favoritmu di Readdora.",
    url: "https://readdora.web.id",
    siteName: "Readdora",
    images: [
      {
        url: "https://readdora.web.id/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Readdora - Toko Buku Online",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Readdora - Toko Buku Online",
    description: "Temukan buku terbaik dan ebook favoritmu di Readdora.",
    creator: "@readdora",
    images: ["https://readdora.web.id/og-image.jpg"],
  },
  authors: [
    {
      name: "Readdora Team",
      url: "https://readdora.web.id",
    },
  ],
  creator: "Readdora",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  alternates: {
    canonical: "https://readdora.web.id",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body>
        <Navbar />

        <Script
          id="chat-widget"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.mychat = window.mychat || {};
              window.mychat.server = 'https://live.cekat.ai/widget.js';
              window.mychat.iframeWidth = '400px';
              window.mychat.iframeHeight = '700px';
              window.mychat.accessKey = 'Readdora-IETmfjiY';
              (function() {
                var mychat = document.createElement('script');
                mychat.type = 'text/javascript';
                mychat.async = true;
                mychat.src = window.mychat.server;
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(mychat, s);
              })();
            `,
          }}
        />

        <main>{children}</main>
        <Footed />
      </body>
    </html>
  );
}
