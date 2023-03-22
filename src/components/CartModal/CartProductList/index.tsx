import CartProductCard from "./CartProductCard";

import { StyledCartProductList } from "./style";
import { StyledButton } from "../../../styles/button";
import { StyledParagraph } from "../../../styles/typography";
import { useContext } from "react";
import { CartContext } from "../../../providers/CartContexts/CartContexts";
import { toast } from "react-toastify";

const CartProductList = () => {
  const { cartProducts, priceValue, setCartProducts } = useContext(CartContext);

  const removeAll = () => {
    setCartProducts([]);
    toast.success("Seu carrinho está limpo");
  };

  return (
    <StyledCartProductList>
      <ul>
        {cartProducts.map((product) => (
          <CartProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            category={product.category}
            img={product.img}
            price={product.price}
          />
        ))}
      </ul>
      <div className="totalBox">
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className="total">R$ {priceValue}</StyledParagraph>
      </div>
      <StyledButton
        $buttonSize="default"
        $buttonStyle="gray"
        onClick={removeAll}
      >
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  );
};

export default CartProductList;
