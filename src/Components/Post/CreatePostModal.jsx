import {
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalOverlay,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaPhotoVideo } from "react-icons/fa";
import "./CreatePostModal.css";
import { BsEmojiSmile } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";

const CreatePostModal = ({ onClose, isOpen }) => {
	const [isDragOver, setIsDragOver] = useState(false);
	const [file, setFile] = useState();
	const [caption, setCaption] = useState("");

	const handleDrop = (e) => {
		e.preventDefault();
		const droppedFile = e.dataTransfer.files[0];
		//檢查檔案類型是圖片或影片才能上傳
		if (
			droppedFile.type.startsWith("image/") ||
			droppedFile.type.startsWith("video/")
		) {
			setFile(droppedFile);
		}
	};

	const handleDragOver = (e) => {
		e.preventDefault();
		e.dataTransfer.dropEffect = "copy";
		setIsDragOver(true);
	};

	const handleDragLeave = () => {
		setIsDragOver(false);
	};

	//上傳檔案時，確認是不是圖片或影片
	const handleOnChange = (e) => {
		const file = e.target.files[0];
		if (
			file &&
			(file.type.startsWith("image/") || file.type.startsWith("video/"))
		) {
			setFile(file);
		} else {
			setFile(null);
			alert("Please upload an image or video");
		}
	};

	const handleCaptionChange = (e) => {
		setCaption(e.target.value);
	};

	return (
		<div>
			<Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
				<ModalOverlay />
				<ModalContent>
					<div className="flex justify-between py-1 px-10 items-center">
						<p>Create New Post</p>
						<Button variant={"ghost"} size="sm" colorScheme={"blue"}>
							Share
						</Button>
					</div>
					<hr />
					<ModalBody>
						<div className="flex h-[70vh] justify-between pb-5">
							<div className="w-[50%]">
								{!file && (
									<div
										onDrop={handleDrop}
										onDragOver={handleDragOver}
										onDragLeave={handleDragLeave}
										className="drag-drop h-full"
									>
										<div>
											<FaPhotoVideo className="text-3xl" />
											<p>Drag photos and videos here</p>
										</div>
										<label htmlFor="file-upload" className="custom-file-upload">
											Select From Computer
										</label>

										<input
											className="file-input"
											type="file"
											id="file-upload"
											accept="image/*, video/*"
											onChange={handleOnChange}
										/>
									</div>
								)}

								{file && (
									<img
										className="max-h-full"
										src={URL.createObjectURL(file)}
										alt=""
									/>
								)}
							</div>
							<div className="w-[1px] border h-full"></div>

							<div className="w-[50%]">
								<div className="flex items-center px-2">
									<img
										className="w-7 h-7 rounded-full"
										src="https://images.pexels.com/photos/17963821/pexels-photo-17963821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
										alt=""
									/>
									<p className="font-semibold ml-4">username</p>
								</div>
								<div className="px-2">
									<textarea
										className="captionInput"
										name="caption"
										rows="8"
										placeholder="Write a caption..."
										onChange={handleCaptionChange}
									></textarea>
								</div>

								<div className="flex justify-between px-2">
									<BsEmojiSmile />
									<p className="opacity-70">{caption?.length} / 2,200</p>
								</div>
								<hr />

								<div className="flex p-2 justify-between items-center">
									<input
										className="locationInput"
										type="text"
										placeholder="Add location"
										name="location"
									/>
									<MdOutlineLocationOn />
								</div>
								<hr />
							</div>
						</div>
					</ModalBody>
				</ModalContent>
			</Modal>
		</div>
	);
};

export default CreatePostModal;
