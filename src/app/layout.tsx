import { ReactNode } from "react";
import { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footed from "./components/Footed";
import Script from "next/script";
import "../styles/globals.css";

export const metadata: Metadata = {
	title: "Readdora - Toko Buku Digital & Baca Buku Online",
	description:
		"Readdora adalah toko buku online dan platform baca buku digital terbaik di Indonesia. Temukan koleksi ebook dan buku digital favoritmu dengan mudah dan cepat.",
	keywords: [
		"toko buku online",
		"buku digital",
		"ebook Indonesia",
		"baca buku online",
		"platform buku digital",
		"Readdora",
		"aplikasi buku",
		"buku bacaan",
		"ebook murah",
		"pembaca ebook",
	],
	metadataBase: new URL("https://readdora.web.id"),
	openGraph: {
		title: "Readdora - Toko Buku Digital & Baca Buku Online",
		description:
			"Platform terbaik untuk baca dan beli buku digital. Jelajahi koleksi ebook lengkap hanya di Readdora.",
		url: "https://readdora.web.id",
		siteName: "Readdora",
		images: [
			{
				url: "https://readdora.web.id/apple-touch-icon.png",
				width: 1200,
				height: 630,
				alt: "Readdora - Toko Buku Digital & Baca Buku Online",
			},
		],
		locale: "id_ID",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Readdora - Toko Buku Digital & Baca Buku Online",
		description:
			"Temukan dan baca ebook favoritmu hanya di Readdora. Mudah, cepat, dan lengkap!",
		creator: "@readdora",
		images: ["https://readdora.web.id/apple-touch-icon.png"],
	},
	authors: [
		{
			name: "Readdora Team",
			url: "https://readdora.web.id",
		},
	],
	creator: "Readdora",
	icons: {
		icon: "/apple-touch-icon.png",
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

				{/* Chat Widget Integration */}
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
