import { createContext, useReducer } from "react";
import StoreReducer, { initialState } from "./StoreReducer";


export const StoreContext = createContext();

export const StoreProviver = ({children}) => {
  const [state, dispatch] = useReducer(StoreReducer, initialState);

  const addToBasket = product => {
    const updatedBasket = state.products;
    updatedBasket.push(product);

    updatePrice(updatedBasket);

    dispatch({
      type: "ADD_TO_BASKET",
      payload: updatedBasket
    });
  };

  const removeFromBasket = product => {
    const updatedBasket = state.products.filter(currentProduct => currentProduct.name !== product.name);

    updatePrice(updatedBasket);

    dispatch({
      type: "REMOVE_FROM_BASKET",
      payload: updatedBasket
    });
  };

  const updatePrice = products => {
    let total = 0;
    products.forEach(product => {
      total += product.price
    });

    dispatch({
      type: "UPDATE_PRICE",
      payload: total
    });
  }

  const value = {
    total: state.total,
    products: state.products,
    removeFromBasket,
    addToBasket
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}