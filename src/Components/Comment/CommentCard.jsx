import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const CommentCard = () => {
	const [isCommentLike, setIsCommentLike] = useState();

	const handleLikeComment = () => {
		setIsCommentLike(!isCommentLike);
	};

	return (
		<div>
			<div className="flex items-center justify-between py-5">
				<div className="flex items-center">
					<div>
						<img
							className="w-9 h-9 rounded-full"
							src="https://images.pexels.com/photos/12286255/pexels-photo-12286255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							alt=""
						/>
					</div>
					<div className="ml-3">
						<p>
							<span className="font-semibold">username</span>
							<span className="ml-2">awesome</span>
						</p>
						<div className="flex items-center space-x-3 text-xs opacity-60 pt-2">
							<span>10h</span>
							<span>21 likes</span>
						</div>
					</div>
				</div>
				{isCommentLike ? (
					<AiFillHeart
						onClick={() => handleLikeComment()}
						className="text-xs hover:opacity-50 cursor-pointer text-red-600"
					/>
				) : (
					<AiOutlineHeart
						onClick={() => handleLikeComment()}
						className="text-xs hover:opacity-50 cursor-pointer"
					/>
				)}
			</div>
		</div>
	);
};

export default CommentCard;
