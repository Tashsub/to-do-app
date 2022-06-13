import React, {useState} from "react";
import "../../scss/Inputs.scss";
import { api } from "../../api";
import toast from "react-hot-toast";

export default function TickCheckBox({ completed, taskId }) {

	const [completedTask, setCompletedTask] = useState(completed)

	const styling = {
		fontSize: "0.5cm",
		margin: "0cm",
		paddingLeft: "0cm",
	};

	const endpointWithId = "tasks/" + taskId;

	function changeCompletedStatus(comp) {
		const task = {
			completed: comp,
		};

		api
			.put(endpointWithId, task)
			.then((response) => {
				//console.log(response);
			})
			.catch((error) => {
				//toast.error("could not update commpleted status: " + error.message);
			});
	}

	const changeHandler = () => {
		if (completedTask === true) {
			setCompletedTask(false);
			changeCompletedStatus(false);
		} else if (completedTask === false) {
			setCompletedTask(true);
			changeCompletedStatus(true);
		}
	};

	return (
		<div className="pretty p-curve p-icon p-smooth p-bigger" style={styling}>
			<input type="checkbox" defaultChecked={completed} onChange={changeHandler} />
			<div className="state p-success">
				<i
					className="icon fa fa-check"
					style={{
						paddingTop: "0.2cm",
						paddingLeft: "0.1cm",
					}}
				></i>
				<label></label>
			</div>
		</div>
	);
}
