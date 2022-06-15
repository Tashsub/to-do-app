import React, { useContext, useState } from "react";
import ModalContext from "../../Context/ModalContext";
import "../../scss/Forms.scss";
import TaskContext from "../../Context/TaskContext";
import LoginContext from "../../Context/LoginContext";
import { api } from "../../api";
import { nanoid } from "nanoid";
import toast from "react-hot-toast";

function AddTask() {
	const { closeModal } = useContext(ModalContext);
	const { addTask } = useContext(TaskContext);
	const { user_id } = useContext(LoginContext);

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [priority, setPriority] = useState(false);

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

		//note - completed will default to false in the backend
		const task = {
			user_id,
			task_id: nanoid(12),
			title,
			description,
			priority,
		};

		api
			.post("tasks", task)
			.then((result) => {
				addTask(result.data);
				closeModal();
				toast.success("Task added successfully");
			})
			.catch((error) => {
				toast.error("Task could not be added: " + error.message);
			});
	};

	const closeButtonHandler = (e) => {
		e.preventDefault();
		closeModal();
	};

	return (
		<form className="form" onSubmit={submitHandler}>
			<div className="default-div-center">
				<input
					type="text"
					placeholder="ie: make a reservation at Pizza Express"
					className="input-field-one-line"
					onChange={(e) => {
						getTitle(e.target.value);
					}}
					required
				></input>
			</div>
			<div className="default-div-center">
				{/* <label htmlFor="task-name">Task</label> */}
				<textarea
					type="text"
					placeholder="ie: ask whether the booking deposit is refundable..."
					className="input-field-multi-line"
					onChange={(e) => {
						getDescription(e.target.value);
					}}
				></textarea>
			</div>
			<div className="default-div-margin-left">
				<p className="change-font">
					Would you like to make this task a priority?
				</p>
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
					<label className="change-font" htmlFor="no">
						No
					</label>
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
					<label className="change-font" htmlFor="yes">
						Yes
					</label>
				</div>
			</div>
			<div className="form-buttons-div">
				<button onClick={closeButtonHandler} className="button-cancel">
					Close
				</button>
				<button type="submit" className="button-add">
					Add
				</button>
			</div>
		</form>
	);
}

export default AddTask;
