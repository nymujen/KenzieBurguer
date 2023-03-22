import { MdDelete } from "react-icons/md";

import { useContext } from "react";
import { StyledCartProductCard } from "./style";
import { StyledTitle } from "../../../../styles/typography";
import { CartContext } from "../../../../providers/CartContexts/CartContexts";
import { IProducts } from "../../../../providers/UserContexts/@types";
import { toast } from "react-toastify";

const CartProductCard = ({ id, img, name }: IProducts) => {
  const { setCartProducts, cartProducts, sum } = useContext(CartContext);

  const removeItem = () => {
    const filteredvalue = cartProducts?.filter((product) => product.id !== id);
    setCartProducts(filteredvalue);
    sum();
    toast.success("Produto removido do carrinho");
  };

  return (
    <StyledCartProductCard>
      <div className="imageBox">
        <img src={img} alt={name} />
      </div>
      <div className="contentBox">
        <StyledTitle tag="h3" $fontSize="three">
          {name}
        </StyledTitle>
        <button type="button" aria-label="Remover" onClick={removeItem}>
          <MdDelete size={24} />
        </button>
      </div>
    </StyledCartProductCard>
  );
};

export default CartProductCard;
