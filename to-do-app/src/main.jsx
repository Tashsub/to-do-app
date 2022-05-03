import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./main.scss";
import { ModalContextProvider } from "./Context/ModalContext";

ReactDOM.render(
	<React.StrictMode>
		<ModalContextProvider>
			<App />
		</ModalContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
