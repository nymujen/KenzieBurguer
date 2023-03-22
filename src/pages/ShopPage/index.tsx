import { useContext, useEffect } from 'react';
import { StyledShopPage } from './style';
import CartModal from '../../components/CartModal';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';
import { StyledContainer } from '../../styles/grid';
import { CartContext } from '../../providers/CartContexts/CartContexts';

const ShopPage = () => {
  const { getProducts, modal } = useContext(CartContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <StyledShopPage>
      {modal === true ? <CartModal /> : null}
      <Header />
      <main>
        <StyledContainer containerWidth={1300}>
          <ProductList />
        </StyledContainer>
      </main>
    </StyledShopPage>
  );
};

export default ShopPage;
