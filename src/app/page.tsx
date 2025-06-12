"use client";
import React from "react";
import HeroBanner from "./components/HeroBanner";
import CategoryPage from "./components/CategoryBook";
import PopularBooks from "./components/PageBook";
import Novel from "./components/Novel";
import FAQ from "./components/Faq";
import Testimonials from "./components/Testimoni";
import ContactUs from "./components/ContactUs";

const page = () => {
	return (
		<div>
			<HeroBanner></HeroBanner>
			<PopularBooks></PopularBooks>
			<Novel></Novel>
			<CategoryPage></CategoryPage>
			<FAQ></FAQ>

			<Testimonials></Testimonials>
			<ContactUs></ContactUs>
		</div>
	);
};

export default page;
