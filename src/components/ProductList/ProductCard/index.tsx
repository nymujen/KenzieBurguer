import { useContext } from 'react';
import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { CartContext } from '../../../providers/CartContexts/CartContexts';
import { IProducts } from '../../../providers/UserContexts/@types';
import { toast } from 'react-toastify';

const ProductCard = ({ id, img, name, category, price }: IProducts) => {
  const { products, setCartProducts, cartProducts, sum } = useContext(CartContext);

  function addToCart() {
    const filteredValue = products?.filter((product) => product.id === id);
    setCartProducts([...cartProducts, filteredValue[0]]);
    sum()
    toast.success('Produto adicionado ao carrinho')
  }

  return (
    <StyledProductCard>
      <div className='imageBox'>
        <img src={img} alt={name} />
      </div>
      <div className='content'>
        <StyledTitle tag='h3' $fontSize='three'>
          {name}
        </StyledTitle>
        <StyledParagraph className='category'>{category}</StyledParagraph>
        <StyledParagraph className='price'>R$ {price}</StyledParagraph>
        <StyledButton
          onClick={addToCart}
          $buttonSize='medium'
          $buttonStyle='green'
        >
          Adicionar
        </StyledButton>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
