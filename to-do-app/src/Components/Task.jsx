import React from "react";
import "../scss/Task.scss";
import "../scss/Inputs.scss";
import StarCheckBox from "./Inputs/StarCheckBox";

export default function Task() {
	return (
		<div className="single-task">
			<div className="checkbox-div">
				<input type="checkbox"></input>
			</div>
			<div className="task-description-div">
				<p1>Grocery Shop</p1>
			</div>
			<div className="star-div">
				<StarCheckBox />
			</div>
		</div>
	);
}
