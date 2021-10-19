import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "contexts/cart/CartReducer";

const initialState = {
  cart: [],
};

const CartStateContext = createContext(null);
const CartDispatchContext = createContext(null);

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>{children}</CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
}

export function useCartState() {
  const state = useContext(CartStateContext);
  if (!state) {
    throw new Error("Cannot find CartStateContext");
  }
  return state;
}

export function useCartDispatch() {
  const dispatch = useContext(CartDispatchContext);
  if (!dispatch) {
    throw new Error("Cannot find CartDispatchContext");
  }
  return dispatch;
}
