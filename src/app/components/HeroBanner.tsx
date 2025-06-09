import React from "react";
import TrueFocus from "../../Reactbits/TrueFocus/TrueFocus";

const HeroBanner: React.FC = () => {
	const handleScroll = () => {
		const section = document.getElementById("populer");
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section className="bg-gray-900 px-4 py-20 text-white sm:px-6 md:px-10 lg:px-24">
			<div className="mx-auto max-w-6xl text-center space-y-8">
				{/* HEADLINE */}
				<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
					<TrueFocus
						sentence="Your Digital Library, Redefined"
						blurAmount={4}
						borderColor="#3b82f6"
						glowColor="rgba(59, 130, 246, 0.6)"
						animationDuration={0.5}
						pauseBetweenAnimations={1}
					/>
				</h1>

				{/* DESCRIPTION */}
				<p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-2">
					Access a world of knowledge at your fingertips. BookVerse offers a
					curated collection of ebooks for every interest — all in one seamless
					platform.
				</p>

				{/* CTA BUTTONS */}
				<div className="flex justify-center flex-nowrap gap-4 overflow-x-auto pt-4">
					<button
						onClick={handleScroll}
						className="whitespace-nowrap rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
						Start Reading
					</button>
					<button className="whitespace-nowrap rounded-2xl border border-white px-6 py-3 font-semibold text-white transition hover:bg-white/10">
						Explore Collection
					</button>
				</div>
			</div>
		</section>
	);
};

export default HeroBanner;
