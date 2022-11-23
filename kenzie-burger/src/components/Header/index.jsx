import logo from "../../img/logo.svg"
import { Container } from "../../styles/container"
import { InputSearch } from "../InputSearch"
import { StyledHeader } from "./styles"

export function Header ({filter, setFilter, product, inputValue, setInputValue}){
    return(
        <StyledHeader>
            <Container>
                <img src={logo} alt="" className="logoHeader" />
                <InputSearch filter={filter} setFilter={setFilter} product={product} inputValue={inputValue} setInputValue={setInputValue}/>
            </Container>
        </StyledHeader>
    )
}