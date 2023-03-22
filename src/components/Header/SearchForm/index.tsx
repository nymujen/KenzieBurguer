import { MdSearch } from 'react-icons/md';
import { useContext, useState } from 'react';
import { StyledSearchForm } from './style';
import { StyledButton } from '../../../styles/button';
import { CartContext } from '../../../providers/CartContexts/CartContexts';

const SearchForm = () => {
  const [search, setSearch] = useState('');
  const { products, setSearched, setIsSearch } = useContext(CartContext);

  const submit = (event:  React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const filteredValue = products?.filter(
      (product) => product.name === search
    );
    setSearched(filteredValue);
    setIsSearch(true)
  };

  return (
    <StyledSearchForm onSubmit={(event) => submit}>
      <input
        type='text'
        placeholder='Digitar pesquisa'
        onChange={(event) => setSearch(event.target.value)}
      />
      <StyledButton type='submit' $buttonSize='medium' $buttonStyle='green'>
        <MdSearch />
      </StyledButton>
    </StyledSearchForm>
  );
};

export default SearchForm;
