"use client";
import { useEffect, useState } from "react";

type Testimoni = {
	user: string;
	komentar: string;
	waktu: string;
	foto: string;
};

const sampleData: Testimoni[] = [
	{
		user: "Alya",
		komentar: "Cerita di Readora sangat menarik dan bikin nagih!",
		waktu: "2 jam lalu",
		foto: "https://randomuser.me/api/portraits/women/79.jpg",
	},
	{
		user: "Rizky",
		komentar: "Fitur premiumnya worth it banget!",
		waktu: "Kemarin",
		foto: "https://randomuser.me/api/portraits/men/45.jpg",
	},
	{
		user: "Lina",
		komentar: "Akhirnya bisa baca cerita favoritku tanpa gangguan.",
		waktu: "3 hari lalu",
		foto: "https://randomuser.me/api/portraits/women/55.jpg",
	},
	{
		user: "Dimas",
		komentar: "UI-nya bersih dan mudah digunakan!",
		waktu: "5 menit lalu",
		foto: "https://randomuser.me/api/portraits/men/21.jpg",
	},
	{
		user: "Sarah",
		komentar: "Aku suka sistem koinnya, gampang dipakai.",
		waktu: "Baru saja",
		foto: "https://randomuser.me/api/portraits/women/29.jpg",
	},
	{
		user: "Fajar",
		komentar: "Bisa baca offline juga? Mantap!",
		waktu: "1 jam lalu",
		foto: "https://randomuser.me/api/portraits/men/11.jpg",
	},
];

export default function Testimonials() {
	const [testimoni, setTestimoni] = useState<Testimoni[]>([]);

	useEffect(() => {
		// Gandakan agar animasi scroll jadi panjang
		setTestimoni([...sampleData, ...sampleData]);
	}, []);

	return (
		<section className="bg-gray-900 py-10 overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
				<h2 className="text-xl md:text-2xl font-bold text-purple-400 text-center mb-6">
					Apa Kata Pengguna Readora ?
				</h2>

				<div className="relative w-full overflow-hidden">
					<div className="flex animate-scroll space-x-6">
						{testimoni.map((item, index) => (
							<div
								key={index}
								className="min-w-max bg-gray-800 rounded-xl p-4 text-white shadow-md w-56">
								<div className="flex justify-center mb-3">
									<img
										src={item.foto}
										alt={item.user}
										className="w-12 h-12 rounded-full object-cover border-2 border-purple-400"
									/>
								</div>
								<p className="italic text-sm text-center text-gray-300">
									"{item.komentar}"
								</p>
								<div className="mt-3 text-xs text-center text-purple-300">
									- {item.user}, {item.waktu}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
