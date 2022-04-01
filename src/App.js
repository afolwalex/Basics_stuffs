import DataGrid from "./DataGrid";
import data from "./data";
import { useState } from "react";

function App() {
	const headers = ["header1", "header2", "header3", "header4"];

	const [expand, setExpand] = useState(false);

	return (
		<div className="container">
			<button onClick={() => setExpand(!expand)}>Expand All</button>
			<DataGrid headers={headers} columns={data} expand={expand} />
		</div>
	);
}

export default App;
