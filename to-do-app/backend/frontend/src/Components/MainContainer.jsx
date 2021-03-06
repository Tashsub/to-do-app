import React, { useContext } from "react";
import Tasks from "./Tasks";
import "../scss/Container.scss";
import "../scss/Buttons.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ModalContext from "../Context/ModalContext";
import AddTask from "./Forms/AddTask";
import TaskContext from "../Context/TaskContext";
import { modes } from "../Context/Modes";

export default function MainContainer() {
	const { openModal, addContent } = useContext(ModalContext);
	const { mode } = useContext(TaskContext);

	const buttonHandler = () => {
		addContent(<AddTask />);
		openModal();
	};

	const toggleModalOnTask = (toggleModal, modalContent) => {
		if (toggleModal === true) {
			addContent(modalContent);
			openModal();
		}
	};

	const icon = <FontAwesomeIcon icon={faPlus} color={"white"} />;

	return (
		<div className="container-main">
			<h1 className="container-title">Tasks</h1>
			<Tasks toggleModal={toggleModalOnTask} />

			{mode === modes.home && (
				<button onClick={buttonHandler} className="button-circle">
					{icon}
				</button>
			)}
		</div>
	);
}
