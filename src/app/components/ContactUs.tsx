"use client";
import { motion } from "framer-motion";

export default function ContactUs() {
	return (
		<motion.section
			className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8"
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			viewport={{ once: true }}>
			<div className="max-w-3xl mx-auto text-white text-center">
				{/* Judul dengan Gradient */}
				<h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text mb-4">
					Hubungi Kami
				</h2>
				<p className="text-sm md:text-base text-gray-300 mb-8">
					Ada pertanyaan tentang akses premium, langganan, atau cerita favorit?
					Kirim pesan kamu ke tim Readora!
				</p>

				{/* Form Contact */}
				<form className="space-y-5">
					<div>
						<input
							type="text"
							placeholder="Nama kamu"
							className="w-full bg-gray-800 border border-gray-700 rounded-2xl p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
						/>
					</div>
					<div>
						<input
							type="email"
							placeholder="Email kamu"
							className="w-full bg-gray-800 border border-gray-700 rounded-2xl p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
						/>
					</div>
					<div>
						<textarea
							placeholder="Pesan kamu..."
							rows={5}
							className="w-full bg-gray-800 border border-gray-700 rounded-2xl p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>
					</div>
					<div>
						<button
							type="submit"
							className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 transition duration-300 text-white font-semibold py-3 rounded-2xl">
							Kirim Pesan
						</button>
					</div>
				</form>
			</div>
		</motion.section>
	);
}
