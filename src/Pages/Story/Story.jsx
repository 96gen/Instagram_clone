import React from "react";
import StoryViewer from "../../Components/StoryComponents/StoryViewer";

const Story = () => {
	const stories = [
		{
			image:
				"https://images.pexels.com/photos/15978352/pexels-photo-15978352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		},
		{
			image:
				"https://images.pexels.com/photos/14969818/pexels-photo-14969818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		},
		{
			image:
				"https://images.pexels.com/photos/15327222/pexels-photo-15327222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		},
		{
			image:
				"https://images.pexels.com/photos/18074917/pexels-photo-18074917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		},
		{
			image:
				"https://images.pexels.com/photos/8451450/pexels-photo-8451450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		},
	];
	return (
		<div>
			<StoryViewer stories={stories} />
		</div>
	);
};

export default Story;
