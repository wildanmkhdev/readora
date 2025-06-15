"use client";
import React from "react";
import TrueFocus from "../../Reactbits/TrueFocus/TrueFocus";
import { motion } from "framer-motion";

const HeroBanner: React.FC = () => {
	const handleScroll = () => {
		const section = document.getElementById("populer");
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section className="bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 text-white py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-10 lg:px-16">
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1.2, ease: "easeOut" }}
				className="max-w-5xl mx-auto text-center space-y-8">
				{/* HEADLINE */}
				<motion.h1
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 1 }}
					className="text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
					<TrueFocus
						sentence="Baca Tanpa Batas, Kapan Aja!"
						blurAmount={4}
						borderColor="#3b82f6"
						glowColor="rgba(59, 130, 246, 0.6)"
						animationDuration={0.5}
						pauseBetweenAnimations={1}
						className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
					/>
				</motion.h1>

				{/* DESCRIPTION */}
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5, duration: 1 }}
					className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4">
					Ribuan eBook siap dibaca di genggamanmu. Temukan cerita, ilmu, dan
					inspirasi hanya di Readoora.
				</motion.p>

				{/* CTA BUTTONS */}
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.8, duration: 0.8 }}
					className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6 w-full">
					<button
						onClick={handleScroll}
						className="w-full sm:w-auto rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:scale-105 active:scale-95">
						Mulai Membaca
					</button>

					<button className="w-full sm:w-auto rounded-2xl border border-white px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:scale-105 active:scale-95">
						Jelajahi Koleksi
					</button>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default HeroBanner;
