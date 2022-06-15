import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faSolidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faRegularStar } from "@fortawesome/free-regular-svg-icons";
import "../../scss/Inputs.scss";
import { api } from "../../api";
import toast from "react-hot-toast";

export default function StarCheckBox({ priority, taskId }) {
	const [priorityOfTask, setPriorityOfTask] = useState(priority);

	const endpointWithId = "tasks/" + taskId;

	const iconSize = "xl";

	function changePriorityInApi(pri) {
		const task = {
			priority: pri,
		};

		api
			.put(endpointWithId, task)
			.then((response) => {
				//console.log(response);
			})
			.catch((error) => {
				toast.error("could not update priority: " + error.message);
			});
	}

	const changeHandler = () => {
		if (priorityOfTask === true) {
			setPriorityOfTask(false);
			changePriorityInApi(false);
		} else if (priorityOfTask === false) {
			setPriorityOfTask(true);
			changePriorityInApi(true);
		}
	};

	return (
		<div class="pretty p-icon p-toggle p-plain" style={{ margin: 0 }}>
			<input
				type="checkbox"
				onChange={changeHandler}
				defaultChecked={priorityOfTask}
			/>

			<div class="state p-off">
				<FontAwesomeIcon
					icon={faRegularStar}
					size={iconSize}
					strokeWidth={"10px"}
				/>
			</div>

			<div class="state p-on p-warning-o">
				<FontAwesomeIcon icon={faSolidStar} size={iconSize} />
			</div>
		</div>
	);
}
