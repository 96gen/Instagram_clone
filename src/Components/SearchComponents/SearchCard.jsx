import React from "react";

const SearchCard = () => {
	return (
		<div className="py-2 cursor-pointer">
			<div className="flex items-center">
				<img
					className="w-10 h-10 rounded-full"
					src="https://images.pexels.com/photos/15784572/pexels-photo-15784572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt=""
				/>

				<div className="ml-3">
					<p>FullName</p>
					<p className="opacity-70">username</p>
				</div>
			</div>
		</div>
	);
};

export default SearchCard;
