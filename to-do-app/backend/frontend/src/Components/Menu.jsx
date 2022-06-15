import React, { useContext } from "react";
import "../scss/Menu.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { modes } from "../Context/Modes";
import TaskContext from "../Context/TaskContext";

export default function Menu() {
	const { updateMode } = useContext(TaskContext);

	const buttonHandler = (mode) => {
		updateMode(mode);
	};

	return (
		<div className="menu-div">
			<button
				onClick={(e) => {
					e.preventDefault();
					buttonHandler(modes.home);
				}}
				className="menu-button"
			>
				<FontAwesomeIcon icon={faHouseChimney} color={"#3B7CF4"} />
			</button>
			<button
				onClick={(e) => {
					e.preventDefault();
					buttonHandler(modes.priority);
				}}
				className="menu-button"
			>
				<FontAwesomeIcon icon={faStar} color={"#FFD233"} />
			</button>
			<button
				onClick={(e) => {
					e.preventDefault();
					buttonHandler(modes.completed);
				}}
				className="menu-button"
			>
				<FontAwesomeIcon icon={faSquareCheck} color={"#5CB85B"} />
			</button>
			<button
				onClick={(e) => {
					e.preventDefault();
					buttonHandler(modes.notcompleted);
				}}
				className="menu-button"
			>
				<FontAwesomeIcon icon={faSquare} color={"#848484"} />
			</button>
		</div>
	);
}
