import { createGlobalStyle } from "styled-components"

export const GlobalStyled = createGlobalStyle`

:root {
	--brand100: #27AE60;
	--brand150: #93D7AF;
	--brand200: #EB5757;
	--black100: #000000;
	--white100: #ffffff;
	--negative100: #E60000;
	--sucess100: #168821;
	--warning100: #FFCD07;
	--info100: #155BCB;
	--gray100: #333333;
	--gray200: #828282;
	--gray300: #E0E0E0;
	--gray400: #F5F5F5;
	--font-size-1: 26px;
	--font-size-2: 22px;
	--font-size-3: 18px;
	--font-size-4: 16px;
	--font-size-5: 14px;
	--font-size-5: 12px;
	--font-weight-1: 700;
	--font-weight-2: 600;
	--font-weight-3: 400;
	--line-height: 150%;
	--font-family: "Nunito", sans-serif;
}

body {
	font-family: var(--font-family);
	background-color: var(--color-white-1);
}

/* .container {
	width: 75rem;
	max-width: 100%;
	margin: 0 auto;
	padding-left: 1rem;
	padding-right: 1rem;
} */

button,
input,
select {
	font-family: var(--font-family);
	font-size: var(--font-size-3);
	line-height: var(--line-height);
}

`