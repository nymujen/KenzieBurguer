import { useContext } from "react";
import ProductCard from "./ProductCard";
import { StyledProductList } from "./style";
import { CartContext } from "../../providers/CartContexts/CartContexts";

const ProductList = () => {
  const { products, isSearch, searched } = useContext(CartContext);

  return (
    <StyledProductList>
      {isSearch
        ? searched.map((product) => (
            <ProductCard
              id={product.id}
              key={product.id}
              img={product.img}
              name={product.name}
              category={product.category}
              price={product.price}
            />
          ))
        : products?.map((product) => (
            <ProductCard
              id={product.id}
              key={product.id}
              img={product.img}
              name={product.name}
              category={product.category}
              price={product.price}
            />
          ))}
    </StyledProductList>
  );
};

export default ProductList;
