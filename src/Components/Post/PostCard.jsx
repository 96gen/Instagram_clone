import React, { useState } from "react";
import {
	BsBookmark,
	BsBookmarkFill,
	BsThreeDots,
	BsEmojiSmile,
} from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";
import "./PostCard.css";
import CommentModal from "../Comment/CommentModal";
import { useDisclosure } from "@chakra-ui/react";

const PostCard = () => {
	const [showDropDown, setShowDropDown] = useState(false);
	const [isPostLiked, setIsPostLiked] = useState(false);
	const [isPostSaved, setIsPostSaved] = useState(false);
	const { isOpen, onOpen, onClose } = useDisclosure()

	const handlePostSave = () => {
		setIsPostSaved(!isPostSaved);
	};

	const handlePostLike = () => {
		setIsPostLiked(!isPostLiked);
	};

	const handleClick = () => {
		setShowDropDown(!showDropDown);
	};

	const handleOpenCommentModal = () => {
		onOpen()
	}

	return (
		<div>
			<div className="border rounded-md w-full">
				<div className="flex justify-between items-center w-full py-4 px-5">
					<div className="flex items-center">
						<img
							className="h-12 w-12 rounded-full"
							src="https://images.pexels.com/photos/18048873/pexels-photo-18048873/free-photo-of-4k.jpeg?auto=compress"
							alt=""
						/>
						<div className="pl-2">
							<p className="font-semibold text-sm">username</p>
							<p className="font-thin text-sm">location</p>
						</div>
					</div>
					<div className="dropdown">
						<BsThreeDots className="dots" onClick={() => handleClick()} />
						{showDropDown && (
							<p className="bg-black text-white py-1 px-4 rounded-md cursor-pointer">
								Report
							</p>
						)}
					</div>
				</div>

				<div className="w-full">
					<img className="w-full" src="https://images.pexels.com/photos/18111496/pexels-photo-18111496.jpeg?auto=compress&cs=tinysrgb&w=468&h=585" alt="" />
				</div>

				<div className="flex justify-between items-center w-full px-5 py-4">
					<div className="flex items-center space-x-2">
						{isPostLiked ? (
							<AiFillHeart
								className="text-2xl hover:opacity-50 cursor-pointer text-red-600"
								onClick={() => handlePostLike()}
							/>
						) : (
							<AiOutlineHeart
								className="text-2xl hover:opacity-50 cursor-pointer"
								onClick={() => handlePostLike()}
							/>
						)}

						<FaRegComment onClick={() => handleOpenCommentModal()} className="text-xl hover:opacity-50 cursor-pointer" />
						<IoPaperPlaneOutline className="text-xl hover:opacity-50 cursor-pointer" />
					</div>

					<div className="cursor-pointer">
						{isPostSaved ? (
							<BsBookmarkFill
								onClick={() => handlePostSave()}
								className="text-xl hover:opacity-50 cursor-pointer"
							/>
						) : (
							<BsBookmark
								onClick={() => handlePostSave()}
								className="text-xl hover:opacity-50 cursor-pointer"
							/>
						)}
					</div>
				</div>

				<div className="w-full py-2 px-5">
					<p>11 likes</p>
					<p className="opacity-50 py-2 cursor-pointer">view all 45 comments</p>
				</div>

				<div className="w-full">
					<div className="flex w-full items-center px-5">
						<input
							className="commentInput"
							type="text"
							placeholder="Add a comment..."
						/>
						<BsEmojiSmile />
					</div>
				</div>
			</div>
			<CommentModal onClose={onClose} isOpen={isOpen} isPostLiked={isPostLiked} isPostSaved={isPostSaved} handlePostLike={handlePostLike} handlePostSave={handlePostSave}/>
		</div>
	);
};

export default PostCard;
