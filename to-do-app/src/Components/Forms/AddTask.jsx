import React from "react";
import "../../scss/Forms.scss";
import TickCheckBox from "../Inputs/TickCheckBox";

function AddTask() {
	const styling = {
		display: "flex",
        flexDirection:"row"
	};

	return (
		<form className="form">
			<div className="input-text-div">
				{/* <label htmlFor="task-name">Task</label> */}
				<input
					type="text"
					placeholder="ie: make a reservation at Pizza Express"
					className="input-field-one-line"
				></input>
			</div>
			<div className="input-text-div">
				{/* <label htmlFor="task-name">Task</label> */}
				<textarea
					type="text"
					placeholder="ie: ask whether the booking deposit is refundable..."
					className="input-field-multi-line"
				></textarea>
			</div>
			
		</form>
	);
}

export default AddTask;
