import React, { useState } from "react";
import "../scss/Task.scss";
import "../scss/Inputs.scss";
import StarCheckBox from "./Inputs/StarCheckBox";
import TickCheckBox from "./Inputs/TickCheckBox";
import "../scss/Animations.scss";
import EditTask from "./Forms/EditTask";

export default function Task({
	taskId,
	completed,
	title,
	priority,
	toggleModal,
	description,
}) {

	const [showEdit, setShowEdit] = useState(false);

	const editButtonHandler = () => {
		toggleModal(
			true,
			<EditTask
				taskId={taskId}
				taskTitle={title}
				taskDescription={description}
				taskPriority={priority}
				completed={completed}
			/>
		);
	};

	return (
		<div
			onMouseEnter={() => {
				setShowEdit(true);
			}}
			onMouseLeave={() => {
				setShowEdit(false);
			}}
			className="single-task"
		>
			<div className="checkbox-div">
				<TickCheckBox completed={completed} taskId={taskId} />
			</div>
			<div className="title-and-button-div">
				<div className="task-description-div">
					<p>{title}</p>
				</div>
				{showEdit && (
					<button onClick={editButtonHandler} className="button-edit">
						View More
					</button>
				)}
			</div>
			<div className="star-div">
				<StarCheckBox priority={priority} taskId={taskId} />
			</div>
		</div>
	);
}
