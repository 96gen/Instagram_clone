import React from "react";

const SuggestionCard = () => {
	return (
		<div className="flex justify-between items-center">
			<div className="flex items-center">
				<img
					className="w-9 h-9 rounded-full"
					src="https://images.pexels.com/photos/18171438/pexels-photo-18171438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt=""
				/>
				<div className="ml-2">
					<p className="text-sm font-semibold">username</p>
					<p className="text-sm font-semibold opacity-70">Follows you</p>
				</div>
			</div>
			<p className="text-blue-700 text-sm font-semibold">Follow</p>
		</div>
	);
};

export default SuggestionCard;
