"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

type FAQItem = {
	pertanyaan: string;
	jawaban: string;
};

const dataFAQ: FAQItem[] = [
	{
		pertanyaan: "Bagaimana cara membeli akses ke cerita premium?",
		jawaban:
			"Kamu bisa membeli akses dengan menggunakan kredit. Kredit dapat dibeli melalui berbagai metode pembayaran seperti e-wallet, transfer bank, atau kartu kredit.",
	},
	{
		pertanyaan: "Apa itu sistem koin di Readora?",
		jawaban:
			"Sistem koin digunakan untuk membuka bab premium pada cerita tertentu. 1 koin setara dengan 1 bab yang bisa kamu baca.",
	},
	{
		pertanyaan: "Apakah saya harus login untuk membeli akses?",
		jawaban:
			"Ya, kamu harus login terlebih dahulu agar kredit yang kamu beli tersimpan di akun dan bisa digunakan membaca cerita.",
	},
	{
		pertanyaan: "Apakah cerita yang sudah dibuka bisa dibaca ulang?",
		jawaban:
			"Tentu! Semua cerita yang sudah kamu beli aksesnya bisa kamu baca ulang kapan saja tanpa membayar lagi.",
	},
	{
		pertanyaan: "Apakah saya bisa meminta refund jika salah beli?",
		jawaban:
			"Sayangnya, transaksi yang sudah dilakukan tidak bisa dikembalikan. Harap pastikan sebelum melakukan pembelian.",
	},
	{
		pertanyaan: "Bagaimana jika kredit saya tidak masuk?",
		jawaban:
			"Silakan hubungi tim support Readora melalui menu bantuan di aplikasi atau kirim email ke support@readora.id.",
	},
];

const containerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { type: "spring", stiffness: 100, damping: 15 },
	},
};

export default function FAQ() {
	const [terbuka, setTerbuka] = useState<number | null>(null);

	const toggle = (index: number) => {
		setTerbuka(terbuka === index ? null : index);
	};

	return (
		<section className="bg-gray-900 text-white w-full px-4 md:px-6 py-0">
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.2 }}
				variants={containerVariants}
				layoutScroll
				className="max-w-3xl mx-auto">
				<h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-purple-400">
					Pertanyaan Yang Sering Diajukan (FAQ)
				</h2>
				<div className="space-y-3">
					{dataFAQ.map((item, index) => {
						const isOpen = terbuka === index;

						return (
							<motion.div
								variants={itemVariants}
								key={index}
								layout
								transition={{ layout: { duration: 0.4, ease: "easeInOut" } }}
								className="border border-gray-700 rounded-xl bg-gray-800 overflow-hidden shadow-sm">
								<button
									onClick={() => toggle(index)}
									className="w-full flex justify-between items-center px-5 py-4 text-left text-sm md:text-base font-medium transition hover:bg-gray-700">
									<span>{item.pertanyaan}</span>
									<motion.div
										animate={{ rotate: isOpen ? 180 : 0 }}
										transition={{ duration: 0.3 }}>
										<ChevronDown className="w-5 h-5" />
									</motion.div>
								</button>

								<AnimatePresence initial={false}>
									{isOpen && (
										<motion.div
											key="content"
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											exit={{ opacity: 0 }}
											transition={{ duration: 0.25 }}
											className="px-5 pb-4"
											layout>
											<motion.p
												initial={{ y: 10, opacity: 0 }}
												animate={{ y: 0, opacity: 1 }}
												exit={{ y: 10, opacity: 0 }}
												transition={{ duration: 0.3, ease: "easeOut" }}
												className="text-sm md:text-base text-gray-300">
												{item.jawaban}
											</motion.p>
										</motion.div>
									)}
								</AnimatePresence>
							</motion.div>
						);
					})}
				</div>
			</motion.div>
		</section>
	);
}
