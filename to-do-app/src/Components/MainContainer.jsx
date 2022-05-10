import React, { useContext } from "react";
import Tasks from "./Tasks";
import "../scss/Container.scss";
import "../scss/Buttons.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ModalContext from "../Context/ModalContext";

export default function MainContainer() {
	const { openModal } = useContext(ModalContext);

	const buttonHandler = () => {
		console.log("clicked");
		openModal();
	};

	const icon = <FontAwesomeIcon icon={faPlus} color={"white"} />;
	return (
		<div className="container-main">
			<h1 className="container-title">Tasks</h1>
			<Tasks />
			<div className="circleButton-div">
				<button onClick={buttonHandler} className="button-circle">
					{icon}
				</button>
			</div>
		</div>
	);
}
