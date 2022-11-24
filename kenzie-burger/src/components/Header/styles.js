import styled from "styled-components";

export const StyledHeader = styled.header`
	padding-top: 25px;
	padding-bottom: 25px;
	background-color: var(--gray400);

	div {
		display: flex;
		justify-content: space-between;
	}

	@media (max-width: 900px) {
		div:nth-child(1) {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 1rem;
		}
	}
`;
