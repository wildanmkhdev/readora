"use client";

import { useState, useEffect, useRef } from "react";
import { Search, Book as BookIcon, Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import books from "../db/books";

type Book = {
	id: number | string;
	title: string;
	coverImage: string;
	price: number;
};

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const [showPreview, setShowPreview] = useState(false);
	const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
	const router = useRouter();
	const searchRef = useRef<HTMLDivElement>(null);
	const previewRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (searchQuery.trim().length > 0) {
			const filtered = books
				.filter((book: Book) =>
					book.title.toLowerCase().includes(searchQuery.toLowerCase())
				)
				.slice(0, 5);
			setFilteredBooks(filtered);
			setShowPreview(true);
		} else {
			setFilteredBooks([]);
			setShowPreview(false);
		}
	}, [searchQuery]);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				searchRef.current &&
				!searchRef.current.contains(event.target as Node) &&
				previewRef.current &&
				!previewRef.current.contains(event.target as Node)
			) {
				setShowPreview(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	function handleSearch() {
		const trimmed = searchQuery.trim();
		if (trimmed !== "") {
			router.push(`/search?query=${encodeURIComponent(trimmed)}`);
			setSearchQuery("");
			setShowPreview(false);
			setIsOpen(false);
		}
	}

	function handleBookClick(bookTitle: string) {
		router.push(`/search?query=${encodeURIComponent(bookTitle)}`);
		setSearchQuery("");
		setShowPreview(false);
		setIsOpen(false);
	}

	function handleViewAllResults() {
		if (searchQuery.trim() !== "") {
			router.push(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
			setSearchQuery("");
			setShowPreview(false);
			setIsOpen(false);
		}
	}

	return (
		<nav className="z-50 w-full bg-gray-900 py-2 transition-all duration-300">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					{/* Logo */}
					<div className="flex items-center">
						<Link href="/">
							<span className="text-2.5xl font-bold text-white cursor-pointer">
								Readdora
							</span>
						</Link>
					</div>

					{/* Desktop Nav */}
					<div className="hidden md:flex items-center space-x-8">
						<a href="#" className="text-white hover:text-indigo-300">
							New Releases
						</a>
						<a href="#" className="text-white hover:text-indigo-300">
							Bestsellers
						</a>
						<a href="#" className="text-white hover:text-indigo-300">
							Deals
						</a>
					</div>

					{/* Desktop Search */}
					<div className="hidden md:flex mx-8 max-w-md flex-1 relative">
						<div className="relative w-full" ref={searchRef}>
							<input
								type="text"
								placeholder="Search for books, authors..."
								className="w-full rounded-full border border-gray-600 bg-gray-800 px-4 py-2 text-white focus:ring-2 focus:ring-indigo-400 outline-none"
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								onKeyDown={(e) => {
									if (e.key === "Enter") handleSearch();
								}}
								onFocus={() => {
									if (filteredBooks.length > 0) setShowPreview(true);
								}}
								aria-label="Search books"
							/>
							<button
								type="button"
								className="absolute top-2 right-3"
								onClick={handleSearch}
								aria-label="Search button">
								<Search className="h-5 w-5 text-gray-400" />
							</button>
						</div>

						{showPreview && filteredBooks.length > 0 && (
							<div
								ref={previewRef}
								className="absolute top-full left-0 right-0 mt-1 bg-gray-800 border border-gray-600 rounded-lg shadow-lg max-h-80 overflow-y-auto z-50"
								role="listbox">
								{filteredBooks.map((book) => (
									<div
										key={book.id}
										onClick={() => handleBookClick(book.title)}
										className="flex items-center gap-3 p-3 hover:bg-gray-700 cursor-pointer border-b border-gray-700 last:border-b-0"
										role="option"
										tabIndex={0}
										onKeyDown={(e) => {
											if (e.key === "Enter" || e.key === " ")
												handleBookClick(book.title);
										}}>
										<div className="w-12 h-16 flex-shrink-0 rounded overflow-hidden">
											<img
												src={book.coverImage}
												alt={book.title}
												className="w-full h-full object-cover"
												loading="lazy"
											/>
										</div>
										<div className="flex-1 min-w-0">
											<h4 className="text-white font-medium text-sm truncate">
												{book.title}
											</h4>
											<p className="text-gray-400 text-xs">
												{new Intl.NumberFormat("id-ID", {
													style: "currency",
													currency: "IDR",
												}).format(book.price)}
											</p>
										</div>
										<BookIcon className="h-4 w-4 text-gray-500" />
									</div>
								))}

								<div
									onClick={handleViewAllResults}
									className="p-3 text-center border-t border-gray-600 bg-gray-700 hover:bg-gray-600 cursor-pointer"
									role="button"
									tabIndex={0}
									onKeyDown={(e) => {
										if (e.key === "Enter" || e.key === " ")
											handleViewAllResults();
									}}>
									<span className="text-indigo-400 text-sm font-medium">
										View all results for "{searchQuery}"
									</span>
								</div>
							</div>
						)}
					</div>

					{/* Mobile Toggle */}
					<div className="md:hidden">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="p-2 text-gray-300 hover:text-indigo-300"
							aria-label="Toggle menu"
							aria-expanded={isOpen}>
							{isOpen ? (
								<X className="h-6 w-6" />
							) : (
								<Menu className="h-6 w-6" />
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="bg-gray-800 md:hidden">
					<div className="px-4 py-4 space-y-2">
						{/* Mobile Search */}
						<div className="relative">
							<div className="relative w-full" ref={searchRef}>
								<input
									type="text"
									placeholder="Search for books, authors..."
									className="w-full rounded-full border border-gray-600 bg-gray-700 px-4 py-2 text-white focus:ring-2 focus:ring-indigo-400 outline-none"
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
									onKeyDown={(e) => {
										if (e.key === "Enter") handleSearch();
									}}
									onFocus={() => {
										if (filteredBooks.length > 0) setShowPreview(true);
									}}
									aria-label="Mobile search books"
								/>
								<button
									type="button"
									className="absolute top-2 right-3"
									onClick={handleSearch}
									aria-label="Mobile search button">
									<Search className="h-5 w-5 text-gray-400" />
								</button>
							</div>

							{/* Mobile Search Preview */}
							{showPreview && filteredBooks.length > 0 && (
								<div
									ref={previewRef}
									className="absolute top-full left-0 right-0 mt-1 bg-gray-700 border border-gray-600 rounded-lg shadow-lg max-h-60 overflow-y-auto z-50"
									role="listbox">
									{filteredBooks.map((book) => (
										<div
											key={book.id}
											onClick={() => handleBookClick(book.title)}
											className="flex items-center gap-3 p-3 hover:bg-gray-600 cursor-pointer border-b border-gray-600 last:border-b-0"
											role="option"
											tabIndex={0}
											onKeyDown={(e) => {
												if (e.key === "Enter" || e.key === " ")
													handleBookClick(book.title);
											}}>
											<div className="w-12 h-16 flex-shrink-0 rounded overflow-hidden">
												<img
													src={book.coverImage}
													alt={book.title}
													className="w-full h-full object-cover"
													loading="lazy"
												/>
											</div>
											<div className="flex-1 min-w-0">
												<h4 className="text-white font-medium text-sm truncate">
													{book.title}
												</h4>
												<p className="text-gray-300 text-xs">
													{new Intl.NumberFormat("id-ID", {
														style: "currency",
														currency: "IDR",
													}).format(book.price)}
												</p>
											</div>
											<BookIcon className="h-4 w-4 text-gray-400" />
										</div>
									))}
									<div
										onClick={handleViewAllResults}
										className="p-3 text-center border-t border-gray-600 bg-gray-600 hover:bg-gray-500 cursor-pointer"
										role="button"
										tabIndex={0}
										onKeyDown={(e) => {
											if (e.key === "Enter" || e.key === " ")
												handleViewAllResults();
										}}>
										<span className="text-indigo-400 text-sm font-medium">
											View all results for "{searchQuery}"
										</span>
									</div>
								</div>
							)}
						</div>

						{/* Mobile Links */}
						<a href="#" className="block text-white hover:text-indigo-300">
							New Releases
						</a>
						<a href="#" className="block text-white hover:text-indigo-300">
							Bestsellers
						</a>
						<a href="#" className="block text-white hover:text-indigo-300">
							Deals
						</a>
					</div>
				</div>
			)}
		</nav>
	);
}
