"use client";
import React from "react";
import HeroBanner from "./components/HeroBanner";
import CategoryPage from "./components/CategoryBook";
import PopularBooks from "./components/PageBook";
import Text from "./components/Text";

const page = () => {
	return (
		<div>
			<HeroBanner></HeroBanner>
			<PopularBooks></PopularBooks>
			<CategoryPage></CategoryPage>
		</div>
	);
};

export default page;
