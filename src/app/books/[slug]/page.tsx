// // src/app/books/[slug]/page.tsx
// import React from "react";
// import { notFound } from "next/navigation";
// import { books, generateSlug } from "../../db/book-populer";

// interface Params {
// 	slug: string;
// }

// interface PageProps {
// 	params: Params;
// }

// const BookDetailPage = ({ params }: PageProps) => {
// 	const book = books.find((b) => generateSlug(b.title) === params.slug);

// 	if (!book) return notFound();

// 	return (
// 		<div className="min-h-screen bg-gray-100 px-6 py-16 text-gray-800">
// 			<a
// 				href="/#popular"
// 				className="mb-4 inline-block text-blue-500 hover:underline">
// 				← Back to Popular Books
// 			</a>
// 			<div className="mx-auto max-w-2xl rounded-lg bg-white p-6 shadow">
// 				<img
// 					src={book.img}
// 					alt={book.title}
// 					className="mb-4 h-96 w-full rounded object-cover"
// 				/>
// 				<h1 className="mb-2 text-3xl font-bold">{book.title}</h1>
// 				<p className="text-lg text-gray-600">by {book.author}</p>
// 				<p className="mt-4 text-gray-700">{book.description}</p>
// 			</div>
// 		</div>
// 	);
// };

// export default BookDetailPage;
