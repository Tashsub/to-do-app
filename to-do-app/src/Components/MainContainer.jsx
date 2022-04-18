import React from "react";
import Tasks from "./Tasks";
import "../scss/Container.scss";

export default function MainContainer() {
	return (
		<div className="container-main">
			<h1 className="container-title">Tasks</h1>
				<Tasks/>
		</div>
	);
}
