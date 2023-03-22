import { createContext, useState } from "react";
import { api } from "../../services/api";
import { IDefaultProviderProps } from "../UserContexts/@types";

export const CartContext = createContext({} as ICartContext);

interface IProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

interface ICartContext {
  modal: boolean;
  products: IProduct[];
  switchModalState: () => void;
  getProducts: () => Promise<void>;
  cartProducts: IProduct[];
  setCartProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
  isSearch: boolean;
  setIsSearch: React.Dispatch<React.SetStateAction<boolean>>;
  searched: IProduct[];
  setSearched: React.Dispatch<React.SetStateAction<IProduct[]>>;
  priceValue: number;
  sum: () => void;
}

export const CartProvider = ({ children }: IDefaultProviderProps) => {
  const [modal, setModal] = useState(false);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [cartProducts, setCartProducts] = useState<IProduct[]>([]);
  const [isSearch, setIsSearch] = useState(false);
  const [searched, setSearched] = useState<IProduct[]>([]);
  const [priceValue, setPriceValue] = useState<number>(0);

  const switchModalState = () => {
    setModal(!modal);
  };

  const sum = () => {
    const prices = cartProducts.map((product) => product.price);
    console.log(prices);
    const sumPrices = prices.reduce(
      (Accumulator, currentValue) => Accumulator + currentValue,
      0
    );
    setPriceValue(sumPrices);
  };

  const getProducts = async () => {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      try {
        const response = await api.get(`/products`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Unauthorized");
    }
  };

  return (
    <CartContext.Provider
      value={{
        modal,
        products,
        switchModalState,
        getProducts,
        cartProducts,
        setCartProducts,
        isSearch,
        setIsSearch,
        searched,
        setSearched,
        priceValue,
        sum,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
