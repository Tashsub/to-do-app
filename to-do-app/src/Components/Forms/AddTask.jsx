import React from "react";
import "../../scss/Forms.scss";

function AddTask() {
	return (
		<form className="form">
			<div className="input-text-div">
				{/* <label htmlFor="task-name">Task</label> */}
				<input
					type="text"
					placeholder="ie: make reservation at Fat Hippo"
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
			<div className="">
               
			</div>
		</form>
	);
}

export default AddTask;
