import React, { createContext, useState } from "react";
import Modal from "../Components/Modal";

const ModalContext = createContext({
	modal: false,
	addContent: (content)=>{},
	openModal: () => {},
	closeModal: () => {},
});

export const ModalContextProvider = ({ children }) => {
	const [modal, setModal] = useState(false);
	const [content, setContent] = useState(<></>);

	const closeModalHandler = () => {
		setModal(false);
	};

	const openModalHandler = () => {
		setModal(true);
	};

	const addModalContentHandler = (content) => {
		setContent(content);
	};

	return (
		<ModalContext.Provider
			value={{
				modal: modal,
				openModal: openModalHandler,
				closeModal: closeModalHandler,
				addContent: addModalContentHandler
			}}
		>
			{modal && <Modal content={content}/>}
			{children}
		</ModalContext.Provider>
	);
};

export default ModalContext;
