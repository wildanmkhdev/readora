// src/pages/HomePage.tsx
"use client";
import CategoryPage from "./CategoryBook";
import HeroBanner from "./HeroBanner";
import PopularBooks from "./PageBook";
import TestimonialPage from "./Testimoni";
import Contacts from "./Contact";
import View from "./View";

const HomePage: React.FC = () => {
	return (
		<div>
			<HeroBanner />
	
			<hr className="text-white" />
		</div>
	);
};

export default HomePage;
