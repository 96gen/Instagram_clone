import React from "react";
import SuggestionCard from "./SuggestionCard";

const HomeRight = () => {
	return (
		<div>
			<div>
				<div className="flex justify-between items-center">
					<div className="flex items-center">
						<div>
							<img
								className="w-12 h-12 rounded-full"
								src="https://images.pexels.com/photos/18111088/pexels-photo-18111088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								alt=""
							/>
						</div>
						<div className="ml-3">
							<p>FullName</p>
							<p className="opacity-70">username</p>
						</div>
					</div>

					<div>
						<p className="text-blue-700 font-semibold">Switch</p>
					</div>
				</div>
				<div className="space-y-5 mt-10">
					{[1, 1, 1, 1, 1].map((item) => (
						<SuggestionCard />
					))}
				</div>
			</div>
		</div>
	);
};

export default HomeRight;
