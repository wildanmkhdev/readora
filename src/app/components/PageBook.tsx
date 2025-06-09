import React from "react";
import Link from "next/link";
const PopularBooks: React.FC = () => {
	const books = [
		{
			title: "The Great Adventure",
			author: "John Doe",
			img: "https://i0.wp.com/agosbookstore.com/wp-content/uploads/2024/01/cbdbe742-caac-408f-beb2-4ef750b81332.png?fit=500%2C743&ssl=1",
		},
		{
			title: "Mystery of the Deep",
			author: "Jane Smith",
			img: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Sebuah-seni-untuk-bersikap-bodoh-amat.jpg",
		},
		{
			title: "The World Beyond",
			author: "Michael Brown",
			img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTymThxDkwzaCF4DmJEgEBV8SnDawddZchOJA&s",
		},
		{
			title: "Unseen Realms",
			author: "Emily White",
			img: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
		},
		{
			title: "Future of Tomorrow",
			author: "Robert Black",
			img: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
		},
	];

	return (
		<section
			className=":dark bg-gray-900 px-6 py-16 text-white lg:px-24"
			id="populer">
			<div className="container mx-auto">
				<div className="mb-8 flex items-center justify-between">
					<h2 className="text-center text-3xl font-bold lg:text-4xl">
						Popular Books
					</h2>
					{/* Tombol Lihat Semua */}
					<Link
						href="/all-categories"
						className="text-lg text-blue-400 hover:text-blue-300">
						See All
					</Link>
				</div>

				{/* Scrollable Books */}
				<div className="hide-scrollbar cursor-grab overflow-x-auto">
					<div className="flex space-x-6 lg:space-x-12">
						{books.map((book, index) => (
							<div
								key={index}
								className="group relative w-60 flex-shrink-0 overflow-hidden rounded-lg bg-gray-800 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
								<div className="relative h-48 w-full overflow-hidden">
									<img
										src={book.img}
										alt={book.title}
										className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
									/>

									{/* Overlay saat hover */}
									<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40"></div>
								</div>

								{/* Konten */}
								<div className="absolute bottom-0 w-full p-4 text-white">
									<h3 className="truncate text-lg font-semibold text-gray-100">
										{book.title}
									</h3>
									<p className="text-sm text-gray-400">{book.author}</p>

									{/* Animated underline */}
									<div className="mt-2 h-0.5 w-0 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default PopularBooks;
