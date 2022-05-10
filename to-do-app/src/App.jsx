import Background from "./Components/BackgroundWrapper";
import MainContainer from "./Components/MainContainer";
import Menu from "./Components/Menu";
function App() {
	return (
		<Background>
			<Menu />
			<MainContainer />
		</Background>
	);
}

export default App;
