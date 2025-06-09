"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { books, generateSlug, Book } from "../../db/book-populer";

interface BookDetailProps {
	slug: string;
}

const BookDetail: React.FC<BookDetailProps> = ({ slug }) => {
	const router = useRouter();
	const [book, setBook] = useState<Book | null>(null);

	useEffect(() => {
		const found = books.find((b) => generateSlug(b.title) === slug);
		setBook(found || null);
	}, [slug]);

	if (!book)
		return (
			<p className="p-10 text-white bg-gray-900 min-h-screen">
				Loading or Book Not Found...
			</p>
		);

	return (
		<div className="min-h-screen bg-gray-100 px-6 py-16 text-gray-800">
			<button
				onClick={() => router.back()}
				className="mb-4 text-blue-500 hover:underline">
				← Back to Popular Books
			</button>
			<div className="mx-auto max-w-2xl rounded-lg bg-white p-6 shadow">
				<img
					src={book.img}
					alt={book.title}
					className="mb-4 h-96 w-full rounded object-cover"
				/>
				<h1 className="mb-2 text-3xl font-bold">{book.title}</h1>
				<p className="text-lg text-gray-600">by {book.author}</p>
				<p className="mt-4 text-gray-700">{book.description}</p>
			</div>
		</div> 
	);
};

export default BookDetail;
