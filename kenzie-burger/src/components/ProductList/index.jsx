import { Product } from "../Product";

export function ProductList({product,cart,setCart}) {
	return (
		<ul className="Cart">
			{product.map(elem => {
                return <Product key={elem.id} product={elem} setCart={setCart} cart={cart}></Product>
            })}
		</ul>
	);
}
