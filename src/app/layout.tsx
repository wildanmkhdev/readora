// app/layout.tsx
import { ReactNode } from "react"; // Import untuk children props
import Navbar from "./components/Navbar"; // Import komponen Navbar
import Footed from "./components/Footed"; // Import komponen Footer
import "../styles/globals.css";

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
	metadataBase: new URL("https://readoora.com"),
	openGraph: {
		title: "Readoora - Toko Buku Online",
		description: "Temukan buku terbaik dan ebook favoritmu di Readoora.",
		url: "https://readoora.com",
		siteName: "Readoora",
		locale: "id_ID",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Readoora - Toko Buku Online",
		description: "Temukan buku terbaik dan ebook favoritmu di Readoora.",
		creator: "@readoora",
	},
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="id">
			<body>
				<Navbar /> {/* Navbar yang akan selalu ada */}
				<main>{children}</main> {/* Tempat konten halaman akan diganti */}
				<Footed /> {/* Footer yang akan selalu ada */}
			</body>
		</html>
	);
}
