import styled from "styled-components";

export const StyledUl = styled.ul`
	margin-top: 30px;
	margin-bottom: 30px;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: 16px;

	@media (max-width: 900px) {
		flex-wrap: nowrap;
		overflow: auto;
	}
`;
