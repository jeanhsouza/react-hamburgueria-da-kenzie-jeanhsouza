import styled from "styled-components";

export const StyledSearchContent = styled.div`
	margin-top: 30px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	> span {
		font-weight: 700;
		font-size: 26px;
		line-height: 34px;
		color: var(--gray100);

		> strong {
			color: var(--gray200);
		}
	}

	> button {
		font-weight: 500;
		font-size: 14px;
		line-height: 17px;
	}

	@media (max-width: 900px) {
		flex-direction: column;
		gap: 10px;
	}
`;
