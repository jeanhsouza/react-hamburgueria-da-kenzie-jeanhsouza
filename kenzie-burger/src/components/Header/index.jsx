import logo from "../../img/logo.svg"
import { StyledHeader } from "./styles"

export function Header (){
    return(
        <StyledHeader>
            <div className="container">
                <img src={logo} alt="" className="logoHeader" />
                <div className="searchBar">
                    <input type="text" placeholder="Digitar Pesquisa"/>
                    <button>Pesquisar</button>
                </div>
            </div>
        </StyledHeader>
    )
}