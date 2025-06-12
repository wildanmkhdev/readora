"use client";
import { useState } from "react";
import { motion } from "framer-motion";

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

export default function FAQ() {
	const [terbuka, setTerbuka] = useState<number | null>(null);

	const toggle = (index: number) => {
		setTerbuka(terbuka === index ? null : index);
	};

	return (
		<section className="bg-gray-900 text-white w-full">
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				viewport={{ once: true }}
				className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
				<h2 className="text-2xl md:text-3xl font-bold text-center pt-10 pb-6 text-purple-400">
					Pertanyaan Seputar Pembelian & Akses Cerita
				</h2>
				<div className="space-y-2">
					{dataFAQ.map((item, index) => (
						<div key={index} className="border-t border-gray-700">
							<button
								onClick={() => toggle(index)}
								className="w-full text-left py-4 text-sm md:text-base font-medium text-white flex justify-between items-center bg-gray-900 hover:bg-gray-800 transition">
								<span>{item.pertanyaan}</span>
								<span className="ml-4 text-xl">
									{terbuka === index ? "-" : "+"}
								</span>
							</button>

							<div
								className={`transition-all duration-300 ease-in-out overflow-hidden ${
									terbuka === index ? "max-h-60 pb-4 bg-gray-900" : "max-h-0"
								}`}>
								<p className="text-sm md:text-base text-gray-300">
									{item.jawaban}
								</p>
							</div>
						</div>
					))}
				</div>
				<div className="h-10" />
			</motion.div>
		</section>
	);
}
