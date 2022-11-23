import { Button } from "../Button";
import { StyledInputSearch } from "./styles";

export function InputSearch({filter, setFilter, product, inputValue, setInputValue}) {

	function filterProduct (e){
		e.preventDefault();
		const searchValue = e.target[0].value;
		setInputValue(searchValue);

		const filterItems = product.filter(elem => {
			return elem.name.toLowerCase().includes(searchValue.toLowerCase().trim()) || elem.category.toLowerCase().includes(searchValue.toLowerCase().trim())
		})
		console.log(e.target[0].value.length)
		searchValue.length === 0 ? setFilter(product) : setFilter(filterItems) 
	}

	return (
		<StyledInputSearch onSubmit={filterProduct}>
			<input defaultValue={inputValue} id="input" type="text" placeholder="Digitar Pesquisa..." />
			<Button>Pesquisar</Button>
		</StyledInputSearch>
	);
}
