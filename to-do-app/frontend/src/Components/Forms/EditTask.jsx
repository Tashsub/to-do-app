import React, { useContext, useState } from "react";
import ModalContext from "../../Context/ModalContext";
import TaskContext from "../../Context/TaskContext";
import "../../scss/Forms.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "../../scss/buttons.scss";
import { api } from "../../api";
import LoginContext from "../../Context/LoginContext";
import toast from "react-hot-toast";

function EditTask({ taskId, taskTitle, taskDescription, taskPriority }) {
	const { closeModal } = useContext(ModalContext);
	const { user_id } = useContext(LoginContext);

	const [title, setTitle] = useState(taskTitle);
	const [description, setDescription] = useState(taskDescription);
	const [priority, setPriority] = useState(taskPriority);

	const endpointWithId = "tasks/" + taskId;

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

		api
			.put(endpointWithId, task)
			.then((response) => {
				toast.success(response.data.message);
			})
			.catch((error) => {
				toast.error("Could not update task:  " + error.message);
			});

		closeModal();
	};

	const deleteTaskHandler = (e) => {
		e.preventDefault();

		api
			.delete(endpointWithId)
			.then((response) => {
				console.log(response);
				closeModal();
				toast.success(response.data.message);
			})
			.catch((error) => {
				toast.error("Task could not be deleted because " + error.message );
			});
	};

	const closeButtonHandler = () => {
		closeModal();
	};

	const trashIcon = <FontAwesomeIcon icon={faTrashCan} strokeWidth={"10px"} />;

	return (
		<form className="form-half-width" onSubmit={submitHandler}>
			<div className="delete-item-button-div">
				<button onClick={deleteTaskHandler} className="reg-btn-v2">
					{trashIcon}{" "}
				</button>
				<button onClick={deleteTaskHandler} className="reg-btn">
					Delete this task
				</button>
			</div>
			<div className="default-div-center">
				<input
					defaultValue={title}
					type="text"
					className="input-field-one-line"
					onChange={(e) => {
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
				<p className="change-font-bold">Task Priority:</p>

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
					<label className="change-font" htmlFor="no">Not Important</label>
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
					<label className="change-font" htmlFor="yes">Important</label>
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
