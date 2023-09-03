import { Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/react";
import React from "react";
import CommentCard from "./CommentCard";
import {
	BsBookmark,
	BsBookmarkFill,
	BsThreeDots,
	BsEmojiSmile,
} from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";
import "./CommentModal.css";

const CommentModal = ({
	onClose,
	isOpen,
	isPostLiked,
	isPostSaved,
	handlePostLike,
	handlePostSave,
}) => {
	return (
		<div>
			<Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
				<ModalOverlay />
				<ModalContent>
					<ModalBody>
						<div className="flex h-[75vh]">
							<div className="w-[45%] flex flex-col justify-center">
								<img
									className="max-h-full w-full"
									src="https://images.pexels.com/photos/18111153/pexels-photo-18111153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
									alt=""
								/>
							</div>
							<div className="w-[55%] pl-10 relative">
								<div className="flex justify-between items-center py-5">
									<div className="flex items-center">
										<div>
											<img
												className="w-9 h-9 rounded-full"
												src="https://images.pexels.com/photos/17857033/pexels-photo-17857033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
												alt=""
											/>
										</div>
										<div className="ml-2">
											<p>username</p>
										</div>
									</div>

									<BsThreeDots />
								</div>
								<hr />
								<div className="comment">
									{[1, 1, 1].map(() => (
										<CommentCard />
									))}
								</div>

								<div className="absolute bottom-0 w-[90%]">
									<div className="flex justify-between items-center w-full py-4">
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

											<FaRegComment className="text-xl hover:opacity-50 cursor-pointer" />
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

									<div className="w-full py-2">
										<p>11 likes</p>
										<p className="opacity-50 text-sm">1 DAY AGO</p>
									</div>

									<div className="flex w-full items-center border-t">
										<BsEmojiSmile />
										<input
											className="commentInput"
											type="text"
											placeholder="Add a comment..."
										/>
									</div>
								</div>
							</div>
						</div>
					</ModalBody>
				</ModalContent>
			</Modal>
		</div>
	);
};

export default CommentModal;
