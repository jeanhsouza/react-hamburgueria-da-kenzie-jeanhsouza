import axios from "axios";
import { useState, useEffect } from "react";
// import styled from "styled-components";
import "./App.css";

import { Cart } from "./components/Cart";
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";

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

	useEffect(() => {
		async function requestAPI() {
			const request = await axios.get(
				"https://hamburgueria-kenzie-json-serve.herokuapp.com/products"
			);
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
			<Header></Header>
			<main className="container">
				<section className="sectionProducts">
          <ProductList product={product} setCart={setCart} cart={cart}/>
        </section>
				<section className="sectionCart">
					<Cart cart={cart} setCart={setCart}/>
				</section>
			</main>
		</div>
	);
}

export default App;
