import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./main.scss";
import { ModalContextProvider } from "./Context/ModalContext";
import { TaskContextProvider } from "./Context/TaskContext";

ReactDOM.render(
	<React.StrictMode>
		<TaskContextProvider>
			<ModalContextProvider>
				<App />
			</ModalContextProvider>
		</TaskContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
