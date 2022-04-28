import React from "react";
import Tasks from "./Tasks";
import "../scss/Container.scss";
import "../scss/Buttons.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

export default function MainContainer() {
	const icon = <FontAwesomeIcon icon={faPlus} color={"white"} />
	return (
		<div className="container-main">
			<h1 className="container-title">Tasks</h1>
			<Tasks />
			<div className="test-div">
				<button className="button-circle">{icon}</button>
			</div>
		</div>
	);
}
