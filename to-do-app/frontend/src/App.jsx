import Background from "./Components/BackgroundWrapper";
import MainContainer from "./Components/MainContainer";
import Menu from "./Components/Menu";
import { Toaster } from "react-hot-toast";
import { Bars } from "react-loader-spinner";
import { useContext } from "react";
import TaskContext from "./Context/TaskContext";
import "./scss/CenterItems.scss";

function App() {
	const loadingAnimation = (
		<div className="centerItems">
			<Bars
				heigth="100"
				width="100"
				color="grey"
				ariaLabel="loading-indicator"
			/>
		</div>
	);


	return (
		<Background>
			<Toaster />
			<Menu />
			<MainContainer />
		</Background>
	);
}

export default App;
