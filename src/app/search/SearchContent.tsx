"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { Star } from "lucide-react";
import Link from "next/link";
import books from "../db/books"; 

interface Book {
	id: number;
	title: string;
	rating: number;
	price: number;
	coverImage: string;
	purchaseUrl: string;
}

interface BookCardProps {
	book: Book;
}

const BookDetailCard: React.FC<BookCardProps> = ({ book }) => {
	const renderStars = (rating: number) => {
		const stars = [];
		const fullStars = Math.floor(rating);
		const hasHalfStar = rating % 1 !== 0;

		for (let i = 0; i < fullStars; i++) {
			stars.push(
				<Star
					key={`full-${i}`}
					size={14}
					className="fill-yellow-400 text-yellow-400"
				/>
			);
		}

		if (hasHalfStar) {
			stars.push(
				<div key="half" className="relative">
					<Star size={14} className="text-yellow-400" />
					<div
						className="absolute top-0 left-0 overflow-hidden"
						style={{ width: "50%" }}>
						<Star size={14} className="fill-yellow-400 text-yellow-400" />
					</div>
				</div>
			);
		}

		const emptyStars = 5 - stars.length;
		for (let i = 0; i < emptyStars; i++) {
			stars.push(
				<Star key={`empty-${i}`} size={14} className="text-gray-400" />
			);
		}

		return stars;
	};

	return (
		<div className="bg-gray-800 rounded-lg p-4 mb-4">
			<div className="flex flex-col md:flex-row gap-4 items-start">
				<div className="w-full md:w-48 flex-shrink-0">
					<div className="aspect-[3/4] overflow-hidden rounded">
						<img
							src={book.coverImage}
							alt={`${book.title} Cover`}
							className="h-full w-full object-cover"
						/>
					</div>
				</div>
				<div className="flex-1 space-y-3">
					<Link
						href={`/deksripsi-product/${book.id}`}
						className="block hover:text-indigo-400 transition-colors">
						<h2 className="text-xl font-bold text-white">{book.title}</h2>
					</Link>
					<p className="text-sm text-gray-300">
						Penulis: <span className="italic">Belum Ditentukan</span>
					</p>
					<div className="flex items-center gap-1">
						{renderStars(book.rating)}
						<span className="text-xs ml-1 text-gray-300">{book.rating}</span>
					</div>
					<p className="text-lg font-semibold text-yellow-400">
						{new Intl.NumberFormat("id-ID", {
							style: "currency",
							currency: "IDR",
						}).format(book.price)}
					</p>
					<div>
						<h3 className="font-semibold mb-1 text-white">Tentang Buku</h3>
						<p className="text-sm text-gray-300 leading-relaxed">
							Buku ini memberikan wawasan yang mendalam dan mudah dipahami bagi
							kamu yang ingin mengembangkan diri...
						</p>
					</div>
					<div className="flex gap-3 pt-2">
						<Link
							href={`/deksripsi-product/${book.id}`}
							className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-700 transition">
							Lihat Detail
						</Link>
						<a
							href={book.purchaseUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="px-4 py-2 bg-green-500 text-white text-sm font-medium rounded hover:bg-green-600 transition">
							Beli Sekarang
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default function SearchContent() {
	const searchParams = useSearchParams();
	const query = searchParams.get("query");

	const filteredBooks = query
		? books.filter((book) =>
				book.title.toLowerCase().includes(query.toLowerCase())
		  )
		: [];

	return (
		<div className="min-h-screen bg-gray-900 text-white p-4">
			<div className="max-w-4xl mx-auto">
				<div className="mb-6">
					<h1 className="text-2xl font-bold mb-2">Search Results</h1>
					<p className="text-lg text-gray-300">
						Showing results for:{" "}
						<span className="font-medium text-indigo-400">{query}</span>
					</p>
					<p className="text-sm text-gray-400 mt-1">
						Found {filteredBooks.length} book
						{filteredBooks.length !== 1 ? "s" : ""}
					</p>
				</div>

				{query && filteredBooks.length > 0 ? (
					<div className="space-y-4">
						{filteredBooks.map((book) => (
							<BookDetailCard key={book.id} book={book} />
						))}
					</div>
				) : query && filteredBooks.length === 0 ? (
					<div className="text-center py-12">
						<div className="text-gray-400 text-lg mb-2">📚</div>
						<h3 className="text-white text-lg font-medium mb-2">
							No books found
						</h3>
						<p className="text-gray-400">
							Sorry, we couldn't find any books matching "{query}". Try
							different keywords.
						</p>
					</div>
				) : (
					<div className="text-center py-12">
						<div className="text-gray-400 text-lg mb-2">🔍</div>
						<h3 className="text-white text-lg font-medium mb-2">
							Start searching
						</h3>
						<p className="text-gray-400">
							Enter a book title to find your next great read.
						</p>
					</div>
				)}
			</div>
		</div>
	);
}
