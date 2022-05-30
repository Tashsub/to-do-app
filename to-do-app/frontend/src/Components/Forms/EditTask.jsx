import React, { useContext, useState } from "react";
import ModalContext from "../../Context/ModalContext";
import TaskContext from "../../Context/TaskContext";
import "../../scss/Forms.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "../../scss/buttons.scss";
import { api } from "../../api";
import LoginContext from "../../Context/LoginContext";

function EditTask({
	taskId,
	taskTitle,
	taskDescription,
	taskPriority,
	completed,
}) {
	const { closeModal } = useContext(ModalContext);
	const { addTask } = useContext(TaskContext);
	const { user_id } = useContext(LoginContext);

	const [title, setTitle] = useState(taskTitle);
	const [description, setDescription] = useState(taskDescription);
	const [priority, setPriority] = useState(taskPriority);

	const getTitle = (text) => {
		setTitle(text);
	};

	const getDescription = (text) => {
		setDescription(text);
	};

	const getPriority = (value) => {
		if (value === "1") {
			setPriority(true);
		} else {
			setPriority(false);
		}
	};

	const submitHandler = (e) => {
		e.preventDefault();

		const task = {
			user_id,
			title,
			description,
			priority,
		};

		const url = "tasks/" + taskId;

		api
			.put(url, task)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log("can not update because of " + error);
			});

		closeModal();
	};

	const closeButtonHandler = () => {
		closeModal();
	};

	const trashIcon = <FontAwesomeIcon icon={faTrashCan} strokeWidth={"10px"} />;

	return (
		<form className="form-half-width" onSubmit={submitHandler}>
			<div className="delete-item-button-div">
				<button className="reg-btn-v2">{trashIcon}</button>
				<button className="reg-btn">Delete this task</button>
			</div>
			<div className="default-div-center">
				<input
					defaultValue={title}
					type="text"
					className="input-field-one-line"
					onChange={(e) => {
						console.log("weee");
						getTitle(e.target.value);
					}}
				></input>
			</div>
			<div className="default-div-center">
				{/* <label htmlFor="task-name">Task</label> */}
				<textarea
					type="text"
					className="input-field-multi-line"
					onChange={(e) => {
						getDescription(e.target.value);
					}}
				>
					{description}
				</textarea>
			</div>
			<div className="default-div-margin-left">
				<p className=".change-font">Task Priority:</p>

				<div>
					<input
						className="radio-button"
						type="radio"
						id="no"
						value="0"
						name="selection"
						defaultChecked
						onChange={(e) => {
							getPriority(e.target.value);
						}}
					/>
					<label htmlFor="no">Not Important</label>
				</div>
				<div>
					<input
						className="radio-button"
						type="radio"
						id="yes"
						value="1"
						name="selection"
						onChange={(e) => {
							getPriority(e.target.value);
						}}
					/>
					<label htmlFor="yes">Important</label>
				</div>
			</div>
			<div className="form-buttons-div-v2">
				<button onClick={closeButtonHandler} className="button-cancel">
					Close
				</button>
				<button onClick={submitHandler} className="button-add">
					Update
				</button>
			</div>
		</form>
	);
}

export default EditTask;
