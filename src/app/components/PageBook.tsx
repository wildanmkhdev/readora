"use client";

import React from "react";
import Link from "next/link";
import { books, generateSlug } from "../db/book-populer";
import { motion } from "framer-motion";

// 🔧 Fungsi untuk generate harga dan diskon
const generatePriceInfo = () => {
	const isFree = Math.random() < 0.15;
	if (isFree) {
		return { price: "Gratis", discount: null, originalPrice: null };
	}

	const basePrice = Math.floor(Math.random() * 100000) + 20000;
	const discountPercent = [0, 5, 10, 15, 20][Math.floor(Math.random() * 5)];
	const discountedPrice = basePrice - (basePrice * discountPercent) / 100;

	return {
		price: `Rp${discountedPrice.toLocaleString("id-ID")}`,
		originalPrice: discountPercent
			? `Rp${basePrice.toLocaleString("id-ID")}`
			: null,
		discount: discountPercent ? `${discountPercent}%` : null,
	};
};

const PopularBooks: React.FC = () => {
	const containerVariant = {
		hidden: {},
		show: {
			transition: {
				staggerChildren: 0.15,
			},
		},
	};

	const cardVariant = {
		hidden: { opacity: 0, y: 40 },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: "easeOut",
			},
		},
	};

	return (
		<section className="bg-gray-900 px-4 py-12 sm:px-6 lg:px-20 text-white">
			<div className="mx-auto max-w-screen-xl">
				<div className="mb-8 flex items-center justify-between">
					<h2 className="text-xl font-bold sm:text-2xl md:text-3xl">
						Rekomendasi untuk Anda
					</h2>
					<Link
						href="/all-categories"
						className="text-sm text-blue-400 hover:underline sm:text-base">
						Lihat semua
					</Link>
				</div>

				<div className="hide-scrollbar overflow-x-auto">
					<motion.div
						className="flex gap-4 sm:gap-6 md:gap-8"
						variants={containerVariant}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, amount: 0.2 }}>
						{books.map((book, index) => {
							const slug = generateSlug(book.title);
							const { price, originalPrice, discount } = generatePriceInfo();
							const views = Math.floor(Math.random() * 1000) + 100;

							return (
								<motion.div key={index} variants={cardVariant}>
									<Link href={`/books/${slug}`}>
										<div className="relative w-40 flex-shrink-0 overflow-hidden rounded-lg border border-gray-700 bg-gray-800 shadow transition-all duration-300 hover:shadow-lg sm:w-48 md:w-56">
											<div className="relative h-56 w-full overflow-hidden">
												<img
													src={book.img}
													alt={book.title}
													className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
												/>
												{discount && (
													<span className="absolute left-0 top-0 m-2 rounded bg-red-500 px-2 py-1 text-xs font-semibold text-white">
														Diskon {discount}
													</span>
												)}
											</div>
											<div className="p-3 text-sm text-white">
												<h3 className="line-clamp-2 font-semibold text-white">
													{book.title}
												</h3>
												<p className="text-xs text-gray-400">{book.author}</p>

												{/* Harga */}
												<div className="mt-2">
													{price === "Gratis" ? (
														<span className="rounded bg-green-600 px-2 py-1 text-xs font-semibold text-white">
															Gratis
														</span>
													) : (
														<div className="text-sm">
															{originalPrice && (
																<span className="mr-2 text-xs text-gray-500 line-through">
																	{originalPrice}
																</span>
															)}
															<span className="font-medium text-white">
																{price}
															</span>
														</div>
													)}
												</div>

												{/* View count */}
												<div className="mt-1 flex items-center gap-1 text-xs text-gray-400">
													👁️ {views}
												</div>
											</div>
										</div>
									</Link>
								</motion.div>
							);
						})}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default PopularBooks;
