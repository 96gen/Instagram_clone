import React, { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { menu } from "./SidebarMenu";
import { useNavigate } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import CreatePostModal from "../Post/CreatePostModal";
import SearchComponents from "../SearchComponents/SearchComponents";

const Sidebar = () => {
	const [activeTab, setActiveTab] = useState([]);
	const navigate = useNavigate();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [isSearchVisible, setIsSearchVisible] = useState(false);

	const handleTabClick = (title) => {
		setActiveTab(title);
		//點擊Profile按鈕時，跳到/username
		if (title === "Profile") {
			navigate("/username");
		}
		//點擊Home按鈕時，跳到/
		else if (title === "Home") {
			navigate("/");
		}
		//點擊Create按鈕時，跳出CreateModal視窗
		else if (title === "Create") {
			onOpen();
		}

		if (title === "Search") {
			setIsSearchVisible(true);
		} else {
			setIsSearchVisible(false);
		}
	};

	return (
		<div className="sticky top-0 h-[100vh] flex">
			<div
				className={`flex flex-col justify-between h-full ${
					activeTab === "Search" ? "px-2" : "px-10"
				}`}
			>
				<div>
					{!(activeTab === "Search") && (
						<div className="pt-10">
							<img className="w-40" src="Instagram_logo.svg.png" alt="" />
						</div>
					)}
					<div className="mt-10">
						{menu.map((item) => (
							<div
								onClick={() => handleTabClick(item.title)}
								className="flex items-center cursor-pointer mb-5 text-lg"
							>
								{activeTab === item.title ? item.activeIcon : item.icon}
								{!(activeTab === "Search") && (
									<p
										className={`${
											activeTab === item.title ? "font-bold" : "font-semibold"
										}`}
									>
										{item.title}
									</p>
								)}
							</div>
						))}
					</div>
				</div>
				<div className="flex items-center cursor-pointer pb-10">
					<IoReorderThreeOutline />
					{!(activeTab === "Search") && <p className="ml-5">More</p>}
				</div>
			</div>
			<CreatePostModal onClose={onClose} isOpen={isOpen} />

			{isSearchVisible && <SearchComponents />}
		</div>
	);
};

export default Sidebar;
