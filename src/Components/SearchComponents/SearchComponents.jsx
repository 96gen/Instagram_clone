import React from "react";
import "./SearchComponents.css";
import SearchCard from "./SearchCard";

const SearchComponents = () => {
	return (
		<div className="searchContainer">
			<div className="px-3 pb-5">
				<h1 className="text-xl pb-5">Search</h1>
				<input className="searchInput" type="text" placeholder="Search" />
			</div>

			<hr />

			<div className="px-3 pt-5">
				{[1, 1, 1, 1, 1, 1].map((item) => <SearchCard />)}
			</div>
		</div>
	);
};

export default SearchComponents;
