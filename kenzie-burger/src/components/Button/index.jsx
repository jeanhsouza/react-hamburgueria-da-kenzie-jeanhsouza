import { StyledButton } from "./styles";

export function Button({ children, click }) {
	return <StyledButton onClick={click}>{children}</StyledButton>;
}
