"use client";

import React from "react";
import { useParams } from "next/navigation";
import books from "../../db/books"; // Ganti sesuai path
import { Star } from "lucide-react";
import Link from "next/link";

interface Book {
	id: number;
	title: string;
	rating: number;
	price: number;
	coverImage: string;
	purchaseUrl: string;
	genre: string;
}

const CategoryBookList: React.FC = () => {
	const { slug } = useParams();
	const genre = String(slug).replace(/-/g, " ");

	const filteredBooks = books.filter((book) =>
		book.genre.toLowerCase().includes(genre.toLowerCase())
	);

	const renderStars = (rating: number) => {
		const stars = [];
		const fullStars = Math.floor(rating);
		const hasHalfStar = rating % 1 !== 0;

		for (let i = 0; i < fullStars; i++) {
			stars.push(
				<Star
					key={`full-${i}`}
					size={12}
					className="fill-yellow-400 text-yellow-400"
				/>
			);
		}

		if (hasHalfStar) {
			stars.push(
				<div key="half" className="relative">
					<Star size={12} className="text-yellow-400" />
					<div
						className="absolute top-0 left-0 overflow-hidden"
						style={{ width: "50%" }}>
						<Star size={12} className="fill-yellow-400 text-yellow-400" />
					</div>
				</div>
			);
		}

		const emptyStars = 5 - stars.length;
		for (let i = 0; i < emptyStars; i++) {
			stars.push(
				<Star key={`empty-${i}`} size={12} className="text-gray-400" />
			);
		}

		return stars;
	};

	return (
		<div className="min-h-screen bg-gray-900 p-4">
			<div className="mx-auto max-w-screen-xl">
				<h1 className="mb-4 text-xl font-bold text-white capitalize">
					{genre} Books
				</h1>

				{filteredBooks.length === 0 ? (
					<p className="text-gray-400">Tidak ada buku dalam kategori ini.</p>
				) : (
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
						{filteredBooks.map((book) => (
							<Link
								key={book.id}
								href={`/deksripsi-product/${book.id}`}
								className="block">
								<div className="cursor-pointer overflow-hidden rounded-md bg-gray-800 p-2 shadow-sm transition-all hover:shadow-md">
									<div className="aspect-[3/4] overflow-hidden rounded">
										<img
											src={book.coverImage}
											alt={`${book.title} Cover`}
											className="h-full w-full object-cover"
										/>
									</div>

									<div className="mt-2 text-xs">
										<h2 className="truncate font-semibold text-white">
											{book.title}
										</h2>
										<div className="mt-1 flex items-center gap-1">
											{renderStars(book.rating)}
											<span className="text-[10px] text-gray-300">
												{book.rating}
											</span>
										</div>
										<div className="mt-1 text-sm font-bold text-white">
											{new Intl.NumberFormat("id-ID", {
												style: "currency",
												currency: "IDR",
											}).format(book.price)}
										</div>
									</div>
								</div>
							</Link>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default CategoryBookList;
