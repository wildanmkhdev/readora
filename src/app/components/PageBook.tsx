"use client";

import React from "react";
import Link from "next/link";
import { books, generateSlug } from "../db/book-populer";
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
		<section
			className="bg-gray-900 px-6 py-16 text-white lg:px-24"
			id="popular">
			<div className="container mx-auto">
				<div className="mb-8 flex items-center justify-between">
					<h2 className="text-center text-3xl font-bold lg:text-4xl">
						Popular Books
					</h2>
					<Link
						href="/all-categories"
						className="text-lg text-blue-400 hover:text-blue-300">
						See All
					</Link>
				</div>

				<div className="hide-scrollbar cursor-grab overflow-x-auto">
					<motion.div
						className="flex space-x-6 lg:space-x-12"
						variants={containerVariant}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, amount: 0.2 }} // 👈 hanya muncul saat scroll pertama kali
					>
						{books.map((book, index) => {
							const slug = generateSlug(book.title);
							return (
								<motion.div key={index} variants={cardVariant}>
									<Link href={`/books/${slug}`}>
										<div className="group relative w-60 flex-shrink-0 cursor-pointer overflow-hidden rounded-lg bg-gray-800 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
											<div className="relative h-48 w-full overflow-hidden">
												<img
													src={book.img}
													alt={book.title}
													className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
												/>
												<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
											</div>
											<div className="absolute bottom-0 w-full p-4 text-white">
												<h3 className="truncate text-lg font-semibold text-gray-100">
													{book.title}
												</h3>
												<p className="text-sm text-gray-400">{book.author}</p>
												<p className="mt-2 text-xs text-gray-300 line-clamp-3">
													{book.description}
												</p>
												<div className="mt-2 h-0.5 w-0 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full" />
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
