import { Button } from "../Button";
import { StyledSearchContent } from "./styles";

export function SearchContent({
	setFilter,
	product,
	inputValue,
	setInputValue,
}) {
	const inputSearch = document.querySelector("#input");

	function clearSearch() {
		inputSearch.value = "";
		setInputValue("");
		setFilter(product);
	}

	return (
		<StyledSearchContent>
			<span>
				Resultados para: <strong>"{inputValue.trim()}"</strong>
			</span>
			<Button click={clearSearch}>Limpar busca</Button>
		</StyledSearchContent>
	);
}
