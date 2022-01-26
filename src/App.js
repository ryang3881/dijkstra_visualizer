import "./App.css";
import PathfindingVisualizer from "./PathfindingVisualizer/PathfindingVisualizer.jsx";
import {Guide} from "./PathfindingVisualizer/Guide/Guide.jsx";

function App() {
	return (
		<div className="App">
			<PathfindingVisualizer></PathfindingVisualizer>
			<div className="PopUp">
				<Guide />
			</div>
		</div>
	);
}

export default App;
