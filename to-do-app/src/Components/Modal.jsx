import React, { useContext } from "react";
import ReactDOM from "react-dom";
import "../scss/Modal.scss";
import "../scss/Buttons.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import ModalContext from "../Context/ModalContext";
import AddTask from "./Forms/AddTask";

export default function Modal() {

    const closeButtonHandler=()=>{
        closeModal();
    }

	const closeIcon = <FontAwesomeIcon icon={faCircleXmark} size={"2xl"} />;
	const { closeModal } = useContext(ModalContext);

	const contents = <AddTask/>

	return ReactDOM.createPortal(
       
		<div className="modal">
			<div className="content-wrapper">
				<div className="close-button-div">
					<button onClick={closeButtonHandler} className="close-button">{closeIcon}</button>
				</div>
				<div className="add-content">{contents}</div>
				<div className="modal-buttons-div">
					<button  onClick={closeButtonHandler} className="button-cancel">Close</button>
					<button className="button-add">Add</button>
				</div>
			</div>
		</div>,
		document.getElementById("modal-root")
	);
}
