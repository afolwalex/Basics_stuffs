import styled from "styled-components";

export const GridHeader = styled.div`
	margin-top: 20px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.2);

	.header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		h6,
		span {
			margin: 0;
			padding: 0;
		}
	}
`;

export const GridBody = styled.div``;

export const GridTable = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	cursor: ${({ head }) => head && "pointer"};
	//margin-left: ${({ head }) => (head ? "0px" : "20px")};
	border-bottom: 1px solid rgba(0, 0, 0, 0.2);
	padding-top: 10px;
	padding-bottom: 10px;

	p {
		margin: 0;
		padding: 0;
	}
	.icon {
		display: flex;
	}

	.buttons-grid {
		button {
			margin-left: 10px;

			svg {
				margin-right: 5px;
			}
		}
	}
`;
