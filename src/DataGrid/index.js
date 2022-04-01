import React from "react";
import DataItem from "./DataItem";
import { GridHeader } from "./styles";

const index = ({ headers, columns, expand }) => {
	return (
		<>
			<GridHeader>
				<div className="header">
					{headers &&
						headers.length > 0 &&
						headers.map((h, i) => <span key={i + 1}>{h}</span>)}
				</div>
			</GridHeader>
			{columns &&
				columns.length > 0 &&
				columns.map((c, i) => (
					<DataItem content={c} key={i + 1} allExpand={expand} />
				))}
		</>
	);
};

export default index;
