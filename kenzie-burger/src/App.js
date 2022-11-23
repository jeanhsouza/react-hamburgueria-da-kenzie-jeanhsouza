import { useState, useEffect } from "react";
// import styled from "styled-components";
import "./App.css";

import { Cart } from "./components/Cart";
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";
import { SearchContent } from "./components/SearchContent";
import { api } from "./services/api";
import { ContainerMain } from "./styles/container";

import { GlobalStyled } from "./styles/globalStyle.js";

// const GrayButton = styled.button`
// 	background-color: black;
// 	padding: 0.625rem;
// 	color: white;
// 	border: 0.125rem solid white;
// `;

function App() {
	const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState([]);
  const [inputValue, setInputValue] = useState("");

  console.log(filter)

	useEffect(() => {
		async function requestAPI() {
			const request = await api.get("products");
			try {
				const response = request.data;

				setProduct(response);

			} catch (error) {
				console.log(error);
			}
		}
		requestAPI();
	}, []);

	return (
		<div className="App">
			<GlobalStyled />
			<Header filter={filter} setFilter={setFilter} product={product} setInputValue={setInputValue} inputValue={inputValue}></Header>
			<ContainerMain>
				<section className="sectionProducts">
          {(inputValue.trim().length !==0) && <SearchContent setFilter={setFilter} product={product} inputValue={inputValue} setInputValue={setInputValue}/>}
          <ProductList product={product} filter={filter} setCart={setCart} cart={cart}/>
        </section>
				<section className="sectionCart">
					<Cart cart={cart} setCart={setCart}/>
				</section>
			</ContainerMain>
		</div>
	);
}

export default App;
