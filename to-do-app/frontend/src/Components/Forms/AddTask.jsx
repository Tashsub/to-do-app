import React, { useContext, useState } from "react";
import ModalContext from "../../Context/ModalContext";
import "../../scss/Forms.scss";
import TaskContext from "../../Context/TaskContext";
import { api } from "../../api";

function AddTask() {
	const { closeModal } = useContext(ModalContext);
	const { addTask } = useContext(TaskContext);

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
			console.log("wooo");
			setPriority(true);
		} else {
			setPriority(false);
		}
	};

	const submitHandler = (e) => {
		e.preventDefault();
		//make api call
		//if response is good add task using context method
		addTask(title, description, priority);
		closeModal();
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
				<p className=".change-font">
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
					<label htmlFor="no">No</label>
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
					<label htmlFor="yes">Yes</label>
				</div>
			</div>
			<div className="form-buttons-div">
				<button onClick={closeButtonHandler} className="button-cancel">
					Close
				</button>
				<button onClick={submitHandler} className="button-add">
					Add
				</button>
			</div>
		</form>
	);
}

export default AddTask;
