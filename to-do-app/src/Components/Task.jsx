import React from "react";
import "../scss/Task.scss";
import "../scss/Inputs.scss";
import StarCheckBox from "./Inputs/StarCheckBox";
import TickCheckBox from "./Inputs/TickCheckBox";

export default function Task({completed, description, priority}) {
	return (
		<div className="single-task grow">
			<div className="checkbox-div">
				<TickCheckBox completed={completed} />
			</div>
			<div className="task-description-div">
				<p>{description}</p>
			</div>
			<div className="star-div">
				<StarCheckBox priority={priority}/>
			</div>
		</div>
	);
}
