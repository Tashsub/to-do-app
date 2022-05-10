import React from "react";
import "../scss/Task.scss";
import "../scss/Inputs.scss";
import StarCheckBox from "./Inputs/StarCheckBox";
import TickCheckBox from "./Inputs/TickCheckBox";
import "../scss/Animations.scss"; 

export default function Task({completed, title, priority}) {
	return (
		<div className="single-task">
			<div className="checkbox-div">
				<TickCheckBox completed={completed} />
			</div>
			<div className="task-description-div">
				<p>{title}</p>
			</div>
			<div className="star-div">
				<StarCheckBox priority={priority}/>
			</div>
		</div>
	);
}
