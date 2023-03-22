import { MdShoppingCart, MdLogout } from "react-icons/md";
import { useContext } from "react";
import SearchForm from "./SearchForm";
import { StyledHeader } from "./style";
import LogoKenzieBurguer from "../../assets/LogoKenzieBurguer.svg";
import { StyledContainer } from "../../styles/grid";
import { CartContext } from "../../providers/CartContexts/CartContexts";
import { UserContexts } from "../../providers/UserContexts/UserContexts";

const Header = () => {
  const { switchModalState } = useContext(CartContext);
  const { logOut } = useContext(UserContexts);

  return (
    <StyledHeader>
      <StyledContainer containerWidth={1300}>
        <div className="flexGrid">
          <img
            src={LogoKenzieBurguer}
            alt="Kenzie Burguer Logo"
            className="logo"
          />
          <nav className="nav" role="navigation">
            <SearchForm />
            <div className="buttons">
              <button
                type="button"
                onClick={() => {
                  switchModalState();
                }}
              >
                <MdShoppingCart size={28} />
              </button>
              <button type="button" onClick={logOut}>
                <MdLogout size={28} />
              </button>
            </div>
          </nav>
        </div>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
