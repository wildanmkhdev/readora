"use client";

import React, { Suspense } from "react";
import SearchContent from "./SearchContent";

export default function SearchPage() {
	return (
		<Suspense
			fallback={<div className="text-center text-white">Loading...</div>}>
			<SearchContent />
		</Suspense>
	);
}
