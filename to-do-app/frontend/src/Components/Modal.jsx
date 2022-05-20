import React, { useContext } from "react";
import ReactDOM from "react-dom";
import "../scss/Modal.scss";
import "../scss/Buttons.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import ModalContext from "../Context/ModalContext";
export default function Modal({content}) {

	const { closeModal} = useContext(ModalContext);

	const closeButtonHandler = () => {
		closeModal();
	};

	const closeIcon = <FontAwesomeIcon icon={faCircleXmark} size={"2xl"} />;

	return ReactDOM.createPortal(
		<div className="modal">
			<div className="content-wrapper">
				<div className="close-button-div">
					<button onClick={closeButtonHandler} className="close-button">
						{closeIcon}
					</button>
				</div>
				<div className="add-content">{content}</div>
			</div>
		</div>,
		document.getElementById("modal-root")
	);
}
