export function Product( {product, cart,setCart} ) {

	function addCart(){
		const cartContains = cart.find(elem =>{
			return elem===product;
		})

		cartContains!==product && setCart((oldCart) => [...oldCart, product])
		
	}

	return (
		<li>
			<img src={product.img} alt="" />
			<div className="textProduct">
				<h3>{product.name}</h3>
				<span>{product.category}</span>
				<span>{product.price}</span>
				<button onClick={addCart}>Adicionar</button>
			</div>
		</li>
	);
}
