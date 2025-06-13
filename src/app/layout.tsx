// app/layout.tsx
import { ReactNode } from "react"; // Import untuk children props
import Navbar from "./components/Navbar"; // Import komponen Navbar
import Footed from "./components/Footed"; // Import komponen Footer
import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";

export const metadata = {
	title: {
		default: "Readoora - Toko Buku Online",
		template: "%s | Readoora",
	},
	description:
		"Readoora adalah platform buku digital terbaik untuk menemukan dan membeli buku favoritmu dengan mudah.",
	keywords: ["buku", "ebook", "toko buku", "buku digital", "readoora"],
	authors: [{ name: "Readoora Team", url: "https://readoora.com" }],
	creator: "Readoora",
	metadataBase: new URL("https://readdora.web.id"),
	openGraph: {
		title: "Readoora - Toko Buku Online",
		description: "Temukan buku terbaik dan ebook favoritmu di Readoora.",
		url: "https://readdora.web.id",
		siteName: "Readdora",
		locale: "id_ID",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Readdora - Toko Buku Online",
		description: "Temukan buku terbaik dan ebook favoritmu di Readdora.",
		creator: "@readdora",
	},
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="id">
			<head>
				<link
					href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rubik+Spray+Paint&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
					rel="stylesheet"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
			</head>

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
