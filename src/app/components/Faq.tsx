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
		pertanyaan: "Apa itu Readora?",
		jawaban:
			"Readora adalah platform toko buku digital karya anak bangsa yang memungkinkan siapa saja membaca dan membeli buku hanya dengan bermodalkan internet. Tujuannya adalah memberi akses pengetahuan yang merata ke seluruh pelosok Indonesia.",
	},
	{
		pertanyaan: "Bagaimana cara membeli buku di Readora?",
		jawaban:
			"Kamu bisa memilih buku yang diinginkan, lalu klik tombol 'Beli'. Untuk pembelian, kamu akan diarahkan ke WhatsApp admin Readora yang akan memandu proses transaksi dan pengiriman akses baca.",
	},
	{
		pertanyaan: "Bagaimana cara menjadi penulis di Readora?",
		jawaban:
			"Untuk menjadi penulis, kamu hanya perlu menghubungi admin Readora lewat WhatsApp. Kamu akan dibantu untuk mendaftar dan diberikan akses login untuk mengunggah bukumu sendiri ke platform.",
	},
	{
		pertanyaan: "Bagaimana Readora bisa menjadi toko buku online terbaik?",
		jawaban:
			"Readora hadir bukan sekadar sebagai toko buku, tapi sebagai gerakan literasi digital. Dengan mendukung penulis lokal, menyediakan akses mudah ke bacaan berkualitas, dan menjangkau pembaca di seluruh pelosok negeri, Readora turut mewujudkan Indonesia Emas 2045 — bangsa yang cerdas, berdaya, dan haus akan pengetahuan.",
	},
	{
		pertanyaan: "Apakah saya bisa menjadi Key Partner Readora?",
		jawaban:
			"Tentu bisa! Kamu bisa menjadi partner Readora sebagai penulis, reseller buku, reviewer, atau pengembang komunitas baca di daerahmu. Kami membuka kolaborasi seluas-luasnya untuk memajukan literasi digital bersama.",
	},
	{
		pertanyaan: "Siapa pencipta Readora?",
		jawaban:
			"Readora dibuat oleh anak muda Indonesia yang memiliki visi besar: membangun negeri lewat akses pengetahuan yang inklusif. Didorong oleh semangat perubahan, Readora ingin menjadi jembatan literasi bagi semua kalangan, dari kota hingga desa.",
	},
];

export default function FAQ() {
	const [terbuka, setTerbuka] = useState<number | null>(null);

	const toggle = (index: number) => {
		setTerbuka(terbuka === index ? null : index);
	};

	return (
		<section className="bg-gray-900 text-white w-full px-4 md:px-6 py-0">
			<div className="max-w-3xl mx-auto">
				<h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-purple-400">
					Pertanyaan Yang Sering Diajukan (FAQ)
				</h2>
				<div className="space-y-3">
					{dataFAQ.map((item, index) => {
						const isOpen = terbuka === index;

						return (
							<div
								key={index}
								className="border border-gray-700 rounded-xl bg-gray-800 shadow-sm">
								<button
									onClick={() => toggle(index)}
									className="w-full flex justify-between items-center px-5 py-4 text-left text-sm md:text-base font-medium transition-colors duration-200 hover:bg-gray-700 rounded-xl">
									<span>{item.pertanyaan}</span>
									<motion.div
										animate={{ rotate: isOpen ? 180 : 0 }}
										transition={{ duration: 0.2, ease: "easeInOut" }}>
										<ChevronDown className="w-5 h-5 flex-shrink-0 ml-2" />
									</motion.div>
								</button>

								<motion.div
									initial={false}
									animate={{
										height: isOpen ? "auto" : 0,
										opacity: isOpen ? 1 : 0,
									}}
									transition={{
										height: { duration: 0.3, ease: "easeInOut" },
										opacity: { duration: 0.2, ease: "easeInOut" },
									}}
									className="overflow-hidden">
									<div className="px-5 pb-4">
										<p className="text-sm md:text-base text-gray-300 leading-relaxed">
											{item.jawaban}
										</p>
									</div>
								</motion.div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
