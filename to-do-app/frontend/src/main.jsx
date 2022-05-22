import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./main.scss";
import { ModalContextProvider } from "./Context/ModalContext";
import { TaskContextProvider } from "./Context/TaskContext";
import { LoginContextProvider } from "./Context/LoginContext";
ReactDOM.render(
	<React.StrictMode>
		<LoginContextProvider>
			<TaskContextProvider>
				<ModalContextProvider>
					<App />
				</ModalContextProvider>
			</TaskContextProvider>
		</LoginContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
