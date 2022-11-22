import { CartProduct } from "../CartProduct";

export function Cart({cart, setCart}) {
	return (
		<>
			<h2>Carrinho de compras</h2>
			<ul className="Cart">
				{cart.map(elem => {
					return (<CartProduct key={elem.id} elem={elem} cart={cart} setCart={setCart}/>)
				})}
			</ul>
		</>
	);
}
