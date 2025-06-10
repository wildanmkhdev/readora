import React from "react";
import TrueFocus from "../../Reactbits/TrueFocus/TrueFocus";
import { Fade } from "react-awesome-reveal";

const HeroBanner: React.FC = () => {
	const handleScroll = () => {
		const section = document.getElementById("populer");
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section className="bg-gray-900 px-4 py-12 sm:py-16 md:py-20 text-white sm:px-6 md:px-10 lg:px-16">
			<Fade direction="up" duration={3000}>
				<div className="mx-auto max-w-6xl text-center space-y-8 px-2">
					{/* HEADLINE */}
					<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight break-words">
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
						curated collection of ebooks for every interest — all in one
						seamless platform.
					</p>

					{/* CTA BUTTONS */}
					<div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 pt-4 w-full px-4">
						<button
							onClick={handleScroll}
							className="w-full sm:w-auto rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
							Start Reading
						</button>
						<button className="w-full sm:w-auto rounded-2xl border border-white px-6 py-3 font-semibold text-white transition hover:bg-white/10">
							Explore Collection
						</button>
					</div>
				</div>
			</Fade>
		</section>
	);
};

export default HeroBanner;
