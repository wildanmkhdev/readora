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
		user: "Maya Designer",
		komentar:
			"UI/UX Readora sangat intuitif! Menemukan buku jadi super mudah dengan navigasi yang clean.",
		waktu: "2 jam lalu",
		foto: "https://randomuser.me/api/portraits/women/79.jpg",
	},
	{
		user: "Arif Developer",
		komentar:
			"Website loading-nya cepat banget! Bahkan dengan koneksi lambat tetap smooth browsing.",
		waktu: "1 hari lalu",
		foto: "https://randomuser.me/api/portraits/men/45.jpg",
	},
	{
		user: "Sari Bookworm",
		komentar:
			"Fitur pencarian canggih banget, ketik sebagian judul langsung muncul! Ga perlu scroll panjang.",
		waktu: "3 hari lalu",
		foto: "https://randomuser.me/api/portraits/women/55.jpg",
	},
	{
		user: "Budi SEO Expert",
		komentar:
			"Readora mudah banget ditemukan di Google! SEO-nya kuat, ranking selalu di page 1.",
		waktu: "5 menit lalu",
		foto: "https://randomuser.me/api/portraits/men/21.jpg",
	},
	{
		user: "Nina UX Research",
		komentar:
			"User experience terbaik! Filter kategori dan sorting yang sangat membantu menemukan buku ideal.",
		waktu: "30 menit lalu",
		foto: "https://randomuser.me/api/portraits/women/29.jpg",
	},
	{
		user: "Doni Web Dev",
		komentar:
			"Performance website A+! Core Web Vitals sempurna, mobile-friendly, dan responsif di semua device.",
		waktu: "1 jam lalu",
		foto: "https://randomuser.me/api/portraits/men/11.jpg",
	},
	{
		user: "Lisa Content Writer",
		komentar:
			"Struktur konten dan metadata sangat SEO-friendly. Organic traffic pasti tinggi!",
		waktu: "45 menit lalu",
		foto: "https://randomuser.me/api/portraits/women/44.jpg",
	},
	{
		user: "Reza UI Designer",
		komentar:
			"Interface design yang modern dan accessible. Typography readable, color contrast perfect!",
		waktu: "15 menit lalu",
		foto: "https://randomuser.me/api/portraits/men/32.jpg",
	},
];

