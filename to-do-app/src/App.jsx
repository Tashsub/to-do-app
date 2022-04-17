import "./App.scss";
import Background from "./Components/BackgroundWrapper";
import TaskContainer from "./Components/TaskContainer";

function App() {
	return (
		<Background>
			<TaskContainer />
		</Background>
	);
}

export default App;
