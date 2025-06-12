// app/deksripsi-product/[id]/page.tsx

"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import books, { Book } from "../../db/books";
import { Star } from "lucide-react";

const BookDetailPage = () => {
	const { id } = useParams();
	const [book, setBook] = useState<Book | undefined>(undefined);

	useEffect(() => {
		const selectedBook = books.find((b) => b.id === Number(id));
		setBook(selectedBook);
	}, [id]);

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

	if (!book) return <p className="text-white p-4">Buku tidak ditemukan...</p>;

	return (
		<div className="min-h-screen bg-gray-900 text-white p-4">
			<div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-6 items-start">
				{/* Gambar Buku */}
				<div className="w-full md:w-1/3 rounded overflow-hidden shadow-lg">
					<img
						src={book.coverImage}
						alt={book.title}
						className="w-full h-auto object-cover"
					/>
				</div>

				{/* Detail Buku */}
				<div className="flex-1 space-y-4">
					<h1 className="text-2xl font-bold">{book.title}</h1>
					<p className="text-sm text-gray-300">
						Penulis: <span className="italic">Belum Ditentukan</span>
					</p>
					<div className="flex items-center gap-1">
						{renderStars(book.rating)}
						<span className="text-xs ml-1 text-gray-300">{book.rating}</span>
					</div>
					<p className="text-lg font-semibold text-yellow-400">
						Rp {book.price.toLocaleString("id-ID")}
					</p>

					<div>
						<h2 className="font-semibold mb-1">Tentang Buku</h2>
						<p className="text-sm text-gray-300 leading-relaxed">
							Buku ini memberikan wawasan yang mendalam dan mudah dipahami bagi
							kamu yang ingin mengembangkan diri. Jangan lewatkan kesempatan
							untuk memiliki buku ini dan mulai perjalanan perubahan positifmu
							sekarang juga!
						</p>
					</div>

					<a
						href={book.purchaseUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block mt-4 px-6 py-2 bg-green-500 text-white text-sm font-medium rounded hover:bg-green-600 transition">
						Beli Sekarang
					</a>
				</div>
			</div>
		</div>
	);
};

export default BookDetailPage;