export default function Testimonials() {
	const [testimoni, setTestimoni] = useState<Testimoni[]>([]);

	useEffect(() => {
		// Gandakan 4x agar animasi scroll lebih panjang dan smooth di mobile
		setTestimoni([...sampleData, ...sampleData, ...sampleData, ...sampleData]);
	}, []);

	return (
		<>
			<style jsx>{`
				@keyframes scroll-left {
					0% {
						transform: translateX(0);
					}
					100% {
						transform: translateX(-33.333%);
					}
				}

				.animate-scroll-left {
					animation: scroll-left 40s linear infinite;
				}

				.animate-scroll-left:hover {
					animation-play-state: paused;
				}

				/* Mobile First Responsive Design */
				@media (max-width: 480px) {
					.animate-scroll-left {
						animation: scroll-left 25s linear infinite;
					}

					.testimonial-card {
						width: 280px !important;
						min-width: 280px !important;
						padding: 1rem !important;
					}

					.testimonial-avatar {
						width: 50px !important;
						height: 50px !important;
					}

					.testimonial-text {
						font-size: 0.9rem !important;
						line-height: 1.4 !important;
					}

					.testimonial-name {
						font-size: 1rem !important;
					}

					.tech-badge {
						font-size: 0.7rem !important;
						padding: 0.2rem 0.5rem !important;
					}
				}

				@media (min-width: 481px) and (max-width: 768px) {
					.animate-scroll-left {
						animation: scroll-left 30s linear infinite;
					}

					.testimonial-card {
						width: 320px !important;
						min-width: 320px !important;
					}
				}

				@media (min-width: 769px) and (max-width: 1024px) {
					.animate-scroll-left {
						animation: scroll-left 35s linear infinite;
					}

					.testimonial-card {
						width: 350px !important;
						min-width: 350px !important;
					}
				}

				@media (min-width: 1025px) {
					.testimonial-card {
						width: 380px !important;
						min-width: 380px !important;
					}
				}

				/* Touch device optimizations */
				@media (hover: none) and (pointer: coarse) {
					.animate-scroll-left:hover {
						animation-play-state: running;
					}

					.testimonial-card:hover {
						transform: none !important;
					}
				}

				/* Smooth scrolling container */
				.scroll-container {
					will-change: transform;
					backface-visibility: hidden;
					perspective: 1000px;
				}
			`}</style>

			<section className="bg-gray-900 py-8 sm:py-12 lg:py-16 overflow-hidden">
				<div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
					<div className="text-center mb-8 sm:mb-10 lg:mb-12">
						<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent leading-tight">
							Pengalaman Pengguna Readora
						</h2>
						<p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-xl lg:max-w-2xl mx-auto px-4">
							Platform yang dibangun dengan fokus pada UI/UX, performa, dan
							kemudahan pencarian
						</p>
					</div>

					<div className="relative w-full overflow-hidden">
						{/* Gradient fade untuk efek smooth di kiri-kanan */}
						<div className="absolute left-0 top-0 h-full w-8 sm:w-12 lg:w-20 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none"></div>
						<div className="absolute right-0 top-0 h-full w-8 sm:w-12 lg:w-20 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none"></div>

						<div className="flex animate-scroll-left space-x-4 sm:space-x-6 scroll-container">
							{testimoni.map((item, index) => (
								<div
									key={index}
									className="testimonial-card min-w-max w-80 sm:w-96 bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-2xl flex-shrink-0 border border-gray-600 hover:border-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-purple-500/20">
									<div className="flex justify-center mb-4 sm:mb-6">
										<div className="relative">
											<img
												src={item.foto}
												alt={item.user}
												className="testimonial-avatar w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-gradient-to-r from-purple-400 to-blue-400"
											/>
											<div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-6 sm:h-6 bg-green-500 rounded-full border-2 border-gray-800"></div>
										</div>
									</div>

									<div className="text-center">
										<div className="mb-4">
											{/* Tech badges */}
											<div className="flex justify-center mb-3">
												<div className="flex space-x-1">
													<span className="tech-badge px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium">
														UX
													</span>
													<span className="tech-badge px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium">
														FAST
													</span>
													<span className="tech-badge px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-medium">
														SEO
													</span>
												</div>
											</div>

											<p className="testimonial-text italic text-base sm:text-lg text-gray-200 leading-relaxed mb-4 font-medium">
												"{item.komentar}"
											</p>
										</div>

										<div className="border-t border-gray-600 pt-3 sm:pt-4">
											<h4 className="testimonial-name text-lg sm:text-xl font-bold text-white mb-1">
												{item.user}
											</h4>
											<div className="flex items-center justify-center text-xs sm:text-sm text-purple-300">
												<svg
													className="w-3 h-3 sm:w-4 sm:h-4 mr-1"
													fill="currentColor"
													viewBox="0 0 20 20">
													<path
														fillRule="evenodd"
														d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
														clipRule="evenodd"
													/>
												</svg>
												{item.waktu}
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* CTA Section */}
					<div className="text-center mt-8 sm:mt-10 lg:mt-12">
						<div className="mb-4 sm:mb-6">
							<div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-6 lg:space-x-8 text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6">
								<div className="flex items-center">
									<svg
										className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2"
										fill="currentColor"
										viewBox="0 0 20 20">
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										/>
									</svg>
									<span className="font-medium">Fast Loading</span>
								</div>
								<div className="flex items-center">
									<svg
										className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mr-2"
										fill="currentColor"
										viewBox="0 0 20 20">
										<path
											fillRule="evenodd"
											d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
											clipRule="evenodd"
										/>
									</svg>
									<span className="font-medium">Smart Search</span>
								</div>
								<div className="flex items-center">
									<svg
										className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 mr-2"
										fill="currentColor"
										viewBox="0 0 20 20">
										<path
											fillRule="evenodd"
											d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
											clipRule="evenodd"
										/>
									</svg>
									<span className="font-medium">SEO Optimized</span>
								</div>
							</div>
						</div>
						<button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 w-full max-w-xs sm:max-w-none sm:w-auto">
							Rasakan Pengalaman Terbaik
						</button>
					</div>
				</div>
			</section>
		</>
	);
}
