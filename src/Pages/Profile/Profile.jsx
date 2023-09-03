import React from "react";
import ProfileUserDetails from "../../Components/ProfileComponents/ProfileUserDetails";
import ProfileUserPostBar from "../../Components/ProfileComponents/ProfileUserPostBar";

const Profile = () => {
	return (
		<div className="px-20">
			<div>
				<ProfileUserDetails />
			</div>
			<div>
				<ProfileUserPostBar />
			</div>
		</div>
	);
};

export default Profile;
