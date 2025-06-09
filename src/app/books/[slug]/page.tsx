"use client";
import React from "react";

const books = [
	{
		title: "The Great Adventure",
		author: "John Doe",
		img: "https://i0.wp.com/agosbookstore.com/wp-content/uploads/2024/01/cbdbe742-caac-408f-beb2-4ef750b81332.png?fit=500%2C743&ssl=1",
		description:
			"Join John Doe on an epic journey through uncharted lands filled with wonder and peril in 'The Great Adventure'.",
	},
	{
		title: "Mystery of the Deep",
		author: "Jane Smith",
		img: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Sebuah-seni-untuk-bersikap-bodoh-amat.jpg",
		description:
			"Dive into the secrets lurking beneath the ocean in Jane Smith's thrilling tale, 'Mystery of the Deep'.",
	},
	{
		title: "The World Beyond",
		author: "Michael Brown",
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTymThxDkwzaCF4DmJEgEBV8SnDawddZchOJA&s",
		description:
			"Explore new dimensions and alternate realities in Michael Brown’s fascinating story, 'The World Beyond'.",
	},
	{
		title: "Unseen Realms",
		author: "Emily White",
		img: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
		description:
			"Discover hidden worlds and magical places beyond human sight in 'Unseen Realms' by Emily White.",
	},
	{
		title: "Future of Tomorrow",
		author: "Robert Black",
		img: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
		description:
			"Robert Black paints a vivid picture of what lies ahead in the fast-evolving world in 'Future of Tomorrow'.",
	},
];

// Fungsi untuk membuat slug dari judul buku
const generateSlug = (title: string) =>
	title
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/(^-|-$)/g, "");

interface PageProps {
	params: {
		slug: string;
	};
}

const BookDetailPage: React.FC<PageProps> = ({ params }) => {
	const { slug } = params;

	const book = books.find((b) => generateSlug(b.title) === slug);

	if (!book)
		return (
			<div className="min-h-screen bg-gray-900 flex items-center justify-center p-10">
				<p className="text-white text-xl">Book Not Found</p>
			</div>
		);

	return (
		<div className="min-h-screen bg-gray-100 px-6 py-16 text-gray-800">
			<button
				onClick={() => window.history.back()}
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

export default BookDetailPage;
