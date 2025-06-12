"use client";
import React from "react";
import HeroBanner from "./components/HeroBanner";
import CategoryPage from "./components/CategoryBook";
import PopularBooks from "./components/PageBook";
import Text from "./components/Text";
import Novel from "./components/Novel";

const page = () => {
	return (
		<div>
			<HeroBanner></HeroBanner>
			<PopularBooks></PopularBooks>
			<Novel></Novel>
			<CategoryPage></CategoryPage>
		</div>
	);
};

export default page;
