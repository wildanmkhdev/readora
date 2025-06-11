"use client";

import React from "react";
import Link from "next/link";
import { books } from "../db/book-populer";
import { motion } from "framer-motion";

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

				<div className="hide-scrollbar overflow-x-auto lg:overflow-x-visible">
					<motion.div
						className="flex gap-4 sm:gap-6 md:gap-8 lg:grid lg:grid-cols-4 xl:grid-cols-5"
						variants={containerVariant}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, amount: 0.2 }}>
						{books.map((book, index) => {
							const views = Math.floor(Math.random() * 1000) + 100;

							return (
								<motion.div key={index} variants={cardVariant}>
									<Link href={`/deksripsi-product/${book.id}`}>
										<div className="flex flex-col h-full w-40 sm:w-48 md:w-56 lg:w-full min-h-[340px] rounded-lg overflow-hidden border border-gray-700 bg-gray-800 shadow hover:shadow-lg transition-all duration-300">
											{/* COVER */}
											<div className="relative aspect-[2/3] w-full overflow-hidden">
												<img
													src={book.coverImage}
													alt={book.title}
													className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
												/>
												<span className="absolute top-0 left-0 m-2 rounded bg-red-600 px-2 py-1 text-xs font-semibold text-white">
													🔥 Hot Seller
												</span>
											</div>

											{/* CONTENT */}
											<div className="flex flex-col justify-between flex-1 p-3 text-sm text-white">
												<div>
													<h3 className="line-clamp-2 font-semibold">
														{book.title}
													</h3>
													<p className="mt-2 font-medium">
														Rp{book.price.toLocaleString("id-ID")}
													</p>
												</div>
												<p className="mt-2 flex items-center gap-1 text-xs text-gray-400">
													👁️ {views}
												</p>
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
