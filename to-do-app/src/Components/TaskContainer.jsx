import React from "react";
import "../scss/Container.scss";

export default function TaskContainer() {
	return (
		<div className="container-task">
			<h1 className="container-title">Tasks</h1>
			<div className="container-all-tasks">
				<div className="container-single-task"></div>
				<div className="container-single-task"></div>
			</div>
		</div>
	);
}
