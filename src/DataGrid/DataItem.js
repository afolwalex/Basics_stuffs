import React, { useState } from "react";
import { GridBody, GridTable } from "./styles";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { MdEdit, MdDelete } from "react-icons/md";

const DataItem = ({ content, allExpand }) => {
	const [expand, setExpand] = useState(content.isExpanded);
	console.log(allExpand);
	return (
		<GridBody>
			<GridTable head={true} onClick={() => setExpand(!expand)}>
				<div className="icon">
					<FaAngleDown />
					<span>{content.title}</span>
				</div>
			</GridTable>
			{(allExpand || expand) && (
				<>
					{content.children &&
						content.children.length > 0 &&
						content.children.map((c, i) => (
							<GridTable key={i + 1}>
								<p>{c.title}</p>
								<p>{c.url.substr(0, 25)}...</p>
								<p>{c.siteminder}</p>
								<p className="buttons-grid">
									{c.actions.map((b, i) => (
										<button key={i + 1}>
											{b === "Edit" ? (
												<MdEdit />
											) : (
												<MdDelete />
											)}
											{b}
										</button>
									))}
								</p>
							</GridTable>
						))}
				</>
			)}
		</GridBody>
	);
};

export default DataItem;
