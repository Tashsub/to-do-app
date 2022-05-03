import React, { createContext, useState } from "react";
import Modal from "../Components/Modal";

const ModalContext = createContext({
	modal: false,
	openModal: () => {},
	closeModal: () => {},
});

export const ModalContextProvider = ({ children }) => {
	const [modal, setModal] = useState(false);

	const closeModalHandler = () => {
		setModal(false);
	};

	const openModalHandler = () => {
        console.log("enetered")
		setModal(true);
	};

	return (
		<ModalContext.Provider
			value={{
                modal: modal,
				openModal: openModalHandler,
				closeModal: closeModalHandler,
			}}
		>
			{modal && <Modal />}
			{children}
		</ModalContext.Provider>
	);
};

export default ModalContext;
