import React from "react";
import { useNavigate } from "react-router-dom";

const StoryCircle = () => {
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate("/story");
	};
	return (
		<div
			onClick={handleNavigate}
			className="cursor-pointer flex flex-col items-center"
		>
			<img
				className="w-16 h-16 rounded-full"
				src="https://images.pexels.com/photos/7106845/pexels-photo-7106845.jpeg?auto=compress"
				alt=""
			/>
			<p>username</p>
		</div>
	);
};

export default StoryCircle;
