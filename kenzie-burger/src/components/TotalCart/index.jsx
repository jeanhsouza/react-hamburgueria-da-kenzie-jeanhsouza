import { Button } from "../Button";
import { StyledTotalCart } from "./styles";

export function TotalCart({cart, setCart}) {

    const totalValue = cart.reduce((acc,actualValue)=>{
        return acc + Number(actualValue.price)
    },0)   

	return <StyledTotalCart>
        <div className="TextValue">
            <h3>Total</h3>
            <span>{totalValue.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
}</span>
        </div>
        <Button click={() => setCart([])}>Remover todos</Button>
    </StyledTotalCart>;
}
