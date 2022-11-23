import { StyledCartProduct } from "./styles";

export function CartProduct ({elem, cart, setCart}){

    function removeCart(){
        const cardFilter = cart.filter((item) => {
			return item !== elem;
		});

        setCart(cardFilter)
    }

    return(
    <StyledCartProduct>
        <img src={elem.img} alt="" />
        <div className="textProduct">
            <div className="textContent">
                <h3>{elem.name}</h3>
                <span>{elem.category}</span>
            </div>
            <button onClick={removeCart}>Remover</button>
        </div>
    </StyledCartProduct>)
}