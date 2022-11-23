import { Button } from "../Button";
import { StyledLi } from "./styles";

export function Product( {product, cart,setCart} ) {

	function addCart(){
		const cartContains = cart.find(elem =>{
			return elem===product;
		})

		cartContains!==product && setCart((oldCart) => [...oldCart, product])
		
	}

	return (
		<StyledLi>
			<div className="imgBox">
				<img src={product.img} alt="" />
			</div>
			<div className="textProduct">
				<h3>{product.name}</h3>
				<p>{product.category}</p>
				<span>{product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
				<Button click={addCart}>Adicionar</Button>
			</div>
		</StyledLi>
	);
}
