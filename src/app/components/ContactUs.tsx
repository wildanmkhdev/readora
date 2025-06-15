"use client";
import { motion } from "framer-motion";

export default function ContactUs() {
	return (
		<section className="bg-gray-900 py-4 px-4 sm:px-6 lg:px-8">
			<div className="max-w-3xl mx-auto text-white text-center">
				{/* Judul dengan animasi */}
				<motion.h2
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
					Hubungi Kami
				</motion.h2>

				{/* Deskripsi dengan animasi */}
				<motion.p
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					viewport={{ once: true }}
					className="text-sm md:text-base text-gray-300 mb-8">
					Ada pertanyaan tentang akses premium, langganan, atau cerita favorit?
					Kirim pesan kamu ke tim Readora!
				</motion.p>

				{/* Form Contact dengan animasi per input */}
				<form className="space-y-5">
					{["Nama kamu", "Email kamu"].map((placeholder, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
							viewport={{ once: true }}>
							<input
								type={placeholder === "Email kamu" ? "email" : "text"}
								placeholder={placeholder}
								className="w-full bg-gray-800 border border-gray-700 rounded-2xl p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
							/>
						</motion.div>
					))}

					{/* Textarea */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						viewport={{ once: true }}>
						<textarea
							placeholder="Pesan kamu..."
							rows={5}
							className="w-full bg-gray-800 border border-gray-700 rounded-2xl p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
						/>
					</motion.div>

					{/* Tombol Submit */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.5 }}
						viewport={{ once: true }}>
						<button
							type="submit"
							className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 transition duration-300 text-white font-semibold py-3 rounded-2xl">
							Kirim Pesan
						</button>
					</motion.div>
				</form>
			</div>
		</section>
	);
}
